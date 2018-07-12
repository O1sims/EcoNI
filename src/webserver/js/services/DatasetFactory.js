// Factory for the dataset objects.
// The base JSON data for each dataset is the basis for creating a dataset object which takes on additional functions such as 
// --> the application of filters to axes and tooltips
// --> assigning a colour to each data series
// --> toggling animation
// --> toggling rendered data series
// --> refreshing and re-rendering the dataset object when underlying properties have changed

angular.module('belfastCos')

.factory('Dataset', function(tooltipFilterService, axesFilterService, filterService){

	var Dataset = function(dataset){
		this.meta = dataset.meta;
		this.data = dataset.data;
		this.options = dataset.options;
		this.availableColors = ['#FE938C', '#EBD494', '#DBC7BE', '#BDED90', '9AD2CB', '#FCBAD3', '#FECEA8', '#E84A5F', '#4F5D75', '#EF8354', '#73A580', '#59A9FF'];
		this.override = []; // Angular ChartJS allows manual overrides of default ChartJS properties such as border-width. 
		this.colorPairs = this.parseColorPairs();
		this.chart = this.generateChartObject();
	};

	//Looks for filters in the JSON chart data properties and returns this filter from service to be applied to the dataset object.
	Dataset.prototype.valueFilter = function(){
		options = this.options;
		meta = this.meta;
			if ("filter" in options.tooltips){
				return filterService[options.tooltips.filter];
			} else {
				return (function(input){ return input; });
			}
		
	};

	Dataset.prototype.applyAxesFilter = function(){
		options = this.options;
		if ("scales" in options){
			if ("yFilter" in options.scales){
				options.scales.yAxes = axesFilterService[options.scales.yFilter];
			}
		}
	};

	Dataset.prototype.applyTooltipsFilter = function(){
		options = this.options;
		if ("tooltips" in options){
			if ("filter" in options.tooltips){
				options.tooltips.series = this.meta.valueKeyNames;
				options.tooltips.callbacks = tooltipFilterService[options.tooltips.filter];
			}
		}
	};

	Dataset.prototype.enableAnimation = function(){
		options = this.options;
		if (!options) { 
			return 
			this.options = {};
			options = this.options;
		}

		if (!this.options.animation) {
			delete this.options['animation'];
		}

	};

	Dataset.prototype.disableAnimation = function(){
		options = this.options;
		if (!options) { 
			this.options = {};
			options = this.options;
		}

		if (!this.options.animation){
			this.options.animation = false;	
		}

		if (this.options.animation){
			this.options.animation = false;	
		}

	};

	// When the user hovers over a dataset, this dataseries line should stand out by changing the relevant style.
	Dataset.prototype.toggleHoverSeries = function(series, toggle){
		if (!toggle) { return }
		this.disableAnimation();

		seriesName = series.name;
		activeKeys = this.meta.valueKeyNames;
		var searchKeys = activeKeys.indexOf(seriesName);

		if (toggle == 'on'){
			this.override[searchKeys] = {borderWidth: '3'};
		} else if (toggle == 'off') {
			this.override.splice(searchKeys,1);
		}

	};

	Dataset.prototype.refreshChart = function(){
		this.chart = this.generateChartObject();
		this.enableAnimation();
	};

	//Relevant time period for each dataset must be extracted from JSON object and converted to a ChartJS friendly format
	Dataset.prototype.parseLabels = function(){
		if (!this.meta.labelKeyName){ throw "Label key meta data required." }

		var data = this.data;
		var labelKeyName = this.meta.labelKeyName; //eg. X Axis mostly period/year.
		var labels = [];

		data.forEach(function(item){
			labels.push(item[labelKeyName]);
		});

		return labels;
	};

	//When user toggles a data series from the legend, it is added or removed from the chart after checking if it is currently present.
	Dataset.prototype.toggleValueKeyName = function(valueKeyName){
		var valueKeyNames = this.meta.valueKeyNames;

		arrayLoc = valueKeyNames.indexOf(valueKeyName);

		if (arrayLoc >= 0) {
			this.meta.valueKeyNames.splice(arrayLoc,1);
		} else if (arrayLoc < 0) {
			this.meta.valueKeyNames.push(valueKeyName);
		}

		this.refreshChart();
	};

	//Returns a list of currently selected dataseries
	Dataset.prototype.returnSelectedValueKeyNames = function(){

		var availableValueKeyNames = this.meta.availableValueKeyNames;
		var valueKeyNames = this.meta.valueKeyNames;
		var colors = this.colorPairs;

		var hex2rgba_convert = function(hex){
			if (!hex){ return }
			opacity=40;
			 hex = hex.replace('#','');
			 r = parseInt(hex.substring(0,2), 16);
			 g = parseInt(hex.substring(2,4), 16);
			 b = parseInt(hex.substring(4,6), 16);

			 result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
			 return result;
		};

		function LegendObj (name, displayed, color){

			return {
				name: name,
				displayed: displayed,
				color: color
			}
		};

		displayedValueKeyNames = [];

		availableValueKeyNames.forEach(function(keyName, key){
			color=hex2rgba_convert(colors[keyName]); //converts from hex to RGBA
			if (valueKeyNames.indexOf(keyName) >= 0){
				legend = new LegendObj(keyName, true, color);
			} else {
				legend = new LegendObj(keyName, false, color);
			}

			displayedValueKeyNames.push(legend);
		});

		return displayedValueKeyNames;
	};

	Dataset.prototype.parseSeriesNames = function(){
		return this.meta.valueKeyNames;
	}


	// ChartJS requires the value of each data series to be presented in an array. This function takes the contextualised JSON object and converts it to this format.

	Dataset.prototype.parseValues = function(){ 
		if (!this.meta.valueKeyNames){ throw "Value key names meta data required." }

		var data = this.data;
		var valueKeyNames = this.meta.valueKeyNames;
		var valuesMatrix = [];
		var self = this;


		valueKeyNames.forEach(function(valueKey){
			var values = [];
			data.forEach(function(item){	
					values.push(item[valueKey]);
			});
			valuesMatrix.push(values);
		});

		return valuesMatrix;
	};

	Dataset.prototype.parseColorPairs = function(){
		//This assigns colors to available key pairs based on key location. Color assignments referenced by keyname in a paired object.
		var availableValueKeyNames = this.meta.availableValueKeyNames;
		var colors = this.availableColors;
		var colorKeyNameObj = {};
		
		availableValueKeyNames.forEach(function(keyName, key){
			colorKeyNameObj[keyName] = colors[key];
		});

		return colorKeyNameObj;
	};

	Dataset.prototype.parseColors = function(){
		//Adds color to list when an available key pair is actually added to key names. Colors are a list as this is the only way ChartJS recognises colors.
		var colorPairs = this.colorPairs;
		var valueKeyNames = this.meta.valueKeyNames;
		var colors = [];

		valueKeyNames.forEach(function(keyName, key){
			color = colorPairs[keyName];
			colors.push(color);
		});
		return colors;
	};

	Dataset.prototype.generateChartObject = function(){
	
		// Generates dataset object after refreshing properties.
		
		var labels = this.parseLabels();
		var seriesNames = this.parseSeriesNames();
		var values = this.parseValues();
		var colors = this.parseColors();
		this.applyTooltipsFilter();
		this.applyAxesFilter();

		return { 
			labels: labels,
			series: seriesNames,
			values: values,
			colors: colors
		}

	};

	return Dataset;

})
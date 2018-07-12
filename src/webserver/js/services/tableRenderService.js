//When the user changes the data series in the dataset, the selection is re-rendered on the chart, but the data table must also be re-rendered.

// The table requires columns representing currently selected data series titles, and the rows represent the given year along with the data from each data series.

angular.module('belfastCos')
.service('tableRenderService', function(){

	var self = this;

	this.getColumns = function(dataset){
		if (!dataset) { return null }
		var columnNames = [];
		var labelKeyName = dataset.meta.labelKeyName;
		var valueKeyNames = dataset.meta.valueKeyNames;
		colorPairs = dataset.parseColorPairs();

		var hex2rgba_convert = function(hex){
			if (!hex){ return }
			opacity=20;
			 hex = hex.replace('#','');
			 r = parseInt(hex.substring(0,2), 16);
			 g = parseInt(hex.substring(2,4), 16);
			 b = parseInt(hex.substring(4,6), 16);

			 result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
			 return result;
		};

		valueKeyRecord = {};
		valueKeyRecord.color = '';
		valueKeyRecord.value = labelKeyName;
		
		//Push label name e.g. Year along with value keys into a columns row to be displayed at top of Table.
		columnNames.push(valueKeyRecord); //First column will be label
		valueKeyNames.forEach(function(valueKeyName){ //Typically multiple value series therefore need to pull from array
			valueKeyRecord = {};
			valueKeyRecord.color = hex2rgba_convert(colorPairs[valueKeyName]);
			valueKeyRecord.value = valueKeyName;
			columnNames.push(valueKeyRecord);
		});

		return columnNames;
	};

	this.getRows = function(dataset){
		if (!dataset) { return null }
		var data = dataset.data;
		var valueKeyNames = dataset.meta.valueKeyNames;
		var labelKeyName = dataset.meta.labelKeyName;
		var valueFilter = dataset.valueFilter(); //returns the filter function
		colorPairs = dataset.parseColorPairs(); //returns color pairs. Will send back with value to table for rendering.


		var hex2rgba_convert = function(hex){
			if (!hex){ return }
			opacity=20;
			 hex = hex.replace('#','');
			 r = parseInt(hex.substring(0,2), 16);
			 g = parseInt(hex.substring(2,4), 16);
			 b = parseInt(hex.substring(4,6), 16);

			 result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
			 return result;
		};

		var rows = [];
		//For each record in the data, extract the label values and key values for keys stated in meta.valueKeynames.
		data.forEach(function(record){
			var row = [];

			valueKeyRecord = {};
			valueKeyRecord.color = '';
			valueKeyRecord.value = record[labelKeyName]; //Label should be first column in row.

			row.push(valueKeyRecord); 

			valueKeyNames.forEach(function(valueKeyName){ //Add value data after.

				valueKeyRecord = {};
				valueKeyRecord.color = hex2rgba_convert(colorPairs[valueKeyName]);
				//If there is a relevant filter, need to use this to manipulate underlying data.
				valueKeyRecord.value = valueFilter(record[valueKeyName]);
	

				row.push(valueKeyRecord);
			});
			rows.push(row);
		});

		return rows;
	};

})



//Each chart has a given context that requires complementary tooltips when hovering over the data.
//When chart JSON chart data is obtained, a tooltip key references the required filter (comma delimited, percentage etc...) which is assigned from this service.

angular.module('belfastCos')
.service('tooltipFilterService', function(){


	return {
		'commanumber' : {
	        label: function(tooltipItem, data){
		          var newLabel = tooltipItem.yLabel;
		          var labelSet = tooltipItem.datasetIndex;
		          newLabel = newLabel.toString().
		                      split(/(?=(?:...)*$)/).
		                      join(',');
		          
		          return (this._data.datasets[labelSet].label + ': ' + newLabel);
		         
	        } 
		},

		'percentage' : {
			label: function(tooltipItem, data){
				var newLabel = tooltipItem.yLabel;
				newLabel = (parseFloat(newLabel).toFixed(1) + '%');
				var labelSet = tooltipItem.datasetIndex;

				return (this._data.datasets[labelSet].label + ': ' + newLabel);
			}
		}
   }
})

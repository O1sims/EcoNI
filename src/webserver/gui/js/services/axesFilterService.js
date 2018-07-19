angular.module('belfastCos')
.service('axesFilterService', function(){


	return {

		'thousand1dpk': [{
            ticks: {
                callback: function(value, index, values){
                	value = (value/1000).toFixed(1).toString() + 'k';
                	return value;
                }
            }
        }],

		'million1dpm': [{
            ticks: {
                min:1000000,
                callback: function(value, index, values){
                	value = (value/1000000).toFixed(1).toString() + 'm';
                	return value;
                }
            }
        }],

		'percent0dp': [{
            ticks: {
                callback: function(value, index, values){
                	value = (value).toFixed(0).toString() + '%';
                	return value;
                }
            }
        }],

		'thousand£0dp':[{
            ticks: {
                callback: function(value, index, values){
                	value = '£' + (value/1000).toFixed(0).toString() + 'k';
                	return value;
                }
            }
        }],

		'thousand0dpk':[{
            ticks: {
                callback: function(value, index, values){
                	value = (value/1000).toFixed(0).toString() + 'k';
                	return value;
                }
            }
        }]

   }
})

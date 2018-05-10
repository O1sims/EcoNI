angular.module('belfastCos')
.service('filterService', function(){

	return {
		'commanumber': function(input){
			return input.toString().split(/(?=(?:...)*$)/).join(',');
		},
		'percentage': function(input){
			return (parseFloat(input).toFixed(1) + '%');
		}
	}

})

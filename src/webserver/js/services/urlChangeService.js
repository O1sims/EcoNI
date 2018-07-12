
//Redirects to selected dataset based on ID

angular.module('belfastCos')
.service('urlChange', function($location){

	var self = this;

	this.go = function(datasetId, tab){
		datasetId = datasetId.toString();
		datasetUrl = (datasetId) ? ('dataset/' + datasetId) : '/';
		tabUrl = (tab) ? ('/' + tab) : '';
		$location.path(datasetUrl + tabUrl);
	};

})
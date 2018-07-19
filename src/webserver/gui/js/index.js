
angular.module('belfastCos', ['chart.js', 'ngRoute', 'ngclipboard', 'angularify.semantic.dropdown'])

.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'templates/main.html',
        controller: 'main'
    })
    .when("/dataset/:dataset/:tab", {
        templateUrl : 'templates/dataset.html',
        controller: 'dataset'
    })
    .when("/datasets", {
        templateUrl : 'templates/datasets.html',
        controller: 'datasets'
    })
   .when("/integration", {
        templateUrl : 'templates/integration.html',
        controller: 'integration'
    })
    .when("/datasets/:dataset", {
        templateUrl : 'templates/datasets.html',
        controller: 'datasets'
    })
    .otherwise({redirectTo:'/'})
    ;
})

.controller('main', function($scope, $location, obtainDataService, urlChange, menuService){

	$scope.datasetSearch = "";

	menuService.setMenuItem('home');


	$scope.dataArrayPosition = function(dataset, datasets){
		return datasets.indexOf(dataset);
	};

	$scope.clearSearch = function(){
		$scope.datasetSearch = "";
	};

	$scope.go = function(dataset, tab){
		urlChange.go($scope.dataArrayPosition(dataset,$scope.datasets), tab);
	};

	$scope.datasets = obtainDataService.initData();

})

.controller('dataset', function($scope, tableRenderService, obtainDataService, $location, $route, $routeParams, urlChange, menuService){

	$scope.datasets = obtainDataService.initData();

	menuService.setMenuItem('dataset');

	$scope.datasetId = function(){
		return $routeParams.dataset;
	};

	// Obtains selected dataset from all created dataset objects.
	$scope.dataset = $scope.datasets[$scope.datasetId()];

	$scope.selectedValueKeyNames = $scope.dataset.returnSelectedValueKeyNames();

	$scope.refreshSelectedValueKeyNames = function(){
		$scope.selectedValueKeyNames = $scope.dataset.returnSelectedValueKeyNames();
	};

	$scope.toggleSelectedValueKeyName = function(keyName){
		$scope.dataset.toggleValueKeyName(keyName);
		$scope.refreshSelectedValueKeyNames();
	};

	// If user hovers over a data series in the legend, change the styling of the data series line to make it stand out.
	$scope.toggleHoverSeries = function(series, toggle){
		$scope.dataset.toggleHoverSeries(series,toggle);
	};

	$scope.currentTab = function(){
		return $routeParams.tab;
	};

	$scope.activeTab = function(queryTab, currentTab){
		return (queryTab == currentTab);
	};

	$scope.go = function(dataset, tab){
		urlChange.go($scope.datasetId(), tab);
	};

	$scope.dataArrayPosition = function(dataset, datasets){
		return datasets.indexOf(dataset);
	};

	$scope.datasetGo = function(dataset, tab){
		urlChange.go($scope.dataArrayPosition(dataset,$scope.datasets), tab);
	};

	$scope.printTableColumns = [];
	$scope.printTableRows = [];

	// Check if the user toggles the currently selected data series. If these change, re-retender the datatable.
	$scope.$watch('selectedValueKeyNames', function(){
		$scope.printTableRows = tableRenderService.getRows($scope.dataset);
		$scope.printTableColumns = tableRenderService.getColumns($scope.dataset);
	});

	$scope.downloadXLSX = function(JSON, datasetName){
	    alasql('SELECT * INTO XLSX("' + datasetName + '-econi-download.xlsx",{headers:true}) FROM ?',[JSON]);
	};

	$scope.downloadCSV = function(JSON, datasetName){
	    alasql('SELECT * INTO CSV("' + datasetName + '-econi-download.csv",{headers:true}) FROM ?',[JSON]);
	};

	$scope.downloadJSON = function(JSON, datasetName){
	    alasql('SELECT * INTO JSON("' + datasetName + '-econi-download.json",{headers:true}) FROM ?',[JSON]);
	};

	$scope.printJson = function(JSONCode){
		return JSON.stringify(JSONCode, null, 4);
	};

})

.controller('menu', function($scope, menuService){

	$scope.getMenuItem = menuService.getMenuitem();

	$scope.checkMenuItemActive = function(item){
		if (!item){ return false }
		return menuService.activeMenuItemQuery(item);
	};

})

.controller('datasets', function($scope, obtainCategoryService, $routeParams, $location, urlChange, menuService){

	//Need to manually check path as this controller is used on homepage and would reset if applied without conditional check

	if ($location.path() == '/datasets'){
		menuService.setMenuItem('datasets');
	}

	$scope.categories = obtainCategoryService.initCategories();

	$scope.go = function(datasetId){
		urlChange.go(datasetId, 'overview');
	};


})

.controller('integration', function($scope, menuService, $routeParams){


	menuService.setMenuItem('integration');

	$scope.datasetId = function(){
		return $routeParams.dataset;
	};


	//Should move this to a constant service.
	$scope.integrationTable = [
		{
			key: "meta.name",
			description: "Name of the dataset.",
			dataType: "String"
		 },
		 {
			key: "meta.publisher",
			description: "Organisation responsible for maintaining and publishing the dataset.",
			dataType: "String"
		 },
		 {
			key: "meta.category",
			description: "Category classification of dataset. This is not an official designation and used only for classification on EcoNI.",
			dataType: "String"
		 },
		 {
			key: "meta.publisherEmail",
			description: "Email address of the body or individual responsible for maintaining the dataset.",
			dataType: "String"
		 },
		 {
			key: "meta.publisherWebsite",
			description: "Website of the body responsible for maintaining the dataset.",
			dataType: "String"
		 },
		 {
			key: "meta.description",
			description: "Description of the dataset.",
			dataType: "String"
		 },
		 {
			key: "meta.availablevalueKeyNames",
			description: "A collection of all data series within the dataset.",
			dataType: "Array"
		 },
		 {
		 	key: "meta.publisherFrequency",
			description: "Description of the frequency of dataset publication.",
			dataType: "String"
		 },
		 {
		 	key: "meta.modified",
			description: "Number of days ago the data was last updated in our database.",
			dataType: "String"
		 },
		 {
		 	key: "options",
			description: "Contains scales and filters references used for graphing the data on EcoNI.",
			dataType: "Object of objects"
		 },
		 {
		 	key: "data",
			description: "Contains the underlying data. Each object within the array contains data relating to a specific time period.",
			dataType: "Array of objects"
		 }
	];
})

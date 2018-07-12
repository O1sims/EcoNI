
angular.module('belfastCos')

.directive('datasets', function(){
	return {
		templateUrl: 'components/datasets.html',
		restrict: 'E'
	}
})

.directive('datasetCard', function(){
	return {
		templateUrl: 'components/dataset-card.html',
		restrict: 'E',
		replace:true
	}
})

.directive('datasetDetail', function(){
	return {
		templateUrl: 'components/dataset-detail.html',
		restrict: 'E',
		scope: false
	}
})

.directive('datasetOverview', function(){
	return {
		templateUrl: 'components/tabs/overview/dataset-overview.html',
		restrict: 'E',
		scope: false
	}
})

.directive('datasetDataTable', function(){
	return {
		templateUrl: 'components/tabs/data-table/dataset-data-table.html',
		restrict: 'E',
		scope: false
	}
})

.directive('datasetCommentary', function(){
	return {
		templateUrl: 'components/dataset-commentary.html',
		restrict: 'E'
	}
})

.directive('datasetMeta', function(){
	return {
		templateUrl: 'components/dataset-meta.html',
		restrict: 'E'
	}
})

.directive('homepageCategories', function(){
	return {
		templateUrl: 'components/homepage-categories.html',
		restrict: 'E'
	}
})

.directive('homepageSearch', function(){
	return {
		templateUrl: 'components/homepage-search.html',
		restrict: 'E',
		replace: true
	}
})

.directive('filterWindow', function(){
	return {
		templateUrl: 'components/filter-window.html',
		restrict: 'E'
	}
})

.directive('headerStatement', function(){
	return {
		templateUrl: 'components/header-statement.html',
		restrict: 'E'
	}
})

.directive('homepageMenu', function(){
	return {
		templateUrl: 'components/homepage-menu.html',
		restrict: 'E'
	}
})

.directive('updateNews', function(){
	return {
		templateUrl: 'components/update-news.html',
		restrict: 'E'
	}
})

.directive('centralNav', function(){
	return {
		templateUrl: 'components/central-nav.html',
		restrict: 'E'
	}
})

.directive('emailSubscribe', function(){
	return {
		templateUrl: 'components/email-subscribe.html',
		restrict: 'E'
	}
})

.directive('datasetCategories', function(){
	return {
		templateUrl: 'components/dataset-categories/dataset-categories.html',
		restrict: 'E'
	}
})

.directive('datasetCategory', function(){
	return {
		templateUrl: 'components/dataset-categories/dataset-category.html',
		restrict: 'E',
		replace: true
	}
})

.directive('datasetGraph', function(){
	return {
		templateUrl: 'components/dataset/dataset-graph.html',
		restrict: 'E',
		replace: true
	}
})

.directive('datasetSeries', function(){
	return {
		templateUrl: 'components/dataset/dataset-series.html',
		restrict: 'E',
		replace: true
	}
})

.directive('datasetIntegrate', function(){
	return {
		templateUrl: 'components/tabs/data-table/dataset-integrate.html',
		restrict: 'E',
		replace: true
	}
})

.directive('escKey', function () {
  return function (scope, element, attrs) {
    element.bind('keydown keypress', function (event) {
      if(event.which === 27) { // 27 = esc key
        scope.$apply(function (){
          scope.$eval(attrs.escKey);
        });

        event.preventDefault();
      }
    });
  };
})
//This service is used to populate the categories page and categories panel on the homepage. Simply takes category JSON objects and returns as an array.

angular.module('belfastCos')
.service('obtainCategoryService', function(){
	
	return {
		initCategories: function(){
			var categories = this.getCategories();

			var categoriesArray = [];
			categories.forEach(function(category){
				categoriesArray.push(category);
			});
			return categoriesArray;
		},

		getCategories: function(){
			return [{
				meta: {
					name: 'Economy'
				},
				datasets: [
				{
					name: 'Ports traffic',
					description: 'Inward and outward trade volumes',
					icon: 'ship',
					datasetId: 0,
					publisher: 'Department of Economy'
				},
				{
					name: 'Labour force',
					description: '% Unemployment and economically active',
					icon: 'users',
					datasetId: 3,
					publisher: 'Office of National Statistics'
				},
				{
					name: 'Air passengers',
					description: 'Flights in and out of NI',
					icon: 'plane',
					datasetId: 1,
					publisher: 'Department of Economy'
				},
				{
					name: 'Economic index',
					description: 'Economic activity by sector',
					icon: 'money',
					datasetId: 4,
					publisher: 'Department of Economy'
				}]
			},
			{
				meta: {
					name: 'Housing'
				},
				datasets:[
				{
					name: 'Property prices',
					description: 'Historical median prices',
					icon: 'home',
					datasetId: 5,
					publisher: 'Ulster Bank'
				},
				{
					name: 'Planning applications',
					description: 'Applications and approvals',
					icon: 'sticky note outline',
					datasetId: 9,
					publisher: 'Local councils'
				},
				{
					name: 'Housing stock',
					description: 'Homes in each district',
					icon: 'industry',
					datasetId: 6,
					publisher: 'Local councils'
				}
				]
			},
			{
				meta: {
					name: 'Social'
				},
				datasets:[
				{
					name: 'Education',
					description: 'Educational attainment levels',
					icon: 'student',
					datasetId: 7,
					publisher: 'Department of Education'
				},
				{
					name: 'Crime',
					description: 'All crime by type',
					icon: 'thumbs down',
					datasetId: 8,
					publisher: 'PSNI'
				},
				{
					name: 'Population',
					description: 'Population by year',
					icon: 'child',
					datasetId: 2,
					publisher: 'Hospital areas'
				}
				]
			}]
		}
	}
})
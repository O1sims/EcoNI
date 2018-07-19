angular.module('belfastCos')
.service('obtainDataService', function(Dataset){

	return {

		initData: function(){
			 var datasets = this.getData();

			 datasetArray = [];
			 datasets.forEach(function(item){
			 	var datasetObj = new Dataset(item);
			 	datasetArray.push(datasetObj);
			 });

			 return datasetArray;
		},

		getData: function(){

			return [
			{
				meta: {
						name: "Ports traffic",
						blurb: "1984-2016",
						category: "Economy",
						modified: "23w ago",
						description: "Total inward and outward traffic from Northern Ireland ports 1998-2014.",
						dataTypes: ["JSON", "CSV", "Excel"],
						dataComponents: ["Inward traffic", "Outward traffic"],
						publisher: "Department for the Economy",
						publishFrequency: "1st Monday each month",
						labelKeyName: "Year",
						valueKeyNames: ["Total inward", "Total outward"],
						availableValueKeyNames: ["Total inward", "Total outward"],
						publisherEmail: "ashehelpline@finance-ni.gov.uk",
						publisherWebsite: "https://www.economy-ni.gov.uk/articles/ports-traffic"
					},
				options: {
		            tooltips:{
		            	mode: 'x-axis',
		            	filter: 'commanumber'
		            },
		            scales: {
		            	yFilter: 'thousand1dpk'
		                //yAxes function here
		        	}
		      }
			}
			{
				meta: {
					name: "Air passengers",
					category: "Economy",
					modified: "23w ago",
					description: "Air passenger flown in Northern Ireland from 2005-2015.",
					dataTypes: ["JSON", "CSV", "Excel"],
					dataComponents: ["Air passengers"],
					publisher: "Department for the Economy",
					publishFrequency: "1st Monday each month",
					labelKeyName: "Year",
					valueKeyNames: ["George Best Belfast City Airport", "Belfast International Airport"],
					availableValueKeyNames: ["George Best Belfast City Airport", "Belfast International Airport", "Dublin Airport", "Heathrow", "All NI Airports", "All RoI Airports",  "All UK Airports"],
					publisherEmail: "tourismstatistics@finance-ni.gov.uk",
					publisherWebsite: "https://www.economy-ni.gov.uk/publications/northern-ireland-air-passenger-flow-publications"
				},
				options: {
					elements: {
						point: {
							radius: 2
						}
					},
		            legend: {
			            display:false
		            },
		            tooltips:{
		              mode: 'x-axis',
		              filter: 'commanumber'
		            },
		            title: {
		            	display: false,
		            	text: 'Air passenger flow by year'
		            },
		            scales: {
		            	yFilter: 'million1dpm',
		                xAxes: [{
		                	ticks:{
		                 		maxTicksLimit: 15
		                	}
		              	}]

		        	}
		        }
			},
			{
				meta: {
					name: "Population",
					category: "Demographics",
					modified: "23w ago",
					description: "Population growth in Northern Ireland from 1850-2012.",
					dataTypes: ["JSON", "CSV", "Excel"],
					dataComponents: ["Overall population", "Male population", "Female population"],
					publisher: "NISRA",
					publishFrequency: "1st Monday each month",
					labelKeyName: "Year",
					valueKeyNames: ["Population"],
					availableValueKeyNames: ["Population"],
					publisherEmail: "census.nisra@finance-ni.gov.uk",
					publisherWebsite: "http://www.nisra.gov.uk/demography/default.asp3.htm"
				},
				options: {
					elements: {
						point: {
							radius: 2
						}
					},
		            legend: {
			            display:false
		            },
		            tooltips:{
	            	  mode: 'x-axis',
	            	  filter: 'commanumber'
		            },
		            title: {
		            	display: false,
		            	text: 'Population of Northern Ireland by Year'
		            },
		            scales: {
		            	yFilter: 'million1dpm',
		                xAxes: [{
		                	ticks:{
		                 		maxTicksLimit: 15
		                	}
		              	}]

		        	}
		        }
		    },
		    {
				meta: {
					name: "Unemployment",
					category: "Economy",
					modified: "15w ago",
					description: "Unemployment by year from 1985-2015.",
					dataTypes: ["JSON", "CSV", "Excel"],
					dataComponents: ["Overall population", "Male population", "Female population"],
					labelKeyName: "Year",
					valueKeyNames: ["Unemployment"],
					availableValueKeyNames: ["Unemployment", "Economically Active", "Employed"],
					publisher: "Department for the Economy",
					publishFrequency: "1st Monday each month",
					publisherEmail: "statistics@finance-ni.gov.uk",
					publisherWebsite: "https://www.economy-ni.gov.uk/articles/labour-force-survey"
				},
				options: {
					 scales: {
					 	yFilter: 'percent0dp',
		                xAxes: [{
		                	ticks:{
		                 		maxTicksLimit: 15
		                	}
		              	}]

		        	},
					tooltips:{
						filter: 'percentage',
						mode: 'x-axis'
					},
					elements: {
						point: {
							radius: 2
						}
					},
		        	legend: {
		            	display:false
		        	},

		        	title: {
		            	display: false,
		            	text: 'Unemployment of Northern Ireland by Year'
		          	}
		        }
			},
			{
				meta:{
					name: "Economic Index",
					category: "Economy",
					modified: "20w ago",
					description: "Economic Index by Period 2006-2016.",
					dataTypes: ["JSON", "CSV", "Excel"],
					dataComponents: ["Overall population", "Male population", "Female population"],
					publisher: "Department for the Economy",
					labelKeyName: "Period",
					valueKeyNames: ["Composite Economic Index"],
					availableValueKeyNames: ["Composite Economic Index", "Private sector", "Public sector", "Services", "Production", "Construction"],
					publishFrequency: "1st Monday each month",
					publisherEmail: "chris.ganley@finance-ni.gov.uk",
					publisherWebsite: "https://www.economy-ni.gov.uk/articles/northern-ireland-composite-economic-index-nicei"
				},
				options: {
					tooltips: {
						mode: 'x-axis'
					},
					elements: {
						point: {
							radius: 2
						}
					},
		        	legend: {
		            	display:false
		          	},
		        	title: {
		            	display: false,
		            	text: 'Economic Index by Period'
		          	}
		        }

			},
			{
				meta: {
					name: "Property prices",
					category: "Housing",
					modified: "23w ago",
					description: "Detected, semi-detached and apartment average prices 2006-2016.",
					dataTypes: ["JSON", "CSV", "Excel"],
					dataComponents: ["Blah I am an error. Tell Chris."],
					publisher: "NISRA",
					publishFrequency: "1st Monday each month",
					labelKeyName: "Period",
					valueKeyNames: ["Detached Property", "Semi-Detached Property", "Apartment Property", "Terrace Property"],
					availableValueKeyNames: ["Detached Property", "Semi-Detached Property", "Apartment Property", "Terrace Property"],
					publisherEmail: "lps.statisticsbranch@finance-ni.gov.uk",
					publisherWebsite: "http://www.nisra.gov.uk/HousePriceIndex/hpi.html"
				},
				options: {
					animation: false,
					elements: {
						point: {
							radius: 2
						}
					},
		            legend: {
			            display:false
		            },
		            tooltips:{
		              mode: 'x-axis',
		              filter: 'commanumber'
		            },
		            scales: {
		            	yFilter: 'thousand£0dp',
		                xAxes: [{
		                	ticks:{
		                 		maxTicksLimit: 15
		                	}
		              	}]

		        	}
		      }
			},
			{
				meta: {
					name: "Housing stock",
					category: "Housing",
					modified: "23w ago",
					description: "Quantity of housing stock by area since 2008.",
					dataTypes: ["JSON", "CSV", "Excel"],
					dataComponents: ["Blah I am an error. Tell Chris."],
					publisher: "Department for Communities",
					publishFrequency: "1st Monday each month",
					labelKeyName: "Period",
					valueKeyNames: ["Northern Ireland"],
					availableValueKeyNames: ["Northern Ireland", "Antrim and Newtownabbey","North Down and Ards","Armagh, Banbridge and Craigavon","Belfast","Causeway Coast and Glens","Derry and Strabane","Fermanagh and Omagh","Lisburn and Castlereagh","Mid and East Antrim","Mid Ulster","Newry, Mourne and Down"],
					publisherEmail: "asu@communities-ni.gov.uk",
					publisherWebsite: "https://www.communities-ni.gov.uk/topics/housing-statistics"
				},
				options: {
					animation: false,
					elements: {
						point: {
							radius: 2
						}
					},
		            legend: {
			            display:false
		            },
		            tooltips:{
		              mode: 'x-axis',
		              filter: 'commanumber'
		            },
		            scales: {
		            	yFilter: 'thousand0dpk',
		                xAxes: [{
		                	ticks:{
		                 		maxTicksLimit: 15
		                	}
		              	}]

		        	}
		      }
			},
			{
				meta: {
					name: "Education performance",
					category: "Social",
					modified: "23w ago",
					description: "% achieving A*-C Grades at GCSE and A-level from 2008-2015.",
					dataTypes: ["JSON", "CSV", "Excel"],
					dataComponents: ["Blah I am an error. Tell Chris."],
					publisher: "Department of Education",
					publishFrequency: "1st Monday each month",
					labelKeyName: "Year",
					valueKeyNames: ["GCSE - All", "A-level - All"],
					availableValueKeyNames: ["GCSE - Non-Grammar", "GCSE - Grammar", "GCSE - All", "A-level - Non-Grammar", "A-level - Grammar", "A-level - All"],
					publisherEmail: "statistics@education-ni.gov.uk",
					publisherWebsite: "https://www.education-ni.gov.uk/articles/school-performance"
				},
				options: {
					animation: false,
					elements: {
						point: {
							radius: 2
						}
					},
		            legend: {
			            display:false
		            },
		            tooltips:{
		              mode: 'x-axis',
		              filter: 'percentage'
		            },
		            scales: {
		            	yFilter: 'percent0dp',
		                xAxes: [{
		                	ticks:{
		                 		maxTicksLimit: 15
		                	}
		              	}]

		        	}
		        }
			},
			{
				meta: {
					name: "Crime",
					category: "Social",
					modified: "23w ago",
					description: "Crime by type from 1998-2015.",
					dataTypes: ["JSON", "CSV", "Excel"],
					dataComponents: ["Blah I am an error. Tell Chris."],
					publisher: "PSNI",
					publishFrequency: "1st Monday each month",
					labelKeyName: "Period",
					valueKeyNames: ["All crime"],
					availableValueKeyNames: ["All crime", "Violence against the person", "Sexual offences", "Robbery", "Theft", "Criminal damage", "Drug offences", "Public order offences", "Possession of weapons", "Miscellaneous crimes against society", "Other fraud"],
					publisherEmail: "zCSUwebstats@psni.pnn.police.uk",
					publisherWebsite: "https://www.psni.police.uk/inside-psni/Statistics/police-recorded-crime-statistics/"
				},
				options: {
					animation: false,
					elements: {
						point: {
							radius: 2
						}
					},
		            legend: {
			            display:false
		            },
		            tooltips:{
		              mode: 'x-axis',
		              filter: 'commanumber'
		            },
		            scales: {
		            	yFilter: 'thousand1dpk',
		                xAxes: [{
		                	ticks:{
		                 		maxTicksLimit: 15
		                	}
		              	}]

		        	}
		      }
			},
			{
				meta: {
					name: "Planning applications",
					category: "Social",
					modified: "23w ago",
					description: "Planning applications from 2003-2015",
					dataTypes: ["JSON", "CSV", "Excel"],
					dataComponents: ["Blah I am an error. Tell Chris."],
					publisher: "Department for Communities",
					publishFrequency: "1st Monday each month",
					labelKeyName: "Year",
					valueKeyNames: [ "Applications Received", "Decisions Granted"],
					availableValueKeyNames: ["Applications Received", "Decisions Granted"],
					publisherEmail: "asu@communities-ni.gov.uk",
					publisherWebsite: "https://www.communities-ni.gov.uk/topics/housing-statistics"
				},
				options: {
					animation: false,
					elements: {
						point: {
							radius: 2
						}
					},
		            legend: {
			            display:false
		            },
		            tooltips:{
		              mode: 'x-axis',
		              filter: 'commanumber'
		            },
		            scales: {
		            	yFilter: 'thousand1dpk',
		                xAxes: [{
		                	ticks:{
		                 		maxTicksLimit: 15
		                	}
		              	}]

		        	}
		      }
			}

		    //end of datasets
		    ]
		}
	}
})		// ,,
			//
			//];

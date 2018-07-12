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
		         },
				data: [
				  {
				    "Year": 1998,
				    "Total inward": 15493,
				    "Total outward": 6118
				  },
				  {
				    "Year": 1999,
				    "Total inward": 16399,
				    "Total outward": 6432
				  },
				  {
				    "Year": 2000,
				    "Total inward": 15418,
				    "Total outward": 6017
				  },
				  {
				    "Year": 2001,
				    "Total inward": 14955,
				    "Total outward": 6212
				  },
				  {
				    "Year": 2002,
				    "Total inward": 14736,
				    "Total outward": 6627
				  },
				  {
				    "Year": 2003,
				    "Total inward": 15250,
				    "Total outward": 6724
				  },
				  {
				    "Year": 2004,
				    "Total inward": 16322,
				    "Total outward": 7070
				  },
				  {
				    "Year": 2005,
				    "Total inward": 16558,
				    "Total outward": 7497
				  },
				  {
				    "Year": 2006,
				    "Total inward": 17143,
				    "Total outward": 7342
				  },
				  {
				    "Year": 2007,
				    "Total inward": 16512,
				    "Total outward": 7356
				  },
				  {
				    "Year": 2008,
				    "Total inward": 15860,
				    "Total outward": 7638
				  },
				  {
				    "Year": 2009,
				    "Total inward": 13743,
				    "Total outward": 7043
				  },
				  {
				    "Year": 2010,
				    "Total inward": 14837,
				    "Total outward": 8074
				  },
				  {
				    "Year": 2011,
				    "Total inward": 14465,
				    "Total outward": 8787
				  },
				  {
				    "Year": 2012,
				    "Total inward": 15158,
				    "Total outward": 8398
				  },
				  {
				    "Year": 2013,
				    "Total inward": 16115,
				    "Total outward": 9207
				  },
				  {
				    "Year": 2014,
				    "Total inward": 15742,
				    "Total outward": 9331
				  }
				]
			},
			
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
		        },
	        	data: [
				  {
				    "Year": 2005,
				    "All UK Airports": 231681768,
				    "Heathrow": 67913153,
				    "All GB Airports Inc Heathrow": 224419052,
				    "All NI Airports": 7262716,
				    "George Best Belfast City Airport": 2237219,
				    "Belfast International Airport": 4824271,
				    "City of Derry Airport": 201226,
				    "All RoI Airports": 25688200,
				    "Dublin Airport": 18504800
				  },
				  {
				    "Year": 2006,
				    "All UK Airports": 238640690,
				    "Heathrow": 67527923,
				    "All GB Airports Inc Heathrow": 231154673,
				    "All NI Airports": 7486017,
				    "George Best Belfast City Airport": 2105769,
				    "Belfast International Airport": 5038692,
				    "City of Derry Airport": 341556,
				    "All RoI Airports": 29227100,
				    "Dublin Airport": 21265900
				  },
				  {
				    "Year": 2007,
				    "All UK Airports": 244268700,
				    "Heathrow": 68066028,
				    "All GB Airports Inc Heathrow": 236381403,
				    "All NI Airports": 7887297,
				    "George Best Belfast City Airport": 2186993,
				    "Belfast International Airport": 5272664,
				    "City of Derry Airport": 427640,
				    "All RoI Airports": 31337400,
				    "Dublin Airport": 23375700
				  },
				  {
				    "Year": 2008,
				    "All UK Airports": 239499088,
				    "Heathrow": 67054745,
				    "All GB Airports Inc Heathrow": 231226959,
				    "All NI Airports": 8272129,
				    "George Best Belfast City Airport": 2570742,
				    "Belfast International Airport": 5262354,
				    "City of Derry Airport": 439033,
				    "All RoI Airports": 31046000,
				    "Dublin Airport": 23507200
				  },
				  {
				    "Year": 2009,
				    "All UK Airports": 221857586,
				    "Heathrow": 66036957,
				    "All GB Airports Inc Heathrow": 214343491,
				    "All NI Airports": 7514095,
				    "George Best Belfast City Airport": 2621763,
				    "Belfast International Airport": 4546475,
				    "City of Derry Airport": 345857,
				    "All RoI Airports": 27013900,
				    "Dublin Airport": 20507400
				  },
				  {
				    "Year": 2010,
				    "All UK Airports": 214303031,
				    "Heathrow": 65881660,
				    "All GB Airports Inc Heathrow": 207207088,
				    "All NI Airports": 7095943,
				    "George Best Belfast City Airport": 2740341,
				    "Belfast International Airport": 4016170,
				    "City of Derry Airport": 339432,
				    "All RoI Airports": 23506100,
				    "Dublin Airport": 18426800
				  },
				  {
				    "Year": 2011,
				    "All UK Airports": 222843129,
				    "Heathrow": 69433230,
				    "All GB Airports Inc Heathrow": 215938376,
				    "All NI Airports": 6904753,
				    "George Best Belfast City Airport": 2397271,
				    "Belfast International Airport": 4101914,
				    "City of Derry Airport": 405568,
				    "All RoI Airports": 23502100,
				    "Dublin Airport": 18749100
				  },
				  {
				    "Year": 2012,
				    "All UK Airports": 224049338,
				    "Heathrow": 70037417,
				    "All GB Airports Inc Heathrow": 217092486,
				    "All NI Airports": 6956852,
				    "George Best Belfast City Airport": 2246202,
				    "Belfast International Airport": 4312441,
				    "City of Derry Airport": 398209,
				    "All RoI Airports": 23674400,
				    "Dublin Airport": 19090800
				  },
				  {
				    "Year": 2013,
				    "All UK Airports": 231737288,
				    "Heathrow": 72367054,
				    "All GB Airports Inc Heathrow": 224788124,
				    "All NI Airports": 6949164,
				    "George Best Belfast City Airport": 2541722,
				    "Belfast International Airport": 4022469,
				    "City of Derry Airport": 384973,
				    "All RoI Airports": 24602556,
				    "Dublin Airport": 20092234
				  },
				  {
				    "Year": 2014,
				    "All UK Airports": 241740896,
				    "Heathrow": 73405330,
				    "All GB Airports Inc Heathrow": 234803819,
				    "All NI Airports": 6937077,
				    "George Best Belfast City Airport": 2555111,
				    "Belfast International Airport": 4031709,
				    "City of Derry Airport": 350257,
				    "All RoI Airports": 26308349,
				    "Dublin Airport": 21635077
				  },
				  {
				    "Year": 2015,
				    "All UK Airports": 254941109,
				    "Heathrow": 74985748,
				    "All GB Airports Inc Heathrow": 247574015,
				    "All NI Airports": 7367094,
				    "George Best Belfast City Airport": 2692742,
				    "Belfast International Airport": 4389870,
				    "City of Derry Airport": 284482,
				    "All RoI Airports": 29535039,
				    "Dublin Airport": 24863890
				  }
				]
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
		        },
				data: [
				  {
				    "Year": 1821,
				    "Population": 1380000
				  },
				  {
				    "Year": 1831,
				    "Population": 1574000
				  },
				  {
				    "Year": 1841,
				    "Population": 1649000
				  },
				  {
				    "Year": 1851,
				    "Population": 1443000
				  },
				  {
				    "Year": 1861,
				    "Population": 1396000
				  },
				  {
				    "Year": 1871,
				    "Population": 1359000
				  },
				  {
				    "Year": 1881,
				    "Population": 1305000
				  },
				  {
				    "Year": 1891,
				    "Population": 1236000
				  },
				  {
				    "Year": 1901,
				    "Population": 1237000
				  },
				  {
				    "Year": 1902,
				    "Population": 1238000
				  },
				  {
				    "Year": 1903,
				    "Population": 1239000
				  },
				  {
				    "Year": 1904,
				    "Population": 1241000
				  },
				  {
				    "Year": 1905,
				    "Population": 1242000
				  },
				  {
				    "Year": 1906,
				    "Population": 1243000
				  },
				  {
				    "Year": 1907,
				    "Population": 1244000
				  },
				  {
				    "Year": 1908,
				    "Population": 1245000
				  },
				  {
				    "Year": 1909,
				    "Population": 1247000
				  },
				  {
				    "Year": 1910,
				    "Population": 1248000
				  },
				  {
				    "Year": 1911,
				    "Population": 1251000
				  },
				  {
				    "Year": 1912,
				    "Population": 1250000
				  },
				  {
				    "Year": 1913,
				    "Population": 1248000
				  },
				  {
				    "Year": 1914,
				    "Population": 1249000
				  },
				  {
				    "Year": 1915,
				    "Population": 1217000
				  },
				  {
				    "Year": 1916,
				    "Population": 1212000
				  },
				  {
				    "Year": 1917,
				    "Population": 1215000
				  },
				  {
				    "Year": 1918,
				    "Population": 1221000
				  },
				  {
				    "Year": 1919,
				    "Population": 1259000
				  },
				  {
				    "Year": 1920,
				    "Population": 1269000
				  },
				  {
				    "Year": 1921,
				    "Population": 1272000
				  },
				  {
				    "Year": 1922,
				    "Population": 1284000
				  },
				  {
				    "Year": 1923,
				    "Population": 1278000
				  },
				  {
				    "Year": 1924,
				    "Population": 1258000
				  },
				  {
				    "Year": 1925,
				    "Population": 1257000
				  },
				  {
				    "Year": 1926,
				    "Population": 1254000
				  },
				  {
				    "Year": 1927,
				    "Population": 1251000
				  },
				  {
				    "Year": 1928,
				    "Population": 1250000
				  },
				  {
				    "Year": 1929,
				    "Population": 1246000
				  },
				  {
				    "Year": 1930,
				    "Population": 1244000
				  },
				  {
				    "Year": 1931,
				    "Population": 1243000
				  },
				  {
				    "Year": 1932,
				    "Population": 1251000
				  },
				  {
				    "Year": 1933,
				    "Population": 1258000
				  },
				  {
				    "Year": 1934,
				    "Population": 1265000
				  },
				  {
				    "Year": 1935,
				    "Population": 1271000
				  },
				  {
				    "Year": 1936,
				    "Population": 1276000
				  },
				  {
				    "Year": 1937,
				    "Population": 1281000
				  },
				  {
				    "Year": 1938,
				    "Population": 1286000
				  },
				  {
				    "Year": 1939,
				    "Population": 1295000
				  },
				  {
				    "Year": 1940,
				    "Population": 1296000
				  },
				  {
				    "Year": 1941,
				    "Population": 1288000
				  },
				  {
				    "Year": 1942,
				    "Population": 1296000
				  },
				  {
				    "Year": 1943,
				    "Population": 1302000
				  },
				  {
				    "Year": 1944,
				    "Population": 1316000
				  },
				  {
				    "Year": 1945,
				    "Population": 1317000
				  },
				  {
				    "Year": 1946,
				    "Population": 1333000
				  },
				  {
				    "Year": 1947,
				    "Population": 1339000
				  },
				  {
				    "Year": 1948,
				    "Population": 1351000
				  },
				  {
				    "Year": 1949,
				    "Population": 1360000
				  },
				  {
				    "Year": 1950,
				    "Population": 1369000
				  },
				  {
				    "Year": 1951,
				    "Population": 1373000
				  },
				  {
				    "Year": 1952,
				    "Population": 1375000
				  },
				  {
				    "Year": 1953,
				    "Population": 1384100
				  },
				  {
				    "Year": 1954,
				    "Population": 1387300
				  },
				  {
				    "Year": 1955,
				    "Population": 1394000
				  },
				  {
				    "Year": 1956,
				    "Population": 1397000
				  },
				  {
				    "Year": 1957,
				    "Population": 1399000
				  },
				  {
				    "Year": 1958,
				    "Population": 1402300
				  },
				  {
				    "Year": 1959,
				    "Population": 1407700
				  },
				  {
				    "Year": 1960,
				    "Population": 1419800
				  },
				  {
				    "Year": 1961,
				    "Population": 1427400
				  },
				  {
				    "Year": 1962,
				    "Population": 1435400
				  },
				  {
				    "Year": 1963,
				    "Population": 1446000
				  },
				  {
				    "Year": 1964,
				    "Population": 1458000
				  },
				  {
				    "Year": 1965,
				    "Population": 1469000
				  },
				  {
				    "Year": 1966,
				    "Population": 1478000
				  },
				  {
				    "Year": 1967,
				    "Population": 1491000
				  },
				  {
				    "Year": 1968,
				    "Population": 1502000
				  },
				  {
				    "Year": 1969,
				    "Population": 1512500
				  },
				  {
				    "Year": 1970,
				    "Population": 1524000
				  },
				  {
				    "Year": 1971,
				    "Population": 1540400
				  },
				  {
				    "Year": 1972,
				    "Population": 1539000
				  },
				  {
				    "Year": 1973,
				    "Population": 1530000
				  },
				  {
				    "Year": 1974,
				    "Population": 1526900
				  },
				  {
				    "Year": 1975,
				    "Population": 1523500
				  },
				  {
				    "Year": 1976,
				    "Population": 1523500
				  },
				  {
				    "Year": 1977,
				    "Population": 1523300
				  },
				  {
				    "Year": 1978,
				    "Population": 1523200
				  },
				  {
				    "Year": 1979,
				    "Population": 1528300
				  },
				  {
				    "Year": 1980,
				    "Population": 1532800
				  },
				  {
				    "Year": 1981,
				    "Population": 1543000
				  },
				  {
				    "Year": 1982,
				    "Population": 1544500
				  },
				  {
				    "Year": 1983,
				    "Population": 1550600
				  },
				  {
				    "Year": 1984,
				    "Population": 1557300
				  },
				  {
				    "Year": 1985,
				    "Population": 1565400
				  },
				  {
				    "Year": 1986,
				    "Population": 1573500
				  },
				  {
				    "Year": 1987,
				    "Population": 1582000
				  },
				  {
				    "Year": 1988,
				    "Population": 1585400
				  },
				  {
				    "Year": 1989,
				    "Population": 1590400
				  },
				  {
				    "Year": 1990,
				    "Population": 1595600
				  },
				  {
				    "Year": 1991,
				    "Population": 1607300
				  },
				  {
				    "Year": 1992,
				    "Population": 1623300
				  },
				  {
				    "Year": 1993,
				    "Population": 1635600
				  },
				  {
				    "Year": 1994,
				    "Population": 1643700
				  },
				  {
				    "Year": 1995,
				    "Population": 1649100
				  },
				  {
				    "Year": 1996,
				    "Population": 1661800
				  },
				  {
				    "Year": 1997,
				    "Population": 1671300
				  },
				  {
				    "Year": 1998,
				    "Population": 1677800
				  },
				  {
				    "Year": 1999,
				    "Population": 1679000
				  },
				  {
				    "Year": 2000,
				    "Population": 1682900
				  },
				  {
				    "Year": 2001,
				    "Population": 1688800
				  },
				  {
				    "Year": 2002,
				    "Population": 1697500
				  },
				  {
				    "Year": 2003,
				    "Population": 1704900
				  },
				  {
				    "Year": 2004,
				    "Population": 1714000
				  },
				  {
				    "Year": 2005,
				    "Population": 1727700
				  },
				  {
				    "Year": 2006,
				    "Population": 1743100
				  },
				  {
				    "Year": 2007,
				    "Population": 1761700
				  },
				  {
				    "Year": 2008,
				    "Population": 1779200
				  },
				  {
				    "Year": 2009,
				    "Population": 1793300
				  },
				  {
				    "Year": 2010,
				    "Population": 1804800
				  },
				  {
				    "Year": 2011,
				    "Population": 1814300
				  },
				  {
				    "Year": 2012,
				    "Population": 1823600
				  },
				  {
				    "Year": 2013,
				    "Population": 1829700
				  },
				  {
				    "Year": 2014,
				    "Population": 1840500
				  },
				  {
				    "Year": 2015,
				    "Population": 1851600
				  }
				]
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
				data: [
				  {
				    "Year": 1984,
				    "Unemployment": "16.8",
				    "Economically Active": "71.0",
				    "Employed": "58.9"
				  },
				  {
				    "Year": 1985,
				    "Unemployment": "16.4",
				    "Economically Active": "70.6",
				    "Employed": "58.8"
				  },
				  {
				    "Year": 1986,
				    "Unemployment": "15.8",
				    "Economically Active": "72.0",
				    "Employed": "60.4"
				  },
				  {
				    "Year": 1987,
				    "Unemployment": "15.2",
				    "Economically Active": "70.8",
				    "Employed": "59.8"
				  },
				  {
				    "Year": 1988,
				    "Unemployment": "13.9",
				    "Economically Active": "72.1",
				    "Employed": "61.9"
				  },
				  {
				    "Year": 1989,
				    "Unemployment": "12.6",
				    "Economically Active": "72.3",
				    "Employed": "63.0"
				  },
				  {
				    "Year": 1990,
				    "Unemployment": "11.6",
				    "Economically Active": "72.8",
				    "Employed": "64.1"
				  },
				  {
				    "Year": 1991,
				    "Unemployment": "12.2",
				    "Economically Active": "73.1",
				    "Employed": "64.0"
				  },
				  {
				    "Year": 1992,
				    "Unemployment": "13",
				    "Economically Active": "72",
				    "Employed": "63"
				  },
				  {
				    "Year": 1993,
				    "Unemployment": "13",
				    "Economically Active": "72",
				    "Employed": "62"
				  },
				  {
				    "Year": 1994,
				    "Unemployment": "13",
				    "Economically Active": "72",
				    "Employed": "61"
				  },
				  {
				    "Year": 1995,
				    "Unemployment": "10.9",
				    "Economically Active": "69.1",
				    "Employed": "61.4"
				  },
				  {
				    "Year": 1996,
				    "Unemployment": "10.6",
				    "Economically Active": "70.1",
				    "Employed": "62.5"
				  },
				  {
				    "Year": 1997,
				    "Unemployment": "8.1",
				    "Economically Active": "71.5",
				    "Employed": "65.6"
				  },
				  {
				    "Year": 1998,
				    "Unemployment": "7.0",
				    "Economically Active": "70.7",
				    "Employed": "65.7"
				  },
				  {
				    "Year": 1999,
				    "Unemployment": "7.6",
				    "Economically Active": "70.6",
				    "Employed": "65.1"
				  },
				  {
				    "Year": 2000,
				    "Unemployment": "6.7",
				    "Economically Active": "68.3",
				    "Employed": "63.7"
				  },
				  {
				    "Year": 2001,
				    "Unemployment": "6.0",
				    "Economically Active": "70.2",
				    "Employed": "65.9"
				  },
				  {
				    "Year": 2002,
				    "Unemployment": "5.5",
				    "Economically Active": "70.1",
				    "Employed": "66.1"
				  },
				  {
				    "Year": 2003,
				    "Unemployment": "5.1",
				    "Economically Active": "71.3",
				    "Employed": "67.6"
				  },
				  {
				    "Year": 2004,
				    "Unemployment": "5.0",
				    "Economically Active": "68.8",
				    "Employed": "65.4"
				  },
				  {
				    "Year": 2005,
				    "Unemployment": "4.9",
				    "Economically Active": "70.4",
				    "Employed": "66.9"
				  },
				  {
				    "Year": 2006,
				    "Unemployment": "4.2",
				    "Economically Active": "71.2",
				    "Employed": "68.3"
				  },
				  {
				    "Year": 2007,
				    "Unemployment": "3.6",
				    "Economically Active": "71.5",
				    "Employed": "68.9"
				  },
				  {
				    "Year": 2008,
				    "Unemployment": "3.9",
				    "Economically Active": "71.5",
				    "Employed": "68.7"
				  },
				  {
				    "Year": 2009,
				    "Unemployment": "6.5",
				    "Economically Active": "68.5",
				    "Employed": "64.0"
				  },
				  {
				    "Year": 2010,
				    "Unemployment": "6.6",
				    "Economically Active": "71.1",
				    "Employed": "66.3"
				  },
				  {
				    "Year": 2011,
				    "Unemployment": "7.3",
				    "Economically Active": "73.2",
				    "Employed": "67.7"
				  },
				  {
				    "Year": 2012,
				    "Unemployment": "7.8",
				    "Economically Active": "72.6",
				    "Employed": "66.8"
				  },
				  {
				    "Year": 2013,
				    "Unemployment": "7.5",
				    "Economically Active": "71.6",
				    "Employed": "66.1"
				  },
				  {
				    "Year": 2014,
				    "Unemployment": "6.7",
				    "Economically Active": "73.2",
				    "Employed": "68.1"
				  },
				  {
				    "Year": 2015,
				    "Unemployment": "6.5",
				    "Economically Active": "72.5",
				    "Employed": "67.7"
				  },
				  {
				    "Year": 2016,
				    "Unemployment": "6.0",
				    "Economically Active": "73.6",
				    "Employed": "69.0"
				  }
				],
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
				data: [{
				    "Period": "2006 Q1",
				    "Composite Economic Index": 108.8,
				    "Private sector": 111,
				    "Public sector": 103.2,
				    "Services": 110.5,
				    "Production": 99.1,
				    "Construction": 159
				  },
				  {
				    "Period": "2006 Q2",
				    "Composite Economic Index": 109.2,
				    "Private sector": 111.7,
				    "Public sector": 103.1,
				    "Services": 110.9,
				    "Production": 100.8,
				    "Construction": 159.6
				  },
				  {
				    "Period": "2006 Q3",
				    "Composite Economic Index": 110.5,
				    "Private sector": 113.3,
				    "Public sector": 103.2,
				    "Services": 112.4,
				    "Production": 101,
				    "Construction": 168.1
				  },
				  {
				    "Period": "2006 Q4",
				    "Composite Economic Index": 111.1,
				    "Private sector": 114.2,
				    "Public sector": 103,
				    "Services": 113.7,
				    "Production": 101.2,
				    "Construction": 167.5
				  },
				  {
				    "Period": "2007 Q1",
				    "Composite Economic Index": 110.6,
				    "Private sector": 113.7,
				    "Public sector": 102.9,
				    "Services": 113.1,
				    "Production": 101.4,
				    "Construction": 163.5
				  },
				  {
				    "Period": "2007 Q2",
				    "Composite Economic Index": 111.1,
				    "Private sector": 114.2,
				    "Public sector": 103.1,
				    "Services": 113.1,
				    "Production": 102.1,
				    "Construction": 169.2
				  },
				  {
				    "Period": "2007 Q3",
				    "Composite Economic Index": 110.8,
				    "Private sector": 114,
				    "Public sector": 102.5,
				    "Services": 112.7,
				    "Production": 105.4,
				    "Construction": 161.6
				  },
				  {
				    "Period": "2007 Q4",
				    "Composite Economic Index": 110.1,
				    "Private sector": 113.1,
				    "Public sector": 102.7,
				    "Services": 111.2,
				    "Production": 107.1,
				    "Construction": 154.8
				  },
				  {
				    "Period": "2008 Q1",
				    "Composite Economic Index": 109.7,
				    "Private sector": 112.5,
				    "Public sector": 102.7,
				    "Services": 111.3,
				    "Production": 106.2,
				    "Construction": 148.8
				  },
				  {
				    "Period": "2008 Q2",
				    "Composite Economic Index": 110.1,
				    "Private sector": 113.2,
				    "Public sector": 102,
				    "Services": 111.7,
				    "Production": 106.5,
				    "Construction": 155.5
				  },
				  {
				    "Period": "2008 Q3",
				    "Composite Economic Index": 107.1,
				    "Private sector": 109.5,
				    "Public sector": 101.1,
				    "Services": 108.6,
				    "Production": 103.9,
				    "Construction": 143.6
				  },
				  {
				    "Period": "2008 Q4",
				    "Composite Economic Index": 106.2,
				    "Private sector": 106.7,
				    "Public sector": 104.8,
				    "Services": 106.3,
				    "Production": 98.7,
				    "Construction": 141.2
				  },
				  {
				    "Period": "2009 Q1",
				    "Composite Economic Index": 105,
				    "Private sector": 105.1,
				    "Public sector": 104.8,
				    "Services": 105.4,
				    "Production": 94.9,
				    "Construction": 138.7
				  },
				  {
				    "Period": "2009 Q2",
				    "Composite Economic Index": 104.2,
				    "Private sector": 103.9,
				    "Public sector": 105.1,
				    "Services": 104.8,
				    "Production": 92.4,
				    "Construction": 136.6
				  },
				  {
				    "Period": "2009 Q3",
				    "Composite Economic Index": 104.4,
				    "Private sector": 104,
				    "Public sector": 105.4,
				    "Services": 105.5,
				    "Production": 91.3,
				    "Construction": 135.7
				  },
				  {
				    "Period": "2009 Q4",
				    "Composite Economic Index": 105.5,
				    "Private sector": 105.7,
				    "Public sector": 105.2,
				    "Services": 107.7,
				    "Production": 92.2,
				    "Construction": 133.1
				  },
				  {
				    "Period": "2010 Q1",
				    "Composite Economic Index": 105.1,
				    "Private sector": 105.3,
				    "Public sector": 104.4,
				    "Services": 107.5,
				    "Production": 93.5,
				    "Construction": 125.5
				  },
				  {
				    "Period": "2010 Q2",
				    "Composite Economic Index": 103.9,
				    "Private sector": 104,
				    "Public sector": 103.6,
				    "Services": 106,
				    "Production": 93.6,
				    "Construction": 121.2
				  },
				  {
				    "Period": "2010 Q3",
				    "Composite Economic Index": 102.2,
				    "Private sector": 102.1,
				    "Public sector": 102.7,
				    "Services": 102.9,
				    "Production": 94.2,
				    "Construction": 121.8
				  },
				  {
				    "Period": "2010 Q4",
				    "Composite Economic Index": 100.9,
				    "Private sector": 100.3,
				    "Public sector": 102.5,
				    "Services": 99.8,
				    "Production": 97.5,
				    "Construction": 113.9
				  },
				  {
				    "Period": "2011 Q1",
				    "Composite Economic Index": 100.3,
				    "Private sector": 99.8,
				    "Public sector": 101.9,
				    "Services": 99,
				    "Production": 98.6,
				    "Construction": 109.6
				  },
				  {
				    "Period": "2011 Q2",
				    "Composite Economic Index": 101.4,
				    "Private sector": 101.5,
				    "Public sector": 101.3,
				    "Services": 101.9,
				    "Production": 100.6,
				    "Construction": 101.4
				  },
				  {
				    "Period": "2011 Q3",
				    "Composite Economic Index": 101.6,
				    "Private sector": 102,
				    "Public sector": 100.6,
				    "Services": 101.8,
				    "Production": 102.8,
				    "Construction": 103.5
				  },
				  {
				    "Period": "2011 Q4",
				    "Composite Economic Index": 101.8,
				    "Private sector": 102.4,
				    "Public sector": 100,
				    "Services": 102.1,
				    "Production": 103.4,
				    "Construction": 104.1
				  },
				  {
				    "Period": "2012 Q1",
				    "Composite Economic Index": 101.7,
				    "Private sector": 102.2,
				    "Public sector": 100.2,
				    "Services": 101.2,
				    "Production": 102,
				    "Construction": 111.3
				  },
				  {
				    "Period": "2012 Q2",
				    "Composite Economic Index": 99.8,
				    "Private sector": 99.7,
				    "Public sector": 99.8,
				    "Services": 99.6,
				    "Production": 100.8,
				    "Construction": 97.9
				  },
				  {
				    "Period": "2012 Q3",
				    "Composite Economic Index": 99.3,
				    "Private sector": 99.1,
				    "Public sector": 99.8,
				    "Services": 99.6,
				    "Production": 99.1,
				    "Construction": 95.1
				  },
				  {
				    "Period": "2012 Q4",
				    "Composite Economic Index": 99.3,
				    "Private sector": 99,
				    "Public sector": 100.2,
				    "Services": 99.6,
				    "Production": 98,
				    "Construction": 95.8
				  },
				  {
				    "Period": "2013 Q1",
				    "Composite Economic Index": 99.8,
				    "Private sector": 99.6,
				    "Public sector": 100.4,
				    "Services": 99.8,
				    "Production": 99.6,
				    "Construction": 96.3
				  },
				  {
				    "Period": "2013 Q2",
				    "Composite Economic Index": 99.6,
				    "Private sector": 99.3,
				    "Public sector": 100.4,
				    "Services": 100.1,
				    "Production": 99.2,
				    "Construction": 90.9
				  },
				  {
				    "Period": "2013 Q3",
				    "Composite Economic Index": 100.7,
				    "Private sector": 100.8,
				    "Public sector": 100.5,
				    "Services": 101.3,
				    "Production": 102.3,
				    "Construction": 92.9
				  },
				  {
				    "Period": "2013 Q4",
				    "Composite Economic Index": 100.2,
				    "Private sector": 100.8,
				    "Public sector": 98.5,
				    "Services": 101.6,
				    "Production": 102.8,
				    "Construction": 86.8
				  },
				  {
				    "Period": "2014 Q1",
				    "Composite Economic Index": 100.4,
				    "Private sector": 101.3,
				    "Public sector": 97.9,
				    "Services": 101.8,
				    "Production": 102.3,
				    "Construction": 91.2
				  },
				  {
				    "Period": "2014 Q2",
				    "Composite Economic Index": 100.8,
				    "Private sector": 101.8,
				    "Public sector": 98,
				    "Services": 102.2,
				    "Production": 103.5,
				    "Construction": 91.6
				  },
				  {
				    "Period": "2014 Q3",
				    "Composite Economic Index": 100.6,
				    "Private sector": 101.5,
				    "Public sector": 98.1,
				    "Services": 101.8,
				    "Production": 103.2,
				    "Construction": 92.9
				  },
				  {
				    "Period": "2014 Q4",
				    "Composite Economic Index": 101.5,
				    "Private sector": 102.6,
				    "Public sector": 98.3,
				    "Services": 102.5,
				    "Production": 103.8,
				    "Construction": 98
				  },
				  {
				    "Period": "2015 Q1",
				    "Composite Economic Index": 102.3,
				    "Private sector": 103.9,
				    "Public sector": 97.9,
				    "Services": 102.5,
				    "Production": 105.7,
				    "Construction": 107.6
				  },
				  {
				    "Period": "2015 Q2",
				    "Composite Economic Index": 102.7,
				    "Private sector": 104.6,
				    "Public sector": 97.2,
				    "Services": 103.5,
				    "Production": 105.6,
				    "Construction": 109.7
				  },
				  {
				    "Period": "2015 Q3",
				    "Composite Economic Index": 102.1,
				    "Private sector": 104,
				    "Public sector": 96.5,
				    "Services": 103.9,
				    "Production": 103.8,
				    "Construction": 104.4
				  },
				  {
				    "Period": "2015 Q4",
				    "Composite Economic Index": 102.6,
				    "Private sector": 104.9,
				    "Public sector": 95.9,
				    "Services": 104.3,
				    "Production": 105.5,
				    "Construction": 107.4
				  },
				  {
				    "Period": "2016 Q1",
				    "Composite Economic Index": 103,
				    "Private sector": 105.5,
				    "Public sector": 95.7,
				    "Services": 104.9,
				    "Production": 105.2,
				    "Construction": 110.7
				  }
				],
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
		        },
	        	data: [
				  {
				    "Period": "2005 Q1",
				    "Detached Property": 160429,
				    "Semi-Detached Property": 104031,
				    "Terrace Property": 82022,
				    "Apartment Property": 100738
				  },
				  {
				    "Period": "2005 Q2",
				    "Detached Property": 169687,
				    "Semi-Detached Property": 109617,
				    "Terrace Property": 83227,
				    "Apartment Property": 97660
				  },
				  {
				    "Period": "2005 Q3",
				    "Detached Property": 180697,
				    "Semi-Detached Property": 115048,
				    "Terrace Property": 89825,
				    "Apartment Property": 102237
				  },
				  {
				    "Period": "2005 Q4",
				    "Detached Property": 185324,
				    "Semi-Detached Property": 119854,
				    "Terrace Property": 93128,
				    "Apartment Property": 105333
				  },
				  {
				    "Period": "2006 Q1",
				    "Detached Property": 188669,
				    "Semi-Detached Property": 123416,
				    "Terrace Property": 96062,
				    "Apartment Property": 111145
				  },
				  {
				    "Period": "2006 Q2",
				    "Detached Property": 201644,
				    "Semi-Detached Property": 135697,
				    "Terrace Property": 108063,
				    "Apartment Property": 117168
				  },
				  {
				    "Period": "2006 Q3",
				    "Detached Property": 222695,
				    "Semi-Detached Property": 150408,
				    "Terrace Property": 121910,
				    "Apartment Property": 133113
				  },
				  {
				    "Period": "2006 Q4",
				    "Detached Property": 245252,
				    "Semi-Detached Property": 168931,
				    "Terrace Property": 137713,
				    "Apartment Property": 152563
				  },
				  {
				    "Period": "2007 Q1",
				    "Detached Property": 267678,
				    "Semi-Detached Property": 186864,
				    "Terrace Property": 154256,
				    "Apartment Property": 168111
				  },
				  {
				    "Period": "2007 Q2",
				    "Detached Property": 305404,
				    "Semi-Detached Property": 206097,
				    "Terrace Property": 160884,
				    "Apartment Property": 179936
				  },
				  {
				    "Period": "2007 Q3",
				    "Detached Property": 332718,
				    "Semi-Detached Property": 209688,
				    "Terrace Property": 164232,
				    "Apartment Property": 179542
				  },
				  {
				    "Period": "2007 Q4",
				    "Detached Property": 314061,
				    "Semi-Detached Property": 198459,
				    "Terrace Property": 157828,
				    "Apartment Property": 176930
				  },
				  {
				    "Period": "2008 Q1",
				    "Detached Property": 285012,
				    "Semi-Detached Property": 185214,
				    "Terrace Property": 145721,
				    "Apartment Property": 172588
				  },
				  {
				    "Period": "2008 Q2",
				    "Detached Property": 265410,
				    "Semi-Detached Property": 177815,
				    "Terrace Property": 133949,
				    "Apartment Property": 164944
				  },
				  {
				    "Period": "2008 Q3",
				    "Detached Property": 237370,
				    "Semi-Detached Property": 157733,
				    "Terrace Property": 123962,
				    "Apartment Property": 149309
				  },
				  {
				    "Period": "2008 Q4",
				    "Detached Property": 224760,
				    "Semi-Detached Property": 143250,
				    "Terrace Property": 111354,
				    "Apartment Property": 136028
				  },
				  {
				    "Period": "2009 Q1",
				    "Detached Property": 198957,
				    "Semi-Detached Property": 130838,
				    "Terrace Property": 103678,
				    "Apartment Property": 123453
				  },
				  {
				    "Period": "2009 Q2",
				    "Detached Property": 204236,
				    "Semi-Detached Property": 132443,
				    "Terrace Property": 103329,
				    "Apartment Property": 122809
				  },
				  {
				    "Period": "2009 Q3",
				    "Detached Property": 204150,
				    "Semi-Detached Property": 132387,
				    "Terrace Property": 104010,
				    "Apartment Property": 123823
				  },
				  {
				    "Period": "2009 Q4",
				    "Detached Property": 207191,
				    "Semi-Detached Property": 133479,
				    "Terrace Property": 102886,
				    "Apartment Property": 120972
				  },
				  {
				    "Period": "2010 Q1",
				    "Detached Property": 205307,
				    "Semi-Detached Property": 127129,
				    "Terrace Property": 95451,
				    "Apartment Property": 117824
				  },
				  {
				    "Period": "2010 Q2",
				    "Detached Property": 201922,
				    "Semi-Detached Property": 128936,
				    "Terrace Property": 92934,
				    "Apartment Property": 116218
				  },
				  {
				    "Period": "2010 Q3",
				    "Detached Property": 202034,
				    "Semi-Detached Property": 125927,
				    "Terrace Property": 90124,
				    "Apartment Property": 115882
				  },
				  {
				    "Period": "2010 Q4",
				    "Detached Property": 189961,
				    "Semi-Detached Property": 120574,
				    "Terrace Property": 84997,
				    "Apartment Property": 101364
				  },
				  {
				    "Period": "2011 Q1",
				    "Detached Property": 184006,
				    "Semi-Detached Property": 114346,
				    "Terrace Property": 79991,
				    "Apartment Property": 102214
				  },
				  {
				    "Period": "2011 Q2",
				    "Detached Property": 176437,
				    "Semi-Detached Property": 114662,
				    "Terrace Property": 79621,
				    "Apartment Property": 97074
				  },
				  {
				    "Period": "2011 Q3",
				    "Detached Property": 178981,
				    "Semi-Detached Property": 111763,
				    "Terrace Property": 76495,
				    "Apartment Property": 96255
				  },
				  {
				    "Period": "2011 Q4",
				    "Detached Property": 175236,
				    "Semi-Detached Property": 108931,
				    "Terrace Property": 73925,
				    "Apartment Property": 91486
				  },
				  {
				    "Period": "2012 Q1",
				    "Detached Property": 162141,
				    "Semi-Detached Property": 105860,
				    "Terrace Property": 67865,
				    "Apartment Property": 81648
				  },
				  {
				    "Period": "2012 Q2",
				    "Detached Property": 163200,
				    "Semi-Detached Property": 102095,
				    "Terrace Property": 69838,
				    "Apartment Property": 85139
				  },
				  {
				    "Period": "2012 Q3",
				    "Detached Property": 157938,
				    "Semi-Detached Property": 100674,
				    "Terrace Property": 68018,
				    "Apartment Property": 79274
				  },
				  {
				    "Period": "2012 Q4",
				    "Detached Property": 153053,
				    "Semi-Detached Property": 98549,
				    "Terrace Property": 66252,
				    "Apartment Property": 79297
				  },
				  {
				    "Period": "2013 Q1",
				    "Detached Property": 152823,
				    "Semi-Detached Property": 97337,
				    "Terrace Property": 63755,
				    "Apartment Property": 73121
				  },
				  {
				    "Period": "2013 Q2",
				    "Detached Property": 156013,
				    "Semi-Detached Property": 97504,
				    "Terrace Property": 65853,
				    "Apartment Property": 74616
				  },
				  {
				    "Period": "2013 Q3",
				    "Detached Property": 157931,
				    "Semi-Detached Property": 99945,
				    "Terrace Property": 67648,
				    "Apartment Property": 74224
				  },
				  {
				    "Period": "2013 Q4",
				    "Detached Property": 157398,
				    "Semi-Detached Property": 99875,
				    "Terrace Property": 68263,
				    "Apartment Property": 79974
				  },
				  {
				    "Period": "2014 Q1",
				    "Detached Property": 159004,
				    "Semi-Detached Property": 102054,
				    "Terrace Property": 69893,
				    "Apartment Property": 79394
				  },
				  {
				    "Period": "2014 Q2",
				    "Detached Property": 164697,
				    "Semi-Detached Property": 105351,
				    "Terrace Property": 72170,
				    "Apartment Property": 81723
				  },
				  {
				    "Period": "2014 Q3",
				    "Detached Property": 165945,
				    "Semi-Detached Property": 107582,
				    "Terrace Property": 73904,
				    "Apartment Property": 85423
				  },
				  {
				    "Period": "2014 Q4",
				    "Detached Property": 169123,
				    "Semi-Detached Property": 109038,
				    "Terrace Property": 74778,
				    "Apartment Property": 86727
				  },
				  {
				    "Period": "2015 Q1",
				    "Detached Property": 168049,
				    "Semi-Detached Property": 109217,
				    "Terrace Property": 75454,
				    "Apartment Property": 87387
				  },
				  {
				    "Period": "2015 Q2",
				    "Detached Property": 173147,
				    "Semi-Detached Property": 112980,
				    "Terrace Property": 77196,
				    "Apartment Property": 91296
				  },
				  {
				    "Period": "2015 Q3",
				    "Detached Property": 177887,
				    "Semi-Detached Property": 115958,
				    "Terrace Property": 80115,
				    "Apartment Property": 93018
				  },
				  {
				    "Period": "2015 Q4",
				    "Detached Property": 180308,
				    "Semi-Detached Property": 115467,
				    "Terrace Property": 81625,
				    "Apartment Property": 93433
				  },
				  {
				    "Period": "2016 Q1",
				    "Detached Property": 180599,
				    "Semi-Detached Property": 113947,
				    "Terrace Property": 81538,
				    "Apartment Property": 97810
				  },
				  {
				    "Period": "2016 Q2",
				    "Detached Property": 183812,
				    "Semi-Detached Property": 119615,
				    "Terrace Property": 85686,
				    "Apartment Property": 100613
				  }
				]
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
		        },
	        	data: [
				  {
				    "Period": 2008,
				    "Antrim and Newtownabbey": 54181,
				    "North Down and Ards": 66612,
				    "Armagh, Banbridge and Craigavon": 76521,
				    "Belfast": 148473,
				    "Causeway Coast and Glens": 59875,
				    "Derry and Strabane": 57619,
				    "Fermanagh and Omagh": 44904,
				    "Lisburn and Castlereagh": 52599,
				    "Mid and East Antrim": 55502,
				    "Mid Ulster": 49255,
				    "Newry, Mourne and Down": 62800,
				    "Northern Ireland": 728341
				  },
				  {
				    "Period": 2009,
				    "Antrim and Newtownabbey": 55274,
				    "North Down and Ards": 67127,
				    "Armagh, Banbridge and Craigavon": 78449,
				    "Belfast": 150252,
				    "Causeway Coast and Glens": 60754,
				    "Derry and Strabane": 58216,
				    "Fermanagh and Omagh": 45874,
				    "Lisburn and Castlereagh": 53524,
				    "Mid and East Antrim": 56391,
				    "Mid Ulster": 50120,
				    "Newry, Mourne and Down": 64117,
				    "Northern Ireland": 740098
				  },
				  {
				    "Period": 2010,
				    "Antrim and Newtownabbey": 55748,
				    "North Down and Ards": 67875,
				    "Armagh, Banbridge and Craigavon": 79812,
				    "Belfast": 152219,
				    "Causeway Coast and Glens": 61613,
				    "Derry and Strabane": 58639,
				    "Fermanagh and Omagh": 46519,
				    "Lisburn and Castlereagh": 54551,
				    "Mid and East Antrim": 57123,
				    "Mid Ulster": 50735,
				    "Newry, Mourne and Down": 65515,
				    "Northern Ireland": 750349
				  },
				  {
				    "Period": 2011,
				    "Antrim and Newtownabbey": 56130,
				    "North Down and Ards": 68491,
				    "Armagh, Banbridge and Craigavon": 80683,
				    "Belfast": 153350,
				    "Causeway Coast and Glens": 62169,
				    "Derry and Strabane": 59021,
				    "Fermanagh and Omagh": 46830,
				    "Lisburn and Castlereagh": 55181,
				    "Mid and East Antrim": 57282,
				    "Mid Ulster": 51133,
				    "Newry, Mourne and Down": 66377,
				    "Northern Ireland": 756647
				  },
				  {
				    "Period": 2012,
				    "Antrim and Newtownabbey": 56350,
				    "North Down and Ards": 68694,
				    "Armagh, Banbridge and Craigavon": 80621,
				    "Belfast": 154003,
				    "Causeway Coast and Glens": 62039,
				    "Derry and Strabane": 59304,
				    "Fermanagh and Omagh": 47225,
				    "Lisburn and Castlereagh": 55388,
				    "Mid and East Antrim": 57392,
				    "Mid Ulster": 51050,
				    "Newry, Mourne and Down": 66454,
				    "Northern Ireland": 758520
				  },
				  {
				    "Period": 2013,
				    "Antrim and Newtownabbey": 56695,
				    "North Down and Ards": 69060,
				    "Armagh, Banbridge and Craigavon": 80855,
				    "Belfast": 154389,
				    "Causeway Coast and Glens": 62237,
				    "Derry and Strabane": 59443,
				    "Fermanagh and Omagh": 47660,
				    "Lisburn and Castlereagh": 55999,
				    "Mid and East Antrim": 57719,
				    "Mid Ulster": 51483,
				    "Newry, Mourne and Down": 66805,
				    "Northern Ireland": 762345
				  },
				  {
				    "Period": 2014,
				    "Antrim and Newtownabbey": 57228,
				    "North Down and Ards": 69392,
				    "Armagh, Banbridge and Craigavon": 81373,
				    "Belfast": 155047,
				    "Causeway Coast and Glens": 62473,
				    "Derry and Strabane": 59698,
				    "Fermanagh and Omagh": 47832,
				    "Lisburn and Castlereagh": 56700,
				    "Mid and East Antrim": 58060,
				    "Mid Ulster": 51877,
				    "Newry, Mourne and Down": 67698,
				    "Northern Ireland": 767378
				  },
				  {
				    "Period": 2015,
				    "Antrim and Newtownabbey": 57615,
				    "North Down and Ards": 69769,
				    "Armagh, Banbridge and Craigavon": 81854,
				    "Belfast": 155381,
				    "Causeway Coast and Glens": 62615,
				    "Derry and Strabane": 60018,
				    "Fermanagh and Omagh": 47839,
				    "Lisburn and Castlereagh": 57261,
				    "Mid and East Antrim": 58307,
				    "Mid Ulster": 52272,
				    "Newry, Mourne and Down": 68202,
				    "Northern Ireland": 771133
				  }
				]
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
		        },
	        	data: [
					  {
					    "Year": "2008/09",
					    "GCSE - Non-Grammar": 54.1,
					    "GCSE - Grammar": 96.8,
					    "GCSE - All": 71.2,
					    "A-level - Non-Grammar": 41.4,
					    "A-level - Grammar": 75.1,
					    "A-level - All": 64
					  },
					  {
					    "Year": "2009/10",
					    "GCSE - Non-Grammar": 59.1,
					    "GCSE - Grammar": 96.8,
					    "GCSE - All": 74.3,
					    "A-level - Non-Grammar": 43,
					    "A-level - Grammar": 77.7,
					    "A-level - All": 65.3
					  },
					  {
					    "Year": "2010/11",
					    "GCSE - Non-Grammar": 60.1,
					    "GCSE - Grammar": 97,
					    "GCSE - All": 75.3,
					    "A-level - Non-Grammar": 44.2,
					    "A-level - Grammar": 76.5,
					    "A-level - All": 64.5
					  },
					  {
					    "Year": "2011/12",
					    "GCSE - Non-Grammar": 63.9,
					    "GCSE - Grammar": 97,
					    "GCSE - All": 77.8,
					    "A-level - Non-Grammar": 44.9,
					    "A-level - Grammar": 76.7,
					    "A-level - All": 64.8
					  },
					  {
					    "Year": "2012/13",
					    "GCSE - Non-Grammar": 67.2,
					    "GCSE - Grammar": 97.3,
					    "GCSE - All": 79.6,
					    "A-level - Non-Grammar": 45.4,
					    "A-level - Grammar": 77.2,
					    "A-level - All": 65.2
					  },
					  {
					    "Year": "2013/14",
					    "GCSE - Non-Grammar": 70.6,
					    "GCSE - Grammar": 97.2,
					    "GCSE - All": 81.8,
					    "A-level - Non-Grammar": 47.7,
					    "A-level - Grammar": 75.7,
					    "A-level - All": 65
					  },
					  {
					    "Year": "2014/15",
					    "GCSE - Non-Grammar": 72,
					    "GCSE - Grammar": 97.8,
					    "GCSE - All": 82.8,
					    "A-level - Non-Grammar": 47.8,
					    "A-level - Grammar": 77,
					    "A-level - All": 64.9
					  }
					]
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
		        },
	        	data: [
				  {
				    "Period": "1998/99",
				    "Violence against the person": 18498,
				    "Sexual offences": 1596,
				    "Robbery": 1395,
				    "Theft": 52143,
				    "Criminal damage": 27551,
				    "Drug offences": 1399,
				    "Public order offences": 216,
				    "Possession of weapons": 351,
				    "Miscellaneous crimes against society": 1498,
				    "Other fraud": 4406,
				    "All crime": 109053
				  },
				  {
				    "Period": "1999/00",
				    "Violence against the person": 21482,
				    "Sexual offences": 1318,
				    "Robbery": 1383,
				    "Theft": 54659,
				    "Criminal damage": 31083,
				    "Drug offences": 1718,
				    "Public order offences": 269,
				    "Possession of weapons": 420,
				    "Miscellaneous crimes against society": 1877,
				    "Other fraud": 4902,
				    "All crime": 119111
				  },
				  {
				    "Period": "2000/01",
				    "Violence against the person": 21397,
				    "Sexual offences": 1167,
				    "Robbery": 1767,
				    "Theft": 55150,
				    "Criminal damage": 32190,
				    "Drug offences": 1453,
				    "Public order offences": 386,
				    "Possession of weapons": 396,
				    "Miscellaneous crimes against society": 1885,
				    "Other fraud": 4122,
				    "All crime": 119913
				  },
				  {
				    "Period": "2001/02",
				    "Violence against the person": 26115,
				    "Sexual offences": 1408,
				    "Robbery": 2222,
				    "Theft": 61544,
				    "Criminal damage": 39748,
				    "Drug offences": 1108,
				    "Public order offences": 691,
				    "Possession of weapons": 474,
				    "Miscellaneous crimes against society": 2504,
				    "Other fraud": 3972,
				    "All crime": 139786
				  },
				  {
				    "Period": "2002/03",
				    "Violence against the person": 28425,
				    "Sexual offences": 1438,
				    "Robbery": 2497,
				    "Theft": 63053,
				    "Criminal damage": 36282,
				    "Drug offences": 1924,
				    "Public order offences": 1199,
				    "Possession of weapons": 578,
				    "Miscellaneous crimes against society": 2736,
				    "Other fraud": 4364,
				    "All crime": 142496
				  },
				  {
				    "Period": "2003/04",
				    "Violence against the person": 28953,
				    "Sexual offences": 1743,
				    "Robbery": 1973,
				    "Theft": 54075,
				    "Criminal damage": 32082,
				    "Drug offences": 2589,
				    "Public order offences": 673,
				    "Possession of weapons": 582,
				    "Miscellaneous crimes against society": 2296,
				    "Other fraud": 2987,
				    "All crime": 127953
				  },
				  {
				    "Period": "2004/05",
				    "Violence against the person": 29311,
				    "Sexual offences": 1650,
				    "Robbery": 1487,
				    "Theft": 46235,
				    "Criminal damage": 31027,
				    "Drug offences": 2622,
				    "Public order offences": 530,
				    "Possession of weapons": 634,
				    "Miscellaneous crimes against society": 2469,
				    "Other fraud": 2159,
				    "All crime": 118124
				  },
				  {
				    "Period": "2005/06",
				    "Violence against the person": 30882,
				    "Sexual offences": 1662,
				    "Robbery": 1744,
				    "Theft": 43961,
				    "Criminal damage": 34296,
				    "Drug offences": 2944,
				    "Public order offences": 2007,
				    "Possession of weapons": 684,
				    "Miscellaneous crimes against society": 2739,
				    "Other fraud": 2275,
				    "All crime": 123194
				  },
				  {
				    "Period": "2006/07",
				    "Violence against the person": 31802,
				    "Sexual offences": 1725,
				    "Robbery": 1574,
				    "Theft": 41011,
				    "Criminal damage": 35827,
				    "Drug offences": 2413,
				    "Public order offences": 1713,
				    "Possession of weapons": 740,
				    "Miscellaneous crimes against society": 2509,
				    "Other fraud": 1830,
				    "All crime": 121144
				  },
				  {
				    "Period": "2007/08",
				    "Violence against the person": 29506,
				    "Sexual offences": 1739,
				    "Robbery": 1143,
				    "Theft": 37694,
				    "Criminal damage": 30426,
				    "Drug offences": 2721,
				    "Public order offences": 1602,
				    "Possession of weapons": 799,
				    "Miscellaneous crimes against society": 1860,
				    "Other fraud": 978,
				    "All crime": 108468
				  },
				  {
				    "Period": "2008/09",
				    "Violence against the person": 29365,
				    "Sexual offences": 1839,
				    "Robbery": 1283,
				    "Theft": 40198,
				    "Criminal damage": 27904,
				    "Drug offences": 2974,
				    "Public order offences": 1895,
				    "Possession of weapons": 794,
				    "Miscellaneous crimes against society": 2618,
				    "Other fraud": 1224,
				    "All crime": 110094
				  },
				  {
				    "Period": "2009/10",
				    "Violence against the person": 29752,
				    "Sexual offences": 1798,
				    "Robbery": 1276,
				    "Theft": 40589,
				    "Criminal damage": 25862,
				    "Drug offences": 3146,
				    "Public order offences": 1995,
				    "Possession of weapons": 804,
				    "Miscellaneous crimes against society": 2729,
				    "Other fraud": 1188,
				    "All crime": 109139
				  },
				  {
				    "Period": "2010/11",
				    "Violence against the person": 29327,
				    "Sexual offences": 1928,
				    "Robbery": 1306,
				    "Theft": 38472,
				    "Criminal damage": 24483,
				    "Drug offences": 3485,
				    "Public order offences": 1682,
				    "Possession of weapons": 741,
				    "Miscellaneous crimes against society": 2252,
				    "Other fraud": 1364,
				    "All crime": 105040
				  },
				  {
				    "Period": "2011/12",
				    "Violence against the person": 30445,
				    "Sexual offences": 1828,
				    "Robbery": 1221,
				    "Theft": 37270,
				    "Criminal damage": 22758,
				    "Drug offences": 3780,
				    "Public order offences": 1679,
				    "Possession of weapons": 714,
				    "Miscellaneous crimes against society": 2314,
				    "Other fraud": 1380,
				    "All crime": 103389
				  },
				  {
				    "Period": "2012/13",
				    "Violence against the person": 30305,
				    "Sexual offences": 1932,
				    "Robbery": 1014,
				    "Theft": 35611,
				    "Criminal damage": 20959,
				    "Drug offences": 4378,
				    "Public order offences": 1517,
				    "Possession of weapons": 651,
				    "Miscellaneous crimes against society": 2191,
				    "Other fraud": 1831,
				    "All crime": 100389
				  },
				  {
				    "Period": "2013/14",
				    "Violence against the person": 32403,
				    "Sexual offences": 2234,
				    "Robbery": 958,
				    "Theft": 36023,
				    "Criminal damage": 19889,
				    "Drug offences": 4732,
				    "Public order offences": 1536,
				    "Possession of weapons": 727,
				    "Miscellaneous crimes against society": 2415,
				    "Other fraud": 1829,
				    "All crime": 102746
				  },
				  {
				    "Period": "2014/15",
				    "Violence against the person": 34253,
				    "Sexual offences": 2734,
				    "Robbery": 880,
				    "Theft": 35444,
				    "Criminal damage": 19830,
				    "Drug offences": 5048,
				    "Public order offences": 1447,
				    "Possession of weapons": 772,
				    "Miscellaneous crimes against society": 2768,
				    "Other fraud": 1896,
				    "All crime": 105072
				  }
				]
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
		        },
	        	data: [
					  {
					    "Year": "2003/04",
					    "Applications Received": 28098,
					    "Decisions Granted": 17652
					  },
					  {
					    "Year": "2004/05",
					    "Applications Received": 30219,
					    "Decisions Granted": 19985
					  },
					  {
					    "Year": "2005/06",
					    "Applications Received": 29289,
					    "Decisions Granted": 20001
					  },
					  {
					    "Year": "2006/07",
					    "Applications Received": 20946,
					    "Decisions Granted": 19020
					  },
					  {
					    "Year": "2007/08",
					    "Applications Received": 21920,
					    "Decisions Granted": 19273
					  },
					  {
					    "Year": "2008/09",
					    "Applications Received": 14994,
					    "Decisions Granted": 17783
					  },
					  {
					    "Year": "2009/10",
					    "Applications Received": 14551,
					    "Decisions Granted": 14246
					  },
					  {
					    "Year": "2010/11",
					    "Applications Received": 11391,
					    "Decisions Granted": 10383
					  },
					  {
					    "Year": "2011/12",
					    "Applications Received": 7771,
					    "Decisions Granted": 8305
					  },
					  {
					    "Year": "2012/13",
					    "Applications Received": 6278,
					    "Decisions Granted": 6680
					  },
					  {
					    "Year": "2013/14",
					    "Applications Received": 6354,
					    "Decisions Granted": 5833
					  },
					  {
					    "Year": "2014/15",
					    "Applications Received": 7339,
					    "Decisions Granted": 5974
					  }
					]
			}

		    //end of datasets
		    ]
		}
	}
})		// ,,
			// 
			//];
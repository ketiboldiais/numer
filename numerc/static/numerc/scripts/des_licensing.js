import * as csmd from "../csmd/csmd.mjs";

const license_trends = new csmd.LinePlot({
	id: "license_trends",
	radialMagnitude: true,
	label: { x: "year", y: "user %" },
	width: 90,
	height: 50,
	lineColors: ["red", "blue", "green", "purple", "orange"],
	svg_width: 500,
	svg_height: 300,
	margin: [15, 15, 50, 20],
	tickCount: { x: 6, y: 6 },
	data: [
		{ x: 2013, y: 54, group: "gpl" },
		{ x: 2013, y: 18, group: "mit" },
		{ x: 2013, y: 13, group: "apache" },

		{ x: 2014, y: 45, group: "gpl" },
		{ x: 2014, y: 22, group: "mit" },
		{ x: 2014, y: 15, group: "apache" },

		{ x: 2015, y: 25, group: "gpl" },
		{ x: 2015, y: 18, group: "mit" },
		{ x: 2015, y: 16.5, group: "apache" },

		{ x: 2016, y: 25, group: "mit" },
		{ x: 2016, y: 19, group: "gpl" },
		{ x: 2016, y: 15, group: "apache" },

		{ x: 2021, y: 30, group: "apache" },
		{ x: 2021, y: 26, group: "mit" },
		{ x: 2021, y: 19, group: "gpl" },
	],
}).render();

const github_license_trends = new csmd.LinePlot({
	id: "github_license_trends",
	radialMagnitude: true,
	label: { x: "year", y: "user %" },
	width: 90,
	yMax: 70,
	height: 70,
	lineColors: ["cornflowerblue", "orange", "red", "purple", "green"],
	color: 'greyScheme',
	svg_width: 480,
	svg_height: 400,
	margin: [15, 15, 50, 20],
	tickCount: { x: 6, y: 6 },
	data: [
		{ x: 2010, y: 24.08, group: "GPL" },
		{ x: 2010, y: 64.68, group: "MIT" },
		{ x: 2010, y: 4.04, group: "Apache" },
		{ x: 2010, y: 3.33, group: "BSD3" },
		{ x: 2010, y: 3.87, group: "LGL" },

		{ x: 2011, y: 26.17, group: "GPL" },
		{ x: 2011, y: 64.68, group: "MIT" },
		{ x: 2011, y: 5.92, group: "Apache" },
		{ x: 2011, y: 4.87, group: "BSD3" },
		{ x: 2011, y: 3.94, group: "LGL" },

		{ x: 2012, y: 27.99, group: "GPL" },
		{ x: 2012, y: 59.09, group: "MIT" },
		{ x: 2012, y: 7.57, group: "Apache" },
		{ x: 2012, y: 5.31, group: "BSD3" },
		{ x: 2012, y: 4.44, group: "LGL" },

		{ x: 2013, y: 28.13, group: "GPL" },
		{ x: 2013, y: 54.69, group: "MIT" },
		{ x: 2013, y: 9.14, group: "Apache" },
		{ x: 2013, y: 2.84, group: "BSD3" },
		{ x: 2013, y: 4.6, group: "LGL" },

		{ x: 2014, y: 26.45, group: "GPL" },
		{ x: 2014, y: 55.29, group: "MIT" },
		{ x: 2014, y: 11.96, group: "Apache" },
		{ x: 2014, y: 3.97, group: "BSD3" },
		{ x: 2014, y: 3.64, group: "LGL" },

		{ x: 2015, y: 25.78, group: "GPL" },
		{ x: 2015, y: 53.97, group: "MIT" },
		{ x: 2015, y: 13.66, group: "Apache" },
		{ x: 2015, y: 3.15, group: "BSD3" },
		{ x: 2015, y: 2.71, group: "LGL" },

		{ x: 2016, y: 24.96, group: "GPL" },
		{ x: 2016, y: 54.7, group: "MIT" },
		{ x: 2016, y: 15.46, group: "Apache" },
		{ x: 2016, y: 2.74, group: "BSD3" },
		{ x: 2016, y: 2.36, group: "LGL" },

		{ x: 2017, y: 23.82, group: "GPL" },
		{ x: 2017, y: 54.47, group: "MIT" },
		{ x: 2017, y: 16.81, group: "Apache" },
		{ x: 2017, y: 2.24, group: "BSD3" },
		{ x: 2017, y: 1.92, group: "LGL" },

		{ x: 2018, y: 21.06, group: "GPL" },
		{ x: 2018, y: 55.2, group: "MIT" },
		{ x: 2018, y: 17.26, group: "Apache" },
		{ x: 2018, y: 2.03, group: "BSD3" },
		{ x: 2018, y: 1.67, group: "LGL" },

		{ x: 2019, y: 21.03, group: "GPL" },
		{ x: 2019, y: 57.99, group: "MIT" },
		{ x: 2019, y: 16.97, group: "Apache" },
		{ x: 2019, y: 1.86, group: "BSD3" },
		{ x: 2019, y: 1.48, group: "LGL" },

		{ x: 2020, y: 20.73, group: "GPL" },
		{ x: 2020, y: 58.65, group: "MIT" },
		{ x: 2020, y: 16.81, group: "Apache" },
		{ x: 2020, y: 1.9, group: "BSD3" },
		{ x: 2020, y: 1.4, group: "LGL" },

		{ x: 2021, y: 20.24, group: "GPL" },
		{ x: 2021, y: 59.16, group: "MIT" },
		{ x: 2021, y: 16.37, group: "Apache" },
		{ x: 2021, y: 1.97, group: "BSD3" },
		{ x: 2021, y: 1.3, group: "LGL" },

		{ x: 2022, y: 21.04, group: "GPL" },
		{ x: 2022, y: 60.12, group: "MIT" },
		{ x: 2022, y: 17.02, group: "Apache" },
		{ x: 2022, y: 2.13, group: "BSD3" },
		{ x: 2022, y: 1.24, group: "LGL" },
	],
}).render();

/*
year: 2010
	gpl: 2,116
	mit: 5,684
	apache: 355
	bsd3: 293
	lgpl: 340

	total: 8788

year: 2011
	gpl: 5,559
	mit: 12,549
	apache: 1,258
	bsd3: 1,035
	lgpl: 837

	total: 20401

year: 2012
	gpl: 11,881
	mit: 23,213
	apache: 3,213
	bsd3: 2253
	lgpl: 1886

	total: 42,446

year: 2013
	gpl: 22,336
	mit: 43,905
	apache: 7,256
	bsd3: 2,253
	lgpl: 3655

	total: 79405


year: 2014
	gpl: 58,236
	mit: 118,822
	apache: 26,326
	bsd3: 8,748
	lgpl: 8018

	total: 220150

year: 2015
	gpl: 145,467
	mit: 308,656
	apache: 77,050
	bsd3: 17,797
	lgpl: 15,276

	total:

year: 2016
	gpl: 280,253
	mit: 612,854
	apache: 173,933
	bsd3: 30,845
	lgpl: 26,557

year: 2017
	gpl: 465,270
	mit: 1,078,014
	apache: 328,391
	bsd3: 43,812
	lgpl: 37,489

year: 2018
	gpl: 683,095
	mit: 1,757,170
	apache: 523,012
	bsd3: 61,478
	lgpl: 50,596

year: 2019
	gpl: 941,880
	mit: 2.625,480
	apache: 760,105
	bsd3: 83,069
	lgpl: 66,351

year: 2020
	gpl: 1,202,020
	mit: 3,429,925
	apache: 974,496
	bsd3: 110,164
	lgpl: 81,098

year: 2021
	gpl: 1,535,407
	mit: 4,560,119
	apache: 1,241,996
	bsd3: 149,117
	lgpl: 98,301

year: 2022
	gpl: 2,036,077
	mit: 5,667,446
	apache: 1,646,992
	bsd3: 206,591
	lgpl: 119,949
*/

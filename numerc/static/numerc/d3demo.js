const dataset = [10, 20, 30, 40, 50];

// body selection
const body = d3.select("body");

// demo 1
const demo1 = body.selectAll("figure#demo1").selectAll("div");
demo1.data(dataset).enter().append("div").attr("class", "bar");

// demo 2
const demo2 = body.selectAll("figure#demo2").selectAll("div");
demo2
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", (d) => `${d}px`);

// demo 3
const demo3 = body.selectAll("figure#demo3").selectAll("div");
demo3
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", (d) => `${d}px`)
	.style("margin-right", "2px");

// demo 3
const dataset2 = [11, 23, 7, 46, 58, 32, 28, 27];
const demo4 = body.selectAll("figure#demo4").selectAll("div");
demo4
	.data(dataset2)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", (d) => `${d}px`)
	.style("margin-right", "2px");

// demo 3
const dataset3 = [4, 8, 12, 16, 20];
const dimensions = {
	width: 350,
	height: 50,
};
const demo5 = body.selectAll("figure#demo5").append("svg");
// set SVG width and height
demo5.attr("width", dimensions.width).attr("height", dimensions.height);
// add circles to SVG
demo5
	.selectAll("circle")
	.data(dataset3)
	.enter()
	.append("circle")
	.attr("cx", function (d, i) {
		return i * 50 + 25;
	})
	.attr("cy", dimensions.height / 2)
	.attr("r", function (d) {
		return d;
	});

// demo6
const demo6 = body.selectAll("figure#demo6").append("svg");
// set SVG width and height
demo6.attr("width", dimensions.width).attr("height", dimensions.height);
// add circles to SVG
demo6
	.selectAll("circle")
	.data(dataset3)
	.enter()
	.append("circle")
	.attr("cx", function (d, i) {
		return i * 50 + 25;
	})
	.attr("cy", dimensions.height / 2)
	.attr("r", function (d) {
		return d;
	})
	.attr("fill", "gold")
	.attr("stroke", "red")
	.attr("stroke-width", function (d) {
		return d / 2;
	});

// Demo 7
const demo7 = body.selectAll("figure#demo7").append("svg");
const demo6Dimensions = {
	width: 233,
	height: 135,
};
const demo7Colors = {
	lightGreen: "#DFF2D8",
	darkGreen: "#78866b",
	dynamicGreen: function (d) {
		const red = 255 - Math.round(d * 2);
		const green = 240;
		const blue = 255 - Math.round(d + 80);
		const alpha = 0.5;
		return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
	},
};
const dataset7 = [8, 11, 23, 29, 17, 33, 18, 14, 44, 12, 58];
// set SVG width and height
demo7
	.attr("width", demo6Dimensions.width)
	.attr("height", demo6Dimensions.height);
// add rectangles to SVG
demo7
	.selectAll("rect")
	.data(dataset7)
	.enter()
	.append("rect")
	.attr("fill", demo7Colors.lightGreen)
	.attr("stroke", demo7Colors.darkGreen)
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", 20)
	.attr("height", 100);

// Demo 8
const demo8 = body.selectAll("figure#demo8").append("svg");
// set SVG width and height
demo8
	.attr("width", demo6Dimensions.width)
	.attr("height", demo6Dimensions.height);
// add rectangles to SVG
demo8
	.selectAll("rect")
	.data(dataset7)
	.enter()
	.append("rect")
	.attr("fill", demo7Colors.lightGreen)
	.attr("stroke", demo7Colors.darkGreen)
	.attr("x", function (d, i) {
		return i * 21;
	})
	.attr("y", 0)
	.attr("width", 20)
	.attr("height", 100);

// Demo 9
const demo9 = body.selectAll("figure#demo9").append("svg");
// set SVG width and height
demo9
	.attr("width", demo6Dimensions.width)
	.attr("height", demo6Dimensions.height);
// add rectangles to SVG
demo9
	.selectAll("rect")
	.data(dataset7)
	.enter()
	.append("rect")
	.attr("fill", demo7Colors.lightGreen)
	.attr("stroke", demo7Colors.darkGreen)
	.attr("x", function (d, i) {
		return i * 21;
	})
	.attr("y", 0)
	.attr("width", 20)
	.attr("height", function (d) {
		return d;
	});

// Demo 10
const demo10 = body.selectAll("figure#demo10").append("svg");
// set SVG width and height
demo10
	.attr("width", demo6Dimensions.width)
	.attr("height", demo6Dimensions.height);
// add rectangles to SVG
demo10
	.selectAll("rect")
	.data(dataset7)
	.enter()
	.append("rect")
	.attr("fill", demo7Colors.lightGreen)
	.attr("stroke", demo7Colors.darkGreen)
	.attr("x", function (d, i) {
		return i * 21;
	})
	.attr("y", function (d) {
		return demo6Dimensions.height - d;
	})
	.attr("width", 20)
	.attr("height", function (d) {
		return d;
	});

// Demo 11
const demo11 = body.selectAll("figure#demo11").append("svg");
// set SVG width and height
demo11
	.attr("width", demo6Dimensions.width)
	.attr("height", demo6Dimensions.height);
// add rectangles to SVG
demo11
	.selectAll("rect")
	.data(dataset7)
	.enter()
	.append("rect")
	.attr("fill", demo7Colors.lightGreen)
	.attr("stroke", demo7Colors.darkGreen)
	.attr("x", function (d, i) {
		return i * 21;
	})
	.attr("y", function (d) {
		return demo6Dimensions.height - d * 2;
	})
	.attr("width", 20)
	.attr("height", function (d) {
		return d * 4;
	});

// Demo 12
const demo12 = body.selectAll("figure#demo12").append("svg");
// set SVG width and height
demo12
	.attr("width", demo6Dimensions.width)
	.attr("height", demo6Dimensions.height);
// add rectangles to SVG
demo12
	.selectAll("rect")
	.data(dataset7)
	.enter()
	.append("rect")
	.attr("fill", (d) => demo7Colors.dynamicGreen(d))
	.attr("stroke", demo7Colors.darkGreen)
	.attr("x", function (d, i) {
		return i * 21;
	})
	.attr("y", function (d) {
		return demo6Dimensions.height - d * 2;
	})
	.attr("width", 20)
	.attr("height", function (d) {
		return d * 4;
	});

// Demo 13
const demo13 = body.selectAll("figure#demo13").append("svg");
// set SVG width and height
const demo13padding = 3;
demo13
	.attr("width", demo6Dimensions.width)
	.attr("height", demo6Dimensions.height);
// add rectangles to SVG
demo13
	.selectAll("rect")
	.data(dataset7)
	.enter()
	.append("rect")
	.attr("fill", (d) => demo7Colors.dynamicGreen(d))
	.attr("stroke", demo7Colors.darkGreen)
	.attr("x", function (d, i) {
		return i * 21;
	})
	.attr("y", function (d) {
		return demo6Dimensions.height - d * 2;
	})
	.attr("width", demo6Dimensions.width / dataset7.length - demo13padding)
	.attr("height", function (d) {
		return d * 4;
	});
demo13
	.selectAll("text")
	.data(dataset7)
	.enter()
	.append("text")
	.text(function (d) {
		return d;
	})
	.attr("x", function (d, i) {
		return (
			i * (demo6Dimensions.width / dataset7.length) +
			(demo6Dimensions.width / dataset7.length - demo13padding) / 2.34
		);
	})
	.attr("y", function (d) {
		return demo6Dimensions.height - d * 2 + 14;
	})
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("text-anchor", "middle")
	.attr("fill", demo7Colors.darkGreen);

/* -------------------------------------------------------------------------- */
/*                             Scatter Plot Demos                             */
/* -------------------------------------------------------------------------- */
const scatterData = [
	[5, 20],
	[480, 90],
	[250, 50],
	[100, 33],
	[330, 95],
	[410, 12],
	[475, 44],
	[25, 67],
	[85, 21],
	[220, 88],
	[600, 150],
];
const scatterDimensions = {
	width: 600,
	height: 100,
	padding: 1,
};
const scatterColors = {
	darkBlue: "#5da9e9",
	lightBlue: "#e5f4e3",
};

/* --------------------------------- Demo 14 -------------------------------- */
const demo14 = body.selectAll("figure#demo14").append("svg");
demo14
	.attr("width", scatterDimensions.width)
	.attr("height", scatterDimensions.height);
demo14
	.selectAll("circle")
	.data(scatterData)
	.enter()
	.append("circle")
	.attr("cx", function (d) {
		return d[0];
	})
	.attr("cy", function (d) {
		return d[1];
	})
	.attr("r", 5)
	.attr("fill", scatterColors.lightBlue)
	.attr("stroke", scatterColors.darkBlue);

/* --------------------------------- Demo 15 -------------------------------- */
const demo15 = body.selectAll("figure#demo15").append("svg");
demo15
	.attr("width", scatterDimensions.width)
	.attr("height", scatterDimensions.height);
demo15
	.selectAll("circle")
	.data(scatterData)
	.enter()
	.append("circle")
	.attr("cx", function (d) {
		return d[0];
	})
	.attr("cy", function (d) {
		return d[1];
	})
	.attr("r", function (d) {
		return Math.sqrt(scatterDimensions.height);
	})
	.attr("fill", scatterColors.lightBlue)
	.attr("stroke", scatterColors.darkBlue);

/* --------------------------------- Demo 16 -------------------------------- */
const demo16 = body.selectAll("figure#demo16").append("svg");
demo16
	.attr("width", scatterDimensions.width)
	.attr("height", scatterDimensions.height);
demo16
	.selectAll("circle")
	.data(scatterData)
	.enter()
	.append("circle")
	.attr("cx", function (d) {
		return d[0];
	})
	.attr("cy", function (d) {
		return d[1];
	})
	.attr("r", function (d) {
		return Math.sqrt(scatterDimensions.height);
	})
	.attr("fill", scatterColors.lightBlue)
	.attr("stroke", scatterColors.darkBlue);
demo16
	.selectAll("text")
	.data(scatterData)
	.enter()
	.append("text")
	.text((d) => `${d[0]},${d[1]}`)
	.attr("x", (d) => d[0])
	.attr("y", (d) => d[1])
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", scatterColors.darkBlue);

/* -------------------------------------------------------------------------- */
/*                                 Scale Demos                                */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Demo 17 -------------------------------- */
// Demo 17 uses the same data from the scatter plot demo section
const demo17 = body.selectAll("figure#demo17").append("svg");
const scatterDimensions17 = {
	width: 500,
	height: 300,
	padding: 1,
};
const circlePadding = 30;
const xScaleDemo17 = d3
	.scaleLinear()
	.domain([0, d3.max(scatterData, (d) => d[0])])
	.range([circlePadding, scatterDimensions17.width - circlePadding * 2]);

const yScaleDemo17 = d3
	.scaleLinear()
	.domain([0, d3.max(scatterData, (d) => d[1])])
	.range([scatterDimensions17.height - circlePadding, circlePadding]);

const rScaleDemo17 = d3
	.scaleLinear()
	.domain([0, d3.max(scatterData, (d) => d[1])])
	.range([2, 5]);

demo17
	.attr("width", scatterDimensions17.width)
	.attr("height", scatterDimensions17.height);
demo17
	.selectAll("circle")
	.data(scatterData)
	.enter()
	.append("circle")
	.attr("cx", (d) => xScaleDemo17(d[0]))
	.attr("cy", (d) => yScaleDemo17(d[1]))
	.attr("r", (d) => rScaleDemo17(d[1]))
	.attr("fill", scatterColors.lightBlue)
	.attr("stroke", scatterColors.darkBlue);
demo17
	.selectAll("text")
	.data(scatterData)
	.enter()
	.append("text")
	.text((d) => `${d[0]},${d[1]}`)
	.attr("x", (d) => xScaleDemo17(d[0]))
	.attr("y", (d) => yScaleDemo17(d[1]))
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", scatterColors.darkBlue);

/* --------------------------------- Demo 18 -------------------------------- */
const demo18 = body.selectAll("figure#demo18").append("svg");
const aScaleDemo18 = d3
	.scaleLinear()
	.domain([0, d3.max(scatterData, (d) => d[1])])
	.range([2, 10]);
demo18
	.attr("width", scatterDimensions17.width)
	.attr("height", scatterDimensions17.height);
demo18
	.selectAll("circle")
	.data(scatterData)
	.enter()
	.append("circle")
	.attr("cx", (d) => xScaleDemo17(d[0]))
	.attr("cy", (d) => yScaleDemo17(d[1]))
	.attr("r", (d) => aScaleDemo18(d[1]))
	.attr("fill", scatterColors.lightBlue)
	.attr("stroke", scatterColors.darkBlue);
demo18
	.selectAll("text")
	.data(scatterData)
	.enter()
	.append("text")
	.text((d) => `${d[0]},${d[1]}`)
	.attr("x", (d) => xScaleDemo17(d[0]))
	.attr("y", (d) => yScaleDemo17(d[1]))
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", scatterColors.darkBlue);

/* -------------------------------------------------------------------------- */
/*                                 Axes Demos                                 */
/* -------------------------------------------------------------------------- */
// Demo below uses scatter data from previous demo section.
const demo19 = body.selectAll("figure#demo19").append("svg");
const xAxisDemo19 = d3.axisBottom().scale(xScaleDemo17);
demo19
	.attr("width", scatterDimensions17.width)
	.attr("height", scatterDimensions17.height);
demo19
	.selectAll("circle")
	.data(scatterData)
	.enter()
	.append("circle")
	.attr("cx", (d) => xScaleDemo17(d[0]))
	.attr("cy", (d) => yScaleDemo17(d[1]))
	.attr("r", (d) => aScaleDemo18(d[1]))
	.attr("fill", scatterColors.lightBlue)
	.attr("stroke", scatterColors.darkBlue);
demo19
	.selectAll("text")
	.data(scatterData)
	.enter()
	.append("text")
	.text((d) => `${d[0]},${d[1]}`)
	.attr("x", (d) => xScaleDemo17(d[0]))
	.attr("y", (d) => yScaleDemo17(d[1]))
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", scatterColors.darkBlue);

// add bottom x-axis
demo19
	.append("g")
	.attr("class", "axis")
	.attr("color", scatterColors.darkBlue)
	.call(xAxisDemo19);

/* --------------------------------- Demo 20 -------------------------------- */
const demo20 = body.selectAll("figure#demo20").append("svg");
demo20
	.attr("width", scatterDimensions17.width)
	.attr("height", scatterDimensions17.height);
demo20
	.selectAll("circle")
	.data(scatterData)
	.enter()
	.append("circle")
	.attr("cx", (d) => xScaleDemo17(d[0]))
	.attr("cy", (d) => yScaleDemo17(d[1]))
	.attr("r", (d) => aScaleDemo18(d[1]))
	.attr("fill", scatterColors.lightBlue)
	.attr("stroke", scatterColors.darkBlue);
demo20
	.selectAll("text")
	.data(scatterData)
	.enter()
	.append("text")
	.text((d) => `${d[0]},${d[1]}`)
	.attr("x", (d) => xScaleDemo17(d[0]))
	.attr("y", (d) => yScaleDemo17(d[1]))
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", scatterColors.darkBlue);

// add bottom x-axis
demo20
	.append("g")
	.attr("class", "axis")
	.attr("color", scatterColors.darkBlue)
	.attr(
		"transform",
		`translate(0,${scatterDimensions17.height - circlePadding})`
	)
	.call(xAxisDemo19);

/* --------------------------------- Demo 21 -------------------------------- */
const demo21RandomData = [];
const demo21DataPoints = 50;
const xRange = Math.random() * 1000;
const yRange = Math.random() * 1000;
for (let i = 0; i < demo21DataPoints; i++) {
	const newXValue = Math.floor(Math.random() * xRange);
	const newYValue = Math.floor(Math.random() * yRange);
	demo21RandomData.push([newXValue, newYValue]);
}
const xScaleDemo21 = d3
	.scaleLinear()
	.domain([0, d3.max(demo21RandomData, (d) => d[0])])
	.range([circlePadding, scatterDimensions17.width - circlePadding]);
const yScaleDemo21 = d3
	.scaleLinear()
	.domain([0, d3.max(demo21RandomData, (d) => d[1])])
	.range([scatterDimensions17.height - circlePadding, circlePadding]);
const aScaleDemo21 = d3
	.scaleLinear()
	.domain([0, d3.max(demo21RandomData, (d) => d[1])])
	.range([2, 10]);
const demo21yAxis = d3.axisLeft().scale(yScaleDemo21).ticks(5);
const demo21xAxis = d3.axisBottom().scale(xScaleDemo21);
const demo21 = body.selectAll("figure#demo21").append("svg");
demo21
	.attr("width", scatterDimensions17.width)
	.attr("height", scatterDimensions17.height);
demo21
	.selectAll("circle")
	.data(demo21RandomData)
	.enter()
	.append("circle")
	.attr("cx", (d) => xScaleDemo21(d[0]))
	.attr("cy", (d) => yScaleDemo21(d[1]))
	.attr("r", (d) => aScaleDemo21(d[1]))
	.attr("fill", scatterColors.lightBlue)
	.attr("stroke", scatterColors.darkBlue);
// add bottom x-axis
demo21
	.append("g")
	.attr("class", "axis")
	.attr("color", scatterColors.darkBlue)
	.attr(
		"transform",
		`translate(0,${scatterDimensions17.height - circlePadding})`
	)
	.call(demo21xAxis);
// add left y-axis
demo21
	.append("g")
	.attr("class", "axis")
	.attr("color", scatterColors.darkBlue)
	.attr("transform", `translate(${circlePadding}, 0)`)
	.call(demo21yAxis);

/* -------------------------------------------------------------------------- */
/*                              Transition Demos                              */
/* -------------------------------------------------------------------------- */
/* --------------------------------- Demo 22 -------------------------------- */
const demo22 = body.selectAll("figure#demo22").append("svg");
const sizesDemo22 = {
	width: 400,
	height: 250,
};
const colors22 = {
	textColor: "firebrick",
	darkRed: "salmon",
	dynamicRed: (d) =>
		`rgba(255, ${Math.floor(240 - d)}, ${Math.floor(190 + d)}, 0.7)`,
};
const dataSet22 = [
	5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
];
const xScale22 = d3
	.scaleBand()
	.domain(d3.range(dataSet22.length))
	.rangeRound([0, sizesDemo22.width])
	.paddingInner(0.2);

const yScale22 = d3
	.scaleLinear()
	.domain([0, d3.max(dataSet22)])
	.range([0, sizesDemo22.height]);

// Set SVG width and height
const demo22SVG = demo22
	.attr("width", sizesDemo22.width)
	.attr("height", sizesDemo22.height);

// Create bars
demo22SVG
	.selectAll("rect")
	.data(dataSet22)
	.enter()
	.append("rect")
	.attr("x", (d, i) => xScale22(i))
	.attr("y", (d) => sizesDemo22.height - yScale22(d))
	.attr("width", xScale22.bandwidth())
	.attr("height", (d) => yScale22(d))
	.attr("fill", (d) => colors22.dynamicRed(d))
	.attr("stroke", colors22.darkRed);

// Create labels
demo22SVG
	.selectAll("text")
	.data(dataSet22)
	.enter()
	.append("text")
	.text((d) => d)
	.attr("text-anchor", "middle")
	.attr("x", (d, i) => xScale22(i) + xScale22.bandwidth() / 2)
	.attr("y", (d) => sizesDemo22.height - yScale22(d) + 14)
	.attr("font-family", "sans-serif")
	.attr("font-size", "10px")
	.attr("fill", colors22.textColor);
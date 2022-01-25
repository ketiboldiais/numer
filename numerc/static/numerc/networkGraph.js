const body = d3.select("body");
const ptrDemo1Container = document.querySelector("div.ptrDemo1");
const ptrDemo1 = body.selectAll("div.ptrDemo1");
const dimensions = {
	width: 300,
	height: 300,
};

const ptrDemo1SVG = ptrDemo1
	.append("svg")
	.attr("width", dimensions.width)
	.attr("height", dimensions.height);

const dataset = {
	nodes: [
		{ name: "n1" },
		{ name: "n2" },
		{ name: "n3" },
	],
	edges: [
		{ source: 0, target: 1 },
		{ source: 1, target: 2 },
	],
};

const force = d3
	.forceSimulation(dataset.nodes)
	.force("charge", d3.forceManyBody())
	.force("link", d3.forceLink(dataset.edges).distance(100))
	.force(
		"center",
		d3
			.forceCenter()
			.x(dimensions.width / 2)
			.y(dimensions.height / 2)
	);

const edges = ptrDemo1SVG
	.selectAll("line")
	.data(dataset.edges)
	.enter()
	.append("line")
	.style("stroke", "#ccc")
	.style("stroke-width", 2);

const nodeGroup = ptrDemo1SVG
	.selectAll("g")
	.data(dataset.nodes)
	.enter()
	.append("g");

const pointerBox = nodeGroup
	.append("rect")
	.attr("width", 50)
	.attr("height", 20)
	.attr("stroke", "grey")
	.style("fill", "white");

const nodes = nodeGroup
	.append("rect")
	.attr("width", 40)
	.attr("height", 20)
	.attr("stroke", "grey")
	.style("fill", "white");

force.on("tick", function () {
	edges
		.attr("x1", (d) => d.source.x)
		.attr("y1", (d) => d.source.y)
		.attr("x2", (d) => d.target.x)
		.attr("y2", (d) => d.target.y);
	nodes.attr("x", (d) => d.x).attr("y", (d) => d.y);
	pointerBox.attr("x", (d) => d.x).attr("y", (d) => d.y);
});

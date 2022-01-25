const body = d3.select("body");
const weightedGraph1Container = document.querySelector("div#weightedGraph1");
const weightedGraph1 = body.selectAll("div#weightedGraph1");
const dimensions = {
	width: 200,
	height: 200,
};

const weightedGraph1SVG = weightedGraph1
	.append("svg")
	.attr("width", dimensions.width)
	.attr("height", dimensions.height)
	.append("g");

const dataset = {
	nodes: [
		{ name: "Brad" },
		{ name: "Jennifer" },
		{ name: "Rob" },
		{ name: "Angelina" },
	],
	edges: [
		{ source: 0, target: 1 },
		{ source: 0, target: 3 },
		{ source: 1, target: 2 },
		{ source: 2, target: 3 },
	],
};

const force = d3
	.forceSimulation(dataset.nodes)
	.force("charge", d3.forceManyBody())
	.force("link", d3.forceLink(dataset.edges).distance(90))
	.force(
		"center",
		d3
			.forceCenter()
			.x(dimensions.width / 2)
			.y(dimensions.height / 2)
	);

const edges = weightedGraph1SVG
	.selectAll("line")
	.data(dataset.edges)
	.enter()
	.append("line")
	.style("stroke", "#ccc")
	.style("stroke-width", 2);

const nodes = weightedGraph1SVG
	.selectAll("circle")
	.data(dataset.nodes)
	.enter()
	.append("circle")
	.attr("r", 6)
	.attr("stroke", "red")
	.style("fill", "pink")
	.call(drag(force));

const labels = weightedGraph1SVG
	.selectAll("text")
	.data(dataset.nodes)
	.enter()
	.append("text")
	.attr("fill", "black")
	.attr("text-anchor", "middle")
	.style("font-size", "13px")
	.text((d) => d.name);

const edgeLabels = weightedGraph1SVG
	.selectAll('text')
	.data(dataset.nodes)
	.enter()
	.append('text')
	.attr('fill', 'black')
	.attr('dy', '0.35em')
	.attr('text-anchor', 'middle')
	.text("1")

force.on("tick", function () {
	edges
		.attr("x1", (d) => d.source.x)
		.attr("y1", (d) => d.source.y)
		.attr("x2", (d) => d.target.x)
		.attr("y2", (d) => d.target.y);
	nodes.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
	labels.attr("transform", (d) => `translate(${d.x}, ${d.y})`)
	edgeLabels
		.attr('x', d => (d.source.x + d.target.x) / 2)
		.attr('y', d => (d.source.y + d.target.y) / 2)
});

function drag(simulation) {
	function dragstarted(event) {
		if (!event.active) simulation.alphaTarget(0.3).restart();
		event.subject.fx = event.subject.x;
		event.subject.fy = event.subject.y;
	}

	function dragged(event) {
		event.subject.fx = event.x;
		event.subject.fy = event.y;
	}

	function dragended(event) {
		if (!event.active) simulation.alphaTarget(0);
		event.subject.fx = null;
		event.subject.fy = null;
	}

	return d3
		.drag()
		.on("start", dragstarted)
		.on("drag", dragged)
		.on("end", dragended);
}

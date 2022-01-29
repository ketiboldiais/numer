const demo1 = {
	id: "#ptrDemo1",
	dataset: {
		nodes: [
			{ name: "8" },
			{ name: "5" },
			{ name: "4" },
			{ name: "7" },
			{ name: "3" },
			{ name: "9" },
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 2 },
		],
	},
};

const demo2 = {
	id: "#ptrDemo2",
	dataset: {
		nodes: [
			{ name: "8" },
			{ name: "5" },
			{ name: "4" },
			{ name: "7" },
			{ name: "3" },
			{ name: "9" },
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
		],
	},
};

render(demo1);
render(demo2);

function render(demoObj) {
	const main = d3.select("body");
	const demoContainer = main.selectAll(demoObj.id);
	const dimensions = {
		width: 400,
		height: 200,
	};
	const svg = demoContainer
		.append("svg")
		.attr("width", dimensions.width)
		.attr("height", dimensions.height);
	const svgDefs = svg.append("svg:defs");
	svgDefs
		.selectAll("marker")
		.data(["end"])
		.enter()
		.append("svg:marker")
		.attr("id", String)
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 20)
		.attr("refY", 0)
		.attr("markerWidth", 4)
		.attr("markerHeight", 20)
		.attr("orient", "auto")
		.append("svg:path")
		.attr("d", "M0,-5L10,0L0,5");
	
	const radialGradients = svgDefs
		.append('radialGradient')
		.attr('id', 'gradient1')
	radialGradients 
		.append('stop')
		.attr('offset', '0%')
		.attr('stop-color', "#F3F1F5")
	radialGradients 
		.append('stop')
		.attr('offset', '50%')
		.attr('stop-color', "#DDF5F7")
	radialGradients 
		.attr('id', 'gradient1')
		.append('stop')
		.attr('offset', '80%')
		.attr('stop-color', "#C0D9E5")
	radialGradients 
		.attr('id', 'gradient1')
		.append('stop')
		.attr('offset', '100%')
		.attr('stop-color', "#44679F")
	

	const force = d3
		.forceSimulation(demoObj.dataset.nodes)
		.force("charge", d3.forceManyBody())
		.force("link", d3.forceLink(demoObj.dataset.edges).distance(40))
		.force(
			"center",
			d3
				.forceCenter()
				.x(dimensions.width / 2)
				.y(dimensions.height / 2)
		);

	const edges = svg
		.selectAll("line")
		.data(demoObj.dataset.edges)
		.enter()
		.append("line")
		.style("stroke", "#000")
		.style("stroke-width", 2)
		.attr("marker-end", "url(#end)");

	const nodeGroup = svg
		.selectAll("g")
		.data(demoObj.dataset.nodes)
		.enter()
		.append("g");

	const node = nodeGroup
		.append("circle")
		.attr("r", 9)
		.style("fill", "url(#gradient1)");

	const nodeLabel = nodeGroup
		.append("text")
		.text((d) => d.name)
		.attr("text-anchor", "middle")
		.style("font-family", "monospace")
		.style("font-size", "12px");

	force.on("tick", function () {
		edges
			.attr("x1", (d) => d.source.x)
			.attr("y1", (d) => d.source.y)
			.attr("x2", (d) => d.target.x)
			.attr("y2", (d) => d.target.y);
		node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
		nodeLabel.attr("x", (d) => d.x).attr("y", (d) => d.y + 3);
	});
}

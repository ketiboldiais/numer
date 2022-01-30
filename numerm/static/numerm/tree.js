const iceCreamTree = {
	id: "#iceCreamTree",
	treeData: [
		{ child: "E", parent: "" },
		{ child: "w", parent: "E" },
		{ child: "p", parent: "E" },
		{ child: "s", parent: "w" },
		{ child: "v", parent: "w" },
		{ child: "c", parent: "w" },
		{ child: "s", parent: "p" },
		{ child: "v", parent: "p" },
		{ child: "c", parent: "p" },
	],
};

render(iceCreamTree);

const iceCreamTree1 = {
	id: "#iceCreamTree1",
	treeData: [
		{ child: "E", parent: "" },
		{ child: "s", parent: "E" },
		{ child: "v", parent: "E" },
		{ child: "c", parent: "E" },
		{ child: "w", parent: "s" },
		{ child: "p", parent: "s" },
		{ child: "w", parent: "v" },
		{ child: "p", parent: "v" },
		{ child: "w", parent: "c" },
		{ child: "p", parent: "c" },
	],
};
render(iceCreamTree1);

function render(demoObj) {
	const main = d3.select("body");
	const demoContainer = main.selectAll(demoObj.id);
	demoContainer.classed('demo-container', true);
	const numberOfNodes = demoObj.treeData.length;
	const colors = {
		strokeColor: "#323232",
		nodeStrokeColor: "#323232",
		circleFillColor: d3.scaleOrdinal(d3.schemePastel1),
		textColor: "black",
	};
	const margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20,
	};
	const dimensions = {
		width: numberOfNodes * 30 - margin.left - margin.right,
		height: numberOfNodes * 15 - margin.top - margin.bottom,
		edgeStroke: 1,
		strokeWidth: 1,
		radius: "0.75rem",
		fontSize: "0.85rem",
	};
	// SVG rendering
	const svg = demoContainer
		.append("div")
		.classed("svg-container", true)
		.append("svg")
		.attr("preserveAspectRatio", "xMinYMin meet")
		.attr(
			"viewBox",
			`0 0 ${dimensions.width + margin.left + margin.right} ${
				dimensions.height + margin.top + margin.bottom
			}`
		)
		.classed('svg-content-responsive', true)
		.append("g")
		.attr("transform", `translate(${margin.left}, ${margin.top})`);

	// Data structuring
	const root = d3
		.stratify()
		.id((d) => d.child)
		.parentId((d) => d.parent)(demoObj.treeData);
	const treeStructure = d3.tree().size([dimensions.width, dimensions.height]);
	treeStructure(root);

	// Add links
	const links = svg
		.append("g")
		.selectAll("line")
		.data(root.links())
		.enter()
		.append("line")
		.attr("x1", (d) => d.source.x)
		.attr("y1", (d) => d.source.y)
		.attr("x2", (d) => d.target.x)
		.attr("y2", (d) => d.target.y)
		.attr("stroke", colors.strokeColor)
		.attr("stroke-width", dimensions.edgeStroke);

	// Append circles to group element
	const circles = svg
		.append("g")
		.selectAll("circle")
		.data(root.descendants())
		.enter()
		.append("circle")
		.attr("class", "treeNode")
		.attr("cx", (d) => d.x)
		.attr("cy", (d) => d.y)
		.attr("r", dimensions.radius)
		.attr("fill", (d) => colors.circleFillColor(d.depth))
		.attr("stroke", colors.nodeStrokeColor)
		.attr("stroke-width", dimensions.strokeWidth);

	// Append labels
	const labels = svg
		.append("g")
		.selectAll("text")
		.data(root.descendants())
		.enter()
		.append("text")
		.text((d) => d.id)
		.attr("x", (d) => d.x - 1)
		.attr("y", (d) => d.y + 4)
		.attr("text-anchor", "middle")
		.attr("fill", colors.textColor)
		.style("font-family", "CMU")
		.style("font-style", "italic")
		.style("font-size", dimensions.fontSize);
}

const demo1 = {
	id: "#primeFactor1",
	treeData: [
		{ child: "100", parent: "" },
		{ child: "2", parent: "100" },
		{ child: "50", parent: "100" },
	],
};
render(demo1);

const demo2 = {
	id: "#primeFactor2",
	treeData: [
		{ child: "100", parent: "" },
		{ child: "2", parent: "100" },
		{ child: "50", parent: "100" },
		{ child: "2", parent: "50" },
		{ child: "25", parent: "50" },
	],
};
render(demo2);

const demo3 = {
	id: "#primeFactor3",
	treeData: [
		{ child: "100", parent: "" },
		{ child: "2", parent: "100" },
		{ child: "50", parent: "100" },
		{ child: "2", parent: "50" },
		{ child: "25", parent: "50" },
		{ child: "5", parent: "25" },
		{ child: "5", parent: "25" },
	],
};
render(demo3);

const demo4 = {
	id: "#primeFactor4",
	treeData: [
		{ child: "100", parent: "" },
		{ child: "2", parent: "100" },
		{ child: "50", parent: "100" },
		{ child: "2", parent: "50" },
		{ child: "25", parent: "50" },
		{ child: "5", parent: "25" },
		{ child: "5 ", parent: "25" },
		{ child: "1", parent: "5 " },
		{ child: "5", parent: "5 " },
	],
};
render(demo4);

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


function render(demoObj) {
	const main = d3.select("body");
	const viewPort = document.querySelector('div.content');
	const viewPortWidth = viewPort.clientWidth;
	const viewPortHeight = viewPort.clientHeight;
	const demoContainer = main.selectAll(demoObj.id);
	demoContainer.classed('demo-container', true);
	const numberOfNodes = demoObj.treeData.length;
	const colors = {
		strokeColor: "#323232",
		nodeStrokeColor: "#323232",
		circleFillColor: d3.scaleOrdinal(d3.schemePastel1),
		textColor: "black"
	};
	const margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20,
	};
	const dimensions = {
		width: (numberOfNodes*40) - margin.left - margin.right,
		height: (numberOfNodes*(viewPortHeight/450)) - margin.top - margin.bottom,
		edgeStroke: 1,
		strokeWidth: 1,
		radius: '0.8rem',
		fontSize: '0.85rem'
	};
	// SVG rendering
	const svg = demoContainer
		.append("svg")
		.attr("width", dimensions.width + margin.left + margin.right)
		.attr("height", dimensions.height + margin.top + margin.bottom)
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
		.attr('class', 'treeNode')
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
		.attr("x", (d) => d.x)
		.attr("y", (d) => d.y + 5)
		.attr("text-anchor", "middle")
		.attr('fill', colors.textColor)
		.style('font-family', 'CMU')
		.style("font-size", dimensions.fontSize)
}

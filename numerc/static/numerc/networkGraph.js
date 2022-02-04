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
render(demo1);

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
render(demo2);

const circular1 = {
	id: "#circular1",
	dataset: {
		nodes: [
			{ name: "8" },
			{ name: "2" },
			{ name: "9" },
			{ name: "6" },
			{ name: "3" },
			{ name: "7" },
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 0 },
		],
	},
};
render(circular1);

const circularList1 = {
	id: "#circularList1",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "6" },
			{ name: "9" },
			{ name: "8" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 1 },
		],
	},
};
render(circularList1);

const circularList2 = {
	id: "#circularList2",
	dataset: {
		nodes: [{ name: "1" }, { name: "4" }, { name: "5" }, { name: "2" }],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 0 },
		],
	},
};
render(circularList2);

const circularList3 = {
	id: "#circularList3",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "p", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "5" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 2 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 2 },
		],
	},
};
render(circularList3);

const circularList4 = {
	id: "#circularList4",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "p", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "5" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 2 },
			{ source: 1, target: 3 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 2 },
		],
	},
};
render(circularList4);

const circularList5 = {
	id: "#circularList5",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "p", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "5" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 2 },
			{ source: 1, target: 4 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 2 },
		],
	},
};
render(circularList5);

const circularList6 = {
	id: "#circularList6",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "p", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "5" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 2 },
			{ source: 1, target: 5 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 2 },
		],
	},
};
render(circularList6);

const circularList7 = {
	id: "#circularList7",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "p", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "5" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 2 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 2 },
		],
	},
};
render(circularList7);

const circularInsertion = {
	id: "#circularInsertion",
	dataset: {
		nodes: [
			{ name: "1" },
			{ name: "4" },
			{ name: "3" },
			{ name: "5" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 0 },
		],
	},
};
render(circularInsertion);

const circularInsertHead = {
	id: "#circularInsertHead",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "3" },
			{ name: "5" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 1 },
		],
	},
};
render(circularInsertHead);

const circularInsertHead2 = {
	id: "#circularInsertHead2",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "t", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "3" },
			{ name: "5" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 2 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 6 },
			{ source: 6, target: 2 },
		],
	},
};
render(circularInsertHead2);

const circularInsertHead3 = {
	id: "#circularInsertHead3",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "t", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "3" },
			{ name: "5" },
			{ name: "2" },
		],
		edges: [
			{ source: 0, target: 2 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 6 },
			{ source: 6, target: 1 },
		],
	},
};
render(circularInsertHead3);

const circularInsertHead4 = {
	id: "#circularInsertHead4",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "t", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "3" },
			{ name: "5" },
			{ name: "2", annotate: "foot" },
			{ name: "p", annotate: "ptr" },
		],
		edges: [
			{ source: 0, target: 2 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 6 },
			{ source: 6, target: 2 },
			{ source: 7, target: 6 },
		],
	},
};
render(circularInsertHead4);

const circularInsertHead5 = {
	id: "#circularInsertHead5",
	dataset: {
		nodes: [
			{ name: "h", annotate: "ptr" },
			{ name: "t", annotate: "ptr" },
			{ name: "1", annotate: "head" },
			{ name: "4" },
			{ name: "3" },
			{ name: "5" },
			{ name: "2", annotate: "foot" },
			{ name: "p", annotate: "ptr" },
		],
		edges: [
			{ source: 0, target: 2 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 6 },
			{ source: 6, target: 1 },
			{ source: 7, target: 6 },
		],
	},
};
render(circularInsertHead5);

const deleteCircular1 = {
	id: "#deleteCircular1",
	dataset: {
		nodes: [
			{ name: "4" },
			{ name: "3" },
			{ name: "7" },
			{ name: "9", annotate: 'focus'},
			{ name: "5" },
			{ name: "8", annotate: 'foot'},
			{ name: "t", annotate: 'ptr'},
			{ name: "d", annotate: 'ptr'},
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 0 },
			{ source: 6, target: 2 },
			{ source: 7, target: 3 },
		],
	},
};
render(deleteCircular1);

const deleteCircularHead = {
	id: "#deleteCircularHead",
	dataset: {
		nodes: [
			{ name: "1" },
			{ name: "8", annotate: 'focus'},
			{ name: "3" },
			{ name: "5" },
			{ name: "2" },
			{ name: "7" },
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 0 },
		],
	},
};
render(deleteCircularHead);

const deleteCircularHead1 = {
	id: "#deleteCircularHead1",
	dataset: {
		nodes: [
			{ name: "1" },
			{ name: "8", annotate: 'focus'},
			{ name: "3" },
			{ name: "5" },
			{ name: "2" },
			{ name: "7", annotate: 'foot' },
			{ name: "p", annotate: 'ptr' },
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 5 },
			{ source: 5, target: 1 },
			{ source: 6, target: 5 },
		],
	},
};
render(deleteCircularHead1);

const deleteCircularHead2 = {
	id: "#deleteCircularHead2",
	dataset: {
		nodes: [
			{ name: "8" },
			{ name: "3" },
			{ name: "5" },
			{ name: "2" },
			{ name: "7", annotate: 'foot' },
			{ name: "p", annotate: 'ptr' },
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 0 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 4 },
			{ source: 4, target: 0 },
			{ source: 5, target: 4 },
		],
	},
};
render(deleteCircularHead2);

function render(demoObj) {
	const main = d3.select("body");
	const demoContainer = main.selectAll(demoObj.id);
	demoContainer.classed("demo-container", true);
	const numberOfNodes = demoObj.dataset.nodes.length;
	const margin = {
		top: numberOfNodes * 2,
		right: numberOfNodes * 2,
		bottom: numberOfNodes * 2,
		left: numberOfNodes * 2,
	};
	const dimensions = {
		width: numberOfNodes * 50 - margin.left - margin.right,
		height: numberOfNodes * 32 - margin.top - margin.bottom,
	};
	const svg = demoContainer
		.append("div")
		.classed("svg-container", true)
		.classed("networkGraph", true)
		.append("svg")
		.attr("preserveAspectRatio", "xMinYMin meet")
		.attr(
			"viewBox",
			`0 0 ${dimensions.width + margin.left + margin.right} ${
				dimensions.height + margin.top + margin.bottom
			}`
		)
		.classed("svg-content-responsive", true)
		.append("g")
		.attr("transform", `translate(${margin.left}, ${margin.top})`);
	const svgDefs = svg.append("svg:defs");
	svgDefs
		.selectAll("marker")
		.data(["end"])
		.enter()
		.append("svg:marker")
		.attr("id", String)
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 23)
		.attr("refY", 0)
		.attr("markerWidth", 6)
		.attr("markerHeight", 8)
		.attr("orient", "auto")
		.append("svg:path")
		.attr("d", "M0,-5L10,0L0,5");

	const force = d3
		.forceSimulation(demoObj.dataset.nodes)
		.force("charge", d3.forceManyBody().strength(-100))
		.force("link", d3.forceLink(demoObj.dataset.edges).distance(30))
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
		.style("stroke-width", 1)
		.attr("marker-end", "url(#end)");

	const nodeGroup = svg
		.selectAll("g")
		.data(demoObj.dataset.nodes)
		.enter()
		.append("g");

	const node = nodeGroup
		.append("circle")
		.attr("r", 9)
		.attr("class", (d, i) => {
			if (d.annotate == "ptr") {
				return "pointer";
			}
			if (d.annotate == "focus") {
				return "focus";
			}
			if (i == 0 || d.annotate == "head") {
				return "headNode";
			}
			if (i == demoObj.dataset.nodes.length - 1 || d.annotate == "foot") {
				return "footNode";
			} else {
				return "listNode";
			}
		});

	const nodeLabel = nodeGroup
		.append("text")
		.text((d) => d.name)
		.attr("text-anchor", "middle")
		.style("font-family", "Fira")
		.style("fill", "white")
		.style("font-size", "9px");

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

import * as csmd from "../csmd/csmd.mjs";

const linkedList1 = {
	id: "linkedList1",
	type: "single",
	circular: "false",
	indexed: true,
	nodes: [
		{ data: 3, next: "0x100" },
		{ data: 8, next: "0x200" },
		{ data: 5, next: "0x300" },
		{ data: 1, next: "NULL" },
	],
};
render(linkedList1);

const linkedList2 = {
	id: "linkedList2",
	type: "single",
	circular: "false",
	indexed: true,
	nodes: [
		{ data: 3, next: "0x100", annotate: "h" },
		{ data: 2, next: "0x200" },
		{ data: 7, next: "0x300" },
	],
};
render(linkedList2);

const linkedList3 = {
	id: "linkedList3",
	type: "single",
	circular: "false",
	indexed: false,
	nodes: [{ data: 7, annotate: "h" }, { data: 8 }, { data: 2 }],
};
render(linkedList3);

const linkedList4 = {
	id: "linkedList4",
	type: "single",
	circular: "false",
	indexed: false,
	nodes: [
		{ data: 5, annotate: "t", alone: true },
		{ data: 7, annotate: "h" },
		{ data: 8 },
		{ data: 2 },
	],
};
render(linkedList4);

const linkedList5 = {
	id: "linkedList5",
	type: "single",
	circular: "false",
	indexed: false,
	nodes: [
		{ data: 5, annotate: "t" },
		{ data: 7, annotate: "h" },
		{ data: 8 },
	],
};
render(linkedList5);

const linkedList6 = {
	id: "linkedList6",
	type: "single",
	circular: "false",
	indexed: false,
	nodes: [
		{ data: 5, annotate: "t h" },
		{ data: 7 },
		{ data: 8 },
		{ data: 2 },
	],
};
render(linkedList6);

const linkedList7 = {
	id: "linkedList7",
	type: "single",
	circular: "false",
	indexed: false,
	nodes: [
		{ data: 3, annotate: "t" },
		{ data: 2 },
		{ data: 8 },
		{ data: 1 },
	],
};
render(linkedList7);

const linkedList8 = {
	id: "linkedList8",
	type: "single",
	circular: "false",
	indexed: false,
	nodes: [
		{ data: 3, annotate: "p t" },
		{ data: 2 },
		{ data: 8 },
		{ data: 1 },
	],
};
render(linkedList8);

const linkedList9 = {
	id: "linkedList9",
	type: "single",
	circular: "false",
	indexed: false,
	nodes: [
		{ data: 3, annotate: "p" },
		{ data: 2, annotate: "t" },
		{ data: 8 },
		{ data: 1 },
	],
};
render(linkedList9);

const linkedList10 = {
	id: "linkedList10",
	type: "single",
	circular: "false",
	indexed: false,
	nodes: [
		{ data: 3, annotate: "p", deleted: "true" },
		{ data: 2, annotate: "t" },
		{ data: 8 },
		{ data: 1 },
	],
};
render(linkedList10);

const linkedListPeeking1 = {
	id: "linkedListPeeking1",
	type: "single",
	circular: "false",
	indexed: false,
	nodes: [
		{ data: 3, annotate: "t" },
		{ data: 8 },
		{ data: 1 },
		{ data: 5 },
		{ data: 7 },
	],
};
render(linkedListPeeking1);

const linkedListPeekingIndexed = {
	id: "linkedListPeekingIndexed",
	width: 150,
	bottomPadding: '15%',
	type: "single",
	circular: "false",
	indexed: true,
	nodes: [
		{ data: 3, annotate: "t" },
		{ data: 8 },
		{ data: 1 },
		{ data: 5 },
		{ data: 7 },
	],
};
render(linkedListPeekingIndexed);

function render(obj) {
	const body = d3.select("body");
	const numberOfNodes = obj.nodes.length;
	const linkedList = body.selectAll(`div#${obj.id}`);
	linkedList.classed("demo-container", true);
	const margin = {
		top: 20,
		right: numberOfNodes,
		bottom: 20,
		left: numberOfNodes,
	};
	const dimensions = {
		width: 180 - margin.left - margin.right,
		height: 40 - margin.top - margin.bottom,
	};

	// X Scale
	const xScale = d3
		.scaleBand()
		.domain(d3.range(numberOfNodes))
		.rangeRound([0, 105])
		.paddingInner(0.5);

	const svg = linkedList
		.append("div")
		.classed("svg-container", true)
		.classed("linkedList", true)
		.classed("singleNode", obj.nodes.length == 1)
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
		.attr("transform", `translate(2, ${margin.top})`);
	const svgDefs = svg.append("svg:defs");
	svgDefs
		.selectAll("marker")
		.data(["end"])
		.enter()
		.append("svg:marker")
		.attr("id", String)
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", xScale.bandwidth() - 15)
		.attr("refY", 0)
		.attr("markerWidth", 3)
		.attr("markerHeight", 4)
		.attr("orient", "auto")
		.append("svg:path")
		.attr("d", "M0,-5L10,0L0,5");
	const nodeGroup = svg
		.selectAll("g")
		.data(obj.nodes)
		.enter()
		.append("g")
		.attr("transform", (d, i) => {
			return `translate(${xScale(i)}, 0)`;
		})
		.attr("y", 0);

	const deletedNode = nodeGroup
		.filter((d) => d.deleted)
		.classed("deleted-node", true);

	// Data Field
	const dataField = nodeGroup.append("g").classed("data-field", true);

	// Deleted Node

	const dataFieldRectangle = dataField
		.append("rect")
		.attr("width", xScale.bandwidth())
		.attr("height", 10);
	const dataFieldLabel = dataField
		.append("text")
		.attr("text-anchor", "middle")
		.style("font-size", "7px")
		.style("font-family", "Fira")
		.attr("x", xScale.bandwidth() / 2)
		.attr("y", 7)
		.text((d) => d.data);

	// Indexing
	if (obj.indexed) {
		const index = dataField
			.append("text")
			.attr("text-anchor", "middle")
			.style("font-size", "8px")
			.style("font-family", "CMU")
			.attr("x", xScale.bandwidth() / 1.5)
			.attr("y", 20)
			.text((d, i) => i);
	}

	// Next Field
	const nextField = nodeGroup
		.append("g")
		.classed("next-field", true)
		.attr("transform", `translate(${xScale.bandwidth()}, 0)`);
	const nextFieldRectangle = nextField
		.append("rect")
		.attr("width", xScale.bandwidth() / 2)
		.attr("height", 10);

	// arrow
	const link = nodeGroup
		.filter((d) => !d.alone)
		.append("line")
		.classed("link", true)
		.attr("x1", xScale.bandwidth() + xScale.bandwidth() / numberOfNodes)
		.attr("y1", 5)
		.attr("x2", xScale.bandwidth() + (xScale.bandwidth() - numberOfNodes))
		.attr("y2", 5)
		.attr("marker-end", "url(#end)");

	const annotation = nextField
		.filter((d) => d.annotate)
		.append("text")
		.attr("text-anchor", "middle")
		.style("font-size", "9px")
		.style("font-family", "Fira")
		.attr("x", -xScale.bandwidth() / 4)
		.attr("y", -4)
		.text((d, i) => d.annotate);
}

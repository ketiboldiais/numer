const coinToss = {
	id: "#coinToss",
	data: [
		{ set: [""], name: "Sample space", parent: "" },
		{ set: ["head", "head"], name: "head,head", parent: "Sample space" },
		{ set: ["head", "tails"], name: "head,tails", parent: "Sample space" },
		{ set: ["tails", "tails"], name: "tails,tails", parent: "Sample space" },
		{ set: ["tails", "head"], name: "tails,head", parent: "Sample space" },
	],
};
render(coinToss);

const chooseBall1 = {
	id: "#chooseBall1",
	data: [
		{ set: [""], name: "Options", parent: "" },
		{ set: ["A"], name: "A", parent: "Options" },
		{ set: ["B"], name: "B", parent: "Options" },
		{ set: ["C"], name: "C", parent: "Options" },
		{ set: ["D"], name: "D", parent: "Options" },
	],
};

render(chooseBall1);

function render(obj) {
	const body = d3.select("body");
	const svgContainer = body.selectAll(obj.id);
	svgContainer.classed('demo-container', true);
	const numberOfSets = obj.data.length;
	// const colors = d3.scaleOrdinal(d3.schemePastel1);
	const colors = d3.scaleOrdinal()
		.domain(obj.data)
		.range([ 'rgb(252, 253, 188)', 'rgb(253, 189, 130)'])
	const margin = {
		top: numberOfSets*5,
		right: numberOfSets*5,
		bottom: numberOfSets*5,
		left: numberOfSets*5,
	};
	const dimensions = {
		width: (numberOfSets*100) - margin.left - margin.right,
		height: (numberOfSets*70) - margin.top - margin.bottom,
	};
	const stratify = d3
		.stratify()
		.id((d) => d.name)
		.parentId((d) => d.parent);
	const rootNode = stratify(obj.data).sum((d) => d.set.length);

	const pack = d3.pack().size([dimensions.width, dimensions.height]).padding(10);

	const bubbleData = pack(rootNode).descendants();

	const svg = svgContainer
		.append("div")
		.classed("svg-container", true)
		.classed("bubblePack", true)
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

	const nodes = svg
		.selectAll("g")
		.data(bubbleData)
		.enter()
		.append("g")
		.attr("transform", (d) => `translate(${d.x}, ${d.y})`);

	nodes
		.append("circle")
		.attr("r", (d) => d.r)
		.attr("stroke", "#323232")
		.attr("stroke-width", "1")
		.attr("fill", (d) => colors(d.depth));

	nodes
		.filter((d) => !d.children)
		.append("text")
		.attr("text-anchor", "middle")
		.attr("dy", "0.3em")
		.attr("fill", "black")
		.style("font-size", (d) => d.r / (d.value*1.5))
		.text((d) => d.data.name);

	nodes
		.filter((d) => d.children)
		.append("text")
		.attr("text-anchor", "middle")
		.attr("dy", (d) => -d.r - 10)
		.attr("fill", "#323232")
		.style("font-size", (d) => d.r/d.value)
		.text((d) => d.data.name);
}

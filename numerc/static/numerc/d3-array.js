const queueArray1 = {
	id: "queueArray1",
	indexed: true,
	data: [{ val: 2 }, { val: 3 }, { val: 7 }, { val: 5 }],
};
render(queueArray1);

const staticQueueInsertArray = {
	id: "staticQueueInsertArray",
	indexed: true,
	data: [{ val: "", annotate: "r" }, { val: "" }, { val: "" }],
};
render(staticQueueInsertArray);

const staticQueueInsertArray1 = {
	id: "staticQueueInsertArray1",
	indexed: true,
	data: [{ val: "2", annotate: "r" }, { val: "" }, { val: "" }],
};
render(staticQueueInsertArray1);



function render(obj) {
	const body = d3.select("body");
	const numberOfElements = obj.data.length;
	const arrayContainer = body.selectAll(`div#${obj.id}`);
	arrayContainer.classed("demo-container", true);
	// SVG dimensions
	const margin = {
		top: 10,
		right: 10,
		bottom: 10,
		left: 10,
	};
	const dimensions = {
		width: numberOfElements*30 - margin.left - margin.right,
		height: 60 - margin.top - margin.bottom,
	};
	const xScale = d3
		.scaleBand()
		.domain(d3.range(numberOfElements))
		.rangeRound([0, dimensions.width])
		.paddingInner(0.2);
	const svg = arrayContainer
		.append("div")
		.classed("svg-container", true)
		.classed("ds-array", true)
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

	const rectDimensions = {
		width: xScale.bandwidth(),
		height: xScale.bandwidth(),
	};

	const arrayElementGroup = svg
		.selectAll("g")
		.data(obj.data)
		.enter()
		.append("g")
		.classed("arrayElement", true)
		.classed("emphasis", (d) => d.emphasis != null)
		.attr("transform", (d, i) => {
			return `translate(${xScale(i)}, 0)`;
		})
		.attr("y", 0);

	// Element rectangle
	const frameRect = arrayElementGroup
		.append("rect")
		.attr("width", rectDimensions.width)
		.attr("height", rectDimensions.height)
		.attr("rx", 3)
		.attr("ry", 3);
	const dataField = arrayElementGroup
		.append("text")
		.attr("text-anchor", "middle")
		.style("font-family", "Fira")
		.attr("x", (d, i) => rectDimensions.width / 2)
		.attr("y", rectDimensions.height / 1.5)
		.text((d) => d.val);

	const annotation = arrayElementGroup
		.filter((d) => d.annotate)
		.append("text")
		.classed("annotation", true)
		.attr("text-anchor", "middle")
		.style("font-family", "Fira")
		.attr("x", (d, i) => rectDimensions.width / 2)
		.attr("y", -4)
		.text((d) => d.annotate);

	if (obj.indexed) {
		arrayElementGroup
			.append("text")
			.classed("index", true)
			.attr("text-anchor", "middle")
			.style("font-family", "CMU")
			.attr("x", (d, i) => rectDimensions.width / 2)
			.attr("y", rectDimensions.height + rectDimensions.height / 2)
			.text((d, i) => i);
	}
}

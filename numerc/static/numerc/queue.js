const queueIntro = {
	id: "queueIntro",
	indexed: true,
	data: [{ val: "A" }, { val: "B" }, { val: "C" }, { val: "D" }],
};
render(queueIntro);

const queueFrontRear = {
	id: "queueFrontRear",
	indexed: true,
	data: [
		{ val: "A", annotate: "f" },
		{ val: "B" },
		{ val: "C" },
		{ val: "D", annotate: "r" },
	],
};
render(queueFrontRear);

const queueDequeue = {
	id: "queueDequeue",
	indexed: true,
	data: [
		{ val: "A", annotate: "f", emphasis: "mark" },
		{ val: "B" },
		{ val: "C" },
		{ val: "D", annotate: "r" },
	],
};
render(queueDequeue);

const queueEnqueue = {
	id: "queueEnqueue",
	indexed: true,
	data: [
		{ val: "A", annotate: "f" },
		{ val: "B" },
		{ val: "C" },
		{ val: "D" },
		{ val: "E", annotate: "r", emphasis: "mark" },
	],
};
render(queueEnqueue);

const staticQueue1 = {
	id: "staticQueue1",
	indexed: true,
	data: [{ val: 2 }, { val: 3 }, { val: 7 }, { val: 5 }],
};
render(staticQueue1);

const staticQueueInsert = {
	id: "staticQueueInsert",
	indexed: true,
	data: [{ val: "" }, { val: "" }, { val: "" }, { val: "" }, { val: "" }],
};
render(staticQueueInsert);

const staticQueueInsert1 = {
	id: "staticQueueInsert1",
	indexed: true,
	data: [
		{ val: 2 },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
};
render(staticQueueInsert1);


function render(obj) {
	const body = d3.select("body");
	const numberOfFrames = obj.data.length;
	const queueContainer = body.selectAll(`div#${obj.id}`);
	queueContainer.classed("demo-container", true);
	// SVG dimensions
	const margin = {
		top: 15,
		right: 5,
		bottom: 10,
		left: 5,
	};
	const dimensions = {
		width: 160 - margin.left - margin.right,
		height: 100 - margin.top - margin.bottom,
	};
	// x-axis scale
	const xScale = d3
		.scaleBand()
		.domain(d3.range(numberOfFrames))
		.rangeRound([0, dimensions.width])
		.paddingInner(0.01);
	// create SVG element
	const svg = queueContainer
		.append("div")
		.classed("svg-container", true)
		.classed("queue", true)
		.classed("singleFrame", numberOfFrames == 1)
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
	// g element <==> a single frame
	const queueFrameGroup = svg
		.selectAll("g")
		.data(obj.data)
		.enter()
		.append("g")
		.classed("frame", true)
		.classed("emphasis", (d) => d.emphasis != null)
		.attr("transform", (d, i) => {
			return `translate(${xScale(i)}, 0)`;
		})
		.attr("y", 0);
	// Frame rectangle
	const frameRect = queueFrameGroup
		.append("rect")
		.attr("width", xScale.bandwidth() / 2)
		.attr("height", 40)
		.attr("rx", 3)
		.attr("ry", 3);
	// Data Field
	const dataField = queueFrameGroup
		.append("text")
		.attr("text-anchor", "middle")
		.style("font-family", "Fira")
		.attr("x", (d, i) => xScale.bandwidth() / 4)
		.attr("y", 15)
		.text((d) => d.val);
	// Annotations
	const annotation = queueFrameGroup
		.filter((d) => d.annotate)
		.append("text")
		.classed("annotation", true)
		.attr("text-anchor", "middle")
		.style("font-family", "Fira")
		.attr("x", (d, i) => xScale.bandwidth() / 4)
		.attr("y", -4)
		.text((d) => d.annotate);
	// Index
	if (obj.indexed) {
		queueFrameGroup
			.append("text")
			.classed("index", true)
			.attr("text-anchor", "middle")
			.style("font-family", "CMU")
			.attr("x", (d, i) => xScale.bandwidth() / 4)
			.attr("y", 55)
			.text((d, i) => i);
	}
}

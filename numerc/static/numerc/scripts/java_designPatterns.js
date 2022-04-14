import * as csmd from "../csmd/csmd.mjs";

const builder_flow_chart = new csmd.Digraph({
	id: "builder_flow_chart",
	collide: 40,
	width: 80,
	height: 40,
	svg_width: 400,
	svg_height: 200,
	data: {
		nodes: [
			{ name: "Director" }, // 0
			{ name: "Builder" }, // 1
			{ name: "Concrete Builder" }, // 2
			{ name: "Product" }, // 3
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 2, target: 1 },
			{ source: 2, target: 3 },
		],
	},
}).render();

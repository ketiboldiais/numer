import * as csmd from "../csmd/csmd.mjs";

const sample_graph = new csmd.Digraph({
	id: "sample_graph",
	collide: 40,
	strength: -30,
	data: {
		nodes: [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 3 },
			{ source: 3, target: 0, curve: 'up'},
			{ source: 0, target: 3, curve: 'down' },
			{ source: 1, target: 1 },
		],
	},
}).render();

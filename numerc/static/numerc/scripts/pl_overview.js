import * as csmd from "../csmd.mjs";

const lang_map = new csmd.Digraph({
	id: 'lang_map',
	width: 100,
	collide: 90,
	height: 88,
	svg_width: 665,
	svg_height: 645,
	strength: -700,
	distance: 70,
	data: {
		nodes: [
			{ name: 'source code file' }, // 0
			{ name: 'tokenizer' }, // 1
			{ name: 'parser' }, // 2
			{ name: 'interpreter1' }, // 3 
			{ name: 'compiler1' }, // 4
			{ name: 'transpiler' }, // 5
			{ name: 'compiler2' }, // 6
			{ name: 'assembler' }, // 7
			{ name: 'real CPU' }, // 8
			{ name: 'virual CPU' }, // 9
		],
		edges: [
			{ source: 0, target: 1, label: 'source code'},
			{ source: 4, target: 7, label: 'assembly'},
			{ source: 1, target: 2, label: 'tokens'},
			{ source: 2, target: 3, label: 'AST' },
			{ source: 2, target: 4, label: 'AST'},
			{ source: 3, target: 5, label: 'high-level language'},
			{ source: 5, target: 6, label: 'IR'},
			{ source: 6, target: 7, label: 'assembly'},
			{ source: 7, target: 8, label: 'machine code'},
			{ source: 6, target: 9, label: 'bytecode'},
			{ source: 9, target: 7, label: 'assembly'},
			{ source: 9, target: 8, label: 'machine code'},
			{ source: 4, target: 8, label: 'machine code'},
		],
	},
}).render();

// const packet1 = new csmd.Digraph({
// 	id: 'packet1',
// 	height: 40,
// 	strength: -80,
// 	distance: 80,
// 	svg_width: 310,
// 	svg_height: 210,
// 	data: {
// 		nodes: [
// 			{name: "host1"},
// 			{name: "router"},
// 			{name: "host2"},
// 		],
// 		edges: [
// 			{source: 0, target: 1},
// 			{source: 1, target: 0},

// 			{source: 1, target: 2},
// 			{source: 2, target: 1},
// 		]
// 	}
// }).render();
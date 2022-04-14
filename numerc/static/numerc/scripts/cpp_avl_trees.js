import * as csmd from "../csmd/csmd.mjs";

// const avl_tree_set = new csmd.TreeMap({
// 	id: "avl_tree_set",
// 	data: {
// 		name: "",
// 		children: [
// 			{
// 				name: "trees", value: 15,
// 				children: [
// 					{name: "binary search trees", value: 10},
// 					{name: "non-binary search trees", value: 10},
// 			]},
// 			{
// 				name: "non-trees", value: 15,
// 			}
// 		]
// 	}
// }).render();

const avl_tree_set = new csmd.TangledTree({
	id: "avl_tree_set",
	width: 90,
	height: 30,
	svg_width: 550,
	svg_height: 180,
	data: [
		[{ id: "binary trees" }],
		[{ id: "balanced trees", parents: ["binary trees"] }],
		[
			{ id: "weight-balanced trees", parents: ["balanced trees"] },
			{ id: "depth-balanced trees", parents: ["balanced trees"] },
			{
				id: "height-balanced trees",
				parents: ["balanced trees"],
				focus: "cornflowerblue",
			},
		],
		[
			{
				id: "AVL Trees",
				parents: ["height-balanced trees"],
				focus: "cornflowerblue",
			},
		],
	],
}).render();

const bst1 = new csmd.Tree({
	id: "bst1",
	heightMarked: true,
	narrow: 70,
	edgeLength: 105,
	width: 350,
	height: 250,
	container_width: 80,
	container_height: 35,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b" },
		{ child: "f", parent: "c" },
		{ child: "g", parent: "c", display: "none" },
	],
}).render();

const bst2 = new csmd.Tree({
	id: "bst2",
	heightMarked: true,
	narrow: 70,
	edgeLength: 105,
	width: 350,
	height: 250,
	container_width: 80,
	container_height: 35,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b", display: "none" },
		{ child: "f", parent: "c", display: "none" },
		{ child: "g", parent: "c" },
	],
}).render();

const bst3 = new csmd.Tree({
	id: "bst3",
	heightMarked: true,
	narrow: 70,
	edgeLength: 120,
	width: 350,
	height: 250,
	container_width: 80,
	container_height: 36,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b", display: "none" },
		{ child: "h", parent: "d" },
		{ child: "i", parent: "d", display: "none" },
	],
}).render();

const bst4 = new csmd.Tree({
	id: "bst4",
	heightMarked: true,
	narrow: 70,
	edgeLength: 150,
	width: 350,
	height: 250,
	container_width: 80,
	container_height: 43,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b", display: "none" },
		{ child: "h", parent: "d", display: "none" },
		{ child: "i", parent: "d" },
		{ child: "j", parent: "i" },
		{ child: "k", parent: "i", display: "none" },
	],
}).render();

const bf_mark_bst1 = new csmd.Tree({
	id: "bf_mark_bst1",
	heightMarked: true,
	BFMarked: true,
	narrow: 70,
	edgeLength: 105,
	width: 350,
	height: 250,
	container_width: 80,
	container_height: 35,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b" },
		{ child: "f", parent: "c" },
		{ child: "g", parent: "c", display: "none" },
	],
}).render();

const bf_mark_bst2 = new csmd.Tree({
	id: "bf_mark_bst2",
	BFMarked: true,
	heightMarked: true,
	narrow: 70,
	edgeLength: 105,
	width: 350,
	height: 250,
	container_width: 80,
	container_height: 35,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b", display: "none" },
		{ child: "f", parent: "c", display: "none" },
		{ child: "g", parent: "c" },
	],
}).render();

const bf_mark_bst3 = new csmd.Tree({
	id: "bf_mark_bst3",
	BFMarked: true,
	heightMarked: true,
	narrow: 70,
	edgeLength: 120,
	width: 350,
	height: 250,
	container_width: 80,
	container_height: 36,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b", display: "none" },
		{ child: "h", parent: "d" },
		{ child: "i", parent: "d", display: "none" },
	],
}).render();

const bf_mark_bst4 = new csmd.Tree({
	id: "bf_mark_bst4",
	BFMarked: true,
	heightMarked: true,
	narrow: 70,
	edgeLength: 150,
	width: 350,
	height: 250,
	container_width: 80,
	container_height: 43,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b", display: "none" },
		{ child: "h", parent: "d", display: "none" },
		{ child: "i", parent: "d" },
		{ child: "j", parent: "i" },
		{ child: "k", parent: "i", display: "none" },
	],
}).render();

const rotate1 = new csmd.Tree({
	id: "rotate1",
	narrow: 80,
	width: 350,
	height: 250,
	container_width: 40,
	container_height: 15,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a", display: "none" },
	],
}).render();

const rotate2 = new csmd.Tree({
	id: "rotate2",
	narrow: 80,
	heightMarked: true,
	BFMarked: true,
	width: 350,
	height: 250,
	container_width: 40,
	container_height: 15,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "d", parent: "a", display: "none" },
		{ child: "c", parent: "b" },
		{ child: "e", parent: "b", display: "none" },
	],
}).render();

const rotate3 = new csmd.Tree({
	id: "rotate3",
	width: 250,
	height: 250,
	container_width: 100,
	container_height: 45,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", focus: { fill: "red", text: "white" } },
		{ child: "d", parent: "a", display: "none" },
		{ child: "c", parent: "b" },
		{ child: "e", parent: "b", display: "none" },
	],
}).render();

const rotate4 = new csmd.Tree({
	id: "rotate4",
	width: 250,
	height: 250,
	container_width: 100,
	container_height: 45,
	data: [
		{ child: "b", parent: "", focus: { fill: "red", text: "white" } },
		{ child: "c", parent: "b" },
		{ child: "a", parent: "b" },
	],
}).render();

const rr_many_nodes = new csmd.Tree({
	id: "rr_many_nodes",
	BFMarked: true,
	narrow: 40,
	edgeLength: 100,
	width: 250,
	height: 250,
	container_width: 40,
	container_height: 25,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a"},
		{ child: "d", parent: "a", type: 'subtree'},
		{ child: "c", parent: "b"},
		{ child: "e", parent: "b", type: 'subtree'},
		{ child: "f", parent: "c", type: 'subtree'},
		{ child: "g", parent: "c", type: 'subtree'},
	],
}).render();

const rr_many_nodes2 = new csmd.Tree({
	id: "rr_many_nodes2",
	BFMarked: true,
	narrow: 40,
	edgeLength: 100,
	width: 250,
	height: 250,
	container_width: 40,
	container_height: 25,
	data: [
		{ child: "b", parent: "" },
		{ child: "c", parent: "b"},
		{ child: "a", parent: "b"},
		{ child: "e", parent: "a", type: 'subtree'},
		{ child: "d", parent: "a", type: 'subtree'},
		{ child: "f", parent: "c", type: 'subtree'},
		{ child: "g", parent: "c", type: 'subtree'},
	],
}).render();

const imb1 = new csmd.Tree({
	id: "imb1",
	narrow: 20,
	edgeLength: 105,
	width: 250,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "1", parent: "a", display: "none" },
		{ child: "c", parent: "b" },
		{ child: "2", parent: "b", display: "none" },
	],
}).render();

const imb2 = new csmd.Tree({
	id: "imb2",
	narrow: 20,
	edgeLength: 105,
	width: 250,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{ child: "a", parent: "" },
		{ child: "1", parent: "a", display: "none" },
		{ child: "b", parent: "a" },
		{ child: "2", parent: "b", display: "none" },
		{ child: "c", parent: "b" },
	],
}).render();

const imb3 = new csmd.Tree({
	id: "imb3",
	narrow: 20,
	edgeLength: 105,
	width: 250,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{ child: "a", parent: "" },
		{ child: "1", parent: "a", display: "none" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "b" },
		{ child: "2", parent: "b", display: "none" },
	],
}).render();

const imb4 = new csmd.Tree({
	id: "imb4",
	narrow: 20,
	edgeLength: 105,
	width: 250,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "1", parent: "a", display: "none" },
		{ child: "2", parent: "b", display: "none" },
		{ child: "c", parent: "b" },
	],
}).render();

const lr1 = new csmd.Tree({
	id: "lr1",
	narrow: 20,
	edgeLength: 105,
	width: 250,
	height: 250,
	container_width: 30,
	container_height: 20,
	data: [
		{ child: "a", parent: "" },
		{ child: "1", parent: "a", display: "none" },
		{ child: "b", parent: "a" },
		{ child: "2", parent: "b", display: "none" },
		{ child: "c", parent: "b" },
	],
}).render();

const lr2 = new csmd.Tree({
	id: "lr2",
	width: 250,
	height: 250,
	container_width: 100,
	container_height: 45,
	data: [
		{ child: "a", parent: "" },
		{ child: "d", parent: "a", display: "none" },
		{ child: "b", parent: "a", focus: { fill: "red", text: "white" } },
		{ child: "e", parent: "b", display: "none" },
		{ child: "c", parent: "b" },
	],
}).render();

const lr3 = new csmd.Tree({
	id: "lr3",
	width: 250,
	height: 250,
	container_width: 100,
	container_height: 45,
	data: [
		{ child: "b", parent: "", focus: { fill: "red", text: "white" } },
		{ child: "a", parent: "b" },
		{ child: "c", parent: "b" },
	],
}).render();

const rl1 = new csmd.Tree({
	id: "rl1",
	narrow: 20,
	edgeLength: 105,
	width: 250,
	height: 250,
	container_width: 30,
	container_height: 20,
	data: [
		{ child: "a", parent: "" },
		{ child: "1", parent: "a", display: "none" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "b" },
		{ child: "2", parent: "b", display: "none" },
	],
}).render();

const rl2 = new csmd.Tree({
	id: "rl2",
	width: 200,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{ child: "a", parent: "" },
		{ child: "1", parent: "a", display: "none" },
		{ child: "b", parent: "a" },
		{
			child: "c",
			parent: "b",
			focus: { fill: "red", text: "white", stroke: "firebrick" },
		},
		{ child: "2", parent: "b", display: "none" },
	],
}).render();

const rl3 = new csmd.Tree({
	id: "rl3",
	width: 200,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{ child: "a", parent: "" },
		{ child: "1", parent: "a", display: "none" },
		{
			child: "c",
			parent: "a",
			focus: { fill: "red", text: "white", stroke: "firebrick" },
		},
		{ child: "2", parent: "c", display: "none" },
		{ child: "b", parent: "c" },
	],
}).render();

const rl4 = new csmd.Tree({
	id: "rl4",
	width: 200,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{
			child: "c",
			parent: "",
			focus: { fill: "red", text: "white", stroke: "firebrick" },
		},
		{ child: "a", parent: "c" },
		{ child: "b", parent: "c" },
	],
}).render();

const ll1 = new csmd.Tree({
	id: "ll1",
	narrow: 20,
	edgeLength: 105,
	width: 250,
	height: 250,
	container_width: 30,
	container_height: 20,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "1", parent: "a", display: "none" },
		{ child: "2", parent: "b", display: "none" },
		{ child: "c", parent: "b" },
	],
}).render();

const ll2 = new csmd.Tree({
	id: "ll2",
	width: 200,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "1", parent: "a", display: "none" },
		{ child: "2", parent: "b", display: "none" },
		{
			child: "c",
			parent: "b",
			focus: { fill: "red", text: "white", stroke: "firebrick" },
		},
	],
}).render();

const ll3 = new csmd.Tree({
	id: "ll3",
	width: 200,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{ child: "a", parent: "" },
		{
			child: "c",
			parent: "a",
			focus: { fill: "red", text: "white", stroke: "firebrick" },
		},
		{ child: "1", parent: "a", display: "none" },
		{ child: "b", parent: "c" },
		{ child: "2", parent: "c", display: "none" },
	],
}).render();

const ll4 = new csmd.Tree({
	id: "ll4",
	width: 200,
	height: 250,
	container_width: 100,
	container_height: 60,
	data: [
		{
			child: "c",
			parent: "",
			focus: { fill: "red", text: "white", stroke: "firebrick" },
		},
		{ child: "b", parent: "c" },
		{ child: "a", parent: "c" },
	],
}).render();


const node3t1 = new csmd.Tree({
	id: "node3t1",
	BFMarked: true,
	edgeLength: 105,
	width: 150,
	height: 180,
	container_width: 100,
	container_height: 95,
	data: [
		{ child: "a", parent: "", label: 'none' },
		{ child: "b", parent: "a", label: 'none' },
		{ child: "1", parent: "a", display: 'none'},
		{ child: "c", parent: "b", label: 'none' },
		{ child: "2", parent: "b", display: 'none'},
	],
}).render();

const node3t2 = new csmd.Tree({
	id: "node3t2",
	BFMarked: true,
	edgeLength: 105,
	width: 150,
	height: 180,
	container_width: 100,
	container_height: 95,
	data: [
		{ child: "a", parent: "", label: 'none' },
		{ child: "1", parent: "a", display: "none" },
		{ child: "b", parent: "a", label: 'none' },
		{ child: "2", parent: "b", display: "none" },
		{ child: "c", parent: "b", label: 'none' },
	],
}).render();

const node3t3 = new csmd.Tree({
	id: "node3t3",
	BFMarked: true,
	edgeLength: 105,
	width: 150,
	height: 180,
	container_width: 100,
	container_height: 95,
	data: [
		{ child: "a", parent: "", label: 'none' },
		{ child: "1", parent: "a", display: "none" },
		{ child: "b", parent: "a", label: 'none' },
		{ child: "c", parent: "b", label: 'none' },
		{ child: "2", parent: "b", display: "none" },
	],
}).render();

const node3t4 = new csmd.Tree({
	id: "node3t4",
	BFMarked: true,
	edgeLength: 105,
	width: 150,
	height: 180,
	container_width: 100,
	container_height: 95,
	data: [
		{ child: "a", parent: "", label: 'none' },
		{ child: "b", parent: "a", label: 'none' },
		{ child: "1", parent: "a", display: "none" },
		{ child: "2", parent: "b", display: "none" },
		{ child: "c", parent: "b", label: 'none' },
	],
}).render();

const node3t5 = new csmd.Tree({
	id: "node3t5",
	BFMarked: true,
	width: 150,
	height: 180,
	container_width: 100,
	container_height: 95,
	data: [
		{ child: "a", parent: "", label: 'none'},
		{ child: "b", parent: "a", label: 'none' },
		{ child: "c", parent: "a", label: 'none' },
	],
}).render();

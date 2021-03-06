import * as csmd from "../csmd/csmd.mjs";

const tree_intro = new csmd.Tree({
	id: "introTree",
	width: 500,
	height: 400,
	container_height: 35,
	leveled: "true",
	heightMarked: "true",
	data: [
		{ child: "1", parent: "", annotate: "root" },
		{ child: "2", parent: "1", edgeLabel: "1" },
		{ child: "3", parent: "1", edgeLabel: "2" },
		{ child: "4", parent: "1", edgeLabel: "3" },
		{ child: "7", parent: "4", edgeLabel: "4" },
		{ child: "8", parent: "4", edgeLabel: "5" },
		{ child: "12", parent: "8", edgeLabel: "6" },
		{ child: "14", parent: "12", edgeLabel: "7" },
		{ child: "15", parent: "12", edgeLabel: "8" },
		{ child: "9", parent: "4", edgeLabel: "9" },
		{ child: "5", parent: "2", edgeLabel: "10" },
		{ child: "6", parent: "2", edgeLabel: "11" },
		{ child: "10", parent: "6", edgeLabel: "12" },
		{ child: "11", parent: "6", edgeLabel: "13" },
		{ child: "13", parent: "10", edgeLabel: "14" },
	],
}).render();

const binaryTreeIntro = new csmd.Tree({
	id: "binaryTreeIntro",
	width: 400,
	height: 300,
	container_width: 60,
	container_height: 45,
	data: [
		{ child: "1", parent: "", annotate: "root" },
		{ child: "2", parent: "1", annotate: "left child" },
		{ child: "3", parent: "1", annotate: "right child" },
		{ child: "4", parent: "2" },
		{ child: "5", parent: "2" },
		{ child: "6", parent: "3" },
		{ child: "7", parent: "3" },
		{ child: "8", parent: "4" },
		{ child: "9", parent: "4" },
		{ child: "10", parent: "5" },
		{ child: "11", parent: "5" },
		{ child: "12", parent: "6" },
		{ child: "13", parent: "6" },
		{ child: "14", parent: "7" },
		{ child: "15", parent: "7" },
	],
}).render();

const skewLeftBinaryTree = new csmd.Tree({
	id: "skewLeftBinaryTree",
	width: 450,
	height: 200,
	container_height: 20,
	data: [
		{ child: "1", parent: "" },
		{ child: "2", parent: "1" },
		{ child: "3", parent: "1", display: "none" },
		{ child: "4", parent: "2" },
		{ child: "5", parent: "2", display: "none" },
	],
}).render();

const linearBinaryTree = new csmd.Tree({
	id: "linearBinaryTree",
	width: 450,
	height: 200,
	container_height: 25,
	data: [
		{ child: "1", parent: "" },
		{ child: "2", parent: "1", display: "none" },
		{ child: "3", parent: "1" },
		{ child: "4", parent: "1", display: "none" },
	],
}).render();

const skewRightBinaryTree = new csmd.Tree({
	id: "skewRightBinaryTree",
	width: 450,
	height: 200,
	container_height: 20,
	data: [
		{ child: "1", parent: "" },
		{ child: "2", parent: "1", display: "none" },
		{ child: "3", parent: "1" },
		{ child: "4", parent: "3", display: "none" },
		{ child: "5", parent: "3" },
	],
}).render();

const tree_path_0 = new csmd.Tree({
	id: "tree_path_0",
	width: 350,
	height: 350,
	container_width: 50,
	container_height: 41,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
		{ child: "H", parent: "D" },
		{ child: "I", parent: "D" },
		{ child: "J", parent: "E" },
		{ child: "K", parent: "E" },
		{ child: "L", parent: "F" },
		{ child: "M", parent: "F" },
		{ child: "O", parent: "G" },
		{ child: "P", parent: "G" },
	],
}).render();

const tree_path_1 = new csmd.Tree({
	id: "tree_path_1",
	width: 350,
	height: 350,
	container_width: 50,
	container_height: 41,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A", path: "red" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C", path: "red" },
		{ child: "G", parent: "C" },
		{ child: "H", parent: "D" },
		{ child: "I", parent: "D" },
		{ child: "J", parent: "E" },
		{ child: "K", parent: "E" },
		{ child: "L", parent: "F" },
		{ child: "M", parent: "F" },
		{ child: "O", parent: "G" },
		{ child: "P", parent: "G" },
	],
}).render();

const tree_path_2 = new csmd.Tree({
	id: "tree_path_2",
	width: 350,
	height: 350,
	container_width: 50,
	container_height: 41,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A", path: "red" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B", path: "red" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
		{ child: "H", parent: "D" },
		{ child: "I", parent: "D" },
		{ child: "J", parent: "E" },
		{ child: "K", parent: "E", path: "red" },
		{ child: "L", parent: "F" },
		{ child: "M", parent: "F" },
		{ child: "O", parent: "G" },
		{ child: "P", parent: "G" },
	],
}).render();

const tree_depth_0 = new csmd.Tree({
	id: "tree_depth_0",
	depth: "mark",
	width: 350,
	height: 350,
	container_width: 50,
	container_height: 41,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
		{ child: "H", parent: "D" },
		{ child: "I", parent: "D" },
		{ child: "J", parent: "E" },
		{ child: "K", parent: "E" },
		{ child: "L", parent: "F" },
		{ child: "M", parent: "F" },
		{ child: "O", parent: "G" },
		{ child: "P", parent: "G" },
	],
}).render();

const tree_height_0 = new csmd.Tree({
	id: "tree_height_0",
	heightMarked: true,
	width: 350,
	height: 350,
	container_width: 45,
	container_height: 37,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
		{ child: "H", parent: "D" },
		{ child: "I", parent: "D" },
		{ child: "J", parent: "E" },
		{ child: "K", parent: "E" },
		{ child: "L", parent: "F" },
		{ child: "M", parent: "F" },
		{ child: "O", parent: "G" },
		{ child: "P", parent: "G" },
	],
}).render();

const parent_child_tree = new csmd.Tree({
	id: "parent_child_tree",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 20,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "a" },
		{ child: "e", parent: "b" },
		{ child: "f", parent: "b" },
	],
}).render();

const tree_order_3 = new csmd.Tree({
	id: "tree_order_3",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 15,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
}).render();

const tree_order_5 = new csmd.Tree({
	id: "tree_order_5",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 15,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "d", parent: "b" },
	],
}).render();

const tree_order_8 = new csmd.Tree({
	id: "tree_order_8",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 30,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "c" },
		{ child: "f", parent: "c" },
		{ child: "g", parent: "d" },
		{ child: "h", parent: "d" },
		{ child: "i", parent: "e" },
		{ child: "j", parent: "e" },
		{ child: "k", parent: "f" },
		{ child: "l", parent: "g" },
		{ child: "m", parent: "h" },
		{ child: "n", parent: "h" },
		{ child: "l", parent: "h" },
	],
}).render();

const foliage_count = new csmd.Tree({
	id: "foliage_count",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 30,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "a" },
		{ child: "e", parent: "b" },
		{ child: "f", parent: "c" },
		{ child: "g", parent: "d" },
		{ child: "h", parent: "d" },
		{ child: "i", parent: "b" },
		{ child: "j", parent: "f" },
		{ child: "k", parent: "f" },
		{ child: "l", parent: "g" },
		{ child: "m", parent: "i" },
		{ child: "n", parent: "i" },
		{ child: "o", parent: "l" },
		{ child: "p", parent: "l" },
	],
}).render();

const tree_ancestor = new csmd.Tree({
	id: "tree_ancestor",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 35,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b" },
		{ child: "f", parent: "c" },
		{ child: "g", parent: "c" },
		{ child: "h", parent: "d" },
		{ child: "i", parent: "d" },
		{ child: "j", parent: "e" },
		{ child: "k", parent: "e", display: "none" },
		{ child: "l", parent: "f" },
		{ child: "m", parent: "f", display: "none" },
	],
}).render();

const tree_strict_descendants = new csmd.Tree({
	id: "tree_strict_descendants",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a", display: "none" },
		{ child: "d", parent: "b", path: true },
		{ child: "e", parent: "b", path: true },
		{ child: "h", parent: "d", path: true },
		{ child: "i", parent: "d", path: true },
		{ child: "j", parent: "e", path: true },
		{ child: "k", parent: "e", display: "none" },
	],
}).render();

const tree_strict_ancestors = new csmd.Tree({
	id: "tree_strict_ancestors",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", path: true },
		{ child: "c", parent: "a", display: "none" },
		{ child: "d", parent: "b", path: true },
		{ child: "e", parent: "b" },
		{ child: "h", parent: "d", path: true },
		{ child: "i", parent: "d" },
		{ child: "j", parent: "e" },
		{ child: "k", parent: "e", display: "none" },
	],
}).render();

const tree_siblings = new csmd.Tree({
	id: "tree_siblings",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b" },
		{ child: "h", parent: "d" },
		{ child: "i", parent: "d" },
		{ child: "j", parent: "e" },
		{ child: "k", parent: "e", display: "none" },
	],
}).render();

const node_degree = new csmd.Tree({
	id: "node_degree",
	width: 350,
	height: 285,
	container_width: 50,
	container_height: 45,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "a" },
		{ child: "e", parent: "a" },
		{ child: "f", parent: "b" },
		{ child: "g", parent: "b" },
		{ child: "h", parent: "b" },
		{ child: "i", parent: "j" },
		{ child: "j", parent: "c" },
		{ child: "k", parent: "c" },
		{ child: "l", parent: "j" },
		{ child: "m", parent: "k" },
		{ child: "n", parent: "d" },
		{ child: "o", parent: "e" },
		{ child: "p", parent: "e" },
	],
}).render();

const k_equals_2 = new csmd.Tree({
	id: "k_equals_2",
	width: 350,
	height: 285,
	container_width: 50,
	container_height: 41,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b" },
		{ child: "f", parent: "c" },
		{ child: "g", parent: "c" },
		{ child: "h", parent: "d" },
		{ child: "i", parent: "d" },
		{ child: "j", parent: "e" },
		{ child: "k", parent: "e", display: "none" },
		{ child: "l", parent: "f" },
		{ child: "m", parent: "f" },
		{ child: "n", parent: "g" },
		{ child: "o", parent: "g", display: "none" },
	],
}).render();

const k_equals_4 = new csmd.Tree({
	id: "k_equals_4",
	width: 350,
	height: 285,
	container_width: 50,
	container_height: 35,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "a" },
		{ child: "e", parent: "a" },
		{ child: "f", parent: "c" },
		{ child: "g", parent: "c" },
		{ child: "h", parent: "c" },
		{ child: "i", parent: "c" },
		{ child: "j", parent: "e" },
		{ child: "k", parent: "e", display: "none" },
		{ child: "l", parent: "f" },
		{ child: "m", parent: "f" },
		{ child: "n", parent: "f" },
	],
}).render();

const abt1 = new csmd.Tree({
	id: "abt1",
	width: 350,
	height: 200,
	container_width: 50,
	container_height: 30,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
	],
}).render();

const abt1_array = new csmd.Sequence({
	id: "abt1_array",
	indexed: true,
	data: [
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const abt1_array_level1 = new csmd.Sequence({
	id: "abt1_array_level1",
	indexed: true,
	data: [
		{ val: "A" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const abt1_array_level2 = new csmd.Sequence({
	id: "abt1_array_level2",
	indexed: true,
	data: [
		{ val: "A" },
		{ val: "B" },
		{ val: "C" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const abt1_array_level3 = new csmd.Sequence({
	id: "abt1_array_level3",
	indexed: true,
	data: [
		{ val: "A" },
		{ val: "B" },
		{ val: "C" },
		{ val: "D" },
		{ val: "E" },
		{ val: "F" },
		{ val: "G" },
	],
}).render();

const lbt1 = new csmd.Tree({
	id: "lbt1",
	width: 350,
	height: 200,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
	],
}).render();

const perfect_abt1 = new csmd.Tree({
	id: "perfect_abt1",
	width: 350,
	height: 200,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
	],
}).render();

const perfect_abt1_array = new csmd.Sequence({
	id: "perfect_abt1_array",
	indexed: true,
	data: [
		{ val: "A" },
		{ val: "B" },
		{ val: "C" },
		{ val: "D" },
		{ val: "E" },
		{ val: "F" },
		{ val: "G" },
	],
}).render();

const complete_abt1 = new csmd.Tree({
	id: "complete_abt1",
	width: 350,
	height: 200,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C", display: "none" },
	],
}).render();

const complete_abt1_array = new csmd.Sequence({
	id: "complete_abt1_array",
	indexed: true,
	data: [
		{ val: "A" },
		{ val: "B" },
		{ val: "C" },
		{ val: "D" },
		{ val: "E" },
		{ val: "F" },
		{ val: "" },
	],
}).render();

const incomplete_abt1 = new csmd.Tree({
	id: "incomplete_abt1",
	width: 350,
	height: 200,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B", display: "none" },
		{ child: "F", parent: "C", display: "none" },
		{ child: "G", parent: "C" },
	],
}).render();

const incomplete_abt1_array = new csmd.Sequence({
	id: "incomplete_abt1_array",
	indexed: true,
	data: [
		{ val: "A" },
		{ val: "B" },
		{ val: "C" },
		{ val: "D" },
		{ val: "" },
		{ val: "" },
		{ val: "G" },
	],
}).render();

const _3node_preorder = new csmd.Tree({
	id: "_3node_preorder",
	width: 200,
	height: 105,
	container_width: 30,
	container_height: 16,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
}).render();

const _3node_preorder_visit = new csmd.Tree({
	id: "_3node_preorder_visit",
	width: 200,
	height: 105,
	container_width: 30,
	container_height: 16,
	data: [
		{ child: "a", parent: "", focus: { fill: "salmon" }, annotate: 1 },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
}).render();

const _3node_preorder_left_subtree = new csmd.Tree({
	id: "_3node_preorder_left_subtree",
	width: 200,
	height: 105,
	container_width: 30,
	container_height: 16,
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", focus: { fill: "salmon" }, annotate: 2 },
		{ child: "c", parent: "a" },
	],
}).render();

const _3node_preorder_right_subtree = new csmd.Tree({
	id: "_3node_preorder_right_subtree",
	width: 200,
	height: 105,
	container_width: 30,
	container_height: 16,
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", annotate: 2 },
		{ child: "c", parent: "a", focus: { fill: "salmon" }, annotate: 3 },
	],
}).render();

const _2nodeleft_preorder = new csmd.Tree({
	id: "_2nodeleft_preorder",
	width: 200,
	height: 105,
	container_width: 30,
	container_height: 16,
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", annotate: 2 },
		{ child: "c", parent: "a", display: "none" },
	],
}).render();

const _2noderight_preorder = new csmd.Tree({
	id: "_2noderight_preorder",
	width: 200,
	height: 105,
	container_width: 30,
	container_height: 16,
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", display: "none" },
		{ child: "c", parent: "a", annotate: 2 },
	],
}).render();

const _3node_inorder = new csmd.Tree({
	id: "_3node_inorder",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
}).render();

const _3node_inorder_visit = new csmd.Tree({
	id: "_3node_inorder_visit",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", focus: "salmon", annotate: 1 },
		{ child: "c", parent: "a" },
	],
}).render();

const _3node_inorder_visit_root = new csmd.Tree({
	id: "_3node_inorder_visit_root",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", focus: "salmon", annotate: 2 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a" },
	],
}).render();

const _3node_inorder_visit_right = new csmd.Tree({
	id: "_3node_inorder_visit_right",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", annotate: 2 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", focus: "salmon", annotate: 3 },
	],
}).render();

const _2nodeleft_inorder = new csmd.Tree({
	id: "_2nodeleft_inorder",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", annotate: 2 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", display: "none" },
	],
}).render();

const _2noderight_inorder = new csmd.Tree({
	id: "_2noderight_inorder",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", display: "none" },
		{ child: "c", parent: "a", annotate: 2 },
	],
}).render();

const _3node_post_order_tree = new csmd.Tree({
	id: "_3node_post_order_tree",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
}).render();

const _3node_post_order_tree_visit_left = new csmd.Tree({
	id: "_3node_post_order_tree_visit_left",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", focus: "salmon", annotate: 1 },
		{ child: "c", parent: "a" },
	],
}).render();

const _3node_post_order_tree_visit_right = new csmd.Tree({
	id: "_3node_post_order_tree_visit_right",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", focus: "salmon", annotate: 2 },
	],
}).render();

const _3node_post_order_tree_visit_root = new csmd.Tree({
	id: "_3node_post_order_tree_visit_root",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", focus: "salmon", annotate: 3 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", annotate: 2 },
	],
}).render();

const left_skew_post_order = new csmd.Tree({
	id: "left_skew_post_order",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", annotate: 2 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", display: "none" },
	],
}).render();

const right_skew_post_order = new csmd.Tree({
	id: "right_skew_post_order",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", annotate: 2 },
		{ child: "b", parent: "a", display: "none" },
		{ child: "c", parent: "a", annotate: 1 },
	],
}).render();

const genverse_gen1 = new csmd.Tree({
	id: "genverse_gen1",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", focus: "salmon", annotate: 1 },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
}).render();

const genverse_gen2_left = new csmd.Tree({
	id: "genverse_gen2_left",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", focus: "salmon", annotate: 2 },
		{ child: "c", parent: "a" },
	],
}).render();

const genverse_gen2_right = new csmd.Tree({
	id: "genverse_gen2_right",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", annotate: 2 },
		{ child: "c", parent: "a", focus: "salmon", annotate: 3 },
	],
}).render();

const genverse_gen2_skew_left = new csmd.Tree({
	id: "genverse_gen2_skew_left",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", annotate: 2 },
		{ child: "c", parent: "a", display: "none" },
	],
}).render();

const genverse_gen2_skew_right = new csmd.Tree({
	id: "genverse_gen2_skew_right",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", display: "none" },
		{ child: "c", parent: "a", annotate: 2 },
	],
}).render();

const big_traverse = new csmd.Tree({
	id: "big_traverse",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b" },
		{ child: "f", parent: "c" },
		{ child: "g", parent: "c" },
	],
}).render();

const big_traverse_subtree = new csmd.Tree({
	id: "big_traverse_subtree",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", focus: "#D7E9F7" },
		{ child: "c", parent: "a", focus: "#D9D7F1" },
		{ child: "d", parent: "b", focus: "#D7E9F7" },
		{ child: "e", parent: "b", focus: "#D7E9F7" },
		{ child: "f", parent: "c", focus: "#D9D7F1" },
		{ child: "g", parent: "c", focus: "#D9D7F1" },
	],
}).render();

const big_traverse_subtree_preorder = new csmd.Tree({
	id: "big_traverse_subtree_preorder",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", focus: "#D7E9F7", annotate: 2 },
		{ child: "c", parent: "a", focus: "#D9D7F1", annotate: 5 },
		{ child: "d", parent: "b", focus: "#D7E9F7", annotate: 3 },
		{ child: "e", parent: "b", focus: "#D7E9F7", annotate: 4 },
		{ child: "f", parent: "c", focus: "#D9D7F1", annotate: 6 },
		{ child: "g", parent: "c", focus: "#D9D7F1", annotate: 7 },
	],
}).render();

const big_traverse_subtree_inorder = new csmd.Tree({
	id: "big_traverse_subtree_inorder",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "a", parent: "", annotate: 4 },
		{ child: "b", parent: "a", focus: "#D7E9F7", annotate: 2 },
		{ child: "c", parent: "a", focus: "#D9D7F1", annotate: 6 },
		{ child: "d", parent: "b", focus: "#D7E9F7", annotate: 1 },
		{ child: "e", parent: "b", focus: "#D7E9F7", annotate: 3 },
		{ child: "f", parent: "c", focus: "#D9D7F1", annotate: 5 },
		{ child: "g", parent: "c", focus: "#D9D7F1", annotate: 7 },
	],
}).render();

const big_traverse_subtree_postorder = new csmd.Tree({
	id: "big_traverse_subtree_postorder",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "a", parent: "", annotate: 7 },
		{ child: "b", parent: "a", focus: "#D7E9F7", annotate: 3 },
		{ child: "c", parent: "a", focus: "#D9D7F1", annotate: 6 },
		{ child: "d", parent: "b", focus: "#D7E9F7", annotate: 1 },
		{ child: "e", parent: "b", focus: "#D7E9F7", annotate: 2 },
		{ child: "f", parent: "c", focus: "#D9D7F1", annotate: 4 },
		{ child: "g", parent: "c", focus: "#D9D7F1", annotate: 5 },
	],
}).render();

const big_traverse_subtree_generational = new csmd.Tree({
	id: "big_traverse_subtree_generational",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", focus: "#D7E9F7", annotate: 2 },
		{ child: "c", parent: "a", focus: "#D9D7F1", annotate: 3 },
		{ child: "d", parent: "b", focus: "#D7E9F7", annotate: 4 },
		{ child: "e", parent: "b", focus: "#D7E9F7", annotate: 5 },
		{ child: "f", parent: "c", focus: "#D9D7F1", annotate: 6 },
		{ child: "g", parent: "c", focus: "#D9D7F1", annotate: 7 },
	],
}).render();

const tree_b1 = new csmd.Tree({
	id: "tree_b1",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "5", parent: "" },
		{ child: "8", parent: "5" },
		{ child: "6", parent: "5" },
		{ child: "3", parent: "6" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8" },
		{ child: "4", parent: "9" },
		{ child: "2", parent: "9" },
	],
}).render();

const tree_b1_queue = new csmd.Queue({
	id: "tree_b1_queue",
	indexed: true,
	data: [
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const tree_b1_queue_with_root = new csmd.Queue({
	id: "tree_b1_queue_with_root",
	indexed: true,
	data: [
		{ val: "F0" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const tree_b1_1 = new csmd.Tree({
	id: "tree_b1_1",
	width: 200,
	height: 200,
	container_height: 15,
	data: [
		{ child: "5", parent: "", annotate: "F0" },
		{ child: "8", parent: "5", display: "none" },
		{ child: "6", parent: "5", display: "none" },
		{ child: "3", parent: "6", display: "none" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", display: "none" },
		{ child: "4", parent: "9", display: "none" },
		{ child: "2", parent: "9", display: "none" },
	],
}).render();

const tree_b1_1_p = new csmd.Tree({
	id: "tree_b1_1_p",
	width: 200,
	height: 200,
	container_height: 15,
	data: [
		{ child: "5", parent: "", annotate: "F0 p" },
		{ child: "8", parent: "5", display: "none" },
		{ child: "6", parent: "5", display: "none" },
		{ child: "3", parent: "6", display: "none" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", display: "none" },
		{ child: "4", parent: "9", display: "none" },
		{ child: "2", parent: "9", display: "none" },
	],
}).render();

const tree_b1_queue_with_root_dequeue = new csmd.Queue({
	id: "tree_b1_queue_with_root_dequeue",
	indexed: true,

	data: [
		{ val: "F0", emphasis: "red", annotate: "p" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const tree_b1_queue_with_2 = new csmd.Tree({
	id: "tree_b1_queue_with_2",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "20%",
	data: [
		{ child: "5", parent: "", annotate: "F0 p" },
		{ child: "8", parent: "5", annotate: "F1 t" },
		{ child: "6", parent: "5", display: "none" },
		{ child: "3", parent: "6", display: "none" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", display: "none" },
		{ child: "4", parent: "9", display: "none" },
		{ child: "2", parent: "9", display: "none" },
	],
}).render();

const tree_b1_2_p = new csmd.Queue({
	id: "tree_b1_2_p",
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red" },
		{ val: "F1", annotate: "t" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const tree_b1_queue_with_3 = new csmd.Tree({
	id: "tree_b1_queue_with_3",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "20%",
	data: [
		{ child: "5", parent: "", annotate: "F0 p" },
		{ child: "8", parent: "5", annotate: "F1" },
		{ child: "6", parent: "5", annotate: "F2 t" },
		{ child: "3", parent: "6", display: "none" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", display: "none" },
		{ child: "4", parent: "9", display: "none" },
		{ child: "2", parent: "9", display: "none" },
	],
}).render();

const tree_b1_3_p = new csmd.Queue({
	id: "tree_b1_3_p",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red", annotate: "p" },
		{ val: "F1" },
		{ val: "F2", annotate: "t" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const tree_b1_1_gen2 = new csmd.Tree({
	id: "tree_b1_1_gen2",
	width: 250,
	height: 200,
	divWidth: "60%",
	paddingBottom: "50%",
	data: [
		{ child: "5", parent: "", annotate: "F0 p", opacity: 0.2 },
		{ child: "8", parent: "5", annotate: "F1 t", opacity: 0.2 },
		{ child: "6", parent: "5", annotate: "F2", opacity: 0.2 },
		{ child: "3", parent: "6" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8" },
		{ child: "4", parent: "9", opacity: 0.2 },
		{ child: "2", parent: "9", opacity: 0.2 },
	],
}).render();

const tree_b1_4_p = new csmd.Tree({
	id: "tree_b1_4_p",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "20%",
	data: [
		{ child: "5", parent: "", annotate: "F0" },
		{ child: "8", parent: "5", annotate: "F1 p" },
		{ child: "6", parent: "5", annotate: "F2 t" },
		{ child: "3", parent: "6", display: "none" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", display: "none" },
		{ child: "4", parent: "9", display: "none" },
		{ child: "2", parent: "9", display: "none" },
	],
}).render();

const tree_b1_queue_with_4 = new csmd.Queue({
	id: "tree_b1_queue_with_4",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red" },
		{ val: "F1", emphasis: "red", annotate: "p" },
		{ val: "F2", annotate: "t" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const tree_b1_4 = new csmd.Tree({
	id: "tree_b1_4",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "5", parent: "", annotate: "F0" },
		{ child: "8", parent: "5", annotate: "F1 p" },
		{ child: "6", parent: "5", annotate: "F2" },
		{ child: "3", parent: "6", display: "none" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", annotate: "F3 t" },
		{ child: "4", parent: "9", display: "none" },
		{ child: "2", parent: "9", display: "none" },
	],
}).render();

const tree_b1_queue_4 = new csmd.Queue({
	id: "tree_b1_queue_4",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red" },
		{ val: "F1", emphasis: "red", annotate: "p" },
		{ val: "F2" },
		{ val: "F3", annotate: "t" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const tree_b1_5 = new csmd.Tree({
	id: "tree_b1_5",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "5", parent: "", annotate: "F0" },
		{ child: "8", parent: "5", annotate: "F1" },
		{ child: "6", parent: "5", annotate: "F2 p" },
		{ child: "3", parent: "6", annotate: "F4 t" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", annotate: "F3" },
		{ child: "4", parent: "9", display: "none" },
		{ child: "2", parent: "9", display: "none" },
	],
}).render();

const tree_b1_queue_5 = new csmd.Queue({
	id: "tree_b1_queue_5",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red" },
		{ val: "F1", emphasis: "red" },
		{ val: "F2", emphasis: "red", annotate: "p" },
		{ val: "F3" },
		{ val: "F4", annotate: "t" },
		{ val: "" },
	],
}).render();

const tree_b1_1_gen3 = new csmd.Tree({
	id: "tree_b1_1_gen3",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "5", parent: "", annotate: "F0", opacity: 0.2 },
		{ child: "8", parent: "5", annotate: "F1", opacity: 0.2 },
		{ child: "6", parent: "5", annotate: "F2 p", opacity: 0.2 },
		{ child: "3", parent: "6", opacity: 0.2, annotate: "F4 t" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", opacity: 0.2, annotate: "F3" },
		{ child: "4", parent: "9" },
		{ child: "2", parent: "9" },
	],
}).render();

const tree_b1_6 = new csmd.Tree({
	id: "tree_b1_6",
	width: 200,
	height: 200,
	container_height: 20,
	divWidth: "80%",
	paddingBottom: "60%",
	data: [
		{ child: "5", parent: "", annotate: "F0" },
		{ child: "8", parent: "5", annotate: "F1" },
		{ child: "6", parent: "5", annotate: "F2" },
		{ child: "3", parent: "6", annotate: "F4 t" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", annotate: "F3 p" },
		{ child: "4", parent: "9", display: "none" },
		{ child: "2", parent: "9", display: "none" },
	],
}).render();

const tree_b1_queue_6 = new csmd.Queue({
	id: "tree_b1_queue_6",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red" },
		{ val: "F1", emphasis: "red" },
		{ val: "F2", emphasis: "red" },
		{ val: "F3", emphasis: "red", annotate: "p" },
		{ val: "F4", annotate: "t" },
		{ val: "" },
	],
}).render();

const tree_b1_7 = new csmd.Tree({
	id: "tree_b1_7",
	width: 200,
	height: 200,
	container_height: 25,
	divWidth: "80%",
	paddingBottom: "80%",
	data: [
		{ child: "5", parent: "", annotate: "F0" },
		{ child: "8", parent: "5", annotate: "F1" },
		{ child: "6", parent: "5", annotate: "F2" },
		{ child: "3", parent: "6", annotate: "F4" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", annotate: "F3 p" },
		{ child: "4", parent: "9", annotate: "F5 t" },
		{ child: "2", parent: "9", display: "none" },
	],
}).render();

const tree_b1_queue_7 = new csmd.Queue({
	id: "tree_b1_queue_7",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red" },
		{ val: "F1", emphasis: "red" },
		{ val: "F2", emphasis: "red" },
		{ val: "F3", emphasis: "red", annotate: "p" },
		{ val: "F4" },
		{ val: "F5", annotate: "t" },
	],
}).render();

const tree_b1_8 = new csmd.Tree({
	id: "tree_b1_8",
	width: 200,
	height: 200,
	container_height: 25,
	data: [
		{ child: "5", parent: "", annotate: "F0" },
		{ child: "8", parent: "5", annotate: "F1" },
		{ child: "6", parent: "5", annotate: "F2" },
		{ child: "3", parent: "6", annotate: "F4" },
		{ child: "", parent: "6", display: "none" },
		{ child: "", parent: "8", display: "none" },
		{ child: "9", parent: "8", annotate: "F3 p" },
		{ child: "4", parent: "9", annotate: "F5" },
		{ child: "2", parent: "9", annotate: "F6 t" },
	],
}).render();

const tree_b1_queue_8 = new csmd.Queue({
	id: "tree_b1_queue_8",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red" },
		{ val: "F1", emphasis: "red" },
		{ val: "F2", emphasis: "red" },
		{ val: "F3", emphasis: "red", annotate: "p" },
		{ val: "F4" },
		{ val: "F5" },
		{ val: "F6", annotate: "t" },
	],
}).render();

const create_tree_sample = new csmd.Tree({
	id: "create_tree_sample",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "30%",
	data: [
		{ child: "3", parent: "" },
		{ child: "2", parent: "3" },
		{ child: "1", parent: "3" },
		{ child: "7", parent: "2" },
		{ child: "4", parent: "2" },
		{ child: "8", parent: "1" },
		{ child: "", parent: "1", display: "none" },
	],
}).render();

const circular_queue_tree = new csmd.CircularQueue({
	id: "circular_queue_tree",
	divWidth: 50,
	paddingBottom: 25,
	data: ["", "", "", "", "", "", "", "", "", ""],
	pointer: {},
	indexed: true,
}).render();

const root_queued = new csmd.CircularQueue({
	id: "root_queued",
	divWidth: 100,
	paddingBottom: 50,
	data: ["0x1", "", "", "", "", "", "", "", "", ""],
	pointer: {},
	indexed: true,
}).render();

const root_left_child_queued = new csmd.CircularQueue({
	id: "root_left_child_queued",
	divWidth: 100,
	paddingBottom: 50,
	data: ["0x1", "0x2", "", "", "", "", "", "", "", ""],
	pointer: {},
	indexed: true,
}).render();

const root_right_child_queued = new csmd.CircularQueue({
	id: "root_right_child_queued",
	divWidth: 100,
	paddingBottom: 50,
	data: ["0x1", "0x2", "0x3", "", "", "", "", "", "", ""],
	pointer: {},
	focus: {
		0: "y",
	},
	indexed: true,
}).render();

const new_front1 = new csmd.CircularQueue({
	id: "new_front1",
	divWidth: 60,
	paddingBottom: 30,
	data: ["", "0x2", "0x3", "", "", "", "", "", "", ""],
	pointer: {},
	focus: {
		1: "y",
	},
	indexed: true,
}).render();

const traversal_1 = new csmd.Tree({
	id: "traversal_1",
	width: 200,
	height: 200,
	directed: true,
	container_height: 25,
	data: [
		{ child: "8", parent: "", annotate: "root" },
		{ child: "3", parent: "8", edgeLabel: "F1" },
		{ child: "5", parent: "8", edgeLabel: "F2" },
		{ child: "4", parent: "3", edgeLabel: "F3" },
		{ child: "9", parent: "3", edgeLabel: "F4" },
		{ child: "7", parent: "5", edgeLabel: "F5" },
		{ child: "2", parent: "5", edgeLabel: "F6" },
	],
}).render();

const preorder_trace1 = new csmd.CallTrace({
	id: "preorder_trace1",
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
	],
}).render();

const preorder_trace2 = new csmd.CallTrace({
	id: "preorder_trace2",
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
	],
}).render();

const preorder_trace3 = new csmd.CallTrace({
	id: "preorder_trace3",
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
		{ child: "3", parent: "preorder(F1)" },
		{ child: "preorder(F3)", parent: "preorder(F1)" },
	],
}).render();

const preorder_trace4 = new csmd.CallTrace({
	id: "preorder_trace4",
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
		{ child: "3", parent: "preorder(F1)" },
		{ child: "preorder(F3)", parent: "preorder(F1)" },
		{ child: "4", parent: "preorder(F3)" },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
	],
}).render();

const preorder_trace5 = new csmd.CallTrace({
	id: "preorder_trace5",
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
		{ child: "3", parent: "preorder(F1)" },
		{ child: "preorder(F3)", parent: "preorder(F1)" },
		{ child: "4", parent: "preorder(F3)" },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
	],
}).render();

const preorder_trace6 = new csmd.CallTrace({
	id: "preorder_trace6",
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
		{ child: "3", parent: "preorder(F1)" },
		{ child: "preorder(F4)", parent: "preorder(F1)" },
		{ child: "preorder(F3)", parent: "preorder(F1)" },
		{ child: "4", parent: "preorder(F3)" },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
		{ child: "9", parent: "preorder(F4)" },
		{ child: "preorder(0)", parent: "preorder(F4)", call: true },
		{ child: "preorder(0)", parent: "preorder(F4)", call: true },
	],
}).render();

const preorder_trace_final = new csmd.CallTrace({
	id: "preorder_trace_final",
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
		{ child: "preorder(F2)", parent: "preorder(F0)" },
		{ child: "3", parent: "preorder(F1)" },
		{ child: "preorder(F3)", parent: "preorder(F1)" },
		{ child: "preorder(F4)", parent: "preorder(F1)" },
		{ child: "4", parent: "preorder(F3)" },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
		{ child: "9", parent: "preorder(F4)" },
		{ child: "preorder(0)", parent: "preorder(F4)", call: true },
		{ child: "preorder(0)", parent: "preorder(F4)", call: true },
		{ child: "5", parent: "preorder(F2)" },
		{ child: "preorder(F5)", parent: "preorder(F2)" },
		{ child: "preorder(F6)", parent: "preorder(F2)" },
		{ child: "7", parent: "preorder(F5)" },
		{ child: "preorder(0)", parent: "preorder(F5)", call: true },
		{ child: "preorder(0)", parent: "preorder(F5)", call: true },
		{ child: "2", parent: "preorder(F6)" },
		{ child: "preorder(0)", parent: "preorder(F6)", call: true },
		{ child: "preorder(0)", parent: "preorder(F6)", call: true },
	],
}).render();

const preorder_loop = new csmd.Tree({
	id: "preorder_loop",
	width: 200,
	height: 200,
	container_height: 25,
	directed: true,
	divWidth: "70%",
	paddingBottom: "30%",
	data: [
		{ child: "8", parent: "", annotate: "root" },
		{ child: "3", parent: "8", edgeLabel: "F1" },
		{ child: "5", parent: "8", edgeLabel: "F2" },
		{ child: "4", parent: "3", edgeLabel: "F3" },
		{ child: "9", parent: "3", edgeLabel: "F4" },
		{ child: "7", parent: "5", edgeLabel: "F5" },
		{ child: "2", parent: "5", edgeLabel: "F6" },
	],
}).render();

const inorder_tree_demo = new csmd.Tree({
	id: "inorder_tree_demo",
	width: 200,
	height: 200,
	container_height: 25,
	directed: true,
	data: [
		{ child: "3", parent: "", annotate: "root" },
		{ child: "8", parent: "3", edgeLabel: "F1" },
		{ child: "9", parent: "3", edgeLabel: "F2" },
		{ child: "2", parent: "8", edgeLabel: "F3" },
		{ child: "6", parent: "8", edgeLabel: "F4" },
		{ child: "1", parent: "9", edgeLabel: "F5" },
		{ child: "5", parent: "9", edgeLabel: "F6" },
	],
}).render();

const inorder_trace_f1 = new csmd.CallTrace({
	id: "inorder_trace_f1",
	directed: true,
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
	],
}).render();

const inorder_trace_f3 = new csmd.CallTrace({
	id: "inorder_trace_f3",
	directed: true,
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
	],
}).render();

const inorder_trace_f3_1 = new csmd.CallTrace({
	id: "inorder_trace_f3_1",
	directed: true,
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "2", parent: "inorder(F3)" },
	],
}).render();

const inorder_trace_f3_2 = new csmd.CallTrace({
	id: "inorder_trace_f3_2",
	directed: true,
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "2", parent: "inorder(F3)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
	],
}).render();

const inorder_trace_f1_1 = new csmd.CallTrace({
	id: "inorder_trace_f1_1",
	directed: true,
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "2", parent: "inorder(F3)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "8", parent: "inorder(F1)" },
	],
}).render();

const inorder_trace_f4 = new csmd.CallTrace({
	id: "inorder_trace_f4",
	directed: true,
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "2", parent: "inorder(F3)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "8", parent: "inorder(F1)" },
		{ child: "inorder(F4)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F4)", call: true },
	],
}).render();

const inorder_trace_f4_1 = new csmd.CallTrace({
	id: "inorder_trace_f4_1",
	directed: true,
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "2", parent: "inorder(F3)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "8", parent: "inorder(F1)" },
		{ child: "inorder(F4)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F4)", call: true },
		{ child: "6", parent: "inorder(F4)" },
		{ child: "inorder(0)", parent: "inorder(F4)", call: true },
	],
}).render();

const inorder_trace_final = new csmd.CallTrace({
	id: "inorder_trace_final",
	directed: true,
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "2", parent: "inorder(F3)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "8", parent: "inorder(F1)" },
		{ child: "inorder(F4)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F4)", call: true },
		{ child: "6", parent: "inorder(F4)" },
		{ child: "inorder(0)", parent: "inorder(F4)", call: true },
		{ child: "3", parent: "inorder(F0)" },
		{ child: "inorder(F2)", parent: "inorder(F0)" },
		{ child: "inorder(F5)", parent: "inorder(F2)" },
		{ child: "inorder(0)", parent: "inorder(F5)", call: true },
		{ child: "1", parent: "inorder(F5)" },
		{ child: "inorder(0)", parent: "inorder(F5)", call: true },
		{ child: "9", parent: "inorder(F2)" },
		{ child: "inorder(F6)", parent: "inorder(F2)" },
		{ child: "inorder(0)", parent: "inorder(F6)", call: true },
		{ child: "5", parent: "inorder(F6)" },
		{ child: "inorder(0)", parent: "inorder(F6)", call: true },
	],
}).render();

const postorder_sample = new csmd.Tree({
	id: "postorder_sample",
	width: 200,
	height: 200,
	directed: true,
	container_height: 25,
	divWidth: "40%",
	paddingBottom: "30%",
	data: [
		{ child: "4", parent: "", annotate: "root" },
		{ child: "9", parent: "4", edgeLabel: "F1" },
		{ child: "7", parent: "4", edgeLabel: "F2" },
		{ child: "6", parent: "9", edgeLabel: "F3" },
		{ child: "2", parent: "9", edgeLabel: "F4" },
		{ child: "0", parent: "7", edgeLabel: "F5" },
		{ child: "1", parent: "7", edgeLabel: "F6" },
	],
}).render();

const postorder_trace_final = new csmd.CallTrace({
	id: "postorder_trace_final",
	directed: true,
	margin: [20, 70, 20, 70],
	width: 60,
	height: 45,
	svg_width: 400,
	svg_height: 300,
	data: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "6", parent: "inorder(F3)" },
		{ child: "inorder(F4)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F4)", call: true },
		{ child: "inorder(0)", parent: "inorder(F4)", call: true },
		{ child: "2", parent: "inorder(F4)" },
		{ child: "9", parent: "inorder(F1)" },
		{ child: "inorder(F2)", parent: "inorder(F0)" },
		{ child: "inorder(F5)", parent: "inorder(F2)" },
		{ child: "inorder(0)", parent: "inorder(F5)", call: true },
		{ child: "inorder(0)", parent: "inorder(F5)", call: true },
		{ child: "0", parent: "inorder(F5)" },
		{ child: "inorder(F6)", parent: "inorder(F2)" },
		{ child: "inorder(0)", parent: "inorder(F6)", call: true },
		{ child: "inorder(0)", parent: "inorder(F6)", call: true },
		{ child: "1", parent: "inorder(F6)" },
		{ child: "9", parent: "inorder(F2)" },
		{ child: "4", parent: "inorder(F0)" },
	],
}).render();

const preorder_stack_growth = new csmd.Multistack({
	id: "preorder_stack_growth",
	margin: [50, 40, 50, 40],
	width: 90,
	height: 20,
	svg_width: 750,
	svg_height: 300,
	data: [
		[""],
		["F0"],
		["F0", "F1"],
		["F0", "F1", "F3"],
		["F0", "F1"],
		["F0", "F1", "F4"],
		["F0", "F1"],
		["F0"],
		["F0", "F2"],
		["F0", "F2", "F5"],
		["F0", "F2"],
		["F0", "F2", "F6"],
		["F0", "F2"],
		["F0"],
		[""],
	],
}).render();

const inorder_stack_growth = new csmd.Multistack({
	id: "inorder_stack_growth",
	margin: [50, 40, 50, 40],
	width: 90,
	height: 20,
	svg_width: 750,
	svg_height: 300,
	data: [
		[""],
		["F0"],
		["F0", "F1"],
		["F0", "F1", "F3"],
		["F0", "F1"],
		["F0", "F1", "F4"],
		["F0", "F1"],
		["F0"],
		["F0", "F2"],
		["F0", "F2", "F5"],
		["F0", "F2"],
		["F0", "F2", "F6"],
		["F0", "F2"],
		["F0"],
		[""],
	],
}).render();

const level_order_traversal_sample = new csmd.Tree({
	id: "level_order_traversal_sample",
	container_width: 50,
	container_height: 25,
	leveled: true,
	directed: true,
	data: [
		{ child: "8", parent: "" },
		{ child: "3", parent: "8", edgeLabel: "0x1" },
		{ child: "9", parent: "8", edgeLabel: "0x2" },
		{ child: "7", parent: "3", edgeLabel: "0x3" },
		{ child: "10", parent: "3", display: "none" },
		{ child: "6", parent: "9", edgeLabel: "0x4" },
		{ child: "12", parent: "6", display: "none" },
		{ child: "2", parent: "6", edgeLabel: "0x5" },
		{ child: "4", parent: "9", edgeLabel: "0x6" },
		{ child: "5", parent: "7", edgeLabel: "0x7" },
		{ child: "11", parent: "7", display: "none" },
	],
}).render();

const sample_data_traversal_generation = new csmd.Sequence({
	id: "sample_data_traversal_generation",
	width: 20,
	height: 16,
	data: [{ val: "A" }, { val: "B" }, { val: "C" }],
}).render();

const tg1 = new csmd.Tree({
	id: "tg1",
	width: 250,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
	],
}).render();

const tg2 = new csmd.Tree({
	id: "tg2",
	width: 250,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "E", parent: "A", display: "none" },
		{ child: "C", parent: "B" },
		{ child: "F", parent: "B", display: "none" },
	],
}).render();

const tg3 = new csmd.Tree({
	id: "tg3",
	width: 250,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "E", parent: "A", display: "none" },
		{ child: "F", parent: "B", display: "none" },
		{ child: "C", parent: "B" },
	],
}).render();

const tg4 = new csmd.Tree({
	id: "tg4",
	width: 250,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "A", parent: "" },
		{ child: "E", parent: "A", display: "none" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "B" },
		{ child: "F", parent: "B", display: "none" },
	],
}).render();

const tg5 = new csmd.Tree({
	id: "tg5",
	width: 250,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "A", parent: "" },
		{ child: "E", parent: "A", display: "none" },
		{ child: "B", parent: "A" },
		{ child: "F", parent: "B", display: "none" },
		{ child: "C", parent: "B" },
	],
}).render();

const tg_pre_array = new csmd.Sequence({
	id: "tg_pre_array",
	data: [
		{ val: "4" },
		{ val: "7" },
		{ val: "9" },
		{ val: "6" },
		{ val: "3" },
		{ val: "2" },
		{ val: "5" },
		{ val: "8" },
		{ val: "1" },
	],
}).render();

const tg_in_array = new csmd.Sequence({
	id: "tg_in_array",
	data: [
		{ val: "7" },
		{ val: "6" },
		{ val: "9" },
		{ val: "3" },
		{ val: "4" },
		{ val: "5" },
		{ val: "8" },
		{ val: "2" },
		{ val: "1" },
	],
}).render();

const tg_true_tree = new csmd.Tree({
	id: "tg_true_tree",
	width: 250,
	height: 250,
	container_width: 40,
	container_height: 20,
	data: [
		{ child: "4", parent: "" },
		{ child: "7,6,9,3", parent: "4", noCircle: true },
		{ child: "5,8,2,1", parent: "4", noCircle: true },
	],
}).render();

const tg_true_tree2 = new csmd.Tree({
	id: "tg_true_tree2",
	width: 250,
	height: 250,
	container_width: 40,
	container_height: 20,
	data: [
		{ child: "4", parent: "" },
		{ child: "7", parent: "4" },
		{ child: "5,8,2,1", parent: "4", noCircle: true },
		{ child: "6,9,3", parent: "7", noCircle: true, display: "none" },
		{ child: "6,9,3", parent: "7", noCircle: true },
	],
}).render();

const tg_true_tree3 = new csmd.Tree({
	id: "tg_true_tree3",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 20,
	data: [
		{ child: "4", parent: "" },
		{ child: "7", parent: "4" },
		{ child: "5,8,2,1", parent: "4", noCircle: true },
		{ child: "12", parent: "7", noCircle: true, display: "none" },
		{ child: "9", parent: "7" },
		{ child: "6", parent: "9" },
		{ child: "3", parent: "9" },
	],
}).render();

const tg_true_tree4 = new csmd.Tree({
	id: "tg_true_tree4",
	width: 350,
	height: 250,
	container_width: 40,
	container_height: 20,
	data: [
		{ child: "4", parent: "" },
		{ child: "7", parent: "4" },
		{ child: "2", parent: "4" },
		{ child: "12", parent: "7", noCircle: true, display: "none" },
		{ child: "9", parent: "7" },
		{ child: "6", parent: "9" },
		{ child: "3", parent: "9" },
		{ child: "5,8", parent: "2", noCircle: true },
		{ child: "1", parent: "2", noCircle: true },
	],
}).render();

const tg_true_tree5 = new csmd.Tree({
	id: "tg_true_tree5",
	width: 350,
	height: 250,
	container_width: 40,
	container_height: 20,
	data: [
		{ child: "4", parent: "" },
		{ child: "7", parent: "4" },
		{ child: "2", parent: "4" },
		{ child: "12", parent: "7", display: "none" },
		{ child: "9", parent: "7" },
		{ child: "6", parent: "9" },
		{ child: "3", parent: "9" },
		{ child: "5", parent: "2" },
		{ child: "17", parent: "5", display: "none" },
		{ child: "8", parent: "5" },
		{ child: "1", parent: "2" },
	],
}).render();

const bst_intro = new csmd.Tree({
	id: "bst_intro",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "60", parent: "50" },
	],
}).render();

const bst_array_1 = new csmd.Sequence({
	id: "bst_array_1",
	data: [
		{ val: "10" },
		{ val: "15" },
		{ val: "20" },
		{ val: "30" },
		{ val: "40" },
		{ val: "50" },
		{ val: "60" },
	],
}).render();

const bst_search_example = new csmd.Tree({
	id: "bst_search_example",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "60", parent: "50" },
	],
}).render();

const bst_search_example1 = new csmd.Tree({
	id: "bst_search_example1",
	width: 350,
	height: 300,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "30", parent: "", annotate: "p", focus: "lavender" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "60", parent: "50" },
	],
}).render();

const bst_search_example2 = new csmd.Tree({
	id: "bst_search_example2",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30", annotate: "p", focus: "lavender" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "60", parent: "50" },
	],
}).render();

const bst_search_example3 = new csmd.Tree({
	id: "bst_search_example3",
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 25,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50", annotate: "p", focus: "lavender" },
		{ child: "60", parent: "50" },
	],
}).render();

const binary_search_trace = new csmd.CallTrace({
	id: "binary_search_trace",
	margin: [20, 150, 20, 150],
	width: 70,
	height: 10,
	svg_width: 400,
	svg_height: 60,
	data: [
		{ child: "search(root, 60)", parent: "" },
		{
			child: "search(root(50), 60)",
			parent: "search(root, 60)",
		},
	],
}).render();

const binary_search_trace2 = new csmd.CallTrace({
	id: "binary_search_trace2",
	margin: [0, 150, 180, 150],
	width: 80,
	height: 25,
	svg_width: 450,
	svg_height: 300,
	data: [
		{ child: "search(root, 60)", parent: "" },
		{
			child: "search(root(50)1, 60)",
			parent: "search(root, 60)",
			display: "none",
		},
		{
			child: "search(root(50), 60)",
			parent: "search(root, 60)",
		},
		{
			child: "search(node(50).right_child1, 60)",
			parent: "search(root(50), 60)",
			display: "none",
		},
		{
			child: "search(root(60), 60)",
			parent: "search(root(50), 60)",
		},
	],
}).render();

const tree_insert_1 = new csmd.Tree({
	id: "tree_insert_1",
	edgeLength: 100,
	width: 200,
	height: 150,
	container_width: 30,
	container_height: 25,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "60", parent: "50" },
	],
}).render();

const bst_delete_1 = new csmd.Tree({
	id: "bst_delete_1",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 30,
	container_height: 27,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "60", parent: "50" },
		{ child: "55", parent: "60" },
		{ child: "70", parent: "60" },
	],
}).render();

const bst_delete_2 = new csmd.Tree({
	id: "bst_delete_2",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 30,
	container_height: 27,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "60", parent: "50" },
		{ child: "55", parent: "60" },
		{ child: "70", parent: "60", opacity: 0.15 },
	],
}).render();

const bst_delete_3 = new csmd.Tree({
	id: "bst_delete_3",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 30,
	container_height: 27,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "60", parent: "50", opacity: 0.15 },
		{ child: "55", parent: "60" },
		{ child: "70", parent: "60", opacity: 0.15 },
	],
}).render();

const bst_delete_4 = new csmd.Tree({
	id: "bst_delete_4",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 30,
	container_height: 27,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "55", parent: "50" },
	],
}).render();

const bst_delete_5 = new csmd.Tree({
	id: "bst_delete_5",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 30,
	container_height: 27,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "50", parent: "30", opacity: 0.1 },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
		{ child: "40", parent: "50" },
		{ child: "55", parent: "50" },
	],
}).render();

const bst_delete_inorder_predecesor = new csmd.Tree({
	id: "bst_delete_inorder_predecesor",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 50,
	container_height: 45,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "40", parent: "30" },
		{ child: "56", parent: "40", display: "none" },
		{ child: "55", parent: "40" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
	],
}).render();

const bst_delete_inorder_successor = new csmd.Tree({
	id: "bst_delete_inorder_successor",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 50,
	container_height: 45,
	data: [
		{ child: "30", parent: "" },
		{ child: "15", parent: "30" },
		{ child: "55", parent: "30" },
		{ child: "40", parent: "55" },
		{ child: "41", parent: "55", display: "none" },
		{ child: "10", parent: "15" },
		{ child: "20", parent: "15" },
	],
}).render();

const removal_degenerate_tree = new csmd.Tree({
	id: "removal_degenerate_tree",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 30,
	container_height: 30,
	data: [
		{ child: "10", parent: "" },
		{ child: "a", parent: "10", display: "none" },
		{ child: "90", parent: "10" },
		{ child: "20", parent: "90" },
		{ child: "b", parent: "90", display: "none" },
		{ child: "c", parent: "20", display: "none" },
		{ child: "80", parent: "20" },
		{ child: "30", parent: "80" },
		{ child: "d", parent: "80", display: "none" },
		{ child: "e", parent: "30", display: "none" },
		{ child: "70", parent: "30" },
	],
}).render();

const t1 = new csmd.Tree({
	id: "t1",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 40,
	container_height: 40,
	data: [
		{ child: "10", parent: "" },
		{ child: "a", parent: "10", display: "none" },
		{ child: "90", parent: "10" },
		{ child: "20", parent: "90" },
		{ child: "b", parent: "90", display: "none" },
		{ child: "c", parent: "20", display: "none" },
		{ child: "80", parent: "20" },
		{ child: "30", parent: "80" },
		{ child: "d", parent: "80", display: "none" },
		{ child: "e", parent: "30", display: "none" },
		{ child: "70", parent: "30" },
	],
}).render();

const t2 = new csmd.Tree({
	id: "t2",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 40,
	container_height: 40,
	data: [
		{ child: "10", parent: "" },
		{ child: "a", parent: "10", display: "none" },
		{ child: "90", parent: "10", arrowTo: 7 },
		{ child: "20", parent: "90", opacity: 0.1 },
		{ child: "b", parent: "90", display: "none" },
		{ child: "c", parent: "20", display: "none" },
		{ child: "80", parent: "20" },
		{ child: "30", parent: "80" },
		{ child: "d", parent: "80", display: "none" },
		{ child: "e", parent: "30", display: "none" },
		{ child: "70", parent: "30" },
	],
}).render();

const t3 = new csmd.Tree({
	id: "t3",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 40,
	container_height: 40,
	data: [
		{ child: "10", parent: "" },
		{ child: "a", parent: "10", display: "none" },
		{ child: "90", parent: "10", arrowTo: 7 },
		{ child: "20", parent: "90", opacity: 0.2 },
		{ child: "b", parent: "90", display: "none" },
		{ child: "c", parent: "20", display: "none" },
		{ child: "80", parent: "20", arrowTo: 10 },
		{ child: "30", parent: "80" },
		{ child: "d", parent: "80", display: "none" },
		{ child: "e", parent: "30", display: "none" },
		{ child: "70", parent: "30" },
	],
}).render();

const t4 = new csmd.Tree({
	id: "t4",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 40,
	container_height: 40,
	data: [
		{ child: "10", parent: "" },
		{ child: "a", parent: "10", display: "none" },
		{ child: "90", parent: "10" },
		{ child: "30", parent: "90" },
		{ child: "b", parent: "90", display: "none" },
		{ child: "d", parent: "80", display: "none" },
		{ child: "f", parent: "70", display: "none" },
		{ child: "80", parent: "70" },
		{ child: "e", parent: "30", display: "none" },
		{ child: "70", parent: "30" },
	],
}).render();

const t5 = new csmd.Tree({
	id: "t5",
	edgeLength: 130,
	width: 200,
	height: 180,
	container_width: 40,
	container_height: 40,
	data: [
		{ child: "10", parent: "" },
		{ child: "a", parent: "10", display: "none" },
		{ child: "30", parent: "10" },
		{ child: "20", parent: "90", display: "none" },
		{ child: "b", parent: "90", display: "none" },
		{ child: "c", parent: "20", display: "none" },
		{ child: "f", parent: "70", display: "none" },
		{ child: "80", parent: "70" },
		{ child: "g", parent: "80", display: "none" },
		{ child: "90", parent: "80" },
		{ child: "e", parent: "30", display: "none" },
		{ child: "70", parent: "30" },
	],
}).render();

const bst_traversal_generation_array = new csmd.Sequence({
	id: "bst_traversal_generation_array",
	indexed: true,
	data: [
		{ val: 30 },
		{ val: 20 },
		{ val: 10 },
		{ val: 15 },
		{ val: 25 },
		{ val: 40 },
		{ val: 50 },
		{ val: 45 },
	],
}).render();

const bst_traversal_generation_stack = new csmd.Stack({
	id: "bst_traversal_generation_stack",
	height: 15,
	colorFrame: "dodgerblue",
	colorStroke: "blue",
	colorText: "white",
	data: [{ val: "" }, { val: "" }, { val: "" }],
}).render();

const bst_gen_arr1 = new csmd.Sequence({
	id: "bst_gen_arr1",
	width: 60,
	indexed: true,
	data: [
		{ val: 30, focus: "red" },
		{ val: 20 },
		{ val: 10 },
		{ val: 15 },
		{ val: 25 },
		{ val: 40 },
		{ val: 50 },
		{ val: 45 },
	],
}).render();

const bst_gen_trav1 = new csmd.Tree({
	id: "bst_gen_trav1",
	directed: true,
	width: 350,
	height: 250,
	container_width: 100,
	container_height: 10,
	data: [
		{ child: "30", parent: "", pointer: "p,root" },
		// { child: "15", parent: "30" },
		// { child: "50", parent: "30" },
		// { child: "10", parent: "15" },
		// { child: "20", parent: "15" },
		// { child: "40", parent: "50" },
		// { child: "60", parent: "50" },
	],
}).render();
const bst_gen_stack1 = new csmd.Stack({
	id: "bst_gen_stack1",
	width: 100,
	height: 30,
	colorFrame: "dodgerblue",
	colorStroke: "blue",
	colorText: "white",
	data: [{ val: "" }, { val: "" }, { val: "" }],
}).render();

const bst_gen_arr2 = new csmd.Sequence({
	id: "bst_gen_arr2",
	width: 60,
	indexed: true,
	data: [
		{ val: 30, focus: "red" },
		{ val: 20, focus: "red" },
		{ val: 10 },
		{ val: 15 },
		{ val: 25 },
		{ val: 40 },
		{ val: 50 },
		{ val: 45 },
	],
}).render();
const bst_gen_trav2 = new csmd.Tree({
	id: "bst_gen_trav2",
	directed: true,
	width: 350,
	height: 250,
	container_width: 100,
	container_height: 40,
	data: [
		{ child: "30", parent: "", pointer: "root" },
		{ child: "20", parent: "30", pointer: "t,p" },
		{ child: "10", parent: "30", display: "none" },
		// { child: "10", parent: "15" },
		// { child: "20", parent: "15" },
		// { child: "40", parent: "50" },
		// { child: "60", parent: "50" },
	],
}).render();
const bst_gen_stack2 = new csmd.Stack({
	id: "bst_gen_stack2",
	width: 100,
	height: 30,
	colorFrame: "dodgerblue",
	colorStroke: "blue",
	colorText: "white",
	data: [{ val: "" }, { val: "" }, { val: "ad(30)" }],
}).render();

const bst_gen_arr3 = new csmd.Sequence({
	id: "bst_gen_arr3",
	width: 60,
	indexed: true,
	data: [
		{ val: 30, focus: "red" },
		{ val: 20, focus: "red" },
		{ val: 10, focus: "red" },
		{ val: 15 },
		{ val: 25 },
		{ val: 40 },
		{ val: 50 },
		{ val: 45 },
	],
}).render();
const bst_gen_trav3 = new csmd.Tree({
	id: "bst_gen_trav3",
	directed: true,
	width: 350,
	height: 250,
	container_width: 100,
	container_height: 40,
	data: [
		{ child: "30", parent: "", pointer: "root" },
		{ child: "20", parent: "30" },
		{ child: "a", parent: "30", display: "none" },
		{ child: "10", parent: "20", pointer: "t,p" },
		{ child: "b", parent: "20", display: "none" },
		// { child: "20", parent: "15" },
		// { child: "40", parent: "50" },
		// { child: "60", parent: "50" },
	],
}).render();
const bst_gen_stack3 = new csmd.Stack({
	id: "bst_gen_stack3",
	width: 100,
	height: 30,
	colorFrame: "dodgerblue",
	colorStroke: "blue",
	colorText: "white",
	data: [{ val: "" }, { val: "ad(20)" }, { val: "ad(30)" }],
}).render();

const bst_gen_arr4 = new csmd.Sequence({
	id: "bst_gen_arr4",
	width: 60,
	indexed: true,
	data: [
		{ val: 30, focus: "red" },
		{ val: 20, focus: "red" },
		{ val: 10, focus: "red" },
		{ val: 15, focus: "red" },
		{ val: 25 },
		{ val: 40 },
		{ val: 50 },
		{ val: 45 },
	],
}).render();
const bst_gen_trav4 = new csmd.Tree({
	id: "bst_gen_trav4",
	directed: true,
	width: 350,
	height: 250,
	container_width: 100,
	container_height: 40,
	data: [
		{ child: "30", parent: "", pointer: "root" },
		{ child: "20", parent: "30" },
		{ child: "a", parent: "30", display: "none" },
		{ child: "10", parent: "20" },
		{ child: "b", parent: "20", display: "none" },
		{ child: "c", parent: "10", display: "none" },
		{ child: "15", parent: "10", pointer: "t,p" },
		// { child: "40", parent: "50" },
		// { child: "60", parent: "50" },
	],
}).render();
const bst_gen_stack4 = new csmd.Stack({
	id: "bst_gen_stack4",
	width: 100,
	height: 30,
	colorFrame: "dodgerblue",
	colorStroke: "blue",
	colorText: "white",
	data: [{ val: "" }, { val: "ad(20)" }, { val: "ad(30)" }],
}).render();

const bst_gen_arr5 = new csmd.Sequence({
	id: "bst_gen_arr5",
	width: 60,
	indexed: true,
	data: [
		{ val: 30, focus: "red" },
		{ val: 20, focus: "red" },
		{ val: 10, focus: "red" },
		{ val: 15, focus: "red" },
		{ val: 25, focus: "red" },
		{ val: 40 },
		{ val: 50 },
		{ val: 45 },
	],
}).render();
const bst_gen_trav5 = new csmd.Tree({
	id: "bst_gen_trav5",
	directed: true,
	width: 350,
	height: 250,
	container_width: 100,
	container_height: 40,
	data: [
		{ child: "30", parent: "", pointer: "root" },
		{ child: "20", parent: "30" },
		{ child: "a", parent: "30", display: "none" },
		{ child: "10", parent: "20" },
		{ child: "25", parent: "20", pointer: "t,p" },
		{ child: "c", parent: "10", display: "none" },
		{ child: "15", parent: "10" },
		// { child: "40", parent: "50" },
		// { child: "60", parent: "50" },
	],
}).render();
const bst_gen_stack5 = new csmd.Stack({
	id: "bst_gen_stack5",
	width: 100,
	height: 30,
	colorFrame: "dodgerblue",
	colorStroke: "blue",
	colorText: "white",
	data: [{ val: "" }, { val: "" }, { val: "ad(30)" }],
}).render();

const bst_gen_arr6 = new csmd.Sequence({
	id: "bst_gen_arr6",
	width: 60,
	indexed: true,
	data: [
		{ val: 30, focus: "red" },
		{ val: 20, focus: "red" },
		{ val: 10, focus: "red" },
		{ val: 15, focus: "red" },
		{ val: 25, focus: "red" },
		{ val: 40, focus: "red" },
		{ val: 50 },
		{ val: 45 },
	],
}).render();
const bst_gen_trav6 = new csmd.Tree({
	id: "bst_gen_trav6",
	directed: true,
	width: 350,
	height: 250,
	container_width: 100,
	container_height: 40,
	data: [
		{ child: "30", parent: "", pointer: "root" },
		{ child: "20", parent: "30" },
		{ child: "40", parent: "30" },
		{ child: "10", parent: "20" },
		{ child: "25", parent: "20", pointer: "t,p" },
		{ child: "c", parent: "10", display: "none" },
		{ child: "15", parent: "10" },
		// { child: "40", parent: "50" },
		// { child: "60", parent: "50" },
	],
}).render();
const bst_gen_stack6 = new csmd.Stack({
	id: "bst_gen_stack6",
	width: 100,
	height: 30,
	colorFrame: "dodgerblue",
	colorStroke: "blue",
	colorText: "white",
	data: [{ val: "" }, { val: "" }, { val: "" }],
}).render();

const bst_cost_arr1 = new csmd.Sequence({
	id: "bst_cost_arr1",
	indexed: true,
	data: [
		{ val: 40 },
		{ val: 20 },
		{ val: 30 },
		{ val: 60 },
		{ val: 50 },
		{ val: 10 },
		{ val: 70 },
	],
}).render();
const bst_cost_arr2 = new csmd.Sequence({
	id: "bst_cost_arr2",
	indexed: true,
	data: [
		{ val: 10 },
		{ val: 20 },
		{ val: 30 },
		{ val: 40 },
		{ val: 50 },
		{ val: 60 },
		{ val: 70 },
	],
}).render();

const bst_cost_tree_1 = new csmd.Tree({
	id: "bst_cost_tree_1",
	heightMarked: true,
	edgeLength: 130,
	width: 200,
	height: 180,
	container_height: 30,
	data: [
		{ child: "40", parent: "" },

		{ child: "20", parent: "40" },
		{ child: "10", parent: "20" },
		{ child: "30", parent: "20" },

		{ child: "60", parent: "40" },
		{ child: "50", parent: "60" },
		{ child: "70", parent: "60" },
	],
}).render();

const bst_cost_tree_2 = new csmd.Tree({
	id: "bst_cost_tree_2",
	heightMarked: true,
	edgeLength: 140,
	width: 350,
	height: 250,
	container_width: 50,
	container_height: 30,
	data: [
		{ child: "10", parent: "" },

		{ child: "a", parent: "10", display: "none" },
		{ child: "20", parent: "10" },

		{ child: "b", parent: "20", display: "none" },
		{ child: "30", parent: "20" },

		{ child: "c", parent: "30", display: "none" },
		{ child: "40", parent: "30" },

		{ child: "d", parent: "40", display: "none" },
		{ child: "50", parent: "40" },

		{ child: "e", parent: "50", display: "none" },
		{ child: "60", parent: "50" },

		{ child: "f", parent: "60", display: "none" },
		{ child: "70", parent: "60" },
	],
}).render();

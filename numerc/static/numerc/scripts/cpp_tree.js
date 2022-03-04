import { cdemo } from "../CDemo.mjs";

const introTree = {
	id: "introTree",
	leveled: "true",
	heightMarked: "true",
	width: 500,
	height: 250,
	treeData: [
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
};
cdemo.renderTree(introTree);

const binaryTreeIntro = {
	id: "binaryTreeIntro",
	width: 400,
	height: 200,
	treeData: [
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
};
cdemo.renderTree(binaryTreeIntro);

const skewLeftBinaryTree = {
	id: "skewLeftBinaryTree",
	skew: "left",
	width: 450,
	height: 200,
	treeData: [
		{ child: "1", parent: "" },
		{ child: "2", parent: "1" },
		{ child: "3", parent: "2" },
		{ child: "4", parent: "3" },
	],
};
cdemo.renderTree(skewLeftBinaryTree);

const linearBinaryTree = {
	id: "linearBinaryTree",
	width: 450,
	height: 200,
	treeData: [
		{ child: "1", parent: "" },
		{ child: "2", parent: "1" },
		{ child: "3", parent: "2" },
		{ child: "4", parent: "3" },
	],
};
cdemo.renderTree(linearBinaryTree);

const skewRightBinaryTree = {
	id: "skewRightBinaryTree",
	skew: "right",
	width: 450,
	height: 200,
	treeData: [
		{ child: "1", parent: "" },
		{ child: "2", parent: "1" },
		{ child: "3", parent: "2" },
		{ child: "4", parent: "3" },
	],
};
cdemo.renderTree(skewRightBinaryTree);

const tree_path_0 = {
	id: "tree_path_0",
	width: 350,
	height: 350,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(tree_path_0);

const tree_path_1 = {
	id: "tree_path_1",
	width: 350,
	height: 350,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(tree_path_1);

const tree_path_2 = {
	id: "tree_path_2",
	width: 350,
	height: 350,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(tree_path_2);

const tree_depth_0 = {
	id: "tree_depth_0",
	depth: "mark",
	width: 350,
	height: 350,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(tree_depth_0);

const tree_height_0 = {
	id: "tree_height_0",
	heightMarked: true,
	width: 350,
	height: 350,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(tree_height_0);

const parent_child_tree = {
	id: "parent_child_tree",
	width: 350,
	height: 250,
	paddingBottom: "35%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "a" },
		{ child: "e", parent: "b" },
		{ child: "f", parent: "b" },
	],
};
cdemo.renderTree(parent_child_tree);

const tree_order_3 = {
	id: "tree_order_3",
	width: 350,
	height: 100,
	paddingBottom: "25%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(tree_order_3);

const tree_order_5 = {
	id: "tree_order_5",
	width: 350,
	height: 250,
	paddingBottom: "45%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "d", parent: "b" },
	],
};
cdemo.renderTree(tree_order_5);

const tree_order_8 = {
	id: "tree_order_8",
	width: 400,
	height: 350,
	paddingBottom: "55%",
	treeData: [
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
};
cdemo.renderTree(tree_order_8);

const foliage_count = {
	id: "foliage_count",
	width: 400,
	height: 350,
	paddingBottom: "55%",
	treeData: [
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
};
cdemo.renderTree(foliage_count);

const tree_ancestor = {
	id: "tree_ancestor",
	width: 350,
	height: 200,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(tree_ancestor);

const tree_strict_descendants = {
	id: "tree_strict_descendants",
	width: 350,
	height: 200,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(tree_strict_descendants);

const tree_strict_ancestors = {
	id: "tree_strict_ancestors",
	width: 350,
	height: 200,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(tree_strict_ancestors);

const tree_siblings = {
	id: "tree_siblings",
	width: 350,
	height: 200,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(tree_siblings);

const node_degree = {
	id: "node_degree",
	width: 350,
	height: 200,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(node_degree);

const k_equals_2 = {
	id: "k_equals_2",
	width: 350,
	height: 200,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(k_equals_2);

const k_equals_4 = {
	id: "k_equals_4",
	width: 350,
	height: 200,
	paddingBottom: "45%",
	treeData: [
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
};
cdemo.renderTree(k_equals_4);

const abt1 = {
	id: "abt1",
	width: 350,
	height: 200,
	treeData: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
	],
};
cdemo.renderTree(abt1);

const abt1_array = {
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
};
cdemo.renderStaticArray(abt1_array);

const abt1_array_level1 = {
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
};
cdemo.renderStaticArray(abt1_array_level1);

const abt1_array_level2 = {
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
};
cdemo.renderStaticArray(abt1_array_level2);

const abt1_array_level3 = {
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
};
cdemo.renderStaticArray(abt1_array_level3);

const lbt1 = {
	id: "lbt1",
	width: 350,
	height: 200,
	treeData: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
	],
};
cdemo.renderTree(lbt1);

const perfect_abt1 = {
	id: "perfect_abt1",
	width: 350,
	height: 200,
	treeData: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C" },
	],
};
cdemo.renderTree(perfect_abt1);

const perfect_abt1_array = {
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
};
cdemo.renderStaticArray(perfect_abt1_array);

const complete_abt1 = {
	id: "complete_abt1",
	width: 350,
	height: 200,
	treeData: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B" },
		{ child: "F", parent: "C" },
		{ child: "G", parent: "C", display: "none" },
	],
};
cdemo.renderTree(complete_abt1);

const complete_abt1_array = {
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
};
cdemo.renderStaticArray(complete_abt1_array);

const incomplete_abt1 = {
	id: "incomplete_abt1",
	width: 350,
	height: 200,
	treeData: [
		{ child: "A", parent: "" },
		{ child: "B", parent: "A" },
		{ child: "C", parent: "A" },
		{ child: "D", parent: "B" },
		{ child: "E", parent: "B", display: "none" },
		{ child: "F", parent: "C", display: "none" },
		{ child: "G", parent: "C" },
	],
};
cdemo.renderTree(incomplete_abt1);

const incomplete_abt1_array = {
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
};
cdemo.renderStaticArray(incomplete_abt1_array);

const _3node_preorder = {
	id: "_3node_preorder",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(_3node_preorder);

const _3node_preorder_visit = {
	id: "_3node_preorder_visit",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", focus: "salmon", annotate: 1 },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(_3node_preorder_visit);

const _3node_preorder_left_subtree = {
	id: "_3node_preorder_left_subtree",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", focus: "salmon", annotate: 2 },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(_3node_preorder_left_subtree);

const _3node_preorder_right_subtree = {
	id: "_3node_preorder_right_subtree",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", annotate: 2 },
		{ child: "c", parent: "a", focus: "salmon", annotate: 3 },
	],
};
cdemo.renderTree(_3node_preorder_right_subtree);

const _2nodeleft_preorder = {
	id: "_2nodeleft_preorder",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", annotate: 2 },
		{ child: "c", parent: "a", display: "none" },
	],
};
cdemo.renderTree(_2nodeleft_preorder);

const _2noderight_preorder = {
	id: "_2noderight_preorder",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", display: "none" },
		{ child: "c", parent: "a", annotate: 2 },
	],
};
cdemo.renderTree(_2noderight_preorder);

const _3node_inorder = {
	id: "_3node_inorder",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(_3node_inorder);

const _3node_inorder_visit = {
	id: "_3node_inorder_visit",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", focus: "salmon", annotate: 1 },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(_3node_inorder_visit);

const _3node_inorder_visit_root = {
	id: "_3node_inorder_visit_root",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", focus: "salmon", annotate: 2 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(_3node_inorder_visit_root);

const _3node_inorder_visit_right = {
	id: "_3node_inorder_visit_right",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 2 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", focus: "salmon", annotate: 3 },
	],
};
cdemo.renderTree(_3node_inorder_visit_right);

const _2nodeleft_inorder = {
	id: "_2nodeleft_inorder",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 2 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", display: "none" },
	],
};
cdemo.renderTree(_2nodeleft_inorder);

const _2noderight_inorder = {
	id: "_2noderight_inorder",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", display: "none" },
		{ child: "c", parent: "a", annotate: 2 },
	],
};
cdemo.renderTree(_2noderight_inorder);

const _3node_post_order_tree = {
	id: "_3node_post_order_tree",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(_3node_post_order_tree);

const _3node_post_order_tree_visit_left = {
	id: "_3node_post_order_tree_visit_left",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", focus: "salmon", annotate: 1 },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(_3node_post_order_tree_visit_left);

const _3node_post_order_tree_visit_right = {
	id: "_3node_post_order_tree_visit_right",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", focus: "salmon", annotate: 2 },
	],
};
cdemo.renderTree(_3node_post_order_tree_visit_right);

const _3node_post_order_tree_visit_root = {
	id: "_3node_post_order_tree_visit_root",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", focus: "salmon", annotate: 3 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", annotate: 2 },
	],
};
cdemo.renderTree(_3node_post_order_tree_visit_root);

const left_skew_post_order = {
	id: "left_skew_post_order",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 2 },
		{ child: "b", parent: "a", annotate: 1 },
		{ child: "c", parent: "a", display: "none" },
	],
};
cdemo.renderTree(left_skew_post_order);

const right_skew_post_order = {
	id: "right_skew_post_order",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 2 },
		{ child: "b", parent: "a", display: "none" },
		{ child: "c", parent: "a", annotate: 1 },
	],
};
cdemo.renderTree(right_skew_post_order);

const genverse_gen1 = {
	id: "genverse_gen1",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", focus: "salmon", annotate: 1 },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(genverse_gen1);

const genverse_gen2_left = {
	id: "genverse_gen2_left",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", focus: "salmon", annotate: 2 },
		{ child: "c", parent: "a" },
	],
};
cdemo.renderTree(genverse_gen2_left);

const genverse_gen2_right = {
	id: "genverse_gen2_right",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", annotate: 2 },
		{ child: "c", parent: "a", focus: "salmon", annotate: 3 },
	],
};
cdemo.renderTree(genverse_gen2_right);

const genverse_gen2_skew_left = {
	id: "genverse_gen2_skew_left",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", annotate: 2 },
		{ child: "c", parent: "a", display: "none" },
	],
};
cdemo.renderTree(genverse_gen2_skew_left);

const genverse_gen2_skew_right = {
	id: "genverse_gen2_skew_right",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "20%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", display: "none" },
		{ child: "c", parent: "a", annotate: 2 },
	],
};
cdemo.renderTree(genverse_gen2_skew_right);

const big_traverse = {
	id: "big_traverse",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "30%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a" },
		{ child: "c", parent: "a" },
		{ child: "d", parent: "b" },
		{ child: "e", parent: "b" },
		{ child: "f", parent: "c" },
		{ child: "g", parent: "c" },
	],
};
cdemo.renderTree(big_traverse);

const big_traverse_subtree = {
	id: "big_traverse_subtree",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "30%",
	treeData: [
		{ child: "a", parent: "" },
		{ child: "b", parent: "a", focus: "#D7E9F7" },
		{ child: "c", parent: "a", focus: "#D9D7F1" },
		{ child: "d", parent: "b", focus: "#D7E9F7" },
		{ child: "e", parent: "b", focus: "#D7E9F7" },
		{ child: "f", parent: "c", focus: "#D9D7F1" },
		{ child: "g", parent: "c", focus: "#D9D7F1" },
	],
};
cdemo.renderTree(big_traverse_subtree);

const big_traverse_subtree_preorder = {
	id: "big_traverse_subtree_preorder",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "60%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", focus: "#D7E9F7", annotate: 2 },
		{ child: "c", parent: "a", focus: "#D9D7F1", annotate: 5 },
		{ child: "d", parent: "b", focus: "#D7E9F7", annotate: 3 },
		{ child: "e", parent: "b", focus: "#D7E9F7", annotate: 4 },
		{ child: "f", parent: "c", focus: "#D9D7F1", annotate: 6 },
		{ child: "g", parent: "c", focus: "#D9D7F1", annotate: 7 },
	],
};
cdemo.renderTree(big_traverse_subtree_preorder);

const big_traverse_subtree_inorder = {
	id: "big_traverse_subtree_inorder",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "60%",
	treeData: [
		{ child: "a", parent: "", annotate: 4 },
		{ child: "b", parent: "a", focus: "#D7E9F7", annotate: 2 },
		{ child: "c", parent: "a", focus: "#D9D7F1", annotate: 6 },
		{ child: "d", parent: "b", focus: "#D7E9F7", annotate: 1 },
		{ child: "e", parent: "b", focus: "#D7E9F7", annotate: 3 },
		{ child: "f", parent: "c", focus: "#D9D7F1", annotate: 5 },
		{ child: "g", parent: "c", focus: "#D9D7F1", annotate: 7 },
	],
};
cdemo.renderTree(big_traverse_subtree_inorder);

const big_traverse_subtree_postorder = {
	id: "big_traverse_subtree_postorder",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "60%",
	treeData: [
		{ child: "a", parent: "", annotate: 7 },
		{ child: "b", parent: "a", focus: "#D7E9F7", annotate: 3 },
		{ child: "c", parent: "a", focus: "#D9D7F1", annotate: 6 },
		{ child: "d", parent: "b", focus: "#D7E9F7", annotate: 1 },
		{ child: "e", parent: "b", focus: "#D7E9F7", annotate: 2 },
		{ child: "f", parent: "c", focus: "#D9D7F1", annotate: 4 },
		{ child: "g", parent: "c", focus: "#D9D7F1", annotate: 5 },
	],
};
cdemo.renderTree(big_traverse_subtree_postorder);

const big_traverse_subtree_generational = {
	id: "big_traverse_subtree_generational",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "60%",
	treeData: [
		{ child: "a", parent: "", annotate: 1 },
		{ child: "b", parent: "a", focus: "#D7E9F7", annotate: 2 },
		{ child: "c", parent: "a", focus: "#D9D7F1", annotate: 3 },
		{ child: "d", parent: "b", focus: "#D7E9F7", annotate: 4 },
		{ child: "e", parent: "b", focus: "#D7E9F7", annotate: 5 },
		{ child: "f", parent: "c", focus: "#D9D7F1", annotate: 6 },
		{ child: "g", parent: "c", focus: "#D9D7F1", annotate: 7 },
	],
};
cdemo.renderTree(big_traverse_subtree_generational);

const tree_b1 = {
	id: "tree_b1",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "40%",
	treeData: [
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
};
cdemo.renderTree(tree_b1);

const tree_b1_queue = {
	id: "tree_b1_queue",
	divWidth: 50,
	paddingBottom: 25,
	indexed: true,
	data: [
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(tree_b1_queue);

const tree_b1_queue_with_root = {
	id: "tree_b1_queue_with_root",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(tree_b1_queue_with_root);

const tree_b1_1 = {
	id: "tree_b1_1",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "10%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_1);

const tree_b1_1_p = {
	id: "tree_b1_1_p",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "10%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_1_p);

const tree_b1_queue_with_root_dequeue = {
	id: "tree_b1_queue_with_root_dequeue",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red", annotate: "p" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(tree_b1_queue_with_root_dequeue);

const tree_b1_queue_with_2 = {
	id: "tree_b1_queue_with_2",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "20%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_queue_with_2);

const tree_b1_2_p = {
	id: "tree_b1_2_p",
	divWidth: 80,
	paddingBottom: 40,
	indexed: true,
	data: [
		{ val: "F0", emphasis: "red" },
		{ val: "F1", annotate: "t" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(tree_b1_2_p);

const tree_b1_queue_with_3 = {
	id: "tree_b1_queue_with_3",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "20%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_queue_with_3);

const tree_b1_3_p = {
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
};
cdemo.renderQueue(tree_b1_3_p);

const tree_b1_1_gen2 = {
	id: "tree_b1_1_gen2",
	width: 250,
	height: 200,
	divWidth: "60%",
	paddingBottom: "50%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_1_gen2);

const tree_b1_4_p = {
	id: "tree_b1_4_p",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "20%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_4_p);

const tree_b1_queue_with_4 = {
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
};
cdemo.renderQueue(tree_b1_queue_with_4);

const tree_b1_4 = {
	id: "tree_b1_4",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "60%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_4);

const tree_b1_queue_4 = {
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
};
cdemo.renderQueue(tree_b1_queue_4);

const tree_b1_5 = {
	id: "tree_b1_5",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "60%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_5);

const tree_b1_queue_5 = {
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
};
cdemo.renderQueue(tree_b1_queue_5);

const tree_b1_1_gen3 = {
	id: "tree_b1_1_gen3",
	width: 250,
	height: 200,
	divWidth: "60%",
	paddingBottom: "50%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_1_gen3);

const tree_b1_6 = {
	id: "tree_b1_6",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "60%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_6);

const tree_b1_queue_6 = {
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
};
cdemo.renderQueue(tree_b1_queue_6);

const tree_b1_7 = {
	id: "tree_b1_7",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "80%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_7);

const tree_b1_queue_7 = {
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
};
cdemo.renderQueue(tree_b1_queue_7);

const tree_b1_8 = {
	id: "tree_b1_8",
	width: 200,
	height: 200,
	divWidth: "80%",
	paddingBottom: "80%",
	treeData: [
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
};
cdemo.renderTree(tree_b1_8);

const tree_b1_queue_8 = {
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
};
cdemo.renderQueue(tree_b1_queue_8);

const create_tree_sample = {
	id: "create_tree_sample",
	width: 200,
	height: 200,
	divWidth: "40%",
	paddingBottom: "30%",
	treeData: [
		{ child: "3", parent: "" },
		{ child: "2", parent: "3" },
		{ child: "1", parent: "3" },
		{ child: "7", parent: "2" },
		{ child: "4", parent: "2" },
		{ child: "8", parent: "1" },
		{ child: "", parent: "1", display: "none" },
	],
};
cdemo.renderTree(create_tree_sample);

const circular_queue_tree = {
	id: "circular_queue_tree",
	divWidth: 50,
	paddingBottom: 25,
	data: ["", "", "", "", "", "", "", "", "", ""],
	pointer: {},
	indexed: true,
};
cdemo.renderCircularQueue(circular_queue_tree);

const root_queued = {
	id: "root_queued",
	divWidth: 100,
	paddingBottom: 50,
	data: ["0x1", "", "", "", "", "", "", "", "", ""],
	pointer: {},
	indexed: true,
};
cdemo.renderCircularQueue(root_queued);

const root_left_child_queued = {
	id: "root_left_child_queued",
	divWidth: 100,
	paddingBottom: 50,
	data: ["0x1", "0x2", "", "", "", "", "", "", "", ""],
	pointer: {},
	indexed: true,
};
cdemo.renderCircularQueue(root_left_child_queued);

const root_right_child_queued = {
	id: "root_right_child_queued",
	divWidth: 100,
	paddingBottom: 50,
	data: ["0x1", "0x2", "0x3", "", "", "", "", "", "", ""],
	pointer: {},
	focus: {
		0: "y",
	},
	indexed: true,
};
cdemo.renderCircularQueue(root_right_child_queued);

const new_front1 = {
	id: "new_front1",
	divWidth: 60,
	paddingBottom: 30,
	data: ["", "0x2", "0x3", "", "", "", "", "", "", ""],
	pointer: {},
	focus: {
		1: "y",
	},
	indexed: true,
};
cdemo.renderCircularQueue(new_front1);

const traversal_1 = {
	id: "traversal_1",
	width: 200,
	height: 200,
	directed: true,
	divWidth: "40%",
	paddingBottom: "30%",
	treeData: [
		{ child: "8", parent: "", annotate: "root" },
		{ child: "3", parent: "8", edgeLabel: "F1" },
		{ child: "5", parent: "8", edgeLabel: "F2" },
		{ child: "4", parent: "3", edgeLabel: "F3" },
		{ child: "9", parent: "3", edgeLabel: "F4" },
		{ child: "7", parent: "5", edgeLabel: "F5" },
		{ child: "2", parent: "5", edgeLabel: "F6" },
	],
};
cdemo.renderTree(traversal_1);

const preorder_trace1 = {
	id: "preorder_trace1",
	width: 250,
	divWidth: "100%",
	height: 50,
	paddingBottom: "25%",
	treeData: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
	],
};
cdemo.renderCallTrace(preorder_trace1);

const preorder_trace2 = {
	id: "preorder_trace2",
	width: 250,
	divWidth: "100%",
	height: 50,
	paddingBottom: "25%",
	treeData: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
	],
};
cdemo.renderCallTrace(preorder_trace2);

const preorder_trace3 = {
	id: "preorder_trace3",
	width: 280,
	divWidth: "100%",
	height: 90,
	paddingBottom: "25%",
	treeData: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
		{ child: "3", parent: "preorder(F1)" },
		{ child: "preorder(F3)", parent: "preorder(F1)" },
	],
};
cdemo.renderCallTrace(preorder_trace3);

const preorder_trace4 = {
	id: "preorder_trace4",
	width: 280,
	divWidth: "100%",
	height: 90,
	paddingBottom: "25%",
	treeData: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
		{ child: "3", parent: "preorder(F1)" },
		{ child: "preorder(F3)", parent: "preorder(F1)" },
		{ child: "4", parent: "preorder(F3)" },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
	],
};
cdemo.renderCallTrace(preorder_trace4);

const preorder_trace5 = {
	id: "preorder_trace5",
	width: 280,
	divWidth: "100%",
	height: 100,
	paddingBottom: "35%",
	treeData: [
		{ child: "preorder(F0)", parent: "" },
		{ child: "8", parent: "preorder(F0)" },
		{ child: "preorder(F1)", parent: "preorder(F0)" },
		{ child: "3", parent: "preorder(F1)" },
		{ child: "preorder(F3)", parent: "preorder(F1)" },
		{ child: "4", parent: "preorder(F3)" },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
		{ child: "preorder(0)", parent: "preorder(F3)", call: true },
	],
};
cdemo.renderCallTrace(preorder_trace5);

const preorder_trace6 = {
	id: "preorder_trace6",
	width: 400,
	divWidth: "100%",
	height: 320,
	paddingBottom: "85%",
	treeData: [
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
};
cdemo.renderCallTrace(preorder_trace6);

const preorder_trace_final = {
	id: "preorder_trace_final",
	width: 460,
	divWidth: "85%",
	height: 340,
	paddingBottom: "65%",
	treeData: [
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
};
cdemo.renderCallTrace(preorder_trace_final);

const preorder_loop = {
	id: "preorder_loop",
	width: 200,
	height: 200,
	directed: true,
	divWidth: "70%",
	paddingBottom: "30%",
	treeData: [
		{ child: "8", parent: "", annotate: "root" },
		{ child: "3", parent: "8", edgeLabel: "F1" },
		{ child: "5", parent: "8", edgeLabel: "F2" },
		{ child: "4", parent: "3", edgeLabel: "F3" },
		{ child: "9", parent: "3", edgeLabel: "F4" },
		{ child: "7", parent: "5", edgeLabel: "F5" },
		{ child: "2", parent: "5", edgeLabel: "F6" },
	],
};
cdemo.renderTree(preorder_loop);

const inorder_tree_demo = {
	id: "inorder_tree_demo",
	width: 200,
	height: 200,
	directed: true,
	divWidth: "40%",
	paddingBottom: "30%",
	treeData: [
		{ child: "3", parent: "", annotate: "root" },
		{ child: "8", parent: "3", edgeLabel: "F1" },
		{ child: "9", parent: "3", edgeLabel: "F2" },
		{ child: "2", parent: "8", edgeLabel: "F3" },
		{ child: "6", parent: "8", edgeLabel: "F4" },
		{ child: "1", parent: "9", edgeLabel: "F5" },
		{ child: "5", parent: "9", edgeLabel: "F6" },
	],
};
cdemo.renderTree(inorder_tree_demo);

const inorder_trace_f1 = {
	id: "inorder_trace_f1",
	width: 350,
	height: 150,
	directed: true,
	divWidth: "60%",
	paddingBottom: "30%",
	treeData: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
	],
};
cdemo.renderCallTrace(inorder_trace_f1);

const inorder_trace_f3 = {
	id: "inorder_trace_f3",
	width: 450,
	height: 150,
	directed: true,
	divWidth: "80%",
	paddingBottom: "30%",
	treeData: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
	],
};
cdemo.renderCallTrace(inorder_trace_f3);

const inorder_trace_f3_1 = {
	id: "inorder_trace_f3_1",
	width: 450,
	height: 150,
	directed: true,
	divWidth: "80%",
	paddingBottom: "30%",
	treeData: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "2", parent: "inorder(F3)" },
	],
};
cdemo.renderCallTrace(inorder_trace_f3_1);

const inorder_trace_f3_2 = {
	id: "inorder_trace_f3_2",
	width: 450,
	height: 150,
	directed: true,
	divWidth: "80%",
	paddingBottom: "30%",
	treeData: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "2", parent: "inorder(F3)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
	],
};
cdemo.renderCallTrace(inorder_trace_f3_2);

const inorder_trace_f1_1 = {
	id: "inorder_trace_f1_1",
	width: 450,
	height: 150,
	directed: true,
	divWidth: "80%",
	paddingBottom: "30%",
	treeData: [
		{ child: "inorder(F0)", parent: "" },
		{ child: "inorder(F1)", parent: "inorder(F0)" },
		{ child: "inorder(F3)", parent: "inorder(F1)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "2", parent: "inorder(F3)" },
		{ child: "inorder(0)", parent: "inorder(F3)", call: true },
		{ child: "8", parent: "inorder(F1)" },
	],
};
cdemo.renderCallTrace(inorder_trace_f1_1);

const inorder_trace_f4 = {
	id: "inorder_trace_f4",
	width: 450,
	height: 150,
	directed: true,
	divWidth: "80%",
	paddingBottom: "30%",
	treeData: [
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
};
cdemo.renderCallTrace(inorder_trace_f4);

const inorder_trace_f4_1 = {
	id: "inorder_trace_f4_1",
	width: 450,
	height: 150,
	directed: true,
	divWidth: "80%",
	paddingBottom: "30%",
	treeData: [
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
};
cdemo.renderCallTrace(inorder_trace_f4_1);

const inorder_trace_final = {
	id: "inorder_trace_final",
	width: 450,
	height: 200,
	directed: true,
	divWidth: "80%",
	paddingBottom: "50%",
	treeData: [
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
};
cdemo.renderCallTrace(inorder_trace_final);

const postorder_sample = {
	id: "postorder_sample",
	width: 200,
	height: 200,
	directed: true,
	divWidth: "40%",
	paddingBottom: "30%",
	treeData: [
		{ child: "4", parent: "", annotate: "root" },
		{ child: "9", parent: "4", edgeLabel: "F1" },
		{ child: "7", parent: "4", edgeLabel: "F2" },
		{ child: "6", parent: "9", edgeLabel: "F3" },
		{ child: "2", parent: "9", edgeLabel: "F4" },
		{ child: "0", parent: "7", edgeLabel: "F5" },
		{ child: "1", parent: "7", edgeLabel: "F6" },
	],
};
cdemo.renderTree(postorder_sample);

const postorder_trace_final = {
	id: "postorder_trace_final",
	width: 450,
	height: 200,
	directed: true,
	divWidth: "80%",
	paddingBottom: "50%",
	treeData: [
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
};
cdemo.renderCallTrace(postorder_trace_final);

const preorder_stack_growth = {
	id: "preorder_stack_growth",
	divWidth: 90,
	paddingBottom: 18,
	width: 690,
	height: 290,
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
};
cdemo.renderStackGrowth(preorder_stack_growth);

const inorder_stack_growth = {
	id: "inorder_stack_growth",
	divWidth: 90,
	paddingBottom: 18,
	width: 690,
	height: 290,
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
};
cdemo.renderStackGrowth(inorder_stack_growth);



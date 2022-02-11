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
		{ child: "1", parent: "", annotate: 'root'},
		{ child: "2", parent: "1", annotate: 'left child'},
		{ child: "3", parent: "1", annotate: 'right child'},
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
	skew: 'left',
	width: 450,
	height: 200,
	treeData: [
		{ child: "1", parent: ""},
		{ child: "2", parent: "1"},
		{ child: "3", parent: "2"},
		{ child: "4", parent: "3"},
	],
};
cdemo.renderTree(skewLeftBinaryTree);

const linearBinaryTree = {
	id: "linearBinaryTree",
	width: 450,
	height: 200,
	treeData: [
		{ child: "1", parent: ""},
		{ child: "2", parent: "1"},
		{ child: "3", parent: "2"},
		{ child: "4", parent: "3"},
	],
};
cdemo.renderTree(linearBinaryTree);

const skewRightBinaryTree = {
	id: "skewRightBinaryTree",
	skew: 'right',
	width: 450,
	height: 200,
	treeData: [
		{ child: "1", parent: ""},
		{ child: "2", parent: "1"},
		{ child: "3", parent: "2"},
		{ child: "4", parent: "3"},
	],
};
cdemo.renderTree(skewRightBinaryTree);
import * as csmd from "../csmd/csmd.mjs";

const primeFactor1 = new csmd.Tree({
	id: "primeFactor1",
	width: 300,
	height: 300,
	container_width: 60,
	container_height: 25,
	data: [
		{ child: "100", parent: ""},
		{ child: "2", parent: "100"},
		{ child: "50", parent: "100"},
	],
}).render();

const primeFactor2 = new csmd.Tree({
	id: "primeFactor2",
	width: 300,
	height: 300,
	container_width: 60,
	container_height: 25,
	data: [
		{ child: "100", parent: ""},
		{ child: "2", parent: "100"},
		{ child: "50", parent: "100"},
		{ child: "2 ", parent: "50"},
		{ child: "25", parent: "50"},
	],
}).render();

const primeFactor3 = new csmd.Tree({
	id: "primeFactor3",
	width: 300,
	height: 300,
	container_width: 70,
	container_height: 25,
	data: [
		{ child: "100", parent: ""},
		{ child: "2", parent: "100"},
		{ child: "50", parent: "100"},
		{ child: "2 ", parent: "50"},
		{ child: "25", parent: "50"},
		{ child: "5", parent: "25"},
		{ child: "5 ", parent: "25"},
	],
}).render();

const primeFactor4 = new csmd.Tree({
	id: "primeFactor4",
	width: 300,
	height: 300,
	container_width: 70,
	container_height: 25,
	data: [
		{ child: "100", parent: ""},
		{ child: "2", parent: "100"},
		{ child: "50", parent: "100"},
		{ child: "2 ", parent: "50"},
		{ child: "25", parent: "50"},
		{ child: "5", parent: "25"},
		{ child: "5 ", parent: "25"},
		{ child: "1", parent: "5 "},
		{ child: "5  ", parent: "5 "},
	],
}).render();
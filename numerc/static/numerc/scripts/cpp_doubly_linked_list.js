import * as csmd from "../csmd/csmd.mjs";

const dbl0 = new csmd.DLinkedList({
	id: 'dbl0',
	indexed: true,
	svg_width: 280,
	nodes: [
		{ data: 6 },
		{ data: 3 },
		{ data: 9 },
		{ data: 7 },
		{ data: 5 },
	]
}).render();
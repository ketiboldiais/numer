import * as csmd from "../csmd/csmd.mjs";

const compare_linkedlists_and_arrays = new csmd.HeatMap({
	id: "compare_linkedlists_and_arrays",
	width: 55,
	height: 30,
	margin: [0, 40, 80, 90],
	svg_width: 240,
	svg_height: 160,
	data: [
		{ v: "linked list", g: "indexed", l: -2 },
		{ v: "linked list", g: "random access", l: -2 },
		{ v: "linked list", g: "insertion", l: 0 },
		{ v: "linked list", g: "deletion", l: 0 },
		{ v: "linked list", g: "variable size", l: -1 },

		{ v: "static array", g: "indexed", l: 0 },
		{ v: "static array", g: "random access", l: 0 },
		{ v: "static array", g: "insertion", l: 5 },
		{ v: "static array", g: "deletion", l: 5 },
		{ v: "static array", g: "variable size", l: -2 },

		{ v: "dynamic array", g: "indexed", l: 0 },
		{ v: "dynamic array", g: "random access", l: 0 },
		{ v: "dynamic array", g: "insertion", l: 4 },
		{ v: "dynamic array", g: "deletion", l: 4 },
		{ v: "dynamic array", g: "variable size", l: -1 },
	],
}).render();

const register1 = new csmd.Memgram({
	id: "register1",
	width: 50,
	height: 25,
	registers: [
		{
			id: "h",
			ad: "0x100",
			val: "NULL",
		},
		{
			id: "temp",
			ad: "0x200",
			val: "0x500",
		},
		{},
		{
			id: "data",
			ad: "0x500",
			val: "010100",
		},
		{
			id: "next",
			ad: "0x600",
			val: "010100",
		},
	],
}).render();

const register2 = new csmd.Memgram({
	id: "register2",
	width: 50,
	height: 25,
	registers: [
		{
			id: "h",
			ad: "0x100",
			val: "NULL",
		},
		{
			id: "temp",
			ad: "0x200",
			val: "0x500",
		},
		{},
		{
			id: "data",
			ad: "0x500",
			val: "1",
		},
		{
			id: "next",
			ad: "0x600",
			val: "NULL",
		},
	],
}).render();

const LLintro = new csmd.LinkedList({
	id: "LLintro",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [{ data: 3 }, { data: 2 }, { data: 9 }, { data: 1 }, { data: 7 }],
}).render();

const LL_notation = new csmd.LinkedList({
	id: "LL_notation",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 5 },
		{ data: 3 },
		{ data: 1 },
	],
}).render();

const ll_traverse = new csmd.LinkedList({
	id: "ll_traverse",
	type: "single",
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7, ant: "p" },
		{ data: 5 },
		{ data: 3 },
		{ data: 1 },
	],
}).render();

const ll_traverse_recurse = new csmd.LinkedList({
	id: "ll_traverse_recurse",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 8 },
		{ data: 3 },
		{ data: 7 },
		{ data: 12 },
		{ data: 9 },
	],
}).render();

const ll_length = new csmd.LinkedList({
	id: "ll_length",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 8 },
		{ data: 3 },
		{ data: 7 },
		{ data: 12 },
		{ data: 9 },
	],
}).render();

const ll_sum = new csmd.LinkedList({
	id: "ll_sum",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 3 },
		{ data: 5 },
		{ data: 4 },
	],
}).render();

const ll_peakfinder = new csmd.LinkedList({
	id: "ll_peakfinder",
	type: "single",
	circular: "false",
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 312 },
		{ data: 219 },
		{ data: 317 },
		{ data: 319 },
	],
}).render();

const search_ll_1 = new csmd.LinkedList({
	id: "search_ll_1",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 9 },
		{ data: 5 },
		{ data: 2 },
		{ data: 4 },
	],
}).render();

const search_ll_2 = new csmd.LinkedList({
	id: "search_ll_2",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 8 },
		{ data: 3 },
		{ data: 7 },
		{ data: 4 },
	],
}).render();

const search_ll_3 = new csmd.LinkedList({
	id: "search_ll_3",
	type: "single",
	circular: "false",
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 8 },
		{ data: 3, pointer: "p" },
		{ data: 7 },
		{ data: 4 },
	],
}).render();

const prepend1 = new csmd.LinkedList({
	id: "prepend1",
	type: "single",
	width: 50,
	svg_width: 180,
	circular: "false",
	indexed: true,
	nodes: [{ data: "root" }, { data: 8 }, { data: 3 }, { data: 9 }],
}).render();

const prepend2 = new csmd.LinkedList({
	id: "prepend2",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 8 },
		{ data: 3 },
		{ data: 9 },
	],
}).render();

const get0 = new csmd.LinkedList({
	id: "get0",
	type: "single",
	circular: "false",
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 4 },
		{ data: 9 },
		{ data: 5 },
		{ data: 3 },
	],
}).render();

const set0 = new csmd.LinkedList({
	id: "set0",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 8 },
		{ data: 3 },
		{ data: 9 },
	],
}).render();

const set1 = new csmd.LinkedList({
	id: "set1",
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 5, ant: "set" },
		{ data: 3 },
		{ data: 9 },
	],
}).render();

const interpose0 = new csmd.LinkedList({
	id: "interpose0",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 8 },
		{ data: 3 },
		{ data: 9 },
	],
}).render();

const interpose01 = new csmd.LinkedList({
	id: "interpose01",
	type: "single",
	indexed: true,
	svg_width: 260,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 5, ant: "inserted" },
		{ data: 8 },
		{ data: 3 },
		{ data: 9 },
	],
}).render();

const interpose02 = new csmd.LinkedList({
	id: "interpose02",
	type: "single",
	svg_width: 260,
	nodes: [
		{ data: "root" },
		{ data: 7, ant: "t" },
		{ data: "" },
		{ data: 8, ant: "d" },
		{ data: 3 },
		{ data: 9 },
	],
}).render();

const insert3 = new csmd.List({
	id: "insert3",
	indexed: true,
	margin: [10, 40, 30, 40],
	svg_height: 70,
	width: 100,
	svg_width: 360,
	height: 15,
	data: [
		{ child: "root", parent: "" },
		{ child: 7, parent: "root", ant: "t" },
		{ child: "a", parent: "root", display: "none" },
		{ child: 5, parent: "a" },
		{ child: 8, parent: 7, ant: "d" },
		{ child: "b", parent: 8, display: "none" },
		{ child: 3, parent: 8 },
		{ child: 9, parent: 3 },
	],
}).render();

const interpose1 = new csmd.LinkedList({
	id: "interpose1",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 8 },
		{ data: 3 },
		{ data: 9 },
	],
}).render();

const interpose2 = new csmd.LinkedList({
	id: "interpose2",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7, ant: "p" },
		{ data: 8 },
		{ data: 3 },
		{ data: 9 },
	],
}).render();

const interpose3 = new csmd.LinkedList({
	id: "interpose3",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 8, ant: "p" },
		{ data: 3 },
		{ data: 9 },
	],
}).render();

const interpose4 = new csmd.LinkedList({
	id: "interpose4",
	type: "single",
	circular: "false",

	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 7 },
		{ data: 8 },
		{ data: 3, ant: "p" },
		{ data: 9 },
	],
}).render();

const insertionLL_2 = new csmd.LinkedList({
	id: "insertionLL_2",
	type: "single",
	circular: "false",
	svg_width: 100,
	width: 30,
	indexed: true,
	nodes: [{ data: "root" }, { data: 3 }],
}).render();

const insertionLL_3 = new csmd.LinkedList({
	id: "insertionLL_3",
	type: "single",
	circular: "false",
	svg_width: 140,
	width: 40,
	indexed: true,
	nodes: [{ data: "root" }, { data: 3 }, { data: 8 }],
}).render();

const insertionLL_4 = new csmd.LinkedList({
	id: "insertionLL_4",
	type: "single",
	circular: "false",
	svg_width: 200,
	width: 60,
	indexed: true,
	nodes: [{ data: "root" }, { data: 3 }, { data: 8 }, { data: 4 }],
}).render();

const insertionLL_5 = new csmd.LinkedList({
	id: "insertionLL_5",
	type: "single",
	circular: "false",
	svg_width: 100,
	width: 25,
	indexed: true,
	nodes: [{ data: "root" }, { data: "", ant: "h t" }],
}).render();

const insertionLL_6 = new csmd.LinkedList({
	id: "insertionLL_6",
	type: "single",
	circular: "false",
	svg_width: 140,
	width: 40,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: "", ant: "h" },
		{ data: "", ant: "t" },
	],
}).render();

const insertionLL_7 = new csmd.LinkedList({
	id: "insertionLL_7",
	type: "single",
	circular: "false",
	svg_width: 200,
	width: 50,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: "", ant: "h" },
		{ data: "" },
		{ data: "", ant: "t" },
	],
}).render();

const sortedLL1 = new csmd.LinkedList({
	id: "sortedLL1",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 70,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 7 },
		{ data: 9 },
		{ data: 15 },
		{ data: 20 },
	],
}).render();

const sortedLL2 = new csmd.LinkedList({
	id: "sortedLL2",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 70,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3, ant: "p" },
		{ data: 7 },
		{ data: 9 },
		{ data: 15 },
		{ data: 20 },
	],
}).render();

const sortedLL3 = new csmd.LinkedList({
	id: "sortedLL3",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 70,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 7, ant: "p" },
		{ data: 9 },
		{ data: 15 },
		{ data: 20 },
	],
}).render();

const sortedLL4 = new csmd.LinkedList({
	id: "sortedLL4",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 70,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 7 },
		{ data: 9, ant: "p" },
		{ data: 15 },
		{ data: 20 },
	],
}).render();

const sortedLL5 = new csmd.LinkedList({
	id: "sortedLL5",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 70,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 7 },
		{ data: 9 },
		{ data: 15, ant: "p" },
		{ data: 20 },
	],
}).render();

const sortedLL6 = new csmd.LinkedList({
	id: "sortedLL6",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 70,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 7 },
		{ data: 9 },
		{ data: 15 },
		{ data: 20, ant: "p" },
	],
}).render();

const sortedLL10 = new csmd.LinkedList({
	id: "sortedLL10",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 100,
	height: 15,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3, ant: "d" },
		{ data: 7 },
		{ data: 9 },
		{ data: 15 },
		{ data: 20 },
	],
}).render();

const sortedLL11 = new csmd.LinkedList({
	id: "sortedLL11",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 100,
	height: 15,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3, ant: "t" },
		{ data: 7, ant: "d" },
		{ data: 9 },
		{ data: 15 },
		{ data: 20 },
	],
}).render();

const sortedLL12 = new csmd.LinkedList({
	id: "sortedLL12",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 100,
	height: 15,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 7, ant: "t" },
		{ data: 9, ant: "d" },
		{ data: 15 },
		{ data: 20 },
	],
}).render();

const sortedLL13 = new csmd.LinkedList({
	id: "sortedLL13",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 100,
	height: 15,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 7 },
		{ data: 9, ant: "t" },
		{ data: 15, ant: "d" },
		{ data: 20 },
	],
}).render();

const sortedLL14 = new csmd.LinkedList({
	id: "sortedLL14",
	type: "single",
	circular: "false",
	svg_width: 260,
	width: 100,
	height: 15,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 7 },
		{ data: 9 },
		{ data: 15, ant: "t" },
		{ data: 20, ant: "d" },
	],
}).render();

const lop1 = new csmd.LinkedList({
	id: "lop1",
	type: "single",
	circular: "false",
	svg_width: 180,
	width: 50,
	indexed: true,
	nodes: [{ data: "root" }, { data: 8 }, { data: 7 }, { data: 3 }],
}).render();

const lop2 = new csmd.LinkedList({
	id: "lop2",
	type: "single",
	circular: "false",
	svg_width: 140,
	width: 40,
	indexed: true,
	nodes: [{ data: "root" }, { data: 7 }, { data: 3 }],
}).render();

const removeAt1 = new csmd.LinkedList({
	id: "removeAt1",
	type: "single",
	circular: "false",
	svg_width: 180,
	width: 50,
	indexed: true,
	nodes: [{ data: "root" }, { data: 8 }, { data: 3 }, { data: 7 }],
}).render();

const removeAt2 = new csmd.LinkedList({
	id: "removeAt2",
	type: "single",
	circular: "false",
	svg_width: 140,
	width: 40,
	indexed: true,
	nodes: [{ data: "root" }, { data: 8 }, { data: 7 }],
}).render();

const removeAt3 = new csmd.LinkedList({
	id: "removeAt3",
	type: "single",
	circular: "false",
	svg_width: 180,
	width: 50,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 8, ant: "t" },
		{ data: 3, ant: "d" },
		{ data: 7 },
	],
}).render();

const reverse0 = new csmd.LinkedList({
	id: "reverse0",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 8 },
		{ data: 7 },
		{ data: 3 },
		{ data: 5 },
	],
}).render();

const reverse1 = new csmd.LinkedList({
	id: "reverse1",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 5 },
		{ data: 3 },
		{ data: 7 },
		{ data: 8 },
	],
}).render();

const element_reverse_0 = new csmd.LinkedList({
	id: "element_reverse_0",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 6 },
		{ data: 8 },
		{ data: 9 },
	],
}).render();

const element_reverse_1 = new csmd.LinkedList({
	id: "element_reverse_1",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3, ant: "head" },
		{ data: 6 },
		{ data: 8 },
		{ data: 9, ant: "foot" },
	],
}).render();

const element_reverse_2 = new csmd.LinkedList({
	id: "element_reverse_2",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 9, ant: "head", colors: { text: "white", fill: "tomato" } },
		{ data: 6 },
		{ data: 8 },
		{ data: 3, ant: "foot", colors: { text: "white", fill: "tomato" } },
	],
}).render();

const element_reverse_3 = new csmd.LinkedList({
	id: "element_reverse_3",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 9 },
		{ data: 6, ant: "head" },
		{ data: 8, ant: "foot" },
		{ data: 3 },
	],
}).render();

const element_reverse_4 = new csmd.LinkedList({
	id: "element_reverse_4",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 9 },
		{ data: 8, ant: "head", colors: { text: "white", fill: "tomato" } },
		{ data: 6, ant: "foot", colors: { text: "white", fill: "tomato" } },
		{ data: 3 },
	],
}).render();

const element_reverse_5 = new csmd.LinkedList({
	id: "element_reverse_5",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 9 },
		{ data: 8 },
		{ data: 6 },
		{ data: 3 },
	],
}).render();

const element_reverse_6 = new csmd.LinkedList({
	id: "element_reverse_6",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 6 },
		{ data: 8 },
		{ data: 9 },
	],
}).render();

const array_reverse_6 = new csmd.Sequence({
	id: "array_reverse_6",
	width: 25,
	data: [{ val: "" }, { val: "" }, { val: "" }, { val: "" }],
}).render();

const element_reverse_7 = new csmd.LinkedList({
	id: "element_reverse_7",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3, ant: "p" },
		{ data: 6 },
		{ data: 8 },
		{ data: 9 },
	],
}).render();

const array_reverse_7 = new csmd.Sequence({
	id: "array_reverse_7",
	width: 25,
	data: [{ val: 3 }, { val: "" }, { val: "" }, { val: "" }],
}).render();

const element_reverse_8 = new csmd.LinkedList({
	id: "element_reverse_8",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3 },
		{ data: 6 },
		{ data: 8 },
		{ data: 9 },
	],
}).render();

const array_reverse_8 = new csmd.Sequence({
	id: "array_reverse_8",
	width: 25,
	data: [{ val: 3 }, { val: 6 }, { val: 8 }, { val: 9 }],
}).render();

const element_reverse_9 = new csmd.LinkedList({
	id: "element_reverse_9",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 3, ant: "p" },
		{ data: 6 },
		{ data: 8 },
		{ data: 9 },
	],
}).render();

const array_reverse_9 = new csmd.Sequence({
	id: "array_reverse_9",
	width: 25,
	data: [{ val: 3 }, { val: 6 }, { val: 8 }, { val: 9 }],
}).render();

const element_reverse_10 = new csmd.LinkedList({
	id: "element_reverse_10",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 9 },
		{ data: 8 },
		{ data: 6 },
		{ data: 3 },
	],
}).render();

const array_reverse_10 = new csmd.Sequence({
	id: "array_reverse_10",
	width: 25,
	data: [{ val: 3 }, { val: 6 }, { val: 8 }, { val: 9 }],
}).render();

const reverseLink0 = new csmd.LinkedList({
	id: "reverseLink0",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 9 },
		{ data: 8 },
		{ data: 6 },
		{ data: 3 },
	],
}).render();

const reverseLink1 = new csmd.List({
	id: "reverseLink1",
	margin: [10, 40, 30, 20],
	width: 90,
	svg_width: 400,
	svg_height: 120,
	height: 20,
	data: [
		{ child: "root", parent: "" },
		{ child: 9, parent: "root", ant: 'h d'},
		{ child: 'b', parent: "root", display: 'none'},
		{ child: "t1", parent: "b" },
		{ child: "t2", parent: "b" },
		{ child: 8, parent: 9 },
		{ child: 6, parent: 8 },
		{ child: 3, parent: 6 },
	],
}).render();

const recursive_reverse0 = new csmd.LinkedList({
	id: "recursive_reverse0",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root" },
		{ data: 1 },
		{ data: 2 },
		{ data: 3 },
	],
}).render();

const recursive_reverse1 = new csmd.LinkedList({
	id: "recursive_reverse1",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root", ant: 'head'},
		{ data: 1 },
		{ data: 2 },
		{ data: 3 },
	],
}).render();

const recursive_reverse2 = new csmd.LinkedList({
	id: "recursive_reverse2",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root", ant: 'head p'},
		{ data: 1 },
		{ data: 2 },
		{ data: 3 },
	],
}).render();

const recursive_reverse3 = new csmd.LinkedList({
	id: "recursive_reverse3",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root", ant: 'head q'},
		{ data: 1, ant: 'p'},
		{ data: 2 },
		{ data: 3 },
	],
}).render();

const recursive_reverse4 = new csmd.LinkedList({
	id: "recursive_reverse4",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root", ant: 'head'},
		{ data: 1, ant: 'q' },
		{ data: 2, ant: 'p'},
		{ data: 3 },
	],
}).render();

const recursive_reverse5 = new csmd.LinkedList({
	id: "recursive_reverse5",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root", ant: 'head'},
		{ data: 1 },
		{ data: 2, ant: 'q' },
		{ data: 3, ant: 'p'},
	],
}).render();

const recursive_reverse6 = new csmd.LinkedList({
	id: "recursive_reverse6",
	svg_width: 220,
	width: 60,
	indexed: true,
	nodes: [
		{ data: "root", ant: 'head'},
		{ data: 1 },
		{ data: 2 },
		{ data: 3, ant: 'q'},
	],
}).render();

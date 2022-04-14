import * as csmd from "../csmd/csmd.mjs";

const register1 = new csmd.Memgram({
	id: 'register1',
	width: 50,
	height: 25,
	registers: [
		{
			id: 'h',
			ad: '0x100',
			val: 'NULL'
		},
		{
			id: 'temp',
			ad: '0x200',
			val: '0x500'
		},
		{},
		{
			id: 'data',
			ad: '0x500',
			val: '010100'
		},
		{
			id: 'next',
			ad: '0x600',
			val: '010100'
		},
	],
}).render();

const register2 = new csmd.Memgram({
	id: 'register2',
	width: 50,
	height: 25,
	registers: [
		{
			id: 'h',
			ad: '0x100',
			val: 'NULL'
		},
		{
			id: 'temp',
			ad: '0x200',
			val: '0x500'
		},
		{},
		{
			id: 'data',
			ad: '0x500',
			val: '1'
		},
		{
			id: 'next',
			ad: '0x600',
			val: 'NULL'
		},
	],
}).render();

const LLintro = new csmd.LinkedList({
	id: "LLintro",
	type: "single",
	circular: "false",
	width: 100,
	height: 10,
	indexed: true,
	nodes: [
		{ data: 3 },
		{ data: 2 },
		{ data: 9 },
		{ data: 1 },
		{ data: 7 },
	],
}).render()

const LL_notation = new csmd.LinkedList({
	id: "LL_notation",
	type: "single",
	circular: "false",
	width: 100,
	height: 10,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 7 },
		{ data: 5 },
		{ data: 3 },
		{ data: 1 },
	],
}).render()

const ll_traverse = new csmd.LinkedList({
	id: "ll_traverse",
	type: "single",
	circular: "false",
	width: 100,
	height: 10,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 7 },
		{ data: 5 },
		{ data: 3 },
		{ data: 1 },
	],
}).render()

const ll_traverse_recurse = new csmd.LinkedList({
	id: "ll_traverse_recurse",
	type: "single",
	circular: "false",
	width: 100,
	height: 10,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 8 },
		{ data: 3 },
		{ data: 7 },
		{ data: 12 },
		{ data: 9 },
	],
}).render()

const ll_length = new csmd.LinkedList({
	id: "ll_length",
	type: "single",
	circular: "false",
	width: 100,
	height: 10,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 8 },
		{ data: 3 },
		{ data: 7 },
		{ data: 12 },
		{ data: 9 },
	],
}).render()

const ll_sum = new csmd.LinkedList({
	id: "ll_sum",
	type: "single",
	circular: "false",
	width: 100,
	height: 10,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 7 },
		{ data: 3 },
		{ data: 5 },
		{ data: 4 },
	],
}).render()

const ll_peakfinder = new csmd.LinkedList({
	id: "ll_peakfinder",
	type: "single",
	circular: "false",
	width: 100,
	height: 10,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 312 },
		{ data: 219 },
		{ data: 317 },
		{ data: 319 },
	],
}).render()

const search_ll_1 = new csmd.LinkedList({
	id: "search_ll_1",
	type: "single",
	circular: "false",
	width: 100,
	height: 10,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 3 },
		{ data: 9 },
		{ data: 5 },
		{ data: 2 },
		{ data: 4 },
	],
}).render()

const search_ll_2 = new csmd.LinkedList({
	id: "search_ll_2",
	type: "single",
	circular: "false",
	width: 100,
	height: 10,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 8 },
		{ data: 3 },
		{ data: 7 },
		{ data: 4 },
	],
}).render()

const search_ll_3 = new csmd.LinkedList({
	id: "search_ll_3",
	type: "single",
	circular: "false",
	width: 100,
	height: 15,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 8 },
		{ data: 3, pointer: 'p' },
		{ data: 7 },
		{ data: 4 },
	],
}).render()

const prepend1 = new csmd.LinkedList({
	id: "prepend1",
	type: "single",
	circular: "false",
	width: 100,
	height: 15,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 8 },
		{ data: 3 },
		{ data: 9 },
	],
}).render()

const prepend2 = new csmd.LinkedList({
	id: "prepend2",
	type: "single",
	circular: "false",
	width: 100,
	height: 15,
	indexed: true,
	nodes: [
		{ data: 'root' },
		{ data: 7 },
		{ data: 8 },
		{ data: 3 },
		{ data: 9 },
	],
}).render()

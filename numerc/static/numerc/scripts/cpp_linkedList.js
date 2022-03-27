import * as csmd from "../csmd.mjs";

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
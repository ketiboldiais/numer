import * as csmd from "../csmd.mjs";

const ast_graph = new csmd.Digraph({
	id: "ast_graph",
	width: 80,
	collide: 80,
	height: 60,
	svg_width: 400,
	svg_height: 310,
	strength: -300,
	distance: 60,
	data: {
		nodes: [
			{ name: "source code file" }, // 0
			{ name: "tokenizer" }, // 1
			{ name: "parser" }, // 2
			{ name: "treewalk interpreter" }, // 3
		],
		edges: [
			{ source: 0, target: 1, label: "source code" },
			{ source: 1, target: 2, label: "tokens" },
			{ source: 2, target: 3, label: "AST" },
		],
	},
}).render();

const sample_ast = new csmd.Tree({
	id: "sample_ast",
	width: 250,
	height: 320,
	edgeLength: 280,
	container_width: 40,
	container_height: 50,
	data: [
		{ child: "program", parent: "" },
		{ child: "=", parent: "program" },
		{ child: "x", parent: "=" },
		{ child: "15", parent: "=" },
		{ child: "= ", parent: "program" },
		{ child: "y", parent: "= " },
		{ child: "-", parent: "= " },
		{ child: "+", parent: "-" },
		{ child: "5", parent: "-" },
		{ child: "x", parent: "+" },
		{ child: "10", parent: "+" },
	],
}).render();

const bytecode_interpreter = new csmd.Digraph({
	id: "bytecode_interpreter",
	width: 90,
	collide: 80,
	height: 60,
	svg_width: 470,
	svg_height: 300,
	strength: -300,
	distance: 50,
	data: {
		nodes: [
			{ name: "source code file" }, // 0
			{ name: "tokenizer" }, // 1
			{ name: "parser" }, // 2
			{ name: "bytecode emitter" }, // 3
			{ name: "bytecode interpreter" }, // 4
		],
		edges: [
			{ source: 0, target: 1, label: "source code" },
			{ source: 1, target: 2, label: "tokens" },
			{ source: 2, target: 3, label: "AST" },
			{ source: 3, target: 4, label: "bytecode" },
		],
	},
}).render();

const stack_v_reg = new csmd.Flowchart({
	id: "stack_v_reg",
	collide: 70,
	width: 80,
	height: 50,
	svg_width: 600,
	svg_height: 350,
	data: {
		nodes: [
			{ name: "virtual machines", fill: "#EDF6E5" }, // 0
			{ name: "stack-based machines", fill: "#D7E9F7" }, // 1
			{
				name: "register-based machines",
				width: 90,
				height: 50,
				fill: "#F7DBF0",
			}, // 2
			{
				name: "stack for operands and operators",
				width: 115,
				height: 50,
				fill: "#D7E9F7",
			}, // 3
			{
				name: "result is on top of the stack",
				width: 100,
				fill: "#D7E9F7",
			}, // 4
			{
				name: "set of virtual registers",
				width: 100,
				fill: "#F7DBF0",
			}, // 5
			{
				name: "result is in accumulator register",
				width: 100,
				height: 90,
				fill: "#F7DBF0",
			}, // 6
			{
				name: "Mapped to real via register allocation",
				width: 115,
				fill: "#F7DBF0",
			}, // 7
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 0, target: 2 },
			{ source: 1, target: 3 },
			{ source: 1, target: 4 },
			{ source: 2, target: 5 },
			{ source: 2, target: 6 },
			{ source: 2, target: 7 },
		],
	},
}).render();

const stack_instruction = new csmd.Stack({
	id: 'stack_instruction',
	width: 80,
	height: 65,
	svg_width: 200,
	svg_height: 170,
	frameWidth: 80,
	frames: [
		{val: 'push $15', pointer: 'ip'},
		{val: 'set %0'},
		{val: 'push %0'},
		{val: 'push $10'},
		{val: 'add'},
		{val: 'push $5'},
		{val: 'sub'},
	]
}).render();


const result_instruction = new csmd.Stack({
	id: 'result_instruction',
	colorFrame: '#03506F',
	colorText: 'white',
	colorStroke: '#30475E',
	width: 80,
	height: 20,
	svg_width: 200,
	svg_height: 50,
	frameWidth: 80,
	frames: [
		{val: '15', pointer: 'sp'},
	]
}).render();

const stack_instruction1 = new csmd.Stack({
	id: 'stack_instruction1',
	width: 80,
	height: 70,
	svg_width: 200,
	svg_height: 170,
	frameWidth: 80,
	frames: [
		{val: 'push $15'},
		{val: 'set %0', pointer: 'ip'},
		{val: 'push %0'},
		{val: 'push $10'},
		{val: 'add'},
		{val: 'push $5'},
		{val: 'sub'},
	]
}).render();

const result_instruction1 = new csmd.Stack({
	id: 'result_instruction1',
	colorFrame: '#03506F',
	colorText: 'white',
	colorStroke: '#30475E',
	width: 80,
	height: 20,
	svg_width: 200,
	svg_height: 50,
	frameWidth: 80,
	frames: [
		{val: '15', pointer: 'sp'},
	]
}).render();

const var_instruction1 = new csmd.Stack({
	id: 'var_instruction1',
	colorFrame: '#F05454',
	colorText: 'white',
	colorStroke: 'firebrick',
	width: 80,
	height: 20,
	svg_width: 200,
	svg_height: 50,
	frameWidth: 80,
	frames: [
		{val: '%0 = 15'},
	]
}).render();

const stack_instruction2 = new csmd.Stack({
	id: 'stack_instruction2',
	width: 80,
	height: 70,
	svg_width: 200,
	svg_height: 170,
	frameWidth: 80,
	frames: [
		{val: 'push $15'},
		{val: 'set %0'},
		{val: 'push %0', pointer: 'ip'},
		{val: 'push $10'},
		{val: 'add'},
		{val: 'push $5'},
		{val: 'sub'},
	]
}).render();

const result_instruction2 = new csmd.Stack({
	id: 'result_instruction2',
	colorFrame: '#03506F',
	colorText: 'white',
	colorStroke: '#30475E',
	width: 80,
	height: 20,
	svg_width: 200,
	svg_height: 60,
	frameWidth: 80,
	frames: [
		{val: '%0 = 15', pointer: 'sp'},
	]
}).render();

const var_instruction2 = new csmd.Stack({
	id: 'var_instruction2',
	colorFrame: '#F05454',
	colorText: 'white',
	colorStroke: 'firebrick',
	width: 80,
	height: 20,
	svg_width: 200,
	svg_height: 50,
	frameWidth: 80,
	frames: [
		{val: '%0 = 15'},
	]
}).render();

const stack_instruction3 = new csmd.Stack({
	id: 'stack_instruction3',
	width: 80,
	height: 70,
	svg_width: 200,
	svg_height: 170,
	frameWidth: 80,
	frames: [
		{val: 'push $15'},
		{val: 'set %0'},
		{val: 'push %0'},
		{val: 'push $10', pointer: 'ip'},
		{val: 'add'},
		{val: 'push $5'},
		{val: 'sub'},
	]
}).render();

const result_instruction3 = new csmd.Stack({
	id: 'result_instruction3',
	colorFrame: '#03506F',
	colorText: 'white',
	colorStroke: '#30475E',
	width: 80,
	height: 20,
	svg_width: 200,
	svg_height: 80,
	frameWidth: 80,
	frames: [
		{val: '10', pointer: 'sp'},
		{val: '%0 = 15'},
	]
}).render();

const var_instruction3 = new csmd.Stack({
	id: 'var_instruction3',
	colorFrame: '#F05454',
	colorText: 'white',
	colorStroke: 'firebrick',
	width: 80,
	height: 20,
	svg_width: 200,
	svg_height: 50,
	frameWidth: 80,
	frames: [
		{val: '%0 = 15'},
	]
}).render();

const stack_instruction4 = new csmd.Stack({
	id: 'stack_instruction4',
	width: 80,
	height: 70,
	svg_width: 200,
	svg_height: 170,
	frameWidth: 80,
	frames: [
		{val: 'push $15'},
		{val: 'set %0'},
		{val: 'push %0'},
		{val: 'push $10'},
		{val: 'add', pointer: 'ip'},
		{val: 'push $5'},
		{val: 'sub'},
	]
}).render();

const result_instruction4 = new csmd.Stack({
	id: 'result_instruction4',
	colorFrame: '#03506F',
	colorText: 'white',
	colorStroke: '#30475E',
	width: 80,
	height: 20,
	svg_width: 200,
	svg_height: 100,
	frameWidth: 80,
	frames: [
		{val: '25', pointer: 'sp'},
	]
}).render();

const var_instruction4 = new csmd.Stack({
	id: 'var_instruction4',
	colorFrame: '#F05454',
	colorText: 'white',
	colorStroke: 'firebrick',
	width: 80,
	height: 20,
	svg_width: 200,
	svg_height: 50,
	frameWidth: 80,
	frames: [
		{val: '%0 = 15'},
	]
}).render();

const virtual_registers = new csmd.Memgram({
	id: 'virtual_registers',
	width: 50,
	height: 38,
	registers: [
		{ ad: 'r1', id: 'x', val: 15 },
		{ ad: 'r2', id: ' ', val: '0' },
		{ ad: 'r3', id: ' ', val: '0' },
		{ ad: 'r4', id: ' ', val: '0' },
		{ ad: 'ip', id: ' ', val: '0' },
		{ ad: 'ap', id: ' ', val: '0' },
		{ ad: 'bp', id: ' ', val: '0' },
	]
}).render();

const compiler_map = new csmd.Digraph({
	id: "compiler_map",
	width: 80,
	collide: 90,
	height: 65,
	svg_width: 475,
	svg_height: 380,
	strength: -300,
	distance: 30,
	data: {
		nodes: [
			{ name: "source code file" }, // 0
			{ name: "tokenizer" }, // 1
			{ name: "parser" }, // 2
			{ name: "interpreter" }, // 3
			{ name: "code generator" }, // 4
			{ name: "compiler" }, // 5
		],
		edges: [
			{ source: 0, target: 1, label: "source code" },
			{ source: 1, target: 2, label: "tokens" },
			{ source: 2, target: 3, label: "AST" },
			{ source: 2, target: 4, label: "AST" },
			{ source: 4, target: 3, label: "high-level language" },
			{ source: 4, target: 5, label: "IR" },
			{ source: 5, target: 3, label: "bytecode/machine code" },
		],
	},
}).render();
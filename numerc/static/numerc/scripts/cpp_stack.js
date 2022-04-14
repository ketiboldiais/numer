import * as csmd from "../csmd/CSMD.mjs";

const one_stack = new csmd.Stack({
	height: 10,
	svg_height: 100,
	id: 'one_stack',
	frames: [
		{ val: 0 },
	]
}).render();

const two_stack = new csmd.Stack({
	height: 15,
	svg_height: 100,
	id: 'two_stack',
	frames: [
		{ val: 1 },
		{ val: 0 },
	]
}).render();

const three_stack = new csmd.Stack({
	height: 18,
	svg_height: 100,
		id: 'three_stack',
	frames: [
		{ val: 2 },
		{ val: 1 },
		{ val: 0 },
	]
}).render();

const four_stack = new csmd.Stack({
	height: 21,
	svg_height: 105,
	id: 'four_stack',
	frames: [
		{ val: 3 },
		{ val: 2 },
		{ val: 1 },
		{ val: 0 },
	]
}).render();

const pop_four_stack = new csmd.Stack({
	height: 21,
	svg_height: 105,
	id: 'pop_four_stack',
	frames: [
		{ val: 3, focus: 'teal', popped: true},
		{ val: 2 },
		{ val: 1 },
		{ val: 0 },
	]
}).render();

const sample_stack_1 = new csmd.Stack({
	height: 21,
	svg_height: 105,
	id: "sample_stack_1",
	frames: [
		{ val: 8 },
		{ val: 3 },
		{ val: 1 },
	]
}).render();

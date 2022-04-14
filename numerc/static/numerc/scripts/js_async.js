import * as csmd from "../csmd/csmd.mjs";

const stack1 = new csmd.Stack({
	id: 'stack1',
	data: [
		{val: 'f(x)'},
	]
}).render();

const stack2 = new csmd.Stack({
	id: 'stack2',
	data: [
		{val: 'g(x)'},
		{val: 'f(x)'},
	]
}).render();

const stack3 = new csmd.Stack({
	id: 'stack3',
	data: [
		{val: 'h(x)'},
		{val: 'g(x)'},
		{val: 'f(x)'},
	]
}).render();

const stack4 = new csmd.Stack({
	id: 'stack4',
	data: [
		{val: 'h(x)', popped: true},
		{val: 'g(x)'},
		{val: 'f(x)'},
	]
}).render();

const stack5 = new csmd.Stack({
	id: 'stack5',
	data: [
		{val: 'g(x)', popped: true},
		{val: 'h(x)', popped: true},
		{val: 'f(x)'},
	]
}).render();

const thread_compare = new csmd.LinePlot({
	id: 'thread_compare',
	label: {x: 'time'},
	axisDisplay: {x: true },
	width: 55,
	height: 35,
	plotPoints: true, 
	lineColors: ['firebrick', '#54BAB9', '#54BAB9'],
	data: [
		{x: 1, y: 6, group: "1thread", color: {fill: 'tomato', stroke: 'firebrick'}},
		{x: 1.5, y: 6, group: "1thread", color: {fill: 'white', stroke: 'grey'}},
		{x: 2, y: 6, group: "1thread", color: {fill: 'tomato', stroke: 'firebrick'}},
		{x: 3, y: 6, group: "1thread", color: {fill: 'tomato', stroke: 'firebrick'}},

		{x: 1, y: 2, group: 'mthread1', color: {fill: '#9ADCFF', stroke: '#54BAB9'}},
		{x: 2, y: 2, group: 'mthread1', color: {fill: '#9ADCFF', stroke: '#54BAB9'}},
		{x: 1, y: 2.35, group: 'mthread2', color: {fill: '#9ADCFF', stroke: '#54BAB9'}},
		{x: 1.5, y: 2.35, group: 'mthread2', color: {fill: '#9ADCFF', stroke: '#54BAB9'}},

		{x: 1, y: 4, group: 'athread'},
		{x: 1.5, y: 4, group: "athread", color: {fill: 'white', stroke: 'grey'}},
		{x: 1.5, y: 5, group: 'athread'},
		{x: 2, y: 4, group: 'athread3'},
		{x: 1.5, y: 5, group: 'athread2'},
		{x: 2, y: 5, group: 'athread2', color: {fill: 'white', stroke: 'grey'}},
		{x: 2.5, y: 5, group: 'athread2'},

		{x: 1.5, y: 0, type: 'asym', group: 1},
		{x: 1.5, y: 8, type: 'asym', group: 1},
		{x: 2, y: 0, type: 'asym', group: 2},
		{x: 2, y: 8, type: 'asym', group: 2},
	]
}).render();
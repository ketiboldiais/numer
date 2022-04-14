import * as csmd from "../csmd/csmd.mjs";

const node_timeline = new csmd.TimeLine({
	id: "node_timeline",
	timeRange: [1983, 2020],
	tickCount: { x: 12, y: 0 },
	data: [
		{ event: "Internet is born", time: [1983], y: 14, anchor: "start" },
		{ event: "WebKit released", time: [1998], y: 25 },
		{
			event: "Netscape Livewire & SpiderMonkey released",
			time: [1996],
			y: 20,
		},
		{ event: "Node.js released", time: [2009], y: 20 },
		{ event: "V8 released", time: [2008], y: 10 },
		{ event: "TypeScript released", time: [2012], y: 5 },
		{ event: "JavaScript is born", time: [1995], y: 3 },
	],
}).render();

const process_demo = new csmd.TreeMap({
	id: "process_demo",
	width: 40,
	height: 42,
	svg_height: 320,
	data: {
		name: "",
		children: [
			{
				name: "process1",
				value: 10,
				children: [
					{
						name: "main.js",
						value: 5,
						children: [
							{ name: "f()", value: 1 },
							{ name: "g()", value: 1 },
						],
					},
				],
			},
			{ name: "process2", value: 10 },
			{ name: "process3", value: 10 },
		],
	},
}).render();

const process_demo1 = new csmd.TreeMap({
	id: "process_demo1",
	width: 70,
	height: 30,
	svg_width: 500,
	svg_height: 220,
	data: {
		name: "",
		children: [
			{
				name: "process1",
				value: 90,
				children: [
					{
						name: "main.js",
						value: 50,
						children: [{ name: "thread1", value: 10 }],
					},
				],
			},
			{ name: "process2", value: 30 },
			{ name: "process3", value: 30 },
		],
	},
}).render();

const process_demo2 = new csmd.TreeMap({
	id: "process_demo2",
	width: 85,
	height: 25,
	svg_width: 650,
	svg_height: 180,
	data: {
		name: "",
		children: [
			{
				name: "process1",
				value: 345,
				children: [
					{
						name: "main.js",
						value: 170,
						children: [
							{
								name: "thread1",
								value: 80,
								children: [{ name: "call stack", value: 30 }],
							},
						],
					},
				],
			},
			{ name: "process2", value: 38 },
			{ name: "process3", value: 38 },
		],
	},
}).render();

const process_demo3 = new csmd.TreeMap({
	id: "process_demo3",
	width: 90,
	height: 38,
	svg_width: 700,
	svg_height: 300,
	data: {
		name: "",
		children: [
			{
				name: "process1",
				value: 90,
				children: [
					{
						name: "main.js",
						value: 360,
						children: [
							{
								name: "thread1",
								value: 90,
								children: [{ name: "call stack", value: 50 }],
							},
							{
								name: "thread2",
								value: 90,
								children: [{ name: "call stack", value: 50 }],
							},
						],
					},
				],
			},
			{ name: "process2", value: 40 },
			{ name: "process3", value: 40 },
		],
	},
}).render();

const stack1 = new csmd.Stack({
	id: "stack1",
	data: [{ val: "" }, { val: "" }, { val: "" }],
}).render();

const et1 = new csmd.HashTable({
	id: "et1",
	width: 80,
	height: 30,
	svg_width: 500,
	svg_height: 200,
	data: [
		[{ id: "event table" }],
		[{ id: "setTimeout1", parents: ["event table"] }],
		[{ id: "a()", parents: ["setTimeout1"] }],
		[{ id: "1000", parents: ["a()"] }],
	],
}).render();

const st1 = new csmd.Stack({
	id: "st1",
	width: 90,
	height: 40,
	data: [{ val: "b()" }],
}).render();

const et2 = new csmd.HashTable({
	id: "et2",
	width: 100,
	height: 40,
	svg_width: 450,
	svg_height: 200,
	data: [
		[{ id: "event table" }],
		[{ id: "setTimeout1", parents: ["event table"] }],
		[{ id: "a()", parents: ["setTimeout1"] }],
		[{ id: "1000", parents: ["a()"] }],
	],
}).render();

const st2 = new csmd.Stack({
	id: "st2",
	width: 90,
	height: 40,
	data: [{ val: "b()", popped: true }],
}).render();

const et3 = new csmd.HashTable({
	id: "et3",
	width: 100,
	height: 60,
	svg_width: 450,
	svg_height: 250,
	data: [
		[{ id: "event table" }],
		[
			{ id: "setTimeout1", parents: ["event table"] },
			{ id: "setTimeout2", parents: ["event table"] },
		],
		[
			{ id: "a()", parents: ["setTimeout1"] },
			{ id: "c()", parents: ["setTimeout1"] },
		],
		[
			{ id: "1000", parents: ["a()"] },
			{ id: "1000", parents: ["c()"] },
		],
	],
}).render();

const st3 = new csmd.Stack({
	id: "st3",
	width: 90,
	height: 40,
	data: [{ val: "d()" }, { val: "b()", popped: true }],
}).render();

const et4 = new csmd.HashTable({
	id: "et4",
	width: 100,
	height: 60,
	svg_width: 500,
	svg_height: 250,
	data: [
		[{ id: "event table" }],
		[
			{ id: "setTimeout1", parents: ["event table"] },
			{ id: "setTimeout2", parents: ["event table"] },
		],
		[
			{ id: "a()", parents: ["setTimeout1"] },
			{ id: "c()", parents: ["setTimeout2"] },
		],
		[
			{ id: "1000", parents: ["a()"] },
			{ id: "1000", parents: ["c()"] },
		],
	],
}).render();

const st4 = new csmd.Stack({
	id: "st4",
	width: 90,
	height: 40,
	data: [
		{ val: "d()", popped: true },
		{ val: "b()", popped: true },
	],
}).render();

const et5 = new csmd.HashTable({
	id: "et5",
	width: 100,
	height: 60,
	svg_width: 500,
	svg_height: 265,
	data: [
		[{ id: "event table" }],
		[
			{ id: "setTimeout1", parents: ["event table"] },
			{ id: "setTimeout2", parents: ["event table"] },
			{ id: "setTimeout3", parents: ["event table"] },
		],
		[
			{ id: "a()", parents: ["setTimeout1"] },
			{ id: "c()", parents: ["setTimeout2"] },
			{ id: "e()", parents: ["setTimeout3"] },
		],
		[
			{ id: "1000", parents: ["a()"] },
			{ id: "1000", parents: ["c()"] },
			{ id: "500", parents: ["e()"] },
		],
	],
}).render();

const cbqueue1 = new csmd.Queue({
	id: "cbqueue1",
	width: 25,
	data: [{ val: "e()" }, { val: "" }, { val: "" }],
}).render();

const cbqueue2 = new csmd.Queue({
	id: "cbqueue2",
	data: [
		{ val: "e()" },
		{ val: "a()" },
		{ val: "c()" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const stackfinal = new csmd.Stack({
	id: "stackfinal",
	width: 50,
	height: 15,
	data: [{ val: "c()" }, { val: "a()" }, { val: "e()" }],
}).render();

const eventLoopGraph = new csmd.CircularQueue({
	id: "eventLoopGraph",
	width: 70,
	height: 30,
	data: [
		{ val: "", annotate: "Timers", anchor: "start" },
		{ val: "", annotate: "I/O callbacks" },
		{ val: "", annotate: "setImmediate()" },
		{ val: "", annotate: "close callbacks" },
	],
}).render();

const then_catch_trace = new csmd.TangledTree({
	id: "then_catch_trace",
	width: 90,
	height: 35,
	styles: {
		font: 'Fira',
		fontSize: 12
	},
	svg_width: 550,
	svg_height: 200,
	data: [
		[{ id: "x.get()" }],
		[
			{ id: 'm1:then()', parents: ['x.get()'] },
			{ id: 'm2:catch()', parents: ['x.get()']}
		],
		[
			{ id: 'm3:then()', parents: ['m1:then()', 'm2:catch()'] },
			{ id: 'm4:catch()', parents: ['m1:then()', 'm2:catch()'] },
		],
		[
			{ id: 'm5:then()', parents: ['m3:then()', 'm4:catch()'] },
			{ id: 'm6:catch()', parents: ['m3:then()', 'm4:catch()'] },
		],
	]
}).render();

// const then_catch_trace = new csmd.CallTrace({
// 	id: "then_catch_trace",
// 	margin: [15, 40, 40, 0],
// 	sibSpace: 10,
// 	nsibSpace: 2,
// 	height: 25,
// 	svg_width: 350,
// 	svg_height: 150,
// 	data: [
// 		{ child: "x.get()", parent: "", anchor: "start" },
// 		{ child: "m1:then()", parent: "x.get()", anchor: "middle" },
// 		{ child: "m2:catch()", parent: "x.get()", anchor: "middle" },
// 		{ child: "m3:then()", parent: "m2:catch()", anchor: "middle" },
// 		{ child: "m4:catch()", parent: "m2:catch()", anchor: "middle" },
// 		{ child: "m5:then()", parent: "m4:catch()", anchor: "middle" },
// 		{
// 			child: "m6:catch()",
// 			parent: "m4:catch()",
// 			anchor: "middle",
// 			colors: {fill: 'white', stroke: 'black'}
// 		},
// 	],
// }).render();

// const eventLoopGraph = new csmd.Network({
// 	id: 'eventLoopGraph',
// 	collide: 40,
// 	height: 30,
// 	svg_height: 150,
// 	directed: true,
// 	data: [
// 		{source: 'timers', target: 'I/O callbacks'},
// 		{source: 'I/O callbacks', target: 'setImmediate'},
// 		{source: 'setImmediate', target: 'close callbacks'},
// 		{source: 'close callbacks', target: 'timers'},
// 	]
// }).render()

// const node_timeline = new csmd.ScatterPlot({
// 	id: "node_timeline",
// 	color: "greenScheme",
// 	yLabel: "amount",
// 	xLabel: "dollars",
// 	radialMagnitude: true,
// 	data: [
// 		[5, 20],
// 		[480, 90],
// 		[250, 50],
// 		[100, 300],
// 		[330, 95],
// 		[410, 12],
// 		[475, 44],
// 		[25, 67],
// 		[85, 21],
// 		[220, 88],
// 	],
// }).render();

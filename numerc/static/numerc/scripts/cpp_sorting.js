import * as csmd from "../csmd/csmd.mjs";

const bubble_sort_0 = new csmd.Sequence({
	id: "bubble_sort_0",
	width: 20,
	height: 9,
	data: [{ val: 2 }, { val: 4 }, { val: 1 }, { val: 3 }],
}).render();

const bubble_sort_1 = new csmd.Sequence({
	id: "bubble_sort_1",
	width: 20,
	height: 9,
	data: [
		{ val: 2, colors: { fill: "red", text: "white" } },
		{ val: 4, colors: { fill: "red", text: "white" } },
		{ val: 1 },
		{ val: 3 },
	],
}).render();

const bubble_sort_2 = new csmd.Sequence({
	id: "bubble_sort_2",
	width: 20,
	height: 9,
	data: [
		{ val: 2 },
		{ val: 4, colors: { fill: "red", text: "white" } },
		{ val: 1, colors: { fill: "red", text: "white" } },
		{ val: 3 },
	],
}).render();

const bubble_sort_3 = new csmd.Sequence({
	id: "bubble_sort_3",
	width: 20,
	height: 9,
	data: [
		{ val: 2 },
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
		{ val: 3 },
	],
}).render();

const bubble_sort_4 = new csmd.Sequence({
	id: "bubble_sort_4",
	width: 20,
	height: 9,
	data: [
		{ val: 2 },
		{ val: 1 },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
	],
}).render();

const bubble_sort_5 = new csmd.Sequence({
	id: "bubble_sort_5",
	width: 20,
	height: 9,
	data: [
		{ val: 2, colors: { fill: "red", text: "white" } },
		{ val: 1, colors: { fill: "red", text: "white" } },
		{ val: 3 },
		{ val: 4, colors: { fill: "green", text: "white" } },
	],
}).render();

const bubble_sort_6 = new csmd.Sequence({
	id: "bubble_sort_6",
	width: 20,
	height: 9,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3 },
		{ val: 4, colors: { fill: "green", text: "white" } },
	],
}).render();

const bubble_sort_7 = new csmd.Sequence({
	id: "bubble_sort_7",
	width: 20,
	height: 9,
	data: [
		{ val: 1 },
		{ val: 2, colors: { fill: "red", text: "white" } },
		{ val: 3, colors: { fill: "red", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
	],
}).render();

const bubble_sort_8 = new csmd.Sequence({
	id: "bubble_sort_8",
	width: 20,
	height: 9,
	data: [
		{ val: 1, colors: { fill: "red", text: "white" } },
		{ val: 2, colors: { fill: "red", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
	],
}).render();

const bubble_sort_9 = new csmd.Sequence({
	id: "bubble_sort_9",
	width: 20,
	height: 9,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
	],
}).render();

const selection_sort_0 = new csmd.Sequence({
	id: "selection_sort_0",
	width: 25,
	height: 10,
	data: [{ val: 4 }, { val: 1 }, { val: 3 }, { val: 5 }, { val: 2 }],
}).render();

const selection_sort_1 = new csmd.Sequence({
	id: "selection_sort_1",
	width: 25,
	height: 10,
	data: [
		{ val: 4, ant: "min", colors: { fill: "purple", text: "white" } },
		{ val: 1 },
		{ val: 3 },
		{ val: 5 },
		{ val: 2 },
	],
}).render();

const selection_sort_2 = new csmd.Sequence({
	id: "selection_sort_2",
	width: 25,
	height: 10,
	data: [
		{ val: 4 },
		{ val: 1, ant: "min", colors: { fill: "purple", text: "white" } },
		{ val: 3 },
		{ val: 5 },
		{ val: 2 },
	],
}).render();

const selection_sort_2_1 = new csmd.Sequence({
	id: "selection_sort_2_1",
	width: 25,
	height: 10,
	data: [
		{ val: 4 },
		{ val: 1, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 3, colors: { fill: "red", text: "white" } },
		{ val: 5 },
		{ val: 2 },
	],
}).render();

const selection_sort_2_2 = new csmd.Sequence({
	id: "selection_sort_2_2",
	width: 25,
	height: 10,
	data: [
		{ val: 4 },
		{ val: 1, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 3 },
		{ val: 5, colors: { fill: "red", text: "white" } },
		{ val: 2 },
	],
}).render();

const selection_sort_2_3 = new csmd.Sequence({
	id: "selection_sort_2_3",
	width: 25,
	height: 10,
	data: [
		{ val: 4 },
		{ val: 1, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 3 },
		{ val: 5 },
		{ val: 2, colors: { fill: "red", text: "white" } },
	],
}).render();

const selection_sort_3 = new csmd.Sequence({
	id: "selection_sort_3",
	width: 25,
	height: 10,
	data: [
		{ val: 1, ant: "min", colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
		{ val: 3 },
		{ val: 5 },
		{ val: 2 },
	],
}).render();

const selection_sort_4 = new csmd.Sequence({
	id: "selection_sort_4",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 4, ant: "min", colors: { fill: "purple", text: "white" } },
		{ val: 3 },
		{ val: 5 },
		{ val: 2 },
	],
}).render();

const selection_sort_4_1 = new csmd.Sequence({
	id: "selection_sort_4_1",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 4, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 3, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 5 },
		{ val: 2 },
	],
}).render();

const selection_sort_5 = new csmd.Sequence({
	id: "selection_sort_5",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 4 },
		{ val: 3, ant: "min", colors: { fill: "purple", text: "white" } },
		{ val: 5 },
		{ val: 2 },
	],
}).render();

const selection_sort_5_1 = new csmd.Sequence({
	id: "selection_sort_5_1",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 4 },
		{ val: 3, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 5, colors: { fill: "red", text: "white" } },
		{ val: 2 },
	],
}).render();

const selection_sort_5_2 = new csmd.Sequence({
	id: "selection_sort_5_2",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 4 },
		{ val: 3, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 5 },
		{ val: 2, colors: { fill: "red", text: "white" } },
	],
}).render();

const selection_sort_6 = new csmd.Sequence({
	id: "selection_sort_6",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "red", text: "white" } },
		{ val: 3 },
		{ val: 5 },
		{ val: 4, colors: { fill: "red", text: "white" } },
	],
}).render();

const selection_sort_7 = new csmd.Sequence({
	id: "selection_sort_7",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, ant: "min", colors: { fill: "purple", text: "white" } },
		{ val: 5 },
		{ val: 4 },
	],
}).render();

const selection_sort_7_1 = new csmd.Sequence({
	id: "selection_sort_7_1",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 5, colors: { fill: "red", text: "white" } },
		{ val: 4 },
	],
}).render();

const selection_sort_7_2 = new csmd.Sequence({
	id: "selection_sort_7_2",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 5 },
		{ val: 4, colors: { fill: "red", text: "white" } },
	],
}).render();

const selection_sort_7_3 = new csmd.Sequence({
	id: "selection_sort_7_3",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 5, ant: "min", colors: { fill: "purple", text: "white" } },
		{ val: 4 },
	],
}).render();

const selection_sort_7_4 = new csmd.Sequence({
	id: "selection_sort_7_4",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 5, ant: "min", colors: { fill: "red", text: "white" } },
		{ val: 4, colors: { fill: "red", text: "white" } },
	],
}).render();

const selection_sort_7_5 = new csmd.Sequence({
	id: "selection_sort_7_5",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 5 },
		{ val: 4, ant: "min", colors: { fill: "purple", text: "white" } },
	],
}).render();

const selection_sort_7_6 = new csmd.Sequence({
	id: "selection_sort_7_6",
	width: 25,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
	],
}).render();

const insort_0 = new csmd.Sequence({
	id: "insort_0",
	width: 30,
	height: 10,
	data: [{ val: 2 }, { val: 5 }, { val: 3 }, { val: 4 }, { val: 1 }],
}).render();

const insort_1 = new csmd.Sequence({
	id: "insort_1",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 5 },
		{ val: 3 },
		{ val: 4 },
		{ val: 1 },
	],
}).render();

const insort_2 = new csmd.Sequence({
	id: "insort_2",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "red", text: "white" } },
		{ val: 5, colors: { fill: "red", text: "white" } },
		{ val: 3 },
		{ val: 4 },
		{ val: 1 },
	],
}).render();

const insort_3 = new csmd.Sequence({
	id: "insort_3",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
		{ val: 3 },
		{ val: 4 },
		{ val: 1 },
	],
}).render();

const insort_4 = new csmd.Sequence({
	id: "insort_4",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "red", text: "white" } },
		{ val: 3, colors: { fill: "red", text: "white" } },
		{ val: 4 },
		{ val: 1 },
	],
}).render();

const insort_5 = new csmd.Sequence({
	id: "insort_5",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "red", text: "white" } },
		{ val: 3, colors: { fill: "red", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
		{ val: 4 },
		{ val: 1 },
	],
}).render();

const insort_6 = new csmd.Sequence({
	id: "insort_6",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
		{ val: 4 },
		{ val: 1 },
	],
}).render();

const insort_7 = new csmd.Sequence({
	id: "insort_7",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "red", text: "white" } },
		{ val: 4, colors: { fill: "red", text: "white" } },
		{ val: 1 },
	],
}).render();

const insort_8 = new csmd.Sequence({
	id: "insort_8",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "red", text: "white" } },
		{ val: 4, colors: { fill: "red", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
		{ val: 1 },
	],
}).render();

const insort_9 = new csmd.Sequence({
	id: "insort_9",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
		{ val: 1 },
	],
}).render();

const insort_10 = new csmd.Sequence({
	id: "insort_10",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "red", text: "white" } },
		{ val: 1, colors: { fill: "red", text: "white" } },
	],
}).render();

const insort_11 = new csmd.Sequence({
	id: "insort_11",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "red", text: "white" } },
		{ val: 1, colors: { fill: "red", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
	],
}).render();

const insort_12 = new csmd.Sequence({
	id: "insort_12",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "red", text: "white" } },
		{ val: 1, colors: { fill: "red", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
	],
}).render();

const insort_13 = new csmd.Sequence({
	id: "insort_13",
	width: 30,
	height: 10,
	data: [
		{ val: 2, colors: { fill: "red", text: "white" } },
		{ val: 1, colors: { fill: "red", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
	],
}).render();

const insort_14 = new csmd.Sequence({
	id: "insort_14",
	width: 30,
	height: 10,
	data: [
		{ val: 1, colors: { fill: "green", text: "white" } },
		{ val: 2, colors: { fill: "green", text: "white" } },
		{ val: 3, colors: { fill: "green", text: "white" } },
		{ val: 4, colors: { fill: "green", text: "white" } },
		{ val: 5, colors: { fill: "green", text: "white" } },
	],
}).render();

const elementary_sort_compare = new csmd.HeatMap({
	id: "elementary_sort_compare",
	width: 40,
	height: 45,
	margin: [0, 30, 55, 45],
	svg_width: 170,
	svg_height: 170,
	data: [
		{ g: "insertion sort", v: "average", l: 6 },
		{ g: "insertion sort", v: "best", l: 3 },
		{ g: "insertion sort", v: "worst", l: 6 },
		{ g: "insertion sort", v: "space", l: 1 },

		{ g: "bubble sort", v: "average", l: 6 },
		{ g: "bubble sort", v: "best", l: 3 },
		{ g: "bubble sort", v: "worst", l: 6 },
		{ g: "bubble sort", v: "space", l: 1 },

		{ g: "selection sort", v: "average", l: 6 },
		{ g: "selection sort", v: "best", l: 6 },
		{ g: "selection sort", v: "worst", l: 6 },
		{ g: "selection sort", v: "space", l: 1 },
	],
}).render();

const msort_0 = new csmd.Sequence({
	id: "msort_0",
	width: 35,
	height: 10,
	data: [
		{ val: 6 },
		{ val: 2 },
		{ val: 5 },
		{ val: 8 },
		{ val: 3 },
		{ val: 4 },
		{ val: 1 },
		{ val: 7 },
	],
}).render();

const msort_1 = new csmd.Sequence({
	id: "msort_1",
	width: 40,
	height: 25,
	data: [
		{ val: 6 },
		{ val: 2 },
		{ val: 5 },
		{ val: 8 },
	],
}).render();

const msort_2 = new csmd.Sequence({
	id: "msort_2",
	width: 40,
	height: 25,
	data: [
		{ val: 3 },
		{ val: 4 },
		{ val: 1 },
		{ val: 7 },
	],
}).render();

const msort_3 = new csmd.Sequence({
	id: "msort_3",
	svg_width: 80,
	svg_height: 80,
	width: 60,
	height: 40,
	data: [
		{ val: 6 },
		{ val: 2 },
	],
}).render();

const msort_4 = new csmd.Sequence({
	id: "msort_4",
	svg_width: 80,
	svg_height: 80,
	width: 60,
	height: 40,
	data: [
		{ val: 5 },
		{ val: 8 },
	],
}).render();

const msort_5 = new csmd.Sequence({
	id: "msort_5",
	svg_width: 80,
	svg_height: 80,
	width: 60,
	height: 40,
	data: [
		{ val: 3 },
		{ val: 4 },
	],
}).render();

const msort_6 = new csmd.Sequence({
	id: "msort_6",
	svg_width: 80,
	svg_height: 80,
	width: 60,
	height: 40,
	data: [
		{ val: 1 },
		{ val: 7 },
	],
}).render();

const msort_7 = new csmd.Sequence({
	id: "msort_7",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 6 },
	],
}).render();

const msort_8 = new csmd.Sequence({
	id: "msort_8",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 2 },
	],
}).render();

const msort_9 = new csmd.Sequence({
	id: "msort_9",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 5 },
	],
}).render();

const msort_10 = new csmd.Sequence({
	id: "msort_10",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 8 },
	],
}).render();

const msort_11 = new csmd.Sequence({
	id: "msort_11",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 3 },
	],
}).render();

const msort_12 = new csmd.Sequence({
	id: "msort_12",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 4 },
	],
}).render();

const msort_13 = new csmd.Sequence({
	id: "msort_13",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 1 },
	],
}).render();

const msort_14 = new csmd.Sequence({
	id: "msort_14",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 7 },
	],
}).render();

const msort_15 = new csmd.Sequence({
	id: "msort_15",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 6 },
	],
}).render();

const msort_16 = new csmd.Sequence({
	id: "msort_16",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 2 },
	],
}).render();

const msort_17 = new csmd.Sequence({
	id: "msort_17",
	svg_width: 80,
	svg_height: 80,
	width: 60,
	height: 40,
	data: [
		{ val: 2 },
		{ val: 6 },
	],
}).render();

const msort_18 = new csmd.Sequence({
	id: "msort_18",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 5 },
	],
}).render();

const msort_19 = new csmd.Sequence({
	id: "msort_19",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 8 },
	],
}).render();

const msort_20 = new csmd.Sequence({
	id: "msort_20",
	svg_width: 80,
	svg_height: 80,
	width: 60,
	height: 40,
	data: [
		{ val: 5 },
		{ val: 8 },
	],
}).render();

const msort_21 = new csmd.Sequence({
	id: "msort_21",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 3 },
	],
}).render();

const msort_22 = new csmd.Sequence({
	id: "msort_22",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 4 },
	],
}).render();

const msort_23 = new csmd.Sequence({
	id: "msort_23",
	svg_width: 80,
	svg_height: 80,
	width: 60,
	height: 40,
	data: [
		{ val: 3 },
		{ val: 4 },
	],
}).render();

const msort_24 = new csmd.Sequence({
	id: "msort_24",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 1 },
	],
}).render();

const msort_25 = new csmd.Sequence({
	id: "msort_25",
	svg_width: 60,
	svg_height: 60,
	width: 90,
	height: 100,
	data: [
		{ val: 7 },
	],
}).render();

const msort_26 = new csmd.Sequence({
	id: "msort_26",
	svg_width: 80,
	svg_height: 80,
	width: 60,
	height: 40,
	data: [
		{ val: 1 },
		{ val: 7 },
	],
}).render();

const msort_27 = new csmd.Sequence({
	id: "msort_27",
	width: 40,
	height: 25,
	data: [
		{ val: 2 },
		{ val: 5 },
		{ val: 6 },
		{ val: 8 },
	],
}).render();

const msort_28 = new csmd.Sequence({
	id: "msort_28",
	width: 40,
	height: 25,
	data: [
		{ val: 1 },
		{ val: 3 },
		{ val: 4 },
		{ val: 7 },
	],
}).render();

const msort_29 = new csmd.Sequence({
	id: "msort_29",
	width: 45,
	height: 10,
	data: [
		{ val: 1, colors: {fill: 'green', text: 'white', stroke: 'forestgreen'} },
		{ val: 2, colors: {fill: 'green', text: 'white', stroke: 'forestgreen'} },
		{ val: 3, colors: {fill: 'green', text: 'white', stroke: 'forestgreen'} },
		{ val: 4, colors: {fill: 'green', text: 'white', stroke: 'forestgreen'} },
		{ val: 5, colors: {fill: 'green', text: 'white', stroke: 'forestgreen'} },
		{ val: 6, colors: {fill: 'green', text: 'white', stroke: 'forestgreen'} },
		{ val: 7, colors: {fill: 'green', text: 'white', stroke: 'forestgreen'} },
		{ val: 8, colors: {fill: 'green', text: 'white', stroke: 'forestgreen'} },
	],
}).render();
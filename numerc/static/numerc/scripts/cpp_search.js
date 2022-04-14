import * as csmd from "../csmd/csmd.mjs";

const linear_search_1 = new csmd.Sequence({
	id: "linear_search_1",
	width: 35,

	data: [
		{ val: 1 },
		{ val: 4 },
		{ val: 8 },
		{ val: 0 },
		{ val: 7 },
		{ val: 3 },
		{ val: 6 },
	],
}).render();

const binary_search_0 = new csmd.Sequence({
	id: "binary_search_0",
	width: 60,

	data: [
		{ val: 1 },
		{ val: 3 },
		{ val: 7 },
		{ val: 9 },
		{ val: 12 },
		{ val: 24 },
		{ val: 31 },
		{ val: 38 },
		{ val: 46 },
		{ val: 51 },
		{ val: 60 },
	],
}).render();

const binary_search_1 = new csmd.Sequence({
	id: "binary_search_1",
	width: 60,

	data: [
		{ val: 1 },
		{ val: 3 },
		{ val: 7 },
		{ val: 9 },
		{ val: 12 },
		{ val: 24 },
		{ val: 31 },
		{ val: 38, colors: { fill: "red", text: "white" } },
		{ val: 46 },
		{ val: 51 },
		{ val: 60 },
	],
}).render();

const binary_search_2 = new csmd.Sequence({
	id: "binary_search_2",
	width: 60,

	data: [
		{ val: 1 },
		{ val: 3 },
		{ val: 7 },
		{ val: 9 },
		{ val: 12 },
		{ val: 24, colors: { fill: "teal", text: "white" } },
		{ val: 31 },
		{ val: 38, colors: { fill: "red", text: "white" } },
		{ val: 46 },
		{ val: 51 },
		{ val: 60 },
	],
}).render();

const binary_search_3 = new csmd.Sequence({
	id: "binary_search_3",
	width: 60,

	data: [
		{
			val: 1,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 3,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 7,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 9,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 12,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 24,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{ val: 31 },
		{ val: 38, colors: { fill: "red", text: "white" } },
		{ val: 46, colors: { fill: "teal", text: "white" } },
		{ val: 51 },
		{ val: 60 },
	],
}).render();

const binary_search_4 = new csmd.Sequence({
	id: "binary_search_4",
	width: 60,

	data: [
		{
			val: 1,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 3,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 7,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 9,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 12,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 24,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{ val: 31 },
		{ val: 38, colors: { fill: "red", text: "white" } },
		{
			val: 46,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 51,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 60,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
	],
}).render();

const binary_search_5 = new csmd.Sequence({
	id: "binary_search_5",
	width: 60,

	data: [
		{
			val: 1,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 3,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 7,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 9,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 12,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 24,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 31,
			colors: { fill: "teal", text: "white" },
		},
		{ val: 38, colors: { fill: "purple", text: "white" } },
		{
			val: 46,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 51,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 60,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
	],
}).render();

const binary_pattern_1 = new csmd.Sequence({
	id: "binary_pattern_1",
	width: 60,

	data: [
		{ val: 1, colors: { fill: "orange", text: "white" }, ant: "min" },
		{ val: 3 },
		{ val: 7 },
		{ val: 9 },
		{ val: 12 },
		{ val: 24, colors: { fill: "teal", text: "white" }, ant: "mid" },
		{ val: 31 },
		{ val: 38, colors: { fill: "red", text: "white" } },
		{ val: 46 },
		{ val: 51 },
		{ val: 60, colors: { fill: "orange", text: "white" }, ant: "max" },
	],
}).render();

const binary_pattern_2 = new csmd.Sequence({
	id: "binary_pattern_2",
	width: 60,
	data: [
		{
			val: 1,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 3,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 7,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 9,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 12,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 24,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{ val: 31 },
		{ val: 38, colors: { fill: "red", text: "white" } },
		{ val: 46 },
		{ val: 51 },
		{ val: 60 },
	],
}).render();

const binary_pattern_3 = new csmd.Sequence({
	id: "binary_pattern_3",
	width: 60,
	data: [
		{
			val: 1,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 3,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 7,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 9,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 12,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 24,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{ val: 31, colors: { fill: "orange", text: "white" }, ant: "min" },
		{ val: 38, colors: { fill: "red", text: "white" } },
		{ val: 46, colors: { fill: "teal", text: "white" }, ant: "mid" },
		{ val: 51 },
		{ val: 60, colors: { fill: "orange", text: "white" }, ant: "max" },
	],
}).render();

const binary_pattern_4 = new csmd.Sequence({
	id: "binary_pattern_4",
	width: 60,

	data: [
		{
			val: 1,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 3,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 7,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 9,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 12,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 24,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{ val: 31 },
		{ val: 38, colors: { fill: "red", text: "white" } },
		{
			val: 46,
		},
		{
			val: 51,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 60,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
	],
}).render();

const binary_pattern_5 = new csmd.Sequence({
	id: "binary_pattern_5",
	width: 60,

	data: [
		{
			val: 1,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 3,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 7,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 9,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 12,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 24,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{ val: 31, colors: { fill: "orange", text: "white" }, ant: "min" },
		{ val: 38, colors: { fill: "red", text: "white" }, ant: "mid" },
		{
			val: 46,
			colors: { fill: "orange", text: "white" },
			ant: "max",
		},
		{
			val: 51,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 60,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
	],
}).render();

const binary_pattern_6 = new csmd.Sequence({
	id: "binary_pattern_6",
	width: 60,

	data: [
		{
			val: 1,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 3,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 7,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 9,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 12,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 24,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 31,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{ val: 38, colors: { fill: "red", text: "white" } },
		{
			val: 46,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 51,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
		{
			val: 60,
			colors: { fill: "white", text: "lightgrey", stroke: "lightgrey" },
		},
	],
}).render();

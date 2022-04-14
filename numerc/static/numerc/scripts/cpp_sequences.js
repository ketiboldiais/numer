import * as csmd from "../csmd/csmd.mjs"

const length_v_cap = new csmd.Sequence({
	id: 'length_v_cap',
	indexed: true,
	data: [
		{ val: 1, },
		{ val: 3, },
		{ val: 4, },
		{ val: 2, },
		{ val: 8, },
		{ val: "", fill: 'none'},
		{ val: "", fill: 'none'},
	]
}).render();

const append1 = new csmd.Sequence({
	id: 'append1',
	indexed: true,
	data: [
		{ val: 7, },
		{ val: 3, },
		{ val: 9, },
		{ val: 1, },
		{ val: "", fill: 'none'},
		{ val: "", fill: 'none'},
	]
}).render();

const append2 = new csmd.Sequence({
	id: 'append2',
	indexed: true,
	data: [
		{ val: 7, },
		{ val: 3, },
		{ val: 9, },
		{ val: 1, },
		{ val: 5, },
		{ val: "", fill: 'none'},
	]
}).render();

const array0 = new csmd.Sequence({
	id: "array0",
	indexed: true,
	data: [
		{ val: "5" },
		{ val: "8" },
		{ val: "3" },
		{ val: "9" },
	],
}).render();

const cba1 = new csmd.CBA({
	id: 'cba1',
}).render();

const length_getter_1 = new csmd.Sequence({
	id: "length_getter_1",
	indexed: true,
	data: [
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
}).render();

const length_getter_2 = new csmd.Sequence({
	id: "length_getter_2",
	indexed: true,
	data: [
		{ val: "2" },
		{ val: "3" },
		{ val: "4" },
		{ val: "" },
	],
}).render();

const insert1 = new csmd.Sequence({
	id: 'insert1',
	width: 40,
	svg_width: 310,
	svg_height: 280,
	data: [
		{ val: 1 },
		{ val: 8 },
		{ val: 3 },
		{ val: 2 },
		{ val: 5 },
		{ val: "", fill: 'white'},
		{ val: "", fill: 'white'},
		{ val: "", fill: 'white'},
	]
}).render();

const insert2 = new csmd.Sequence({
	id: 'insert2',
	width: 40,
	svg_width: 310,
	svg_height: 280,
	data: [
		{ val: 9 },
		{ val: 1 },
		{ val: 8 },
		{ val: 3 },
		{ val: 2 },
		{ val: 5 },
		{ val: "", fill: 'white'},
		{ val: "", fill: 'white'},
	]
}).render();

const remove1 = new csmd.Sequence({
	id: 'remove1',
	width: 50,
	svg_width: 310,
	svg_height: 280,
	data: [
		{ val: 1 },
		{ val: 5 },
		{ val: 8 },
		{ val: 3 },
		{ val: 2 },
		{ val: "", fill: 'white'},
		{ val: "", fill: 'white'},
	]
}).render();

const remove2 = new csmd.Sequence({
	id: 'remove2',
	width: 50,
	svg_width: 310,
	svg_height: 280,
	data: [
		{ val: 1 },
		{ val: 5 },
		{ val: 3 },
		{ val: 2 },
		{ val: "", fill: 'white'},
		{ val: "", fill: 'white'},
		{ val: "", fill: 'white'},
	]
}).render();

const get1 = new csmd.Sequence({
	id: 'get1',
	width: 50,
	svg_width: 310,
	svg_height: 280,
	data: [
		{ val: 7 },
		{ val: 3 },
		{ val: 9 },
		{ val: 5 },
		{ val: 8 },
		{ val: "", fill: 'white'},
		{ val: "", fill: 'white'},
	]
}).render();

const binary_search_1 = new csmd.Sequence({
	id: "binary_search_1",
	indexed: true,
	data: [
		{ val: "4" },
		{ val: "8" },
		{ val: "10" },
		{ val: "15" },
		{ val: "18" },
		{ val: "21" },
		{ val: "24" },
		{ val: "27" },
		{ val: "29" },
		{ val: "33" },
		{ val: "34" },
		{ val: "37" },
		{ val: "39" },
		{ val: "41" },
		{ val: "43" },
	],
}).render();

const max_finder_1 = new csmd.Sequence({
	id: "max_finder_1",
	indexed: true,
	data: [
		{ val: "8" },
		{ val: "3" },
		{ val: "9" },
		{ val: "15" },
		{ val: "6" },
		{ val: "10" },
		{ val: "7" },
		{ val: "2" },
		{ val: "12" },
		{ val: "14" },
	],
}).render();

const min_finder_1 = new csmd.Sequence({
	id: "min_finder_1",
	indexed: true,
	data: [
		{ val: "8" },
		{ val: "3" },
		{ val: "9" },
		{ val: "15" },
		{ val: "6" },
		{ val: "10" },
		{ val: "7" },
		{ val: "2" },
		{ val: "12" },
		{ val: "14" },
	],
});
min_finder_1.render();

const reverse_array_elements1 = new csmd.Sequence({
	id: "reverse_array_elements1",
	width: 45,
	svg_width: 300,
	svg_height: 275,
	indexed: true,
	data: [
		{ val: "8" },
		{ val: "3" },
		{ val: "9" },
		{ val: "15" },
		{ val: "6" },
		{ val: "10" },
		{ val: "7" },
		{ val: "2" },
		{ val: "12" },
		{ val: "14" },
	],
});
reverse_array_elements1.render();

const reversed_array_elements1 = new csmd.Sequence({
	id: "reversed_array_elements1",
	width: 45,
	svg_width: 300,
	svg_height: 275,
	indexed: true,
	data: [
		{ val: "14" },
		{ val: "12" },
		{ val: "2" },
		{ val: "7" },
		{ val: "10" },
		{ val: "6" },
		{ val: "15" },
		{ val: "9" },
		{ val: "3" },
		{ val: "8" },
	],
});
reversed_array_elements1.render();

const array_to_shift_left = new csmd.Sequence({
	id: "array_to_shift_left",
	indexed: true,
	data: [
		{ val: "6" },
		{ val: "3" },
		{ val: "8" },
		{ val: "5" },
		{ val: "9" },
	],
});
array_to_shift_left.render();

const shift_left_1 = new csmd.Sequence({
	id: "shift_left_1",
	indexed: true,
	data: [
		{ val: "3" },
		{ val: "8" },
		{ val: "5" },
		{ val: "9" },
		{ val: "" },
	],
});
shift_left_1.render();

const array_to_shift_right = new csmd.Sequence({
	id: "array_to_shift_right",
	indexed: true,
	data: [
		{ val: "6" },
		{ val: "3" },
		{ val: "8" },
		{ val: "5" },
		{ val: "9" },
	],
});
array_to_shift_right.render();

const array_shift_right1 = new csmd.Sequence({
	id: "array_shift_right1",
	indexed: true,
	data: [
		{ val: "" },
		{ val: "6" },
		{ val: "3" },
		{ val: "8" },
		{ val: "5" },
	],
});
array_shift_right1.render();

const array_to_left_rotate = new csmd.Sequence({
	id: "array_to_left_rotate",
	indexed: true,
	data: [
		{ val: "6" },
		{ val: "3" },
		{ val: "8" },
		{ val: "5" },
		{ val: "9" },
	],
});
array_to_left_rotate.render();

const left_rotated_array_1 = new csmd.Sequence({
	id: "left_rotated_array_1",
	indexed: true,
	data: [
		{ val: "3" },
		{ val: "8" },
		{ val: "5" },
		{ val: "9" },
		{ val: "6" },
	],
});
left_rotated_array_1.render();

const array_to_right_rotate = new csmd.Sequence({
	id: "array_to_right_rotate",
	indexed: true,
	data: [
		{ val: "6" },
		{ val: "3" },
		{ val: "8" },
		{ val: "5" },
		{ val: "9" },
	],
});
array_to_right_rotate.render();

const right_rotated_array_1 = new csmd.Sequence({
	id: "right_rotated_array_1",
	indexed: true,
	data: [
		{ val: "9" },
		{ val: "6" },
		{ val: "3" },
		{ val: "8" },
		{ val: "5" },
	],
});
right_rotated_array_1.render();

const sorted_insert_array_start = new csmd.Sequence({
	id: "sorted_insert_array_start",
	indexed: true,
	data: [
		{ val: "4" },
		{ val: "8" },
		{ val: "13" },
		{ val: "16" },
		{ val: "20" },
		{ val: "25" },
		{ val: "28" },
		{ val: "33" },
		{ val: "" },
		{ val: "" },
	],
});
sorted_insert_array_start.render();

const check_sorted_array_1 = new csmd.Sequence({
	id: "check_sorted_array_1",
	indexed: true,
	data: [
		{ val: "4" },
		{ val: "8" },
		{ val: "13" },
		{ val: "26" },
		{ val: "20" },
		{ val: "25" },
		{ val: "28" },
		{ val: "33" },
		{ val: "" },
		{ val: "" },
	],
});
check_sorted_array_1.render();

const negative_to_positive_array_1 = new csmd.Sequence({
	id: "negative_to_positive_array_1",
	indexed: true,
	data: [
		{ val: "-6" },
		{ val: "3" },
		{ val: "-8" },
		{ val: "10" },
		{ val: "5" },
		{ val: "-7" },
		{ val: "-9" },
		{ val: "12" },
		{ val: "-4" },
		{ val: "2" },
	],
});
negative_to_positive_array_1.render();

const negative_to_positive_array_2 = new csmd.Sequence({
	id: "negative_to_positive_array_2",
	indexed: true,
	data: [
		{ val: "-6" },
		{ val: "-4" },
		{ val: "-8" },
		{ val: "-9" },
		{ val: "-7" },
		{ val: "5" },
		{ val: "10" },
		{ val: "12" },
		{ val: "3" },
		{ val: "2" },
	],
});
negative_to_positive_array_2.render();

const array_to_be_concatenated = new csmd.Sequence({
	id: "array_to_be_concatenated",
	indexed: true,
	data: [
		{ val: "2" },
		{ val: "3" },
		{ val: "9" },
		{ val: "1" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
});
array_to_be_concatenated.render();

const array_to_concatenate = new csmd.Sequence({
	id: "array_to_concatenate",
	indexed: true,
	data: [
		{ val: "4" },
		{ val: "6" },
		{ val: "7" },
	],
});
array_to_concatenate.render();

const new_concatenated_array = new csmd.Sequence({
	id: "new_concatenated_array",
	indexed: true,
	data: [
		{ val: "2" },
		{ val: "3" },
		{ val: "9" },
		{ val: "1" },
		{ val: "4" },
		{ val: "6" },
		{ val: "7" },
		{ val: "" },
	],
});
new_concatenated_array.render();

const array_to_merge_A = new csmd.Sequence({
	id: "array_to_merge_A",
	indexed: true,
	data: [
		{ val: "3" },
		{ val: "8" },
		{ val: "16" },
		{ val: "20" },
		{ val: "25" },
	],
});
array_to_merge_A.render();

const array_to_merge_B = new csmd.Sequence({
	id: "array_to_merge_B",
	indexed: true,
	data: [
		{ val: "4" },
		{ val: "10" },
		{ val: "12" },
		{ val: "22" },
		{ val: "23" },
	],
});
array_to_merge_B.render();

const A_and_B_merged_array = new csmd.Sequence({
	id: "A_and_B_merged_array",
	indexed: true,
	data: [
		{ val: "3" },
		{ val: "4" },
		{ val: "8" },
		{ val: "10" },
		{ val: "12" },
		{ val: "16" },
		{ val: "20" },
		{ val: "22" },
		{ val: "25" },
		{ val: "23" },
	],
});
A_and_B_merged_array.render();

const array_union_A = new csmd.Sequence({
	id: "array_union_A",
	indexed: true,
	data: [
		{ val: "3" },
		{ val: "5" },
		{ val: "10" },
		{ val: "4" },
		{ val: "6" },
	],
});
array_union_A.render();

const array_union_B = new csmd.Sequence({
	id: "array_union_B",
	indexed: true,
	data: [
		{ val: "12" },
		{ val: "4" },
		{ val: "7" },
		{ val: "2" },
		{ val: "5" },
	],
});
array_union_B.render();

const array_union_A_and_B = new csmd.Sequence({
	id: "array_union_A_and_B",
	indexed: true,
	data: [
		{ val: "3" },
		{ val: "5" },
		{ val: "10" },
		{ val: "4" },
		{ val: "6" },
		{ val: "12" },
		{ val: "7" },
		{ val: "2" },
	],
});
array_union_A_and_B.render();
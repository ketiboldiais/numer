import { cdemo } from "../CDemo.mjs";

const sliceArray = {
	id: "sliceArray",
	indexed: true,
	data: [
		{ val: "a" },
		{ val: "b" },
		{ val: "c" },
		{ val: "d" },
		{ val: "e" },
	],
};
cdemo.renderStaticArray(sliceArray);

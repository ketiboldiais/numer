import {cdemo} from "../CDemo.mjs";
const frpArray = {
	id: "frpArray",
	indexed: true,
	data: [
		{ val: 1 },
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: 'r'},
	],
};
cdemo.renderStaticArray(frpArray);


const frpQueue = {
	id: "frpQueue",
	indexed: true,
	data: [
		{ val: 1 },
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: 'r'},
	],
};
cdemo.renderQueue(frpQueue);

const frpArrayDequeue0 = {
	id: "frpArrayDequeue0",
	indexed: true,
	data: [
		{ val: "", focus: 'red'},
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: 'r'},
	],
};
cdemo.renderStaticArray(frpArrayDequeue0);


const frpQueueDequeue0 = {
	id: "frpQueueDequeue0",
	indexed: true,
	data: [
		{ val: "", emphasis: 'red'},
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: 'r'},
	],
};
cdemo.renderQueue(frpQueueDequeue0);


const frpArrayDequeue1 = {
	id: "frpArrayDequeue1",
	indexed: true,
	data: [
		{ val: 1, annotate: 'f', focus: 'red'},
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: 'r'},
	],
};
cdemo.renderStaticArray(frpArrayDequeue1);


const frpQueueDequeue1 = {
	id: "frpQueueDequeue1",
	indexed: true,
	data: [
		{ val: 1, annotate: 'f', emphasis: 'red'},
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: 'r'},
	],
};
cdemo.renderQueue(frpQueueDequeue1);


const frpArray1_0 = {
	id: "frpArray1_0",
	indexed: true,
	data: [
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: ""},
	],
};
cdemo.renderStaticArray(frpArray1_0);


const frpQueue1_0 = {
	id: "frpQueue1_0",
	indexed: true,
	data: [
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(frpQueue1_0);

const frpArray1_1 = {
	id: "frpArray1_1",
	indexed: true,
	data: [
		{ val: 5 },
		{ val: 8, annotate: 'r'},
		{ val: "" },
		{ val: ""},
	],
};
cdemo.renderStaticArray(frpArray1_1);


const frpQueue1_1 = {
	id: "frpQueue1_1",
	indexed: true,
	data: [
		{ val: 5 },
		{ val: 8, annotate: 'r'},
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(frpQueue1_1);

const frpArray1_2 = {
	id: "frpArray1_2",
	indexed: true,
	data: [
		{ val: 1, focus: 'red', annotate: 'f' },
		{ val: 8, annotate: 'r'},
		{ val: "" },
		{ val: ""},
	],
};
cdemo.renderStaticArray(frpArray1_2);


const frpQueue1_2 = {
	id: "frpQueue1_2",
	indexed: true,
	data: [
		{ val: 1, emphasis: 'red', annotate: 'f' },
		{ val: 8, annotate: 'r'},
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(frpQueue1_2);

const frpArray1_3 = {
	id: "frpArray1_3",
	indexed: true,
	data: [
		{ val: 1, focus: 'red', annotate: 'f' },
		{ val: 8},
		{ val: 2 },
		{ val: 9, annotate: 'r' },
	],
};
cdemo.renderStaticArray(frpArray1_3);


const frpQueue1_3 = {
	id: "frpQueue1_3",
	indexed: true,
	data: [
		{ val: 1, emphasis: 'red', annotate: 'f' },
		{ val: 8},
		{ val: 2 },
		{ val: 9, annotate: 'r' },
	],
};
cdemo.renderQueue(frpQueue1_3);

const frpArray2_0 = {
	id: "frpArray2_0",
	indexed: true,
	data: [
		{ val: "", focus: 'red', annotate: 'f' },
		{ val: 3},
		{ val: 2 },
		{ val: 7, annotate: 'r' },
	],
};
cdemo.renderStaticArray(frpArray2_0);


const frpQueue2_0 = {
	id: "frpQueue2_0",
	indexed: true,
	data: [
		{ val: "", emphasis: 'red', annotate: 'f' },
		{ val: 3},
		{ val: 2 },
		{ val: 7, annotate: 'r' },
	],
};
cdemo.renderQueue(frpQueue2_0);

const frpArray2_1 = {
	id: "frpArray2_1",
	indexed: true,
	data: [
		{ val: "", focus: 'red' },
		{ val: "", focus: 'red', annotate: 'f'},
		{ val: 2 },
		{ val: 7, annotate: 'r' },
	],
};
cdemo.renderStaticArray(frpArray2_1);


const frpQueue2_1 = {
	id: "frpQueue2_1",
	indexed: true,
	data: [
		{ val: "", emphasis: 'red' },
		{ val: "", emphasis: 'red', annotate: 'f'},
		{ val: 2 },
		{ val: 7, annotate: 'r' },
	],
};
cdemo.renderQueue(frpQueue2_1);

const frpArray2_2 = {
	id: "frpArray2_2",
	indexed: true,
	data: [
		{ val: "", focus: 'red' },
		{ val: "", focus: 'red' },
		{ val: "", focus: 'red', annotate: 'f'},
		{ val: 7, annotate: 'r' },
	],
};
cdemo.renderStaticArray(frpArray2_2);


const frpQueue2_2 = {
	id: "frpQueue2_2",
	indexed: true,
	data: [
		{ val: "", emphasis: 'red' },
		{ val: "", emphasis: 'red' },
		{ val: "", emphasis: 'red', annotate: 'f'},
		{ val: 7, annotate: 'r' },
	],
};
cdemo.renderQueue(frpQueue2_2);

const frpArray2_3 = {
	id: "frpArray2_3",
	indexed: true,
	data: [
		{ val: "", focus: 'red' },
		{ val: "", focus: 'red' },
		{ val: "", focus: 'red' },
		{ val: "", focus: 'red', annotate: 'fr'},
	],
};
cdemo.renderStaticArray(frpArray2_3);


const frpQueue2_3 = {
	id: "frpQueue2_3",
	indexed: true,
	data: [
		{ val: "", emphasis: 'red' },
		{ val: "", emphasis: 'red' },
		{ val: "", emphasis: 'red' },
		{ val: "", emphasis: 'red', annotate: 'fr'},
	],
};
cdemo.renderQueue(frpQueue2_3);
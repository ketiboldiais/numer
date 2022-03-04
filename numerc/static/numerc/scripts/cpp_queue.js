import { cdemo } from "../CDemo.mjs";
const frpArray = {
	id: "frpArray",
	indexed: true,
	data: [{ val: 1 }, { val: 8 }, { val: 2 }, { val: 5, annotate: "r" }],
};
cdemo.renderStaticArray(frpArray);

const frpQueue = {
	id: "frpQueue",
	indexed: true,
	data: [{ val: 1 }, { val: 8 }, { val: 2 }, { val: 5, annotate: "r" }],
};
cdemo.renderQueue(frpQueue);

const frpArrayDequeue0 = {
	id: "frpArrayDequeue0",
	indexed: true,
	data: [
		{ val: "", focus: "red" },
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: "r" },
	],
};
cdemo.renderStaticArray(frpArrayDequeue0);

const frpQueueDequeue0 = {
	id: "frpQueueDequeue0",
	indexed: true,
	data: [
		{ val: "", emphasis: "red" },
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: "r" },
	],
};
cdemo.renderQueue(frpQueueDequeue0);

const frpArrayDequeue1 = {
	id: "frpArrayDequeue1",
	indexed: true,
	data: [
		{ val: 1, annotate: "f", focus: "red" },
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: "r" },
	],
};
cdemo.renderStaticArray(frpArrayDequeue1);

const frpQueueDequeue1 = {
	id: "frpQueueDequeue1",
	indexed: true,
	data: [
		{ val: 1, annotate: "f", emphasis: "red" },
		{ val: 8 },
		{ val: 2 },
		{ val: 5, annotate: "r" },
	],
};
cdemo.renderQueue(frpQueueDequeue1);

const frpArray1_0 = {
	id: "frpArray1_0",
	indexed: true,
	data: [{ val: "" }, { val: "" }, { val: "" }, { val: "" }],
};
cdemo.renderStaticArray(frpArray1_0);

const frpQueue1_0 = {
	id: "frpQueue1_0",
	indexed: true,
	data: [{ val: "" }, { val: "" }, { val: "" }, { val: "" }],
};
cdemo.renderQueue(frpQueue1_0);

const frpArray1_1 = {
	id: "frpArray1_1",
	indexed: true,
	data: [{ val: 5 }, { val: 8, annotate: "r" }, { val: "" }, { val: "" }],
};
cdemo.renderStaticArray(frpArray1_1);

const frpQueue1_1 = {
	id: "frpQueue1_1",
	indexed: true,
	data: [{ val: 5 }, { val: 8, annotate: "r" }, { val: "" }, { val: "" }],
};
cdemo.renderQueue(frpQueue1_1);

const frpArray1_2 = {
	id: "frpArray1_2",
	indexed: true,
	data: [
		{ val: 1, focus: "red", annotate: "f" },
		{ val: 8, annotate: "r" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderStaticArray(frpArray1_2);

const frpQueue1_2 = {
	id: "frpQueue1_2",
	indexed: true,
	data: [
		{ val: 1, emphasis: "red", annotate: "f" },
		{ val: 8, annotate: "r" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(frpQueue1_2);

const frpArray1_3 = {
	id: "frpArray1_3",
	indexed: true,
	data: [
		{ val: 1, focus: "red", annotate: "f" },
		{ val: 8 },
		{ val: 2 },
		{ val: 9, annotate: "r" },
	],
};
cdemo.renderStaticArray(frpArray1_3);

const frpQueue1_3 = {
	id: "frpQueue1_3",
	indexed: true,
	data: [
		{ val: 1, emphasis: "red", annotate: "f" },
		{ val: 8 },
		{ val: 2 },
		{ val: 9, annotate: "r" },
	],
};
cdemo.renderQueue(frpQueue1_3);

const frpArray2_0 = {
	id: "frpArray2_0",
	indexed: true,
	data: [
		{ val: 1, focus: "red", annotate: "f" },
		{ val: 3 },
		{ val: 2 },
		{ val: 7, annotate: "r" },
	],
};
cdemo.renderStaticArray(frpArray2_0);

const frpQueue2_0 = {
	id: "frpQueue2_0",
	indexed: true,
	data: [
		{ val: 1, emphasis: "red", annotate: "f" },
		{ val: 3 },
		{ val: 2 },
		{ val: 7, annotate: "r" },
	],
};
cdemo.renderQueue(frpQueue2_0);

const frpArray2_1 = {
	id: "frpArray2_1",
	indexed: true,
	data: [
		{ val: "", focus: "red" },
		{ val: 3, focus: "red", annotate: "f" },
		{ val: 2 },
		{ val: 7, annotate: "r" },
	],
};
cdemo.renderStaticArray(frpArray2_1);

const frpQueue2_1 = {
	id: "frpQueue2_1",
	indexed: true,
	data: [
		{ val: "", emphasis: "red" },
		{ val: 3, emphasis: "red", annotate: "f" },
		{ val: 2 },
		{ val: 7, annotate: "r" },
	],
};
cdemo.renderQueue(frpQueue2_1);

const frpArray2_2 = {
	id: "frpArray2_2",
	indexed: true,
	data: [
		{ val: "", focus: "red" },
		{ val: "", focus: "red" },
		{ val: 2, focus: "red", annotate: "f" },
		{ val: 7, annotate: "r" },
	],
};
cdemo.renderStaticArray(frpArray2_2);

const frpQueue2_2 = {
	id: "frpQueue2_2",
	indexed: true,
	data: [
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: 2, emphasis: "red", annotate: "f" },
		{ val: 7, annotate: "r" },
	],
};
cdemo.renderQueue(frpQueue2_2);

const frpArray2_3 = {
	id: "frpArray2_3",
	indexed: true,
	data: [
		{ val: "", focus: "red" },
		{ val: "", focus: "red" },
		{ val: "", focus: "red" },
		{ val: 7, focus: "red", annotate: "fr" },
	],
};
cdemo.renderStaticArray(frpArray2_3);

const frpQueue2_3 = {
	id: "frpQueue2_3",
	indexed: true,
	data: [
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: 7, emphasis: "red", annotate: "fr" },
	],
};
cdemo.renderQueue(frpQueue2_3);

const frpArray2_4 = {
	id: "frpArray2_4",
	indexed: true,
	data: [
		{ val: "", focus: "red" },
		{ val: "", focus: "red" },
		{ val: "", focus: "red" },
		{ val: "", focus: "red", annotate: "r" },
	],
};
cdemo.renderStaticArray(frpArray2_4);

const frpQueue2_4 = {
	id: "frpQueue2_4",
	indexed: true,
	data: [
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red", annotate: "r" },
	],
};
cdemo.renderQueue(frpQueue2_4);

const frp_problem_0 = {
	id: "frp_problem_0",
	indexed: true,
	divWidth: 30,
	paddingBottom: 15,
	data: [
		{ val: 2 },
		{ val: 4 },
		{ val: 8 },
		{ val: 1 },
		{ val: 3, annotate: "r" },
	],
};
cdemo.renderQueue(frp_problem_0);

const frp_problem_1 = {
	id: "frp_problem_1",
	indexed: true,
	divWidth: 30,
	paddingBottom: 15,
	data: [
		{ val: "", emphasis: "red" },
		{ val: 4, emphasis: "red", annotate: "f" },
		{ val: 8 },
		{ val: 1 },
		{ val: 3, annotate: "r" },
	],
};
cdemo.renderQueue(frp_problem_1);

const frp_problem_2 = {
	id: "frp_problem_2",
	indexed: true,
	divWidth: 30,
	paddingBottom: 15,
	data: [
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red", annotate: "r" },
	],
};
cdemo.renderQueue(frp_problem_2);

const multi_use_frp1 = {
	id: "multi_use_frp1",
	indexed: true,
	divWidth: 30,
	paddingBottom: 15,
	data: [
		{ val: 2 },
		{ val: 4 },
		{ val: 8 },
		{ val: 1 },
		{ val: 3, annotate: "r" },
	],
};
cdemo.renderQueue(multi_use_frp1);

const multi_use_frp2 = {
	id: "multi_use_frp2",
	indexed: true,
	divWidth: 30,
	paddingBottom: 15,
	data: [
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red", annotate: "r" },
	],
};
cdemo.renderQueue(multi_use_frp2);

const multi_use_frp3 = {
	id: "multi_use_frp3",
	indexed: true,
	divWidth: 30,
	paddingBottom: 15,
	data: [{ val: "" }, { val: "" }, { val: "" }, { val: "" }, { val: "" }],
};
cdemo.renderQueue(multi_use_frp3);

const multi_use_frp4 = {
	id: "multi_use_frp4",
	indexed: true,
	divWidth: 40,
	paddingBottom: 20,
	data: [
		{ val: "", emphasis: "red" },
		{ val: 4, emphasis: "red", annotate: "f" },
		{ val: 8 },
		{ val: 1 },
		{ val: 3, annotate: "r" },
	],
};
cdemo.renderQueue(multi_use_frp4);

const circ1 = {
	id: "circ1",
	indexed: true,
	divWidth: 50,
	paddingBottom: 25,
	data: [
		{ val: "", annotate: "fr" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(circ1);

const circ2 = {
	id: "circ2",
	indexed: true,
	divWidth: 50,
	paddingBottom: 25,
	data: [
		{ val: "", annotate: "f" },
		{ val: 1, annotate: "r" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderQueue(circ2);

const circ3 = {
	id: "circ3",
	indexed: true,
	divWidth: 50,
	paddingBottom: 25,
	data: [
		{ val: "", annotate: "f" },
		{ val: 1 },
		{ val: 5 },
		{ val: 8 },
		{ val: 9 },
		{ val: 3, annotate: "r" },
	],
};
cdemo.renderQueue(circ3);

const circ4 = {
	id: "circ4",
	indexed: true,
	divWidth: 50,
	paddingBottom: 25,
	data: [
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red", annotate: "f" },
		{ val: 8 },
		{ val: 9 },
		{ val: 3, annotate: "r" },
	],
};
cdemo.renderQueue(circ4);

const circ5 = {
	id: "circ5",
	indexed: true,
	divWidth: 50,
	paddingBottom: 25,
	data: [
		{ val: 2, annotate: "r" },
		{ val: "", emphasis: "red" },
		{ val: "", emphasis: "red", annotate: "f" },
		{ val: 8 },
		{ val: 9 },
		{ val: 3 },
	],
};
cdemo.renderQueue(circ5);

const circ6 = {
	id: "circ6",
	indexed: true,
	divWidth: 50,
	paddingBottom: 25,
	data: [
		{ val: 2 },
		{ val: 7, annotate: "r" },
		{ val: "", emphasis: "red", annotate: "f" },
		{ val: 8 },
		{ val: 9 },
		{ val: 3 },
	],
};
cdemo.renderQueue(circ6);

const circular_queue_linear = {
	id: "circular_queue_linear",
	indexed: true,
	divWidth: 50,
	paddingBottom: 25,
	data: [
		{ val: 2 },
		{ val: 7, annotate: "r" },
		{ val: "", emphasis: "red", annotate: "f" },
		{ val: 8 },
		{ val: 9 },
		{ val: 3 },
	],
};
cdemo.renderQueue(circular_queue_linear);

const circular_queue1 = {
	id: "circular_queue1",
	data: [2, 7, "", 8, 9, 3],
	pointer: {
		1: "r",
		2: "f",
	},
	indexed: true,
};
cdemo.renderCircularQueue(circular_queue1);

const linked_queue_intro = {
	id: "linked_queue_intro",
	indexed: true,
	divWidth: 50,
	paddingBottom: 25,
	data: [
		{ val: 2, annotate: "f" },
		{ val: 8 },
		{ val: 9 },
		{ val: 3, annotate: "r" },
	],
};
cdemo.renderQueue(linked_queue_intro);

const linked_queue_intro_LL = {
	id: "linked_queue_intro_LL",
	width: 150,
	bottomPadding: "15%",
	type: "single",
	circular: "false",
	indexed: true,
	nodes: [
		{ data: 2, annotate: "f" },
		{ data: 8 },
		{ data: 9 },
		{ data: 3, annotate: "r" },
	],
};
cdemo.renderLinkedList(linked_queue_intro_LL);

const linked_queue_intro_LL_1 = {
	id: "linked_queue_intro_LL_1",
	width: 80,
	divWidth: "40%",
	bottomPadding: "20%",
	type: "single",
	circular: "false",
	indexed: true,
	nodes: [{ data: 2, annotate: "t f r", alone: true }],
};
cdemo.renderLinkedList(linked_queue_intro_LL_1);

const deque_intro = {
	id: "deque_intro",
	indexed: true,
	divWidth: 50,
	data: [{ val: "" }, { val: "" }, { val: "" }, { val: "" }, { val: "" }],
};
cdemo.renderDeque(deque_intro);

const deque_intro1 = {
	id: "deque_intro1",
	indexed: true,
	divWidth: 50,
	data: [
		{ val: 3, annotate: "r" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: "" },
	],
};
cdemo.renderDeque(deque_intro1);

const deque_intro2 = {
	id: "deque_intro2",
	indexed: true,
	divWidth: 50,
	data: [
		{ val: 3 },
		{ val: 5 },
		{ val: 7 },
		{ val: 9, annotate: "r" },
		{ val: "" },
	],
};
cdemo.renderDeque(deque_intro2);

const deque_intro_delete1 = {
	id: "deque_intro_delete1",
	indexed: true,
	divWidth: 50,
	data: [
		{ val: "", annotate: "f" },
		{ val: 5 },
		{ val: 7 },
		{ val: 9, annotate: "r" },
		{ val: "" },
	],
};
cdemo.renderDeque(deque_intro_delete1);

const deque_intro_delete2 = {
	id: "deque_intro_delete2",
	indexed: true,
	divWidth: 50,
	data: [
		{ val: "" },
		{ val: "", annotate: "f" },
		{ val: 7 },
		{ val: 9, annotate: "r" },
		{ val: "" },
	],
};
cdemo.renderDeque(deque_intro_delete2);

const deque_intro_front_insert = {
	id: "deque_intro_front_insert",
	indexed: true,
	divWidth: 50,
	data: [
		{ val: "", annotate: "f" },
		{ val: 3 },
		{ val: 7 },
		{ val: 9, annotate: "r" },
		{ val: "" },
	],
};
cdemo.renderDeque(deque_intro_front_insert);

const deque_intro_front_insert1 = {
	id: "deque_intro_front_insert1",
	indexed: true,
	divWidth: 50,
	data: [
		{ val: 2 },
		{ val: 3 },
		{ val: 7 },
		{ val: 9, annotate: "r" },
		{ val: "" },
	],
};
cdemo.renderDeque(deque_intro_front_insert1);

const priority_queue_intro = {
	id: "priority_queue_intro",
	divWidth: 60,
	width: 240,
	indexed: true,
	data: [
		{ val: ["A", 1] },
		{ val: ["B", 1] },
		{ val: ["C", 2] },
		{ val: ["D", 3] },
		{ val: ["E", 2] },
		{ val: ["F", 1] },
	],
};
cdemo.renderPriorityQueue(priority_queue_intro);

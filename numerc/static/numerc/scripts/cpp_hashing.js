import { cdemo } from "../CDemo.mjs";
const hashArrayIntro = {
	id: "hashArrayIntro",
	indexed: true,
	data: [
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: 3 },
		{ val: 4 },
		{ val: "" },
		{ val: "" },
		{ val: "" },
		{ val: 8 },
		{ val: 9 },
		{ val: "" },
		{ val: 11 },
	],
};
cdemo.renderStaticArray(hashArrayIntro);

const hashArrayZeroInitialized = {
	id: "hashArrayZeroInitialized",
	indexed: true,
	data: [
		{ val: 0 },
		{ val: 0 },
		{ val: 0 },
		{ val: 3 },
		{ val: 4 },
		{ val: 0 },
		{ val: 0 },
		{ val: 0 },
		{ val: 8 },
		{ val: 9 },
		{ val: 0 },
		{ val: 11 },
	],
};
cdemo.renderStaticArray(hashArrayZeroInitialized);

const hash1 = {
	id: "hash1",
	type: "single",
	width: 60,
	divWidth: "18%",
	bottomPadding: "6%",
	circular: "false",
	nodes: [{ data: 3, alone: true }],
};
cdemo.renderHash(hash1);

const hash2 = {
	id: "hash2",
	type: "single",
	width: 60,
	divWidth: "18%",
	bottomPadding: "6%",
	circular: "false",
	nodes: [{ data: 8, alone: true }],
};
cdemo.renderHash(hash2);

const hash3 = {
	id: "hash3",
	type: "single",
	width: 60,
	divWidth: "18%",
	bottomPadding: "6%",
	circular: "false",
	nodes: [{ data: 4, alone: true }],
};
cdemo.renderHash(hash3);

const hash4 = {
	id: "hash4",
	type: "single",

	width: 60,
	divWidth: "18%",
	bottomPadding: "6%",
	circular: "false",
	nodes: [{ data: 11, alone: true }],
};
cdemo.renderHash(hash4);

const hash5 = {
	id: "hash5",
	type: "single",

	width: 60,
	divWidth: "18%",
	bottomPadding: "6%",
	circular: "false",
	nodes: [{ data: 3, alone: true }],
};
cdemo.renderHash(hash5);

const hash6 = {
	id: "hash6",
	type: "single",
	width: 85,
	divWidth: "25%",
	bottomPadding: "7%",
	circular: "false",
	nodes: [{ data: 13 }, { data: 1 }],
};
cdemo.renderHash(hash6);

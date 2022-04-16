import * as csmd from "../csmd/csmd.mjs";

const tangled_tree_1 = new csmd.TangledTree({
	id: "tangled_tree_1",
	svg_width: 460,
	svg_height: 450,
	height: 40,
	data: [
		[{ id: "(I)" }, { id: "(II)" }, { id: "(III)" }],
		[
			{ id: "(a)", parents: ["(I)"] },
			{ id: "(b)", parents: ["(I)"] },
			{ id: "(c)", parents: ["(I)"] },
			{ id: "(a) ", parents: ["(II)"] },
			{ id: "(a)  ", parents: ["(III)"] },
			{ id: "(b)  ", parents: ["(III)"] },
		],
		[
			{ id: "(1)", parents: ["(a)"] },
			{ id: "(2)", parents: ["(a)"] },
			{ id: "(1)", parents: ["(b)"] },
			{ id: "(1)", parents: ["(a) "] },
			{ id: "(2)", parents: ["(a) "] },
		],
	],
}).render();

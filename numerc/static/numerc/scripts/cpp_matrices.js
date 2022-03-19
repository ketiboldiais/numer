import * as csmd from "../csmd.mjs";

const matrix_intro = new csmd.Matrix({
	id: "matrix_intro",
	indexed: true,
	data: [
		["", "", "", ""],
		["", "", "", ""],
		["", "", "", ""],
	],
});
matrix_intro.render();

const matrix_intro_1 = new csmd.Matrix({
	id: "matrix_intro_1",
	indexed: true,
	data: [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	],
});
matrix_intro_1.render();

const diagonal_matrix_1 = new csmd.Matrix({
	id: "diagonal_matrix_1",
	indexed: true,
	focus: [
		[0,0],
		[1,1],
		[2,2],
		[3,3],
		[4,4]
	],
	data: [
		[3,0,0,0,0],
		[0,7,0,0,0],
		[0,0,4,0,0],
		[0,0,0,9,0],
		[0,0,0,0,6],
	],
});
diagonal_matrix_1.render();

const diagonal_matrix_2 = new csmd.Matrix({
	id: "diagonal_matrix_2",
	indexed: true,
	focus: [
		[0,4],
		[1,3],
		[2,2],
		[3,1],
		[4,0]
	],
	data: [
		[0,0,0,0,3],
		[0,0,0,7,0],
		[0,0,4,0,0],
		[0,9,0,0,0],
		[6,0,0,0,0],
	],
});
diagonal_matrix_2.render();
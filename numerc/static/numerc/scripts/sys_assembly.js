import * as csmd from "../csmd.mjs";

const and_truth_table = new csmd.TruthTable({
	id: "and_truth_table",
	headers: ["a", "b", "a & b"],
	rows: [
		[0, 0, 0],
		[0, 1, 0],
		[1, 0, 0],
		[1, 1, 1],
	],
}).render();

const or_truth_table = new csmd.TruthTable({
	id: "or_truth_table",
	headers: ["a", "b", "a | b"],
	rows: [
		[0, 0, 0],
		[0, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
	],
}).render();

const not_truth_table = new csmd.TruthTable({
	id: "not_truth_table",
	headers: ["x", "!x"],
	rows: [
		[0, 1],
		[1, 0],
	],
}).render();

const nand_truth_table = new csmd.TruthTable({
	id: "nand_truth_table",
	headers: ["a", "b", "out"],
	rows: [
		[0, 0, 1],
		[0, 1, 1],
		[1, 0, 1],
		[1, 1, 0],
	],
});
nand_truth_table.render();

const xor_truth_table = new csmd.TruthTable({
	id: "xor_truth_table",
	headers: ["a", "b", "out"],
	rows: [
		[0, 0, 0],
		[0, 1, 1],
		[1, 0, 1],
		[1, 1, 0],
	],
});
xor_truth_table.render();

const mux_truth_table = new csmd.TruthTable({
	id: "mux_truth_table",
	headers: ["a", "b", "sel", "out"],
	rows: [
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 1],
		[1, 1, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 1, 1],
		[1, 0, 1, 0],
		[1, 1, 1, 1],
	],
});
mux_truth_table.render();

const abbreviated_mux_truth_table = new csmd.TruthTable({
	id: "abbreviated_mux_truth_table",
	headers: ["sel", "out"],
	rows: [
		[0, "a"],
		[1, "b"],
	],
});
abbreviated_mux_truth_table.render();

const demux_truth_table = new csmd.TruthTable({
	id: "demux_truth_table",
	headers: ["in", "sel", "a", "b"],
	rows: [
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[1, 0, 1, 0],
		[1, 1, 0, 1],
	],
});
demux_truth_table.render();

const mux4way16_truth_table = new csmd.TruthTable({
	id: "mux4way16_truth_table",
	headers: ["sel[1]", "sel[0]", "out"],
	rows: [
		[0, 0, "a"],
		[0, 1, "b"],
		[1, 0, "c"],
		[1, 1, "d"],
	],
});
mux4way16_truth_table.render();

const array_of_1 = new csmd.StaticArray({
	id: "array_of_1",
	bordered: true,
	data: [{ val: 1 }],
});
array_of_1.render();

const array_of_0 = new csmd.StaticArray({
	id: "array_of_0",
	bordered: true,
	data: [{ val: 0 }],
});
array_of_0.render();

const array_of_4_1 = new csmd.StaticArray({
	id: "array_of_4_1",
	bordered: true,
	data: [{ val: 0 }, { val: 0 }],
});
array_of_4_1.render();

const array_of_4_2 = new csmd.StaticArray({
	id: "array_of_4_2",
	bordered: true,
	data: [{ val: 0 }, { val: 1 }],
});
array_of_4_2.render();

const array_of_4_3 = new csmd.StaticArray({
	id: "array_of_4_3",
	bordered: true,
	data: [{ val: 1 }, { val: 0 }],
});
array_of_4_3.render();

const array_of_4_4 = new csmd.StaticArray({
	id: "array_of_4_4",
	bordered: true,
	data: [{ val: 1 }, { val: 1 }],
});
array_of_4_4.render();

const array_of_8_1 = new csmd.StaticArray({
	id: "array_of_8_1",
	bordered: true,
	data: [{ val: 0 }, { val: 0 }, { val: 0 }],
});
array_of_8_1.render();

const array_of_8_2 = new csmd.StaticArray({
	id: "array_of_8_2",
	bordered: true,
	data: [{ val: 0 }, { val: 0 }, { val: 1 }],
});
array_of_8_2.render();

const array_of_8_3 = new csmd.StaticArray({
	id: "array_of_8_3",
	bordered: true,
	data: [{ val: 0 }, { val: 1 }, { val: 0 }],
});
array_of_8_3.render();

const array_of_8_4 = new csmd.StaticArray({
	id: "array_of_8_4",
	bordered: true,
	data: [{ val: 0 }, { val: 1 }, { val: 1 }],
});
array_of_8_4.render();

const array_of_8_5 = new csmd.StaticArray({
	id: "array_of_8_5",
	bordered: true,
	data: [{ val: 1 }, { val: 0 }, { val: 0 }],
});
array_of_8_5.render();

const array_of_8_6 = new csmd.StaticArray({
	id: "array_of_8_6",
	bordered: true,
	data: [{ val: 1 }, { val: 0 }, { val: 1 }],
});
array_of_8_6.render();

const array_of_8_7 = new csmd.StaticArray({
	id: "array_of_8_7",
	bordered: true,
	data: [{ val: 1 }, { val: 1 }, { val: 0 }],
});
array_of_8_7.render();

const array_of_8_8 = new csmd.StaticArray({
	id: "array_of_8_8",
	bordered: true,
	data: [{ val: 1 }, { val: 1 }, { val: 1 }],
});
array_of_8_8.render();

const half_adder_a_and_b = new csmd.TruthTable({
	id: "half_adder_a_and_b",
	headers: ["a", "b"],
	rows: [
		[0, 0],
		[0, 1],
		[1, 0],
		[1, 1],
	],
});
half_adder_a_and_b.render();

const half_adder_a_and_b_sum = new csmd.TruthTable({
	id: "half_adder_a_and_b_sum",
	headers: ["a", "b", "sum"],
	rows: [
		[0, 0, 0],
		[0, 1, 1],
		[1, 0, 1],
		[1, 1, 10],
	],
});
half_adder_a_and_b_sum.render();

const half_adder_a_and_b_sum_carry = new csmd.TruthTable({
	id: "half_adder_a_and_b_sum_carry",
	headers: ["a", "b", "sum", "carry"],
	rows: [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 1, 0],
		[1, 1, 0, 1],
	],
});
half_adder_a_and_b_sum_carry.render();

const full_adder_truth_table = new csmd.TruthTable({
	id: "full_adder_truth_table",
	headers: ["a", "b", "c", "sum", "carry"],
	rows: [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 1, 0, 1, 0],
		[0, 1, 1, 0, 1],
		[1, 0, 0, 1, 0],
		[1, 0, 1, 0, 1],
		[1, 1, 0, 0, 1],
		[1, 1, 1, 1, 1],
	],
});
full_adder_truth_table.render();

const half_adder_a_and_b_sum_carry_sum1 = new csmd.TruthTable({
	id: "half_adder_a_and_b_sum_carry_sum1",
	headers: ["a", "b", "sum1", "carry1"],
	rows: [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 1, 0],
		[1, 1, 0, 1],
	],
});
half_adder_a_and_b_sum_carry_sum1.render();

const full_adder_truth_table_expanded = new csmd.TruthTable({
	id: "full_adder_truth_table_expanded",
	headers: ["sum1", "c", "sum", "carry2"],
	rows: [
		[0, 0, 0, 0],
		[1, 0, 1, 0],
		[1, 1, 0, 1],
		[0, 1, 1, 0],
	],
});
full_adder_truth_table_expanded.render();

const sign_bit_subtractor = new csmd.TruthTable({
	id: "sign_bit_subtractor",
	headers: ["a", "b", "diff", "b"],
	rows: [
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
	],
});
sign_bit_subtractor.render();

const ALU_sample_table = new csmd.TruthTable({
	id: "ALU_sample_table",
	headers: ["zx", "nx", "zy", "ny", "f", "no", "out"],
	rows: [
		[1, 0, 1, 0, 1, 0, "0"],
		[1, 1, 1, 1, 1, 1, "1"],
		[1, 1, 1, 0, 1, 0, "-1"],
		[0, 0, 1, 1, 0, 0, "x"],
		[1, 1, 0, 0, 0, 0, "y"],
		[0, 0, 1, 1, 0, 1, "!x"],
		[1, 1, 0, 0, 1, 1, "!y"],
		[0, 0, 1, 1, 1, 1, "-x"],
		[1, 1, 0, 0, 1, 1, "-y"],
		[0, 1, 1, 1, 1, 1, "x + 1"],
		[1, 1, 0, 1, 1, 1, "y + 1"],
		[0, 0, 1, 1, 1, 0, "x - 1"],
		[1, 1, 0, 0, 1, 0, "y - 1"],
		[0, 0, 0, 0, 1, 0, "x + y"],
		[0, 1, 0, 0, 1, 1, "x - y"],
		[0, 0, 0, 1, 1, 1, "y - x"],
		[0, 0, 0, 0, 0, 0, "x & y"],
		[0, 1, 0, 1, 0, 1, "x | y"],
	],
});
ALU_sample_table.render();

const control_input_neg = new csmd.TruthTable({
	id: "control_input_neg",
	headers: ["x[16]", "y[16]", "zx", "nx", "zy", "ny", "f", "no"],
	rows: [["10", "3", 0, 0, 0, 0, 1, 0]],
}).render();

const not_sequence = new csmd.TruthTable({
	id: "not_sequence",
	headers: ["zx", "nx", "zy", "ny", "f", "no"],
	rows: [[0, 0, 1, 1, 0, 1]],
}).render();

const hsr_latch = new csmd.TruthTable({
	id: "hsr_latch",
	headers: [
		"set",
		"reset",
		"${\\texttt{Q}}$",
		"${\\overline{\\texttt{Q}}}$",
	],
	rows: [
		[0, 0, "NC", "NC"],
		[0, 1, 0, 1],
		[1, 0, 1, 0],
		[1, 1, "⊥", "⊥"],
	],
});
hsr_latch.render();

const lsr_latch = new csmd.TruthTable({
	id: "lsr_latch",
	headers: [
		"set",
		"reset",
		"${\\texttt{Q}}$",
		"${\\overline{\\texttt{Q}}}$",
	],
	rows: [
		[0, 0, "⊥", "⊥"],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[1, 1, "NC", "NC"],
	],
});
lsr_latch.render();

const flip_flop_truth_table = new csmd.TruthTable({
	id: "flip_flop_truth_table",
	focus: [
		[7, 5],
		[7, 6],
	],
	headers: [
		"clock",
		"set",
		"reset",
		"set*",
		"reset*",
		"${\\texttt{Q}}$",
		"${\\overline{\\texttt{Q}}}$",
	],
	rows: [
		[0, 0, 0, 1, 1, "NC", "NC"],
		[0, 0, 1, 1, 1, "NC", "NC"],
		[0, 1, 0, 1, 1, "NC", "NC"],
		[0, 1, 1, 1, 1, "NC", "NC"],
		[1, 0, 0, 1, 1, "NC", "NC"],
		[1, 0, 1, 1, 0, 0, 1],
		[1, 1, 0, 0, 1, 1, 0],
		[1, 1, 1, 0, 0, "⊥", "⊥"],
	],
});
flip_flop_truth_table.render();

const flip_flop_truth_table_2 = new csmd.TruthTable({
	id: "flip_flop_truth_table_2",
	focus: [[6, 3]],
	headers: ["clock", "set", "reset", "${\\texttt{T}_{n}}$"],
	rows: [
		[0, 0, 0, "${\\texttt{T}_{n-1}}$"],
		[0, 0, 1, "${\\texttt{T}_{n-1}}$"],
		[0, 1, 0, "${\\texttt{T}_{n-1}}$"],
		[0, 1, 1, "${\\texttt{T}_{n-1}}$"],
		[1, 0, 1, 0],
		[1, 1, 0, 1],
		[1, 1, 1, "⊥"],
	],
}).render();

const sine_graph = new csmd.Plot({
	id: "sine_graph",
	fn: (x) => Math.sin(x),
	domain: [-10, 10],
	range: [-4, 4],
	precision: 100,
}).render();

const analog_sine_graph = new csmd.Plot({
	id: "analog_sine_graph",
	fn: (x) =>
		Math.sin(Math.PI * x) / (2 * Math.abs(Math.sin(Math.PI * x))) + 0.5,
	domain: [-5, 5],
	range: [-5, 5],
	precision: 2000,
});
analog_sine_graph.COLORS.plotColor = "orange";
analog_sine_graph.render();

const bit_1 = new csmd.Bit({
	id: "bit_1",
}).render();

const dflipflop_truth_table = new csmd.TruthTable({
	id: "dflipflop_truth_table",
	headers: ["in", "clock", "set", "reset", "${\\texttt{T}_{n}}$"],
	rows: [
		[0, 0, 0, 1, "${\\texttt{T}_{n-1}}$"],
		[0, 1, 0, 1, 0],
		[1, 0, 1, 0, "${\\texttt{T}_{n-1}}$"],
		[1, 1, 1, 0, 1],
	],
}).render();

const dflipflop_final_truth_table = new csmd.TruthTable({
	id: "dflipflop_final_truth_table",
	focus: [
		[0, 2],
		[1, 2],
	],
	focusColor: "#916BBF",
	headers: ["clock", "in", "out(T)"],
	rows: [
		[0, 0, "out(T-1)"],
		[0, 1, "out(T-1)"],
		[1, 0, 0],
		[1, 1, 1],
	],
}).render();

const dflipflop_simplified = new csmd.TruthTable({
	id: "dflipflop_simplified",
	headers: ["out(T-1)", "in", "out(T)"],
	rows: [
		[0, 0, 0],
		[0, 1, 1],
		[1, 0, 0],
		[1, 1, 1],
	],
}).render();

// const nandGate = new csmd.Gate({
// 	id: "nandGate",
// 	in: ["a", "b"],
// 	out: ["c"]
// }).render();

const ram8 = new csmd.TruthTable({
	id: "ram8",
	headers: ["bit1", "bit2", "bit3", "register"],
	rows: [
		[0, 0, 0, "0"],
		[0, 0, 1, "1"],
		[0, 1, 0, "2"],
		[1, 0, 0, "3"],
		[0, 1, 1, "4"],
		[1, 0, 1, "5"],
		[1, 1, 0, "6"],
		[1, 1, 1, "7"],
	],
}).render();

const machine_language_instruct_add = new csmd.TruthTable({
	id: "machine_language_instruct_add",
	focus: [
		[0, 0],
		[0, 1],
		[0, 2],
	],
	headers: ["01000100110010"],
	rows: [[]],
}).render();

const assembly_language_instruct_add = new csmd.TruthTable({
	id: "assembly_language_instruct_add",
	focus: [
		[0, 0],
		[0, 1],
		[0, 2],
	],
	focusColor: "#2D4263",
	headers: ["010001", "0011", "0010"],
	rows: [["ADD", "R2", "R1"]],
}).render();

const symbolic_binary = new csmd.TruthTable({
	id: "symbolic_binary",
	focus: [
		[0, 1],
		[1, 1],
	],
	focusColor: "#2D4263",
	headers: [],
	rows: [
		["@17", "0000 0000 0001 0001"],
		["D+1; JLE", "1110 0111 1000 0110"],
	],
}).render();

const a_instruction_array = new csmd.StaticArray({
	id: "a_instruction_array",
	data: [
		{ val: 0, focus: "orange" },
		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },

		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },

		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 1, focus: "blue" },

		{ val: 0, focus: "blue" },
		{ val: 1, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 1, focus: "blue" },
	],
}).render();

const c_instruction_binary = new csmd.StaticArray({
	id: "c_instruction_binary",
	data: [
		{ val: 1, focus: "orange" },
		{ val: 1 },
		{ val: 1 },
		{ val: "a", focus: "blue" },

		{ val: "c1", focus: "blue" },
		{ val: "c2", focus: "blue" },
		{ val: "c3", focus: "blue" },
		{ val: "c4", focus: "blue" },

		{ val: "c5", focus: "blue" },
		{ val: "c6", focus: "blue" },
		{ val: "d1", focus: "red" },
		{ val: "d2", focus: "red" },

		{ val: "d3", focus: "red" },
		{ val: "j1", focus: "green" },
		{ val: "j2", focus: "green" },
		{ val: "j3", focus: "green" },
	],
}).render();

const computation_field = new csmd.TruthTable({
	id: "computation_field",
	headers: ["a", "c1", "c2", "c3", "c4", "c5", "c6", "Assembly"],
	rows: [
		[0, 1, 0, 1, 0, 1, 0, "0"],
		[0, 1, 1, 1, 1, 1, 1, "1"],
		[0, 1, 1, 1, 0, 1, 0, "-1"],
		[0, 0, 0, 1, 1, 0, 0, "D"],
		[0, 1, 1, 0, 0, 0, 0, "A"],
		[0, 0, 0, 1, 1, 0, 1, "!D"],
		[0, 1, 1, 0, 0, 1, 1, "!A"],
		[0, 0, 0, 1, 1, 1, 1, "-D"],
		[0, 1, 1, 0, 0, 1, 1, "-A"],
		[0, 0, 1, 1, 1, 1, 1, "D + 1"],
		[0, 1, 1, 0, 1, 1, 1, "A + 1"],
		[0, 0, 0, 1, 1, 1, 0, "D - 1"],
		[0, 1, 1, 0, 0, 1, 0, "A - 1"],
		[0, 0, 0, 0, 0, 1, 0, "D + A"],
		[0, 0, 1, 0, 0, 1, 1, "D - A"],
		[0, 0, 0, 0, 1, 1, 1, "A - D"],
		[0, 0, 0, 0, 0, 0, 0, "D & A"],
		[0, 0, 1, 0, 1, 0, 1, "D | A"],

		[1, 1, 0, 1, 0, 1, 0, ""],
		[1, 1, 1, 1, 1, 1, 1, ""],
		[1, 1, 1, 1, 0, 1, 0, ""],
		[1, 0, 0, 1, 1, 0, 0, ""],
		[1, 1, 1, 0, 0, 0, 0, "M"],
		[1, 0, 0, 1, 1, 0, 1, ""],
		[1, 1, 1, 0, 0, 1, 1, "-M"],
		[1, 0, 0, 1, 1, 1, 1, ""],
		[1, 1, 1, 0, 0, 1, 1, ""],
		[1, 0, 1, 1, 1, 1, 1, ""],
		[1, 1, 1, 0, 1, 1, 1, "M + 1"],
		[1, 0, 0, 1, 1, 1, 0, ""],
		[1, 1, 1, 0, 0, 1, 0, "M - 1"],
		[1, 0, 0, 0, 0, 1, 0, "D + M"],
		[1, 0, 1, 0, 0, 1, 1, "D - M"],
		[1, 0, 0, 0, 1, 1, 1, "M - D"],
		[1, 0, 0, 0, 0, 0, 0, "D & M"],
		[1, 0, 1, 0, 1, 0, 1, "D | M"],
	],
}).render();

const destination_bitfield = new csmd.TruthTable({
	id: "destination_bitfield",
	headers: ["d1", "d2", "d3", "Assembly", "Semantic"],
	rows: [
		[0, 0, 0, "null", "Value is not stored"],
		[0, 0, 1, "M", "MEM[A]"],
		[0, 1, 0, "D", "D-register"],
		[0, 1, 1, "MD", "MEM[A] and D-register"],
		[1, 0, 0, "A", "A-register"],
		[1, 0, 1, "AM", "A-register and MEM[A]"],
		[1, 1, 0, "AD", "A-register and D-register"],
		[1, 1, 1, "AMD", "A-register, MEM[A], and D-register"],
	],
}).render();

const jump_bitfield = new csmd.TruthTable({
	id: "jump_bitfield",
	headers: ["j1", "j2", "j3", "Assembly", "Semantic"],
	rows: [
		[0, 0, 0, "null", "no jump"],
		[0, 0, 1, "JGT", "if out > 0 ⟹ jump"],
		[0, 1, 0, "JEQ", "if out = 0 ⟹ jump"],
		[0, 1, 1, "JGE", "if out ≥ 0 ⟹ jump "],
		[1, 0, 0, "JLT", "if out < 0 ⟹ jump"],
		[1, 0, 1, "JNE", "if out ≠ 0 ⟹ jump"],
		[1, 1, 0, "JLE", "if out ≤ 0 ⟹ jump"],
		[1, 1, 1, "JMP", "unconditional jump"],
	],
}).render();

const display_pixel_array = new csmd.Matrix({
	id: "display_pixel_array",
	data: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	],
}).render();

const display_pixel_array_indexed = new csmd.Matrix({
	id: "display_pixel_array_indexed",
	indexed: true,
	data: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	],
}).render();

const display_pixel_array_indexed_topLeft = new csmd.Matrix({
	id: "display_pixel_array_indexed_topLeft",
	focus: [[3, 6]],
	indexed: true,
	data: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	],
}).render();

const display_pixel_array_shape = new csmd.Matrix({
	id: "display_pixel_array_shape",
	focus: [
		[0, 3],
		[0, 4],
		[1, 4],
		[2, 4],
		[3, 4],
		[4, 4],
		[4, 3],
		[4, 5],
	],
	indexed: true,
	data: [
		[0, 0, 0, 1, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 0, 0, 0],
	],
}).render();

const smaller_screen = new csmd.Matrix({
	id: "smaller_screen",
	indexed: true,
	data: [
		["a", "b", "c", "d", "e", "f", "g", "h"],
		["i", "j", "k", "l", "m", "n", "o", "p"],
		["q", "r", "s", "t", "u", "v", "w", "x"],
		["y", "z", "A", "B", "C", "D", "E", "F"],
	],
}).render();

const screen_registers = new csmd.TruthTable({
	id: "screen_registers",
	headers: ["register", "bit1(pixel)", "bit2(pixel)", "row"],
	rows: [
		["0", "a", "b", "0"],
		["1", "c", "d", "0"],
		["2", "e", "f", "0"],
		["3", "g", "h", "0"],
		["4", "i", "j", "1"],
		["5", "k", "l", "1"],
		["6", "m", "n", "1"],
		["7", "o", "p", "1"],
		["8", "q", "r", "2"],
		["9", "s", "t", "2"],
		["10", "u", "v", "2"],
		["11", "w", "x", "2"],
		["12", "y", "z", "3"],
		["13", "A", "B", "3"],
		["14", "C", "D", "3"],
		["15", "E", "F", "3"],
	],
}).render();

const screen_registers_select = new csmd.TruthTable({
	id: "screen_registers_select",
	focus: [[1, 0]],
	headers: ["register", "bit1(pixel)", "bit2(pixel)", "row"],
	rows: [
		["0", 0, 0, "0"],
		["1", 1, 0, "0"],
		["2", 0, 0, "0"],
		["3", 0, 0, "0"],
		["4", 0, 0, "1"],
		["5", 0, 0, "1"],
		["6", 0, 0, "1"],
		["7", 0, 0, "1"],
		["8", 0, 0, "2"],
		["9", 0, 0, "2"],
		["10", 0, 0, "2"],
		["11", 0, 0, "2"],
		["12", 0, 0, "3"],
		["13", 0, 0, "3"],
		["14", 0, 0, "3"],
		["15", 0, 0, "3"],
	],
}).render();

const smaller_screen_on = new csmd.Matrix({
	id: "smaller_screen_on",
	focus: [[0, 2]],
	indexed: true,
	data: [
		["0", "0", "1", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0", "0", "0"],
	],
}).render();

const pointer_demo_array = new csmd.StaticArray({
	id: "pointer_demo_array",
	indexed: true,
	data: [
		{ val: "-1" },
		{ val: "-1" },
		{ val: "-1" },
		{ val: "-1" },
		{ val: "-1" },
	],
}).render();

const fetch_execute_1 = new csmd.TruthTable({
	id: "fetch_execute_1",
	headers: ["time", "event"],
	rows: [
		["t${_0}$ - t${_1}$", "Fetch"],
		["t${_1}$ - t${_2}$", "Execute"],
		["t${_2}$ - t${_3}$", "Fetch"],
		["t${_3}$ - t${_4}$", "Execute"],
		["${\\vdots}$", "${\\vdots}$"],
		["t${_{n-1}}$ - t${_n}$", "Execute"],
	],
}).render();

const cpu1 = new csmd.Circuit({
	id: "cpu1",
	name: "CPU",
	in: ["inM[16]", "instruction[16]", "reset[1]"],
	out: ["outM[16]", "writeM[16]", "addressM[1]", "pc[16]"],
}).render();

const cpu_digraph = new csmd.Digraph({
	id: "cpu_digraph",
	dataset: [
		["instruction", "MUX16"],
		["c", "A-register"],
	],
	data: {
		nodes: [{ name: "instruction" }, { name: "MUX16" }],
		edges: [{ source: 1, target: 0 }],
	},
}).render();

const a_instruction_cpu_input = new csmd.StaticArray({
	id: "a_instruction_cpu_input",
	data: [
		{ val: 0, focus: "orange" },
		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },

		{ val: 1, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 1, focus: "blue" },
		{ val: 1, focus: "blue" },

		{ val: 1, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 1, focus: "blue" },
		{ val: 1, focus: "blue" },

		{ val: 1, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 0, focus: "blue" },
		{ val: 1, focus: "blue" },
	],
}).render();

const c_instruction_cpu_input = new csmd.StaticArray({
	id: "c_instruction_cpu_input",
	data: [
		{ val: 1, focus: "orange" },
		{ val: 1 },
		{ val: 1 },
		{ val: 0, focus: "blue" },

		{ val: 0, focus: "blue" },
		{ val: 1, focus: "blue" },
		{ val: 1, focus: "blue" },
		{ val: 1, focus: "blue" },

		{ val: 1, focus: "blue" },
		{ val: 1, focus: "blue" },
		{ val: 0, focus: "red" },
		{ val: 1, focus: "red" },

		{ val: 0, focus: "red" },
		{ val: 1, focus: "green" },
		{ val: 1, focus: "green" },
		{ val: 1, focus: "green" },
	],
}).render();

const c_instruction_cpu_input2 = new csmd.StaticArray({
	id: "c_instruction_cpu_input2",
	data: [
		{ val: 1, focus: "orange" },
		{ val: 1 },
		{ val: 1 },
		{ val: 0, focus: "blue" },

		{ val: 0, focus: "blue" },
		{ val: 1, focus: "blue" },
		{ val: 1, focus: "blue" },
		{ val: 1, focus: "blue" },

		{ val: 1, focus: "blue" },
		{ val: 1, focus: "blue" },
		{ val: 0, focus: "red" },
		{ val: 1, focus: "red" },

		{ val: 0, focus: "red" },
		{ val: 1, focus: "green" },
		{ val: 1, focus: "green" },
		{ val: 1, focus: "green" },
	],
}).render();

const cpu_internal = new csmd.Digraph({
	id: "cpu_internal",
	width: 100,
	collide: 30,
	height: 105,
	svg_width: 500,
	svg_height: 520,
	strength: -80,
	distance: 1,
	data: {
		nodes: [
			{ name: "instruction", focus: ["#B8FFD0", "green"] }, // 0
			{ name: "inM", focus: ["#B8FFD0", "green"] }, // 1
			{ name: "reset", focus: ["#B8FFD0", "green"] }, // 2
			{ name: "Mux16", focus: ["#FCB1B1", "#BB6464"] }, // 3
			{ name: "A-register", focus: ["#99FEFF", "#316B83"] }, // 4
			{ name: "D-register", focus: ["#99FEFF", "#316B83"] }, // 5
			{ name: "Mux16", focus: ["#FCB1B1", "#BB6464"] }, // 6
			{ name: "ALU", focus: ["#99FEFF", "#316B83"] }, // 7
			{ name: "outM", focus: ["#FFDCF7", "#B983FF"] }, // 8
			{ name: "writeM", focus: ["#FFDCF7", "#B983FF"] }, // 9
			{ name: "addressM", focus: ["#FFDCF7", "#B983FF"] }, // 10
			{ name: "PC", focus: ["#99FEFF", "#316B83"] }, // 11
			{ name: "pc", focus: ["#F5B5FC", "#B983FF"] }, // 12
			{ name: "c" }, // 13 cm
			{ name: "c" }, // 14 ca
			{ name: "c" }, // 15 cd
			{ name: "Cs" }, // 16 caluin
			{ name: "Cs" }, // 17 caluout
			{ name: "c" }, // 18 cm2
			{ name: "c" }, // 19 cpc
			{ name: "C" }, // 20 cwm
			{ name: "A-register-out", focus: ["lightgrey", "grey"] }, // 21 apin
			{ name: "ALU-out", focus: ["lightgrey", "grey"] }, // 22 alupin
			{ name: "ALU-out", focus: ["lightgrey", "grey"] }, // 23 pind
			{ name: "Memory-address-out", focus: ["lightgrey", "grey"] }, // 24 pinpic
		],
		edges: [
			{ source: 0, target: 3 },
			{ source: 3, target: 4 },
			{ source: 13, target: 3 },
			{ source: 14, target: 4 },
			{ source: 15, target: 5 },
			{ source: 16, target: 7 },
			{ source: 7, target: 17 },
			{ source: 18, target: 6 },
			{ source: 19, target: 11 },
			{ source: 20, target: 9 },
			{ source: 9, target: 8 },
			{ source: 4, target: 21 },
			{ source: 21, target: 6 },
			{ source: 6, target: 7 },
			{ source: 7, target: 22 },
			{ source: 22, target: 23 },
			{ source: 22, target: 8 },
			{ source: 23, target: 5 },
			{ source: 23, target: 3 },
			{ source: 5, target: 7 },
			{ source: 1, target: 6 },
			{ source: 24, target: 10 },
			{ source: 21, target: 24 },
			{ source: 24, target: 11 },
			{ source: 24, target: 10 },
			{ source: 2, target: 11 },
			{ source: 11, target: 12 },
		],
	},
}).render();

const alu_internal = new csmd.Digraph({
	id: "alu_internal",
	width: 100,
	collide: 50,
	height: 100,
	svg_width: 480,
	svg_height: 490,
	strength: 1,
	distance: 1,
	data: {
		nodes: [
			{ name: "instruction", focus: ["#B8FFD0", "green"] }, // 0
			{ name: "Mux16", focus: ["#FCB1B1", "#BB6464"] }, // 1
			{ name: "A-register", focus: ["#99FEFF", "#316B83"] }, // 2
			{ name: "c" }, // 3 c[M1]
			{ name: "c" }, // 4 c[A]
			{ name: "c" }, // 5 c[D]
			{ name: "Mux16", focus: ["#FCB1B1", "#BB6464"] }, // 6
			{ name: "ALU", focus: ["#99FEFF", "#316B83"] }, // 7
			{ name: "D-register", focus: ["#99FEFF", "#316B83"] }, // 8
			{ name: "Cs" }, // 9 ALU's input C's
			{ name: "Cs" }, // 10 ALU's Cs
			{ name: "ALU-out", focus: ["lightgrey", "grey"] }, // 11
			{ name: "outM", focus: ["#FFDCF7", "#B983FF"] }, // 12
			{ name: "inM", focus: ["#B8FFD0", "green"] }, // 13
			{ name: "c" }, // 14 c[M2]
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 1, target: 2 },
			{ source: 2, target: 6 },
			{ source: 6, target: 7 },
			{ source: 7, target: 11 },
			{ source: 11, target: 8 },
			{ source: 11, target: 12 },
			{ source: 3, target: 1 },
			{ source: 4, target: 2 },
			{ source: 5, target: 8 },
			{ source: 9, target: 7 },
			{ source: 7, target: 10 },
			{ source: 13, target: 6 },
			{ source: 8, target: 7 },
			{ source: 14, target: 6 },
		],
	},
}).render();

const instruction_handling = new csmd.Digraph({
	id: "instruction_handling",
	width: 100,
	collide: 35,
	height: 50,
	svg_width: 450,
	svg_height: 250,
	strength: 1,
	distance: 1,
	data: {
		nodes: [
			{ name: "instruction", focus: ["#B8FFD0", "green"] }, // 0
			{ name: "Mux16", focus: ["#FCB1B1", "#BB6464"] }, // 1
			{ name: "A-register", focus: ["#99FEFF", "#316B83"] }, // 2
			{ name: "c" }, // 3 c[M]
			{ name: "c" }, // 4 c[A]
			{ name: "to ALU", focus: ["lightgrey", "grey"] }, // 5
			{ name: "from ALU", focus: ["lightgrey", "grey"] }, // 6
			{ name: "addressM", focus: ["#FFDCF7", "#B983FF"] }, // 7
		],
		edges: [
			{ source: 0, target: 1, label: "0000 1011 1011 1001" },
			{ source: 1, target: 2 },
			{ source: 3, target: 1 },
			{ source: 4, target: 2 },
			{ source: 2, target: 5 },
			{ source: 6, target: 2 },
			{ source: 2, target: 7 },
		],
	},
}).render();

const control_unit_internal = new csmd.Digraph({
	id: "control_unit_internal",
	width: 100,
	collide: 90,
	height: 78,
	svg_width: 490,
	svg_height: 380,
	strength: 1,
	distance: 1,
	data: {
		nodes: [
			{ name: "A-register output", focus: ["lightgrey", "grey"] }, // 0
			{ name: "PC", focus: ["#99FEFF", "#316B83"] }, // 1
			{ name: "c" }, // 2 c[pc]
			{ name: "pc", focus: ["#FFDCF7", "#B983FF"] }, // 3
			{ name: "reset", focus: ["#B8FFD0", "green"] }, // 4
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 2, target: 1 },
			{ source: 1, target: 3, label: "program counter output" },
			{ source: 4, target: 1, label: "reset bit" },
		],
	},
}).render();

// const links = Object.values(sample.dataset.reduce((p, c) => (p[JSON.stringify(c)] = c, p), {})).flat();
// console.log(links);
// const nodes = [];
// for (let i = 0; i < links.length; i++) {
// 	let node = {};
// 	node['name'] = links[i];
// 	nodes.push(node);
// }
// console.log(nodes);

// const edges = [];
// sample.data.edges.forEach((e) => {
// 	let sourceNode = nodes.filter((n) => {
// 		return n.name === e.source;
// 	})[0],
// 		targetNode = nodes.filter((n) => {
// 			return n.name === e.target;
// 		})[0];
// 	edges.push({
// 		source: sourceNode,
// 		target: targetNode,
// 	})
// })

// console.log(edges);

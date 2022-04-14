import { cdemo } from "../CDemo.mjs";
import * as csmd from "../csmd/csmd.mjs";

/*
	1 - O(1) - constant
	2 - O(loglogn) - double logarithmic
	3 - O(log n) - logarithmic 
	4 - O((log n)^c) - polylogarithmic
	5 - O(n^c) where 0 < c < 1 - farctional power 
	6 - O(n) - linear
	7 - O(n log* n) - n log-star n
	8 - O(n log n) - linearithmic
	9 - O(n^2) - quadratic
	10 - O(n^c) - polynomial
	11 - O(c^n) - exponential
	12 - O(n!) - factorial
*/  

const alg_heat_map = new csmd.BubbleMap({
	id: 'alg_heat_map',
	key: {
		0: "${\\varnothing}$",
		1: "${O(1)}$",
		2: "${O(\\lg (\\lg n))}$",
		3: "${O(\\lg n)}$",
		4: "${O((\\lg n)^c)}$",
		5: "${O(n^{1/c})}$",
		6: "${O(n)}$",
		7: "${O(n \\lg* n)}$",
		8: "${O(n \\lg n)}$",
		9: "${O(n^2)}$",
		10: "${O(n^c)}$",
		11: "${O(c^n)}$",
		12: "${O(n!)}$",
	},
	margin: {
		top: 40,
		bottom: 70,
		left: 40,
		right: 40,
	},
	width: 100,
	svg_width: 550,
	svg_height: 210,
	height: 50,
	data: [
		{g: 'static array', v: 'access', l: 1},
		{g: 'static array', v: 'search', l: 6},
		{g: 'static array', v: 'insert', l: 6},
		{g: 'static array', v: 'delete', l: 6},

		{g: 'stack', v: 'access', l: 6},
		{g: 'stack', v: 'search', l: 6},
		{g: 'stack', v: 'insert', l: 1},
		{g: 'stack', v: 'delete', l: 1},

		{g: 'queue', v: 'access', l: 6},
		{g: 'queue', v: 'search', l: 6},
		{g: 'queue', v: 'insert', l: 1},
		{g: 'queue', v: 'delete', l: 1},

		{g: 'S-list', v: 'access', l: 6},
		{g: 'S-list', v: 'search', l: 6},
		{g: 'S-list', v: 'insert', l: 1},
		{g: 'S-list', v: 'delete', l: 1},

		{g: 'D-list', v: 'access', l: 6},
		{g: 'D-list', v: 'search', l: 6},
		{g: 'D-list', v: 'insert', l: 1},
		{g: 'D-list', v: 'delete', l: 1},

		{g: 'skip-list', v: 'access', l: 3},
		{g: 'skip-list', v: 'search', l: 3},
		{g: 'skip-list', v: 'insert', l: 3},
		{g: 'skip-list', v: 'delete', l: 3},

		{g: 'hash table', v: 'access', l: 0},
		{g: 'hash table', v: 'search', l: 1},
		{g: 'hash table', v: 'insert', l: 1},
		{g: 'hash table', v: 'delete', l: 1},

		{g: 'binary search tree', v: 'access', l: 3},
		{g: 'binary search tree', v: 'search', l: 3},
		{g: 'binary search tree', v: 'insert', l: 3},
		{g: 'binary search tree', v: 'delete', l: 3},

		{g: 'cartesian tree', v: 'access', l: 0},
		{g: 'cartesian tree', v: 'search', l: 3},
		{g: 'cartesian tree', v: 'insert', l: 3},
		{g: 'cartesian tree', v: 'delete', l: 3},

		{g: 'B-tree', v: 'access', l: 3},
		{g: 'B-tree', v: 'search', l: 3},
		{g: 'B-tree', v: 'insert', l: 3},
		{g: 'B-tree', v: 'delete', l: 3},

		{g: 'red-black tree', v: 'access', l: 3},
		{g: 'red-black tree', v: 'search', l: 3},
		{g: 'red-black tree', v: 'insert', l: 3},
		{g: 'red-black tree', v: 'delete', l: 3},

		{g: 'splay tree', v: 'access', l: 0},
		{g: 'splay tree', v: 'search', l: 3},
		{g: 'splay tree', v: 'insert', l: 3},
		{g: 'splay tree', v: 'delete', l: 3},

		{g: 'AVL tree', v: 'access', l: 3},
		{g: 'AVL tree', v: 'search', l: 3},
		{g: 'AVL tree', v: 'insert', l: 3},
		{g: 'AVL tree', v: 'delete', l: 3},

		{g: 'KD tree', v: 'access', l: 3},
		{g: 'KD tree', v: 'search', l: 3},
		{g: 'KD tree', v: 'insert', l: 3},
		{g: 'KD tree', v: 'delete', l: 3},
	]
}).render();

const quadratic_time_graph = {
	id: "quadratic_time_graph",
	fn: (x) => x**2,
	domain: [-5, 5],
	range: [-5, 5],
	precision: 100,
};

cdemo.plot(quadratic_time_graph);

const cubic_time_graph = {
	id: "cubic_time_graph",
	fn: (x) => x ** 3,
	domain: [-5, 5],
	range: [-5, 5],
	precision: 100,
};

cdemo.plot(cubic_time_graph);

const linearithmic_time_graph = {
	id: "linearithmic_time_graph",
	fn: (x) => x * Math.log(x),
	domain: [-5, 5],
	range: [-5, 5],
	precision: 100,
};

cdemo.plot(linearithmic_time_graph);

const linear_time_graph = {
	id: "linear_time_graph",
	fn: (x) => x,
	domain: [-5, 5],
	range: [-5, 5],
	precision: 100,
};

cdemo.plot(linear_time_graph);

const logarithmic_time_graph = {
	id: "logarithmic_time_graph",
	fn: (x) => Math.log(x),
	domain: [-5, 5],
	range: [-5, 5],
	precision: 100,
};

cdemo.plot(logarithmic_time_graph);

const constant_time_graph = {
	id: "constant_time_graph",
	fn: (x) => x,
	domain: [-5, 5],
	range: [-5, 5],
	precision: 100,
};

cdemo.plot(constant_time_graph);

const exponential_time_graph = {
	id: "exponential_time_graph",
	fn: (x) => 2**x,
	domain: [-5, 5],
	range: [-5, 5],
	precision: 100,
};
cdemo.plot(exponential_time_graph);



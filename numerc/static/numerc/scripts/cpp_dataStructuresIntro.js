import { cdemo } from "../CDemo.mjs";

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



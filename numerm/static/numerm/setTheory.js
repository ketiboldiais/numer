const chart = venn.VennDiagram();
const sets = [
	{ sets: ["Sample Space"], size: 50 },
	{ sets: ["Event"], size: 10 },
	{ sets: ["Sample Space", "Event"], size: 50 },
];
d3.select("#venn1").datum(sets).call(chart);


import * as csmd from "../csmd.mjs";

// const network_components_1 = new csmd.Digraph({
// 	id: 'network_components_1',
// 	height: 50,
// 	svg_width: 340,
// 	svg_height: 360,
// 	data: {
// 		nodes: [
// 			{ name: 'app' },
// 			{ name: 'app' },
// 			{ name: 'app' },
// 			{ name: 'host' },
// 			{ name: 'ps' },
// 			{ name: 'ps' },
// 			{ name: 'host' },
// 			{ name: 'app' },
// 			{ name: 'app' },
// 			{ name: 'app' },

// 			{ name: 'router' },
// 			{ name: 'host' },

// 			{ name: 'app' },
// 		],
// 		edges: [
// 			{source: 0, target: 3},
// 			{source: 3, target: 0},

// 			{source: 1, target: 3},
// 			{source: 3, target: 1},

// 			{source: 2, target: 3},
// 			{source: 3, target: 2},

// 			{source: 3, target: 4},
// 			{source: 4, target: 3},

// 			{source: 4, target: 5},
// 			{source: 5, target: 4},

// 			{source: 5, target: 6},
// 			{source: 6, target: 5},

// 			{source: 7, target: 6},
// 			{source: 6, target: 7},

// 			{source: 8, target: 6},
// 			{source: 6, target: 8},

// 			{source: 9, target: 6},
// 			{source: 6, target: 9},

// 			{source: 10, target: 5},
// 			{source: 5, target: 10},

// 			{source: 11, target: 10},
// 			{source: 10, target: 11},

// 			{source: 12, target: 11},
// 			{source: 11, target: 12},
// 		]
// 	}
// }).render();

// const wireless_network_1 = new csmd.Digraph({
// 	id: 'wireless_network_1',
// 	height: 50,
// 	svg_width: 360,
// 	svg_height: 360,
// 	data: {
// 		nodes: [
// 			{ name: 'host' },
// 			{ name: 'host' },
// 			{ name: 'host' },
// 			{ name: 'router1', radial: 70 },
// 			{ name: 'AP', radial: 80},
// 			{ name: 'router2', radial: 70 },
// 			{ name: 'host' },
// 			{ name: 'app' },
// 			{ name: 'app' },
// 			{ name: 'app' },

// 			{ name: 'router' },
// 			{ name: 'host' },

// 			{ name: 'app' },
// 		],
// 		edges: [
// 			{source: 0, target: 3},
// 			{source: 3, target: 0},

// 			{source: 1, target: 3},
// 			{source: 3, target: 1},

// 			{source: 2, target: 3},
// 			{source: 3, target: 2},

// 			{source: 3, target: 4},
// 			{source: 4, target: 3},

// 			{source: 4, target: 5},
// 			{source: 5, target: 4},

// 			{source: 5, target: 6},
// 			{source: 6, target: 5},

// 			{source: 7, target: 6},
// 			{source: 6, target: 7},

// 			{source: 8, target: 6},
// 			{source: 6, target: 8},

// 			{source: 9, target: 6},
// 			{source: 6, target: 9},

// 			{source: 10, target: 5},
// 			{source: 5, target: 10},

// 			{source: 11, target: 10},
// 			{source: 10, target: 11},

// 			{source: 12, target: 11},
// 			{source: 11, target: 12},
// 		]
// 	}
// }).render();

// const client_server_1 = new csmd.Digraph({
// 	id: 'client_server_1',
// 	height: 40,
// 	strength: -80,
// 	distance: 80,
// 	svg_width: 310,
// 	svg_height: 210,
// 	data: {
// 		nodes: [
// 			{name: "client1"},
// 			{name: "client2"},
// 			{name: "network"},
// 			{name: "server"},
// 		],
// 		edges: [
// 			{source: 0, target: 2},
// 			{source: 2, target: 0},
// 			{source: 1, target: 2},
// 			{source: 2, target: 1},
// 			{source: 3, target: 2},
// 			{source: 2, target: 3},
// 		]
// 	}
// }).render();

// const packet1 = new csmd.Digraph({
// 	id: 'packet1',
// 	height: 40,
// 	strength: -80,
// 	distance: 80,
// 	svg_width: 310,
// 	svg_height: 210,
// 	data: {
// 		nodes: [
// 			{name: "host1"},
// 			{name: "router"},
// 			{name: "host2"},
// 		],
// 		edges: [
// 			{source: 0, target: 1},
// 			{source: 1, target: 0},

// 			{source: 1, target: 2},
// 			{source: 2, target: 1},
// 		]
// 	}
// }).render();
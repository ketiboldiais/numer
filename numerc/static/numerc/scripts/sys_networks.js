import * as csmd from "../csmd/CSMD.mjs";

const network_components_1 = new csmd.Digraph({
	id: "network_components_1",
	height: 60,
	width: 60,
	strength: -10,
	svg_width: 310,
	svg_height: 310,
	data: {
		nodes: [
			{ name: "app" },
			{ name: "app" },
			{ name: "app" },
			{ name: "host" },
			{ name: "network" },
			{ name: "network" },
			{ name: "host" },
			{ name: "app" },
			{ name: "app" },
			{ name: "app" },

			{ name: "router" },
			{ name: "host" },

			{ name: "app" },
		],
		edges: [
			{ source: 0, target: 3 },
			{ source: 3, target: 0 },

			{ source: 1, target: 3 },
			{ source: 3, target: 1 },

			{ source: 2, target: 3 },
			{ source: 3, target: 2 },

			{ source: 3, target: 4 },
			{ source: 4, target: 3 },

			{ source: 4, target: 5 },
			{ source: 5, target: 4 },

			{ source: 5, target: 6 },
			{ source: 6, target: 5 },

			{ source: 7, target: 6 },
			{ source: 6, target: 7 },

			{ source: 8, target: 6 },
			{ source: 6, target: 8 },

			{ source: 9, target: 6 },
			{ source: 6, target: 9 },

			{ source: 10, target: 5 },
			{ source: 5, target: 10 },

			{ source: 11, target: 10 },
			{ source: 10, target: 11 },

			{ source: 12, target: 11 },
			{ source: 11, target: 12 },
		],
	},
}).render();

const networks_history = new csmd.TimeLine({
	id: "networks_history",
	color: "blueScheme",
	height: 45,
	width: 100,
	svg_width: 730,
	svg_height: 350,
	timeRange: [1960, 2020],
	yMax: 40,
	tickCount: { x: 18, y: 0 },
	data: [
		{
			event: "Kleinrock publishes work on packet switching.",
			time: [1961],
			y: 30,
			anchor: "start",
		},
		{
			event: "Licklider proposes galactic computer network.",
			time: [1962],
			y: 5,
		},
		{
			event: "Roberts designs ARPANET.",
			time: [1965],
			y: 20,
			anchor: "start",
		},
		{
			event: "Tomilson invents email at BBN.",
			time: [1971],
			y: 15,
		},
		{
			event: "Kahn and Cerft invent TCP.",
			time: [1972],
			y: 25,
			anchor: "start",
		},
		{
			event: "Clark and Metcalfe implement TCP, design ethernet.",
			time: [1973],
			y: 10,
			anchor: "start",
		},
		{
			event: "Mockapetris develops DNS system for host lookup.",
			time: [1975],
			y: 37,
			anchor: "middle",
		},
		{
			event: "Hayes and Heatherington introduce PC modem.",
			time: [1977],
			y: 2,
		},
		{
			event: "Perlman invents spanning tree algorithm.",
			time: [1980],
			y: 34,
			anchor: "start",
		},
		{
			event: "Berners-Lee proposes World Wide Web.",
			time: [1989],
			y: 38,
			anchor: "start",
		},
		{
			event: "World Wide Web protocols implemented.",
			time: [1990],
			y: 27,
			anchor: "start",
		},
		{
			event: "First web page.",
			time: [1991],
			y: 21,
			anchor: "start",
		},
		{
			event: "Mosaic released.",
			time: [1993],
			y: 19,
			anchor: "start",
		},
		{
			event: "JavaScript released.",
			time: [1995],
			y: 15,
			anchor: "start",
		},
		{
			event: "Google goes live.",
			time: [1998],
			y: 10,
			anchor: "start",
		},
		{
			event: "Dotcom collapse.",
			time: [2000],
			y: 33,
			anchor: "start",
		},
		{
			event: "Youtube goes live.",
			time: [2005],
			y: 25,
			anchor: "start",
		},
		{
			event: "Twitter goes live, AWS initial release.",
			time: [2006],
			y: 20,
			anchor: "start",
		},
		{
			event: "Number of interent users: 3.408 billion.",
			time: [2016],
			y: 38,
			anchor: "middle",
		},
	],
}).render();

const net1 = new csmd.Graph({
	id: "net1",
	color: "yellowScheme",
	data: [
		{ source: "Susan", target: "Boram" },
		{ source: "Boram", target: "Susan" },
	],
}).render();

const net2 = new csmd.Graph({
	id: "net2",
	height: 50,
	strength: -40,
	svg_height: 300,
	color: "yellowScheme",
	data: [
		{ source: "Boram", target: "House1" },
		{ source: "Susan", target: "House1" },
		{ source: "Sadik", target: "House2" },
		{ source: "Jane", target: "House2" },
		{ source: "House1", target: "House2" },
		{ source: "House2", target: "House1" },
	],
}).render();

const net3 = new csmd.Graph({
	id: "net3",
	height: 50,
	strength: -40,
	svg_height: 315,
	color: "yellowScheme",
	data: [
		{ source: "house1", target: "house2" },
		{ source: "house2", target: "house1" },
		{ source: "house3", target: "house2" },
		{ source: "house2", target: "house3" },
		{ source: "house4", target: "house1" },
		{ source: "house1", target: "house4" },
		{ source: "house2", target: "house6" },
		{ source: "house3", target: "house4" },
		{ source: "house4", target: "house5" },
		{ source: "house5", target: "house4" },
		{ source: "house1", target: "house5" },
		{ source: "house5", target: "house1" },
		{ source: "house4", target: "house7" },
		{ source: "house6", target: "house2" },
		{ source: "house2", target: "house6" },
		{ source: "house7", target: "house3" },
		{ source: "house3", target: "house7" },
	],
}).render();

const net4 = new csmd.Graph({
	id: "net4",
	height: 20,
	strength: -40,
	svg_height: 120,
	color: "yellowScheme",
	data: [
		{ source: "n1", target: "Conekt Network" },
		{ source: "Conekt Network", target: "n1" },
	],
}).render();

const net5 = new csmd.Network({
	id: "net5",
	height: 48,
	width: 95,
	collide: 22,
	distance: 9,
	strength: -30,
	svg_width: 530,
	svg_height: 255,
	data: [
		{
			source: "Conekt",
			target: "AT&T",
			tattr: { radial: 30 },
			sattr: { fill: "pink", stroke: "firebrick" },
		},
		{ source: "house1", target: "n1" },
		{ source: "house2", target: "n1" },
		{ source: "house3", target: "n1" },
		{ source: "house4", target: "n1" },
		{ source: "n1", target: "town1" },
		{ source: "n2", target: "town1" },
		{ source: "n3", target: "town1" },
		{ source: "town1", target: "Conekt" },
		{ source: "town2", target: "Conekt" },
		{ source: "n4", target: "town2" },
		{ source: "n5", target: "town2" },
		{ source: "n6", target: "town2" },
		{ source: "town3", target: "Conekt" },
		{ source: "town4", target: "Conekt" },
		{ source: "town5", target: "Conekt" },
		{ source: "AT&T", target: "Comcast", tattr: { radial: 30 } },
		{
			source: "WireUp",
			target: "Comcast",
			sattr: { fill: "pink", stroke: "firebrick" },
		},
		{ source: "town105", target: "WireUp" },
		{ source: "town106", target: "WireUp" },
		{ source: "town107", target: "WireUp" },
		{ source: "town108", target: "WireUp" },
		{ source: "town109", target: "WireUp" },
	],
}).render();

const airline_service = new csmd.Stack({
	id: 'airline_service',
	palette: 'yellowScheme',
	frameWidth: 125,
	width: 50,
	height: 22,
	data: [
		{val: 'airport (enter)'},
		{val: 'baggage (check)'},
		{val: 'gates (load)'},
		{val: 'runway (takeoff)'},
		{val: 'airplane routing'},
	]
}).render();

const airline_service2 = new csmd.Stack({
	id: 'airline_service2',
	palette: 'blueScheme',
	frameWidth: 125,
	width: 50,
	height: 22,
	data: [
		{val: 'airport (exit)'},
		{val: 'baggage (claim)'},
		{val: 'gates (unload)'},
		{val: 'runway (land)'},
		{val: 'airplane routing'},
	]
}).render();

const internet_service_layers = new csmd.Stack({
	id: 'internet_service_layers',
	frameWidth: 110,
	svg_width: 150,
	width: 100,
	height: 85,
	data: [
		{val: 'application'},
		{val: 'transport'},
		{val: 'network'},
		{val: 'link'},
		{val: 'physical'},
	]
}).render();

const packet1 = new csmd.Stack({
	id: 'packet1',
	palette: 'plainScheme',
	frameWidth: 100,
	width: 50,
	height: 8,
	data: [
		{val: 'message'},
		
	]
}).render();

const packet2 = new csmd.Stack({
	id: 'packet2',
	palette: 'plainScheme',
	frameWidth: 100,
	width: 50,
	height: 10,
	data: [
		{val: 'message'},
		{val: 'segment'},
		
	]
}).render();


const packet3 = new csmd.Stack({
	id: 'packet3',
	palette: 'plainScheme',
	frameWidth: 100,
	width: 50,
	height: 15,
	data: [
		{val: 'message'},
		{val: 'segment'},
		{val: 'datagram'},
		
	]
}).render();

const packet4 = new csmd.Stack({
	id: 'packet4',
	palette: 'plainScheme',
	frameWidth: 100,
	width: 50,
	height: 22,
	data: [
		{val: 'frame header', fill: 'lightgrey'},
		{val: 'message'},
		{val: 'segment'},
		{val: 'datagram'},
		{val: 'frame footer', fill: 'lightgrey'},
		
	]
}).render();

const packet5 = new csmd.Stack({
	id: 'packet5',
	palette: 'plainScheme',
	frameWidth: 100,
	width: 50,
	height: 22,
	data: [
		{val: 'frame header', fill: 'teal', text: 'white'},
		{val: 'message'},
		{val: 'segment'},
		{val: 'datagram'},
		{val: 'frame footer', fill: 'teal', text: 'white'},
		
	]
}).render();

const packet6 = new csmd.Stack({
	id: 'packet6',
	palette: 'plainScheme',
	frameWidth: 100,
	width: 50,
	height: 22,
	data: [
		{val: 'frame header', fill: 'tomato', text: 'white'},
		{val: 'message'},
		{val: 'segment'},
		{val: 'datagram', fill: '#FA7D09', text: 'white'},
		{val: 'frame footer', fill: 'tomato', text: 'white'},
		
	]
}).render();

const protocol_tree = new csmd.Tree({
	id: 'protocol_tree',
	container_height: 45,
	container_width: 90,
	height: 350,
	width: 600,
	displayNodes: false,
	data: [
		{child: 'Internet Protocol (IP)', parent: ''},

		{child: 'PPP', parent: 'Internet Protocol (IP)'},

		{child: 'ARP', parent: 'Internet Protocol (IP)'},
		{child: 'Enet', parent: 'ARP'},

		{child: 'TCP', parent: 'Internet Protocol (IP)'},
		{child: 'Telnet', parent: 'TCP'},
		{child: 'FTP', parent: 'TCP'},
		{child: 'HTTP', parent: 'TCP'},
		{child: 'SMTP', parent: 'TCP'},

		{child: 'ICMP', parent: 'Internet Protocol (IP)'},

		{child: 'UDP', parent: 'Internet Protocol (IP)'},
		{child: 'VoIP', parent: 'UDP'},
		{child: 'NFS', parent: 'UDP'},
		{child: 'DNS', parent: 'UDP'},
	]
}).render();


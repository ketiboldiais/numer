import * as csmd from "../csmd/csmd.mjs";

const ui1 = new csmd.TreeMap({
	id: "ui1",
	width: 40,
	height: 40,
	svg_width: 300,
	svg_height: 300,
	data: 
	{ name: '', value: 0, children:[
			{name: 'header', value: 20},
			{name: 'main', value: 20},
			{name: 'footer', value: 20},
			{name: 'nav', value: 20},
	]}
}).render();



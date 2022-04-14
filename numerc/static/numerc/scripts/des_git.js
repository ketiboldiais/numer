import * as csmd from "../csmd/csmd.mjs";

const commit_history_0 = new csmd.CallTrace({
	id: 'commit_history_0',
	margin: [0,70,30,70],
	svg_height: 70,
	height: 20,
	data: [
		{child: 'commit1', parent: ''},
		{child: 'commit2', parent: 'commit1'},
		{ child: 'commit3', parent: 'commit2', call: 'true'},
	]
}).render(); 

const commit_history_1 = new csmd.CallTrace({
	id: 'commit_history_1',
	margin: [0,70,30,70],
	svg_height: 70,
	height: 20,
	data: [
		{child: 'commit1', parent: ''},
		{child: 'commit2', parent: 'commit1'},
		{ child: 'commit3', parent: 'commit2', pointer: 'remote/main'},
	]
}).render(); 

const commit_history_2 = new csmd.CallTrace({
	id: 'commit_history_2',
	margin: [0,50,30,50],
	svg_height: 70,
	height: 20,
	data: [
		{child: 'commit1', parent: ''},
		{child: 'commit2', parent: 'commit1', anchor: 'middle'},
		{ child: 'commit3', parent: 'commit2', pointer: 'remote', anchor: 'middle'},
		{child: 'commit4', parent: 'commit3', anchor: 'middle'},
		{child: 'commit5', parent: 'commit4', pointer: 'main'},
	]
}).render(); 

const multi_branch1 = new csmd.CallTrace({
	id: 'multi_branch1',
	margin: [10,50,30,50],
	sibSpace: 5,
	nsibSpace: 9,
	svg_height: 200,
	svg_width: 400,
	height: 35,
	data: [
		{child: 'c1', parent: ''},
		{child: 'c2', parent: 'c1'},
		{child: 'main', parent: 'c2'},
		{child: 'c3', parent: 'main'},
		{child: 'branch1', parent: 'c2', anchor: 'middle'},
		{child: 'c6', parent: 'branch1'},
		{child: 'branch2', parent: 'c2', anchor: 'middle'},
		{child: 'c4', parent: 'branch2'},
		{child: 'c5', parent: 'c4'},
	]
}).render(); 
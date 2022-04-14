import { Bit } from "./Bit.mjs";
import { CBA } from "./CBA/CBA.mjs";
import { Circuit } from "./Circuit.mjs";
import { Digraph } from "./Digraph.mjs";
import { Flowchart } from "./D3Base/Flowchart.mjs";
import { Gate } from "./Circuit/Gate.mjs";
import { HeatMap } from "./D3Base/HeatMap.mjs";
import { LinkedList } from "./D3Base/LinkedList.mjs";
import { Logic } from "./Circuit/Logic.mjs";
import { Matrix } from "./Matrix/Matrix.mjs";
import { Memgram } from "./D3Base/Memgram.mjs";
import { Plot } from "./D3Base/Plot.mjs";
import { Queue } from "./D3Base/Queue.mjs";
import { Stack } from "./D3Base/Stack.mjs";
import { StaticArray } from "./StaticArray.mjs";
import { Tree } from "./D3Base/Tree.mjs";
import { TruthTable } from "./TruthTable/TruthTable.mjs";

export const demo = {
	bit: (obj) => new Bit(obj).render(),
	cba: (obj) => new CBA(obj).render(),
	circuit: (obj) => new Circuit(obj).render(),
	digraph: (obj) => new Digraph(obj).render(),
	flowchart: (obj) => new Flowchart(obj).render(),
	gate: (obj) => new Gate(obj).render(),
	tree: (obj) => new Tree(obj).render(),
	heatmap: (obj) => new HeatMap(obj).render(),
	linkedList: (obj) => new LinkedList(obj).render(),
	logic: (obj) => new Logic(obj).render(),
	matrix: (obj) => new Matrix(obj).render(),
	memgram: (obj) => new Memgram(obj).render(),
	plot: (obj) => new Plot(obj).render(),
	queue: (obj) => new Queue(obj).render(),
	stack: (obj) => new Stack(obj).render(),
	staticArray: (obj) => new StaticArray(obj).render(),
	truthTable: (obj) => new TruthTable(obj).render(),
};

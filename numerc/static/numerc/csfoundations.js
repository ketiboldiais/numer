functionPlot({
	target: "#linearAlgorithm",
	data: [{ fn: "x" }],
	width: 200,
   height: 200,
   xAxis: {
      label: "Time to solve",
		domain: [0, 8],
	},
   yAxis: {
      label: "Problem size",
      domain: [0, 8]
   }
});

functionPlot({
	target: "#halfTime",
	data: [{ fn: "0.5x" }, { fn: "x"}],
	width: 200,
   height: 200,
	xAxis: {
      label: "Time to solve",
		domain: [0, 8],
	},
   yAxis: {
      label: "Problem size",
      domain: [0, 8]
   }
});


functionPlot({
	target: "#logTime",
	data: [{ fn: "0.5x" }, { fn: "x"}, { fn: "log2(x)"}],
	width: 200,
   height: 200,
	xAxis: {
      label: "Time to solve",
		domain: [0, 8],
	},
   yAxis: {
      label: "Problem size",
      domain: [0, 8]
   }
});


window.addEventListener('DOMContentLoaded', () => {

   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       const id = entry.target.getAttribute('id');
       if (entry.intersectionRatio > 0) {
         document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
       } else {
         document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
       }
     });
   });
 
   // Track all sections that have an `id` applied
   document.querySelectorAll('section[id]').forEach((section) => {
     observer.observe(section);
   });
   
 });


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


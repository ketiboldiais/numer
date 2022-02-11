class CDemo {
	renderStaticArray(obj) {
		const arrayContainer = document.querySelector(`#${obj.id}`);
		const array = document.createElement("ol");
		array.style.listStyle = "none";
		array.style.display = "flex";
		array.style.justifyContent = "center";
		arrayContainer.appendChild(array);
		for (let i = 0; i < obj.data.length; i++) {
			const arrayElement = document.createElement("ul");
			arrayElement.style.padding = "0";
			arrayElement.style.margin = "0";
			const arrayElementDataField = document.createElement("li");
			arrayElementDataField.style.listStyleType = "none";
			arrayElementDataField.style.border = "solid thin lightgrey";
			arrayElementDataField.style.margin = "0 1px";
			arrayElementDataField.style.padding = "5px 3px";
			arrayElementDataField.style.width = "22px";
			arrayElementDataField.style.height = "22px";
			arrayElementDataField.style.lineHeight = "1em";
			arrayElementDataField.style.textAlign = "center";
			arrayElementDataField.style.fontFamily = "Fira";
			arrayElementDataField.style.fontSize = "0.75rem";
			arrayElementDataField.style.boxShadow =
				"0 2px 1px 0px rgba(43, 43, 43, 0.2), 0 2px 1px 0 rgba(0,0,0,0.2)";
			arrayElementDataField.innerText = obj.data[i].val;
			if (obj.data[i].focus == "red") {
				arrayElementDataField.style.backgroundColor = "tomato";
				arrayElementDataField.style.color = "white";
				arrayElementDataField.style.borderColor = "var(--darkRed)";
				arrayElementDataField.style.boxShadow =
					"0 2px 0px 0px rgba(163, 0, 0, 0.726), 0 2px 1px 0 rgba(145, 0, 0, 0.459)";
			} else if (obj.data[i].focus == "green") {
				arrayElementDataField.style.backgroundColor = "var(--darkGreen)";
				arrayElementDataField.style.color = "white";
				arrayElementDataField.style.borderColor = "var(--darkGreen)";
				arrayElementDataField.style.boxShadow =
					"0 2px 0px 0px rgba(19, 97, 0, 0.911), 0 2px 1px 0 rgba(0, 61, 5, 0.733)";
			} else if (obj.data[i].focus == "blue") {
				arrayElementDataField.style.backgroundColor = "var(--darkBlue)";
				arrayElementDataField.style.color = "white";
				arrayElementDataField.style.borderColor = "var(--darkBlue)";
				arrayElementDataField.style.boxShadow =
					" 0 2px 0px 0px rgba(0, 78, 97, 0.911), 0 2px 1px 0 rgba(0, 44, 61, 0.733)";
			}
			arrayElement.appendChild(arrayElementDataField);
			if (obj.indexed) {
				const arrayElementIndexField = document.createElement("li");
				arrayElementIndexField.style.listStyle = "none";
				arrayElementIndexField.style.fontFamily = "CMU";
				arrayElementIndexField.style.fontSize = "0.7rem";
				arrayElementIndexField.innerText = i;
				arrayElement.appendChild(arrayElementIndexField);
			}
			if (obj.data[i].annotate) { 
				const annotation = document.createElement("li");
				annotation.style.listStyle = "none";
				annotation.style.fontFamily = "Fira";
				annotation.style.fontSize = "0.7rem";
				annotation.style.padding = "5px 1px";
				annotation.style.textAlign = "center";
				annotation.style.margin = "0";
				annotation.innerText = obj.data[i].annotate;
				arrayElement.appendChild(annotation);
			}
			array.appendChild(arrayElement);
		}
	}

	renderQueue(obj) {
		const body = d3.select("body");
		const numberOfFrames = obj.data.length;
		const queueContainer = body.selectAll(`div#${obj.id}`);
		queueContainer.classed("demo-container", true);
		// SVG dimensions
		const margin = {
			top: 15,
			right: 5,
			bottom: 10,
			left: 5,
		};
		const dimensions = {
			width: 160 - margin.left - margin.right,
			height: 100 - margin.top - margin.bottom,
		};
		// x-axis scale
		const xScale = d3
			.scaleBand()
			.domain(d3.range(numberOfFrames))
			.rangeRound([0, dimensions.width])
			.paddingInner(0.01);
		// create SVG element
		const svg = queueContainer
			.append("div")
			.classed("svg-container", true)
			.classed("queue", true)
			.classed("singleFrame", numberOfFrames == 1)
			.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${dimensions.width + margin.left + margin.right} ${
					dimensions.height + margin.top + margin.bottom
				}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr("transform", `translate(${margin.left}, ${margin.top})`);
		// g element <==> a single frame
		const queueFrameGroup = svg
			.selectAll("g")
			.data(obj.data)
			.enter()
			.append("g")
			.classed("frame", true)
			.classed("emphasis", (d) => d.emphasis != null)
			.attr("transform", (d, i) => {
				return `translate(${xScale(i)}, 0)`;
			})
			.attr("y", 0);
		// Frame rectangle
		const frameRect = queueFrameGroup
			.append("rect")
			.attr("width", xScale.bandwidth() / 2)
			.attr("height", 40)
			.attr("rx", 3)
			.attr("ry", 3);
		// Data Field
		const dataField = queueFrameGroup
			.append("text")
			.attr("text-anchor", "middle")
			.style("font-family", "Fira")
			.attr("x", (d, i) => xScale.bandwidth() / 4)
			.attr("y", 15)
			.text((d) => d.val);
		// Annotations
		const annotation = queueFrameGroup
			.filter((d) => d.annotate)
			.append("text")
			.classed("annotation", true)
			.attr("text-anchor", "middle")
			.style("font-family", "Fira")
			.attr("x", (d, i) => xScale.bandwidth() / 4)
			.attr("y", -4)
			.text((d) => d.annotate);
		// Index
		if (obj.indexed) {
			queueFrameGroup
				.append("text")
				.classed("index", true)
				.attr("text-anchor", "middle")
				.style("font-family", "CMU")
				.attr("x", (d, i) => xScale.bandwidth() / 4)
				.attr("y", 55)
				.text((d, i) => i);
		}
	}
}

export const cdemo = new CDemo();

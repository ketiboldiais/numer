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

	renderTree(demoObj) {
		const main = d3.select("body");
		const userInputWidth = demoObj.width ? demoObj.width : 400;
		const userInputHeight = demoObj.height ? demoObj.height : 200;
		const demoContainer = main.selectAll(`#${demoObj.id}`);
		demoContainer.classed("demo-container", true);
		const numberOfNodes = demoObj.treeData.length;
		const colors = {
			strokeColor: "var(--textColor)",
			nodeStrokeColor: "var(--textColor)",
			circleFillColor: d3.scaleOrdinal(d3.schemePastel1),
			textColor: "var(--textColor)",
			edgeLabelColor: "var(--darkRed)",
			levelTextColor: "teal",
			heightTextColor: "coral",
		};
		const margin = {
			top: 35,
			right: 20,
			bottom: 20,
			left: 20,
		};
		const dimensions = {
			width: userInputWidth - margin.left - margin.right,
			height: userInputHeight - margin.top - margin.bottom,
			edgeStroke: 1,
			strokeWidth: 1,
			radius: "0.65rem",
			fontSize: "0.85rem",
			edgeLabelFontSize: "0.65rem",
			levelFontSize: "0.85rem",
		};
		// SVG rendering
		const svg = demoContainer
			.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", demoObj.divWidth ? demoObj.divWidth : "80%")
			.style(
				"padding-bottom",
				demoObj.paddingBottom ? demoObj.paddingBottom : "40%"
			)
			.style("overflow", "hidden")
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

		const svgDefs = svg.append("svg:defs");
		svgDefs
			.selectAll("marker")
			.data(["end"])
			.enter()
			.append("svg:marker")
			.attr("id", String)
			.attr("viewBox", "0 -5 10 10")
			.attr("refX", 26)
			.attr("refY", 0)
			.attr("markerWidth", 6)
			.attr("markerHeight", 8)
			.attr("orient", "auto")
			.append("svg:path")
			.attr("d", "M0,-5L10,0L0,5");

		function treeSize() {
			const levelWidth = [1];
			const childCount = function (level, n) {
				if (n.children && n.children.length > 0) {
					if (levelWidth.length <= level + 1) {
						levelWidth.push(0);
					}
					levelWidth[level + 1] += n.children.length;
					n.children.forEach(function (d) {
						childCount(level + 1, d);
					});
				}
			};
			childCount(0, root);
			const newHeight = d3.max(levelWidth) * 40; // 30 pixels per line
			return newHeight;
		}

		// Data structuring
		const root = d3
			.stratify()
			.id((d) => d.child)
			.parentId((d) => d.parent)(demoObj.treeData);
		const treeStructure = d3
			.tree()
			.size([dimensions.width, treeSize()])
			.separation((a, b) => (a.parent == b.parent ? 2 : 3));
		treeStructure(root);

		(function () {
			root.descendants().forEach((d) => (d.y = d.depth * 50));
			if (demoObj.skew == "right") {
				root.descendants().forEach((d) => (d.x = d.x + d.depth * 30));
			} else if (demoObj.skew == "left") {
				root.descendants().forEach((d) => (d.x = d.x - d.depth * 30));
			}
		})();

		// Add links
		const links = svg.append("g");
		const physicalLink = links
			.selectAll("line")
			.data(root.links())
			.enter()
			.append("line")
			.attr("x1", (d) => d.source.x)
			.attr("y1", (d) => d.source.y)
			.attr("x2", (d) => d.target.x)
			.attr("y2", (d) => d.target.y)
			.attr("stroke", (d) => {
				if (d.target.data.edgeMark == "red") {
					return "red";
				} else {
					return colors.strokeColor;
				}
			})
			.attr("marker-end", () => {
				if (demoObj.directed) {
					return "url(#end)";
				}
			})
			.attr("stroke-width", dimensions.edgeStroke);

		// Edge label
		// edge labels included only if an edge has edgeLabel: property set
		const linkLabel = links
			.selectAll("text")
			.data(root.links())
			.enter()
			.filter((d) => d.target.data.edgeLabel)
			.append("text")
			.text((d) => {
				return d.target.data.edgeLabel;
			})
			.attr("x", (d) => (d.source.x + d.target.x) / 2)
			.attr("y", (d) => (d.source.y + d.target.y) / 2)
			.attr("text-anchor", "middle")
			.attr("fill", colors.edgeLabelColor)
			.style("font-family", "Fira")
			.style("font-size", dimensions.edgeLabelFontSize);

		// Append circles to group element
		const circles = svg
			.append("g")
			.selectAll("circle")
			.data(root.descendants())
			.enter()
			.append("circle")
			.attr("class", "treeNode")
			.attr("cx", (d) => d.x)
			.attr("cy", (d) => d.y)
			.attr("r", dimensions.radius)
			.attr("fill", (d) => colors.circleFillColor(d.depth))
			.attr("stroke", colors.nodeStrokeColor)
			.attr("stroke-width", dimensions.strokeWidth);

		// Leveled
		// if data object has property leveled: true, level numbers are added
		function nodesByLevel(nodeList) {
			const arr = [];
			let depth = nodeList[0].depth;
			arr.push(nodeList[0]);
			for (let i = 0; i < nodeList.length; i++) {
				if (nodeList[i].depth > depth) {
					arr.push(nodeList[i]);
					depth = nodeList[i].depth;
				}
			}
			return arr;
		}

		if (demoObj.leveled) {
			const levelNums = svg
				.append("g")
				.selectAll("text")
				.data(nodesByLevel(root.descendants()))
				.enter()
				.append("text")
				.attr("x", 0)
				.attr("y", (d) => d.y + 3)
				.text((d) => d.depth + 1)
				.attr("text-anchor", "middle")
				.attr("fill", colors.levelTextColor)
				.style("font-family", "Fira")
				.style("font-size", dimensions.levelFontSize);
		}

		if (demoObj.heightMarked) {
			const heightNums = svg
				.append("g")
				.selectAll("text")
				.data(nodesByLevel(root.descendants()))
				.enter()
				.append("text")
				.attr("x", dimensions.width - 5)
				.attr("y", (d) => d.y + 3)
				.text((d) => d.depth)
				.attr("text-anchor", "middle")
				.attr("fill", colors.heightTextColor)
				.style("font-family", "Fira")
				.style("font-size", dimensions.levelFontSize);
		}

		// Append labels
		const labels = svg.append("g");
		const dataField = labels
			.selectAll("text")
			.data(root)
			.enter()
			.append("text")
			.text((d) => d.id)
			.attr("x", (d) => d.x)
			.attr("y", (d) => d.y + 5)
			.attr("text-anchor", "middle")
			.attr("fill", colors.textColor)
			.style("font-family", "Fira")
			.style("font-size", dimensions.fontSize);
		const annotate = labels
			.selectAll("text.annotate")
			.data(root)
			.enter()
			.filter((d) => d.data.annotate)
			.append("text")
			.text((d) => d.data.annotate)
			.attr("x", (d) => d.x)
			.attr("y", (d) => d.y - 20)
			.attr("text-anchor", "middle")
			.attr("fill", colors.textColor)
			.style("font-family", "Fira")
			.style("font-size", dimensions.fontSize);
	}
}

export const cdemo = new CDemo();

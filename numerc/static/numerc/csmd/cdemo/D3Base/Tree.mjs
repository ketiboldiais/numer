export class Tree {
	constructor(obj) {
		this.BODY = d3.select("body");
		this.ID = obj.id;
		this.demoContainer = this.BODY.selectAll(`#${this.ID}`);
		this.container_width = obj.container_width
			? `${obj.container_width}%`
			: "80%";
		this.container_height = obj.container_height
			? `${obj.container_height}%`
			: "40%";
		this.user_width = obj.width ? obj.width : 400;
		this.user_height = obj.height ? obj.height : 400;
		this.edgeLength = obj.edgeLength ? obj.edgeLength : 40;
		this.treeData = obj.data;
		this.isLevel = obj.leveled ? obj.leveled : false;
		this.isHeightMarked = obj.heightMarked ? obj.heightMarked : false;
		this.isDepthMarked = obj.depthMarked ? obj.depthMarked : false;
		this.isDirected = obj.directed ? obj.directed : false;
		this.nodeCount = this.treeData.length;
		this.colors = {
			strokeColor: "#B49C73",
			nodeStrokeColor: "#B8B2A6",
			nodeColor: "#FFEBCC",
			leafColor: "#CBE2B0",
			leafStrokeColor: "#99A799",
			textColor: "var(--textColor)",
			edgeLabelColor: "orangered",
			levelTextColor: "teal",
			heightMarkColor: "#B4CFB0",
			depthMarkColor: "#CDB699",
		};
		this.margin = {
			top: 30,
			right: 20,
			bottom: 20,
			left: 20,
		};
		this.dimensions = {
			width: this.user_width - this.margin.left - this.margin.right,
			height: this.user_height - this.margin.top - this.margin.bottom,
			edgeStroke: 1,
			strokeWidth: 1,
			radius: "0.65rem",
			fontSize: "0.85rem",
			annotationFontSize: "0.7rem",
			edgeLabelFontSize: "0.65rem",
			levelFontSize: "0.85rem",
		};
		this.svg = this.demoContainer
			.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", this.container_width)
			.style("padding-bottom", this.container_height)
			.style("overflow", "hidden")
			.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${
					this.dimensions.width + this.margin.left + this.margin.right
				} ${this.dimensions.height + this.margin.top + this.margin.bottom}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr(
				"transform",
				`translate(${this.margin.left}, ${this.margin.top})`
			);
		this.root = d3
			.stratify()
			.id((d) => d.child)
			.parentId((d) => d.parent)(this.treeData);
		this.treeSize = () => {
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
			childCount(0, this.root);
			const newHeight = d3.max(levelWidth) * 30; // 50 pixels per line
			return newHeight;
		};
		this.edgeLength = obj.edgeLength
			? obj.edgeLength
			: this.treeSize() * 1.1;
	}
	render(demoObj) {
		this.demoContainer.classed("demo-container", true);
		// SVG rendering

		// Append SVG definition markers
		const svgDefs = this.svg.append("svg:defs");
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

		// Data structuring

		const treeStructure = d3
			.tree()
			.size([this.dimensions.width, this.edgeLength])
			.separation((a, b) => (a.parent == b.parent ? 1 : 1.1));
		treeStructure(this.root);
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

		if (this.isLevel) {
			const levelNums = this.svg
				.append("g")
				.selectAll("text")
				.data(nodesByLevel(this.root.descendants()))
				.enter()
				.append("text")
				.attr("x", 0)
				.attr("y", (d) => d.y + 3)
				.text((d) => d.depth + 1)
				.attr("text-anchor", "middle")
				.attr("fill", this.colors.levelTextColor)
				.style("font-family", "Fira")
				.style("font-size", this.dimensions.levelFontSize);
			levelNums
				.selectAll("line")
				.data(nodesByLevel(this.root.descendants()))
				.enter()
				.append("line")
				.attr(
					"x1",
					(d) => -this.dimensions.width + this.dimensions.width + 10
				)
				.attr("y1", (d) => d.y)
				.attr("x2", (d) => this.dimensions.width)
				.attr("y2", (d) => d.y)
				.attr("stroke", this.colors.levelTextColor);
		}

		if (this.isDepthMarked) {
			const depthNums = this.svg.append("g");
			depthNums
				.selectAll("text")
				.data(nodesByLevel(this.root.descendants()))
				.enter()
				.append("text")
				.attr("x", 0)
				.attr("y", (d) => d.y + 3)
				.text((d) => d.depth)
				.attr("text-anchor", "middle")
				.attr("fill", this.colors.depthMarkColor)
				.style("font-family", "CMU")
				.style("font-size", this.dimensions.levelFontSize);
			depthNums
				.selectAll("line")
				.data(nodesByLevel(this.root.descendants()))
				.enter()
				.append("line")
				.attr(
					"x1",
					(d) => -this.dimensions.width + this.dimensions.width + 10
				)
				.attr("y1", (d) => d.y)
				.attr("x2", (d) => this.dimensions.width)
				.attr("y2", (d) => d.y)
				.attr("stroke", this.colors.depthMarkColor);
		}

		if (this.isHeightMarked) {
			const length = nodesByLevel(this.root.descendants()).length - 1;
			const heightNums = this.svg.append("g");
			heightNums
				.selectAll("text")
				.data(nodesByLevel(this.root.descendants()))
				.enter()
				.append("text")
				.attr("x", this.dimensions.width)
				.attr("y", (d) => d.y + 3)
				.text((d) => length - d.depth)
				.attr("text-anchor", "middle")
				.attr("fill", this.colors.heightMarkColor)
				.style("font-family", "Fira")
				.style("font-size", this.dimensions.levelFontSize);
			heightNums
				.selectAll("line")
				.data(nodesByLevel(this.root.descendants()))
				.enter()
				.append("line")
				.attr("x1", (d) => -this.dimensions.width + this.dimensions.width)
				.attr("y1", (d) => d.y)
				.attr("x2", (d) => this.dimensions.width - 10)
				.attr("y2", (d) => d.y)
				.attr("stroke", this.colors.heightMarkColor);
		}
		// Add links
		const links = this.svg.append("g");
		const physicalLink = links
			.selectAll("line")
			.data(this.root.links())
			.enter()
			.append("line")
			.attr("display", (d) =>
				d.source.data.display || d.target.data.display ? "none" : "initial"
			)
			.attr("x1", (d) => d.source.x)
			.attr("y1", (d) => d.source.y)
			.attr("x2", (d) => d.target.x)
			.attr("y2", (d) => d.target.y)
			.attr("stroke", (d) => {
				if (d.target.data.path) {
					return this.colors.edgeLabelColor;
				} else {
					return this.colors.strokeColor;
				}
			})
			.attr("stroke-opacity", (d) =>
				d.target.data.opacity ? d.target.data.opacity : 1
			)
			.attr("marker-end", () => {
				if (this.isDirected) {
					return "url(#end)";
				}
			})
			.attr("stroke-width", (d) => {
				if (d.target.data.path) {
					return 3;
				} else {
					return this.dimensions.edgeStroke;
				}
			});

		// Edge labe - edge labels included only if edge has edgeLabel: property set
		const linkLabel = links
			.selectAll("text")
			.data(this.root.links())
			.enter()
			.filter((d) => d.target.data.edgeLabel)
			.append("text")
			.text((d) => {
				return d.target.data.edgeLabel;
			})
			.attr("x", (d) => (d.source.x + d.target.x) / 2)
			.attr("y", (d) => (d.source.y + d.target.y) / 2)
			.attr("text-anchor", "middle")
			.attr("fill", this.colors.edgeLabelColor)
			.style("font-family", "Fira")
			.style("font-size", this.dimensions.edgeLabelFontSize);

		// Append circles to group element
		const circles = this.svg
			.append("g")
			.selectAll("circle")
			.data(this.root.descendants())
			.enter()
			.filter((d) => !d.data.display)
			.filter((d) => !d.data.noCircle)
			.append("circle")
			.attr("class", "treeNode")
			.attr("cx", (d) => d.x)
			.attr("cy", (d) => d.y)
			.attr("r", this.dimensions.radius)
			.attr("fill", (d) => {
				if (d.data.focus) {
					return `${d.data.focus}`;
				} else {
					return d.height == 0
						? this.colors.leafColor
						: this.colors.nodeColor;
				}
			})
			.attr("opacity", (d) => (d.data.opacity ? d.data.opacity : 1))
			.attr("stroke", (d) => {
				if (d.children) {
					return this.colors.nodeStrokeColor;
				} else {
					return this.colors.leafStrokeColor;
				}
			})
			.attr("stroke-width", this.dimensions.strokeWidth);

		// Append labels
		const labels = this.svg.append("g");
		// Data labels
		const dataField = labels
			.selectAll("text")
			.data(this.root)
			.enter()
			.filter((d) => !d.data.display)
			.append("text")
			.text((d) => d.id)
			.attr("x", (d) => d.x)
			.attr("y", (d) => {
				if (d.data.noCircle) {
					return d.y + 18;
				} else {
					return d.y + 5;
				}
			})
			.attr("opacity", (d) => (d.data.opacity ? d.data.opacity : 1))
			.attr("text-anchor", "middle")
			.attr("fill", this.colors.textColor)
			.style("font-family", "system-ui")
			.style("font-size", this.dimensions.fontSize);
		const annotate = labels
			.selectAll("text.annotate")
			.data(this.root)
			.enter()
			.filter((d) => d.data.annotate)
			.append("text")
			.text((d) => d.data.annotate)
			.attr("x", (d) => d.x)
			.attr("y", (d) => d.y - 20)
			.attr("text-anchor", "middle")
			.attr("fill", this.colors.textColor)
			.style("font-family", "Fira")
			.style("font-size", this.dimensions.annotationFontSize);
	}
}

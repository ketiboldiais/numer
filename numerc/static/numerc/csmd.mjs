/* ------------------------------- CONVENTIONS ------------------------------ */
/*
		Conventions used:
			- Class properties and methods are always capitalized.
			- If a property or method's identifier consists of multiple words,
				UNDERSCORES_ARE_USED_FOR_SPACES.
*/

export class CSMD {
	constructor(obj) {
		this.OBJ = obj;

		this.BODY = d3.select("body");

		this.CONTAINER = document.querySelector(`#${this.OBJ.id}`);

		this.MARGIN = {
			top: 10,
			right: 10,
			bottom: 10,
			left: 10,
		};

		this.CONTAINER_WIDTH = this.OBJ.container_width
			? `${this.OBJ.container_width}%`
			: "40%";

		this.CONTAINER_HEIGHT = this.OBJ.container_height
			? `${this.OBJ.container_height}%`
			: "40%";

		this.TH = () => {
			const TH = document.createElement("th");
			return TH;
		};

		this.TD = () => {
			const TD = document.createElement("td");
			return TD;
		};

		this.TR = () => {
			const TR = document.createElement("tr");
			return TR;
		};

		this.THEAD = () => {
			const THEAD = document.createElement("thead");
			return THEAD;
		};

		this.TBODY = () => {
			const TBODY = document.createElement("tbody");
			return TBODY;
		};

		this.TABLE = () => {
			const TABLE = document.createElement("table");
			return TABLE;
		};

		this.COLORS = {
			black: "#333",
			lightBlack: "#444444",
			white: "#FFF",
			beige: "#F9F3DF",
			lightBrown: "#CDB699",
			lightGreen: "#D5EEBB",
			darkGreen: "#529F00",
			forestGreen: "#238823",
			paleGreen: "#B4CFB0",
			paleYellowGreen: "#D3ECA7",
			blue: "#0077B6",
			darkBlue: "#006a97dc",
			purple: "#8946A6",
			tomato: "#FF6347",
			salmon: "#E83A14",
			pink: "#FE83C6",
			lavender: "#EA99D5",
			darkRed: "#A00000",
			orange: "#F0A500",
			teal: "#008080",
			lightGrey: "#CDCDCD",
			gold: "goldenrod",
			fireBrick: "firebrick",
			greyBlue: "#AECBD6",
		};

		this.fonts = {
			Mono: "Fira",
			Serif: "CMU",
		};
	}
}

export class D3Base extends CSMD {
	constructor(obj) {
		super(obj);
		this.D3_CONTAINER = this.BODY.selectAll(`#${this.OBJ.id}`);
		this.D3_CONTAINER.classed("demo-container", true);
	}
}

export class StaticArray extends CSMD {
	constructor(obj) {
		super(obj);

		this.arrayStyles = {
			listStyle: "none",
			overflow: "scroll",
			display: "flex",
			justifyContent: "center",
			padding: "5px",
			margin: "0",
		};

		this.arrayBorderSyle = {
			border: `solid thin ${this.COLORS.lightGrey}`,
			boxShadow:
				"2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #ffffff inset",
		};

		this.arrayElementStyles = {
			padding: "0",
			margin: "0",
		};

		this.arrayDataFieldStyles = {
			listStyleType: "none",
			border: `solid thin ${this.COLORS.lightGrey}`,
			margin: "0 1px",
			padding: "4px 1px",
			width: "22px",
			height: "22px",
			lineHeight: "1",
			textAlign: "center",
			fontFamily: this.fonts.Mono,
			fontSize: "0.67rem",
			boxShadow:
				"0 2px 1px 0px rgba(43, 43, 43, 0.2), 0 2px 1px 0 rgba(0,0,0,0.2)",
		};

		this.elementOrangeFocusStyle = {
			backgroundColor: this.COLORS.orange,
			color: this.COLORS.white,
			borderColor: this.COLORS.gold,
			boxShadow:
				"0 2px 0px 0px rgba(163, 0, 0, 0.726), 0 2px 1px 0 rgba(145, 0, 0, 0.459)",
		};

		this.elementRedFocusStyle = {
			backgroundColor: this.COLORS.tomato,
			color: this.COLORS.white,
			borderColor: this.COLORS.darkRed,
			boxShadow:
				"0 2px 0px 0px rgba(163, 0, 0, 0.726), 0 2px 1px 0 rgba(145, 0, 0, 0.459)",
		};
		this.elementGreenFocusStyle = {
			backgroundColor: this.COLORS.darkGreen,
			color: this.COLORS.white,
			borderColor: this.COLORS.darkGreen,
			boxShadow:
				"0 2px 0px 0px rgba(19, 97, 0, 0.911), 0 2px 1px 0 rgba(0, 61, 5, 0.733)",
		};
		this.elementBlueFocusStyle = {
			backgroundColor: this.COLORS.darkBlue,
			color: this.COLORS.white,
			borderColor: this.COLORS.darkBlue,
			boxShadow:
				" 0 2px 0px 0px rgba(0, 78, 97, 0.911), 0 2px 1px 0 rgba(0, 44, 61, 0.733)",
		};

		this.arrayIndexStyles = {
			listStyle: "none",
			fontFamily: this.fonts.Serif,
			textAlign: "center",
			fontSize: "0.7rem",
		};
	}

	render() {
		const array = document.createElement("ol");
		this.CONTAINER.append(array);
		Object.assign(array.style, this.arrayStyles);

		// If 'bordered' attribute is true, add a border around the array
		if (this.OBJ.bordered) {
			Object.assign(array.style, this.arrayBorderSyle);
		}

		for (let i = 0; i < this.OBJ.data.length; i++) {
			const arrayElement = document.createElement("ul");
			Object.assign(arrayElement.style, this.arrayElementStyles);
			array.appendChild(arrayElement);

			const arrayElementDataField = document.createElement("li");
			Object.assign(
				arrayElementDataField.style,
				this.arrayDataFieldStyles
			);

			arrayElementDataField.innerText = this.OBJ.data[i].val;

			if (this.OBJ.data[i].focus == "red") {
				Object.assign(
					arrayElementDataField.style,
					this.elementRedFocusStyle
				);
			} else if (this.OBJ.data[i].focus == "blue") {
				Object.assign(
					arrayElementDataField.style,
					this.elementBlueFocusStyle
				);
			} else if (this.OBJ.data[i].focus == "green") {
				Object.assign(
					arrayElementDataField.style,
					this.elementGreenFocusStyle
				);
			} else if (this.OBJ.data[i].focus == "orange") {
				Object.assign(
					arrayElementDataField.style,
					this.elementOrangeFocusStyle
				);
			}

			arrayElement.appendChild(arrayElementDataField);
			if (this.OBJ.indexed) {
				const arrayElementIndexField = document.createElement("li");
				Object.assign(arrayElementIndexField.style, this.arrayIndexStyles);
				arrayElementIndexField.innerText = i;
				arrayElement.appendChild(arrayElementIndexField);
			}
		}
	}
}

export class TruthTable extends CSMD {
	constructor(obj) {
		super(obj);

		this.color_array = ["#F9ECEC", "#F0D9DA", "#C8D9EB", "#ECF2F9"];

		this.TABLE_styles = {
			margin: "0 auto",
			fontFamily: "system-ui",
			fontSize: "0.7rem",
			border: "none",
		};

		this.THEAD_styles = {
			border: "none",
		};

		this.TBODY_styles = {};

		this.TD_styles = {
			textAlign: "center",
			border: "thin solid white",
		};

		this.TD_focus_style = {
			padding: "0.1em 0.4em",
			backgroundColor: this.OBJ.focusColor
				? this.OBJ.focusColor
				: this.COLORS.tomato,
			color: this.COLORS.white,
		};

		this.TR_styles = {};

		this.TH_styles = {
			textAlign: "center",
			padding: "0 0.5rem",
			border: "none",
		};
	}

	render() {
		const TABLE = this.TABLE();
		Object.assign(TABLE.style, this.TABLE_styles);

		const TBODY = this.TBODY();
		Object.assign(TBODY.style, this.TBODY_styles);
		TABLE.append(TBODY);

		const THEAD = this.THEAD();
		Object.assign(THEAD.style, this.THEAD_styles);
		TABLE.append(THEAD);

		this.CONTAINER.append(TABLE);

		for (let i = 0; i < this.OBJ.headers.length; i++) {
			const TH = this.TH();
			Object.assign(TH.style, this.TH_styles);
			TH.innerText = this.OBJ.headers[i];
			THEAD.appendChild(TH);
		}

		for (let i = 0; i < this.OBJ.rows.length; i++) {
			const TR = this.TR();
			Object.assign(TR.style, this.TR_styles);
			TBODY.append(TR);

			for (let j = 0; j < this.OBJ.rows[i].length; j++) {
				const TD = this.TD();
				Object.assign(TD.style, this.TD_styles);

				if (this.OBJ.rows[i][j] === 1) {
					TD.style.backgroundColor = "#CDF2CA";
					TD.style.color = this.COLORS.darkGreen;
				} else if (this.OBJ.rows[i][j] === 0) {
					TD.style.backgroundColor = "#FDFFBC";
					TD.style.color = this.COLORS.gold;
				} else {
					let k = i % this.color_array.length;
					TD.style.backgroundColor = this.color_array[k];
					TD.style.color = this.COLORS.black;
				}

				// If 'useLetters' attribute is true, use T for 1 and F for 0
				if (this.OBJ.useLetters) {
					TD.innerText = this.OBJ.rows[i][j] === 1 ? "T" : "F";
				} else {
					TD.innerText = this.OBJ.rows[i][j];
				}

				// If 'focus' attribute has a value, modify background color
				if (this.OBJ.focus) {
					for (let k = 0; k < this.OBJ.focus.length; k++) {
						if (i == this.OBJ.focus[k][0] && j == this.OBJ.focus[k][1]) {
							Object.assign(TD.style, this.TD_focus_style);
						}
					}
				}

				// Append the TD element to the row
				TR.append(TD);
			}
		}
	}
}

export class Matrix extends CSMD {
	constructor(obj) {
		super(obj);

		this.TABLE_styles = {
			margin: "0 auto",
			fontFamily: "system-ui",
			fontSize: "0.7rem",
			padding: "0.2em",
			border: "none",
			borderRadius: "5px",
			borderCollapse: "separate",
			borderSpacing: "3px",
		};

		// Style for the offsetting TH element
		this.OFFSET_TH_style = {
			border: "none",
		};

		this.TH_styles = {
			padding: "0",
			margin: "0",
			border: "none",
			fontWeight: "normal",
			color: `rgb(152, 212, 230)`,
			textAlign: "center",
		};

		this.TD_styles = {
			padding: "0.1em 0.4em",
			backgroundColor: this.COLORS.white,
			color: this.COLORS.black,
			border: `solid thin lightgrey`,
			boxShadow: "0 3px 2px 0px grey, 0 2px 1px 0 rgba(0,0,0,0.2)",
			textAlign: "center",
		};

		this.TD_focus_style = {
			backgroundColor: this.OBJ.focusBGColor
				? this.OBJ.focusBGColor
				: `rgb(48, 48, 48)`,
			color: this.OBJ.focusTextColor
				? this.OBJ.focusTextColor
				: this.COLORS.orange,
			border: `solid thin ${
				this.OBJ.focusBorderColor
					? this.OBJ.focusBorderColor
					: "rgb(51, 51, 51)"
			}`,
			boxShadow: `0 3px 2px 0px ${
				this.OBJ.focusBorderColor ? this.OBJ.focusBorderColor : "black"
			}, 0 2px 1px 0 rgba(0,0,0,0.2)`,
		};
	}
	render(obj) {
		const TABLE = this.TABLE();
		Object.assign(TABLE.style, this.TABLE_styles);
		this.CONTAINER.appendChild(TABLE);

		const THEAD = this.THEAD();
		TABLE.appendChild(THEAD);

		const TBODY = this.TBODY();
		TABLE.appendChild(TBODY);

		const ROW_COUNT = this.OBJ.data.length;

		for (let i = 0; i < ROW_COUNT; i++) {
			const TR = this.TR();
			TBODY.appendChild(TR);

			for (let j = 0; j < this.OBJ.data[i].length; j++) {
				const TD = this.TD();
				Object.assign(TD.style, this.TD_styles);
				TR.appendChild(TD);
				TD.innerText = this.OBJ.data[i][j];

				// If 'focus' attribute has a value, modify background color

				if (this.OBJ.focus) {
					for (let k = 0; k < this.OBJ.focus.length; k++) {
						if (i == this.OBJ.focus[k][0] && j == this.OBJ.focus[k][1]) {
							Object.assign(TD.style, this.TD_focus_style);
						}
					}
				}

				// If matrix attribute 'indexed' is true, add row index elements
				// If matrix attribute 'rowIndexed' is true, add row index elements
				if ((this.OBJ.indexed && j == 0) || this.OBJ.rowIndexed) {
					const INDEX_TD = this.TD();
					Object.assign(INDEX_TD.style, this.TH_styles);
					INDEX_TD.style.padding = "0 0.2em";
					INDEX_TD.innerText = i;
					TR.prepend(INDEX_TD);
				}
			}
		}

		// If matrix attribute 'indexed' is true, add column index elements
		// If matrix attribute 'rowIndexed' is true, add column index elements
		if (this.OBJ.indexed || this.OBJ.columnIndexed) {
			// Prepend an offsetting TH element to align the indices
			const OFFSET_TH = document.createElement("th");
			Object.assign(OFFSET_TH.style, this.OFFSET_TH_style);
			THEAD.append(OFFSET_TH);

			// Append the indices
			for (let i = 0; i < this.OBJ.data[0].length; i++) {
				const TH = document.createElement("th");
				Object.assign(TH.style, this.TH_styles);
				TH.innerText = i;
				THEAD.append(TH);
			}
		}
	}
}

export class Plot extends D3Base {
	constructor(obj) {
		super(obj);
		this.containerWidthDefault = "60%";

		this.containerHeightDefault = "50%";

		this.D3_CONTAINER_WIDTH = this.OBJ.width
			? `${this.OBJ.width}%`
			: this.containerHeightDefault;

		this.D3_CONTAINER_HEIGHT = this.OBJ.height
			? `${this.OBJ.height}%`
			: this.containerHeightDefault;

		// Set the SVG's width
		this.SVG_WIDTH = this.OBJ.svg_width ? this.OBJ.svg_width : 300;

		// Set the SVG's height
		this.SVG_HEIGHT = this.OBJ.svg_height ? this.OBJ.svg_height : 250;

		// Set the SVG's dimensions
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.left,
		};

		// The SVG container is <div> that wraps the SVG. This allows for resizing.
		this.SVG_CONTAINER = this.D3_CONTAINER.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", this.D3_CONTAINER_WIDTH)
			.style("padding-bottom", this.D3_CONTAINER_HEIGHT)
			.style("overflow", "hidden");

		this.SVG = this.SVG_CONTAINER.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${
					this.DIMENSIONS.width + this.MARGIN.left + this.MARGIN.right
				} ${this.DIMENSIONS.height + this.MARGIN.top + this.MARGIN.bottom}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr(
				"transform",
				`translate(${this.MARGIN.left}, ${this.MARGIN.top})`
			);

		// Arrow Definitions
		this.SVG_DEFINITIONS = this.SVG.append("svg:defs")
			.attr("id", "arrow")
			.append("svg:marker")
			.attr("viewBox", "0 0 10 10")
			.attr("refX", 5)
			.attr("refY", 5)
			.attr("markerWidth", 6)
			.attr("markerHeight", 6)
			.attr("orient", "auto")
			.append("svg:path")
			.attr("d", "M 0 0 L 10 5 L 0 10 z")
			.attr("stroke", "#000")
			.attr("stroke-width", 2);
		this.USER_INPUT_PRECISION = this.OBJ.precision
			? this.OBJ.precision
			: 100;
		this.COLORS = {
			plotColor: "firebrick",
			yAxisColor: "#AECBD6",
			xAxisColor: "#AECBD6",
		};

		// fn is a mathematical function written in JavaScript
		this.f = this.OBJ.fn;

		this.DATA = {
			domain: d3.ticks(
				this.OBJ.domain[0],
				this.OBJ.domain[1],
				this.USER_INPUT_PRECISION
			),
			// Range is a 2-element array object attribute
			domainUpperBound: this.OBJ.domain[0],
			domainLowerBound: this.OBJ.domain[1],
			rangeUpperBound: this.OBJ.range[0],
			rangeLowerBound: this.OBJ.range[1],
		};
		this.MARGIN = {
			top: 10,
			right: 10,
			bottom: 10,
			left: 10,
		};
		this.FONTS = {
			serif: "CMU",
			mono: "Fira",
			size: {
				tiny: "0.45rem",
				small: "0.6rem",
				medium: "0.8rem",
				large: "1rem",
			},
		};
		this.SCALE = {
			xAxis: d3.scaleLinear(
				[this.DATA.domainLowerBound, this.DATA.domainUpperBound],
				[this.DIMENSIONS.width, 0]
			),
			yAxis: d3.scaleLinear(
				[this.DATA.rangeLowerBound, this.DATA.rangeUpperBound],
				[0, this.DIMENSIONS.height]
			),
			xValue: d3.scaleLinear([0, 100]),
			yValue: d3.scaleLinear([100, 0]),
		};

		// Data point generator
		this.DATAPOINTS = () => {
			let dataset = [];
			let x, y;
			for (let i = 0; i <= this.DATA.domain.length - 1; i++) {
				x = this.DATA.domain[i];
				y = this.f(x);
				if (isNaN(y) || !isFinite(y)) {
					continue;
				} else {
					dataset.push([x, y]);
				}
			}
			return dataset;
		};

		// Line generator
		this.LINE = d3
			.line()
			.x((d) => this.SCALE.xAxis(d[0]))
			.y((d) => this.SCALE.yAxis(d[1]));

		// Clip Path
		this.CLIP_PATH = this.SVG.append("clipPath")
			.attr("id", "chart-area")
			.append("rect")
			.attr("x", this.MARGIN.right)
			.attr("y", this.MARGIN.top)
			.attr("width", this.DIMENSIONS.width)
			.attr("height", this.DIMENSIONS.height);
	}

	render() {
		const xAxis = d3
			.axisBottom(this.SCALE.xAxis)
			.tickSizeInner(3)
			.tickSizeOuter(0);
		const yAxis = d3
			.axisLeft(this.SCALE.yAxis)
			.tickSizeInner(3)
			.tickSizeOuter(0);

		// Append x-axis
		const append_xAxis = this.SVG.append("g")
			.attr("transform", `translate(0, ${this.DIMENSIONS.height / 2})`)
			.style("font-size", this.FONTS.size.tiny)
			.style("font-family", this.FONTS.serif)
			.style("color", this.COLORS.xAxisColor)
			.call(xAxis);

		// Append y-axis
		const append_yAxis = this.SVG.append("g")
			.attr("transform", `translate(${this.DIMENSIONS.width / 2}, 0)`)
			.style("font-size", this.FONTS.size.tiny)
			.style("color", this.COLORS.yAxisColor)
			.call(yAxis);

		// Select x-axis ticks
		const xAxis_ticks = append_xAxis.selectAll(".tick").selectAll("line");

		// Select y-axis ticks
		const yAxis_ticks = append_yAxis.selectAll(".tick").selectAll("line");

		// Last ticks selection
		const last_xTick = append_xAxis
			.selectAll(".tick:last-child")
			.selectAll("line");
		const last_xTick_text = append_xAxis
			.selectAll(".tick:last-child")
			.selectAll("text");

		const first_xTick = append_xAxis.select(".tick").selectAll("line");
		const first_xTick_text = append_xAxis
			.select(".tick")
			.selectAll("text");

		const last_yTick = append_yAxis
			.selectAll(".tick:last-child")
			.selectAll("line");
		const last_yTick_text = append_yAxis
			.selectAll(".tick:last-child")
			.selectAll("text");

		const first_yTick = append_yAxis.select(".tick").selectAll("line");
		const first_yTick_text = append_yAxis
			.select(".tick")
			.selectAll("text");

		const ticks = [
			first_xTick,
			first_xTick_text,
			last_xTick,
			last_xTick_text,

			first_yTick,
			first_yTick_text,
			last_yTick,
			last_yTick_text,
		];
		for (let i = 0; i < ticks.length; i++) {
			ticks[i].style("display", "none");
		}
		xAxis_ticks.attr("y1", -3);
		yAxis_ticks.attr("x1", 3);

		const plot = this.SVG.append("path")
			.datum(this.DATAPOINTS())
			.attr("clip-path", `url(#chart-area)`)
			.attr("fill", "none")
			.attr("stroke", this.COLORS.plotColor)
			.attr("stroke-width", 1)
			.attr("d", this.LINE);
	}
}

export class Digraph extends D3Base {
	constructor(obj) {
		super(obj);
		this.containerWidthDefault = "60%";

		this.containerHeightDefault = "50%";

		this.D3_CONTAINER_WIDTH = this.OBJ.width
			? `${this.OBJ.width}%`
			: this.containerHeightDefault;

		this.D3_CONTAINER_HEIGHT = this.OBJ.height
			? `${this.OBJ.height}%`
			: this.containerHeightDefault;

		// Set the SVG's width
		this.SVG_WIDTH = this.OBJ.svg_width ? this.OBJ.svg_width : 300;

		// Set the SVG's height
		this.SVG_HEIGHT = this.OBJ.svg_height ? this.OBJ.svg_height : 250;

		// Set the SVG's dimensions
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.left,
		};

		// The SVG container is <div> that wraps the SVG. This allows for resizing.
		this.SVG_CONTAINER = this.D3_CONTAINER.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", this.D3_CONTAINER_WIDTH)
			.style("padding-bottom", this.D3_CONTAINER_HEIGHT)
			.style("overflow", "hidden");

		this.SVG = this.SVG_CONTAINER.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${
					this.DIMENSIONS.width + this.MARGIN.left + this.MARGIN.right
				} ${this.DIMENSIONS.height + this.MARGIN.top + this.MARGIN.bottom}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr(
				"transform",
				`translate(${this.MARGIN.left}, ${this.MARGIN.top})`
			);

		this.NODES = this.OBJ.data.nodes;
		this.EDGES = this.OBJ.data.edges;
		this.COLLISION_RADIUS = this.OBJ.collide ? this.OBJ.collide : 15;
		this.FORCE_STRENGTH = this.OBJ.strength ? this.OBJ.strength : -100;
		this.FORCE_DISTANCE = this.OBJ.distance ? this.OBJ.distance : 35;
		this.NODE_COUNT = this.NODES.length;
		this.MARGIN = {
			top: 10,
			right: 10,
			bottom: 10,
			left: 10,
		};
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.bottom,
		};
		this.COLORS = {
			nodeColor: "#FFFDDE",
			nodeOutlineColor: "#DAB88B",
			radialNodeColor: "#C8F2EF",
			radialNodeOutlineColor: "#54BAB9",
			edgeLabelColor: "#5EAAA8",
			linkColor: "#ECA6A6",
			textColor: "black",
		};

		// Arrow Definitions
		this.SVG_DEFINITIONS = this.SVG.append("svg:defs")
			.selectAll("marker")
			.data(["end"])
			.enter()
			.append("svg:marker")
			.attr("id", String)
			.attr("viewBox", "0 -5 10 10")
			.attr("refX", 16)
			.attr("refY", 0)
			.attr("markerWidth", 10)
			.attr("markerHeight", 10)
			.attr("orient", "auto")
			.attr("fill", this.COLORS.linkColor)
			.append("svg:path")
			.attr("d", "M0,-5L10,0L0,5");
		this.FORCE = d3
			.forceSimulation(this.NODES)
			.force("charge", d3.forceManyBody().strength(this.FORCE_STRENGTH))
			.force(
				"link",
				d3.forceLink(this.EDGES).distance(this.FORCE_DISTANCE)
			)
			.force(
				"center",
				d3
					.forceCenter()
					.x(this.DIMENSIONS.width / 2)
					.y(this.DIMENSIONS.height / 2)
			)
			.force("collision", d3.forceCollide().radius(this.COLLISION_RADIUS));
	}
	render() {
		// const arrows = this.SVG.append("svg:defs")

		const edges = this.SVG.selectAll("line")
			.data(this.EDGES)
			.enter()
			.append("line")
			.style("stroke", this.COLORS.linkColor)
			.style("stroke-width", 1)
			.attr("marker-end", "url(#end)");
		const edgeLabel = this.SVG.selectAll("text")
			.data(this.EDGES)
			.enter()
			.append("text")
			.attr("text-anchor", "middle")
			.attr("fill", this.COLORS.edgeLabelColor)
			.style("font-family", "Fira")
			.style("font-size", "0.65rem")
			.text((d) => d.label);

		const nodeGroup = this.SVG.selectAll("g")
			.data(this.NODES)
			.enter()
			.append("g");

		const node = nodeGroup
			.append("circle")
			.attr("fill", (d) => {
				if (d.focus) {
					return d.focus[0];
				} else if (d.radial) {
					return this.COLORS.radialNodeColor;
				} else {
					return this.COLORS.nodeColor;
				}
			})
			.attr("stroke", (d) => {
				if (d.focus) {
					return d.focus[1];
				} else if (d.radial) {
					return this.COLORS.radialNodeOutlineColor;
				} else {
					return this.COLORS.nodeOutlineColor;
				}
			})
			.attr("r", (d) => (d.radius ? d.radius : 8));

		const radialNode = nodeGroup
			.filter((d) => d.radial)
			.append("circle")
			.attr("fill", this.COLORS.radialNodeColor)
			.attr("stroke", this.COLORS.radialNodeOutlineColor)
			.attr("opacity", 0.4)
			.attr("r", (d) => d.radial);

		const nodeLabel = nodeGroup
			.append("text")
			.text((d) => d.name)
			.attr("text-anchor", "middle")
			.attr("dx", "-1.3em")
			.attr("fill", this.COLORS.textColor)
			.style("font-family", "Fira")
			.style("font-size", "0.65rem");

		this.FORCE.on("tick", function () {
			edges
				.attr("x1", (d) => d.source.x)
				.attr("y1", (d) => d.source.y)
				.attr("x2", (d) => d.target.x)
				.attr("y2", (d) => d.target.y);
			edgeLabel
				.attr("x", (d) => (d.source.x + d.target.x) / 2)
				.attr("y", (d) => (d.source.y + d.target.y) / 2);
			node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
			radialNode.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
			nodeLabel.attr("x", (d) => d.x).attr("y", (d) => d.y);
		});
	}
}

export class Flowchart extends D3Base {
	constructor(obj) {
		super(obj);
		this.containerWidthDefault = "60%";

		this.containerHeightDefault = "50%";

		this.D3_CONTAINER_WIDTH = this.OBJ.width
			? `${this.OBJ.width}%`
			: this.containerHeightDefault;

		this.D3_CONTAINER_HEIGHT = this.OBJ.height
			? `${this.OBJ.height}%`
			: this.containerHeightDefault;

		// Set the SVG's width
		this.SVG_WIDTH = this.OBJ.svg_width ? this.OBJ.svg_width : 300;

		// Set the SVG's height
		this.SVG_HEIGHT = this.OBJ.svg_height ? this.OBJ.svg_height : 250;

		// Set the SVG's dimensions
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.left,
		};

		// The SVG container is <div> that wraps the SVG. This allows for resizing.
		this.SVG_CONTAINER = this.D3_CONTAINER.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", this.D3_CONTAINER_WIDTH)
			.style("padding-bottom", this.D3_CONTAINER_HEIGHT)
			.style("overflow", "hidden");

		this.SVG = this.SVG_CONTAINER.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${
					this.DIMENSIONS.width + this.MARGIN.left + this.MARGIN.right
				} ${this.DIMENSIONS.height + this.MARGIN.top + this.MARGIN.bottom}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr(
				"transform",
				`translate(${this.MARGIN.left}, ${this.MARGIN.top})`
			);

		this.NODES = this.OBJ.data.nodes;
		this.EDGES = this.OBJ.data.edges;
		this.COLLISION_RADIUS = this.OBJ.collide ? this.OBJ.collide : 60;
		this.FORCE_STRENGTH = this.OBJ.strength ? this.OBJ.strength : 1;
		this.FORCE_DISTANCE = this.OBJ.distance ? this.OBJ.distance : 1;
		this.NODE_COUNT = this.NODES.length;
		this.MARGIN = {
			top: 10,
			right: 10,
			bottom: 10,
			left: 10,
		};
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.bottom,
		};
		this.COLORS = {
			nodeColor: "#FFFDDE",
			nodeOutlineColor: "#DAB88B",
			radialNodeColor: "#C8F2EF",
			radialNodeOutlineColor: "#54BAB9",
			edgeLabelColor: "#5EAAA8",
			linkColor: "#96C7C1",
			textColor: "black",
		};

		// Arrow Definitions

		this.FORCE = d3
			.forceSimulation(this.NODES)
			.force("charge", d3.forceManyBody().strength(this.FORCE_STRENGTH))
			.force(
				"link",
				d3.forceLink(this.EDGES).distance(this.FORCE_DISTANCE)
			)
			.force(
				"center",
				d3
					.forceCenter()
					.x(this.DIMENSIONS.width / 2)
					.y(this.DIMENSIONS.height / 2)
			)
			.force("collision", d3.forceCollide().radius(this.COLLISION_RADIUS));
	}
	render() {
		const svgDefinitions = this.SVG.append("defs")
			.selectAll("marker")
			.data(["end"])
			.enter()
			.append("marker")
			.attr("id", "arrowEnd")
			.attr("viewBox", "0 -5 10 10")
			.attr("refX", 80)
			.attr("refY", 0)
			.attr("markerWidth", 8)
			.attr("markerHeight", 8)
			.attr("orient", "auto")
			.attr("fill", this.COLORS.linkColor)
			.append("svg:path")
			.attr("d", "M0,-5L10,0L0,5");

		const edges = this.SVG.selectAll("line")
			.data(this.EDGES)
			.enter()
			.append("line")
			.style("stroke", this.COLORS.linkColor)
			.style("stroke-width", 1)
			.attr("marker-end", "url(#arrowEnd)");

		const nodeGroup = this.SVG.selectAll("g")
			.data(this.NODES)
			.enter()
			.append("g");

		const nodeLabel = nodeGroup
			.append("foreignObject")
			.attr("width", (d) => (d.width ? d.width : 80))
			.attr("height", (d) => (d.height ? d.height : 40))
			.attr("x", (d) => (d.width ? -d.width / 2 : -40))
			.attr("y", (d) => (d.height ? -d.height / 2 : -20));

		const span = nodeLabel
			.append("xhtml:div")
			.html((d) => d.name)
			.style("display", "block")
			.style("padding", "2px 0.4em")
			.style("background-color", (d) => (d.fill ? d.fill : "white"))
			.style("border", "solid thin black")
			.style("text-align", "left")
			.style("font-size", "0.7rem")
			.style("color", "black");

		this.FORCE.on("tick", function () {
			edges
				.attr("x1", (d) => d.source.x)
				.attr("y1", (d) => d.source.y)
				.attr("x2", (d) => d.target.x)
				.attr("y2", (d) => d.target.y);
			nodeGroup.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
		});
	}
}

export class Queue extends D3Base {
	constructor(obj) {
		super(obj);
		this.DATA = this.OBJ.data;
		this.containerWidthDefault = "40%";

		this.containerHeightDefault = "20%";

		this.D3_CONTAINER_WIDTH = this.OBJ.width
			? `${this.OBJ.width}%`
			: this.containerWidthDefault;

		this.D3_CONTAINER_HEIGHT = this.OBJ.height
			? `${this.OBJ.height}%`
			: this.containerHeightDefault;

		// Set the SVG's width
		this.SVG_WIDTH = this.OBJ.svg_width ? this.OBJ.svg_width : 200;

		// Set the SVG's height
		this.SVG_HEIGHT = this.OBJ.svg_height ? this.OBJ.svg_height : 350;

		this.FRAME_COUNT = this.DATA.length;

		this.MARGIN = {
			top: 20,
			right: 20,
			bottom: 20,
			left: 20,
		};
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.bottom,
		};

		// The SVG container is <div> that wraps the SVG. This allows for resizing.
		this.SVG_CONTAINER = this.D3_CONTAINER.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", this.D3_CONTAINER_WIDTH)
			.style("padding-bottom", this.D3_CONTAINER_HEIGHT)
			.style("overflow", "hidden");

		this.SVG = this.SVG_CONTAINER.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${
					this.DIMENSIONS.width + this.MARGIN.left + this.MARGIN.right
				} ${this.DIMENSIONS.height + this.MARGIN.top + this.MARGIN.bottom}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr(
				"transform",
				`translate(${this.MARGIN.left}, ${this.MARGIN.top})`
			);

		this.xSCALE = d3
			.scaleBand()
			.domain(d3.range(this.FRAME_COUNT))
			.rangeRound([0, this.DIMENSIONS.width])
			.paddingInner(0.1);
		this.ySCALE = d3
			.scaleBand()
			.domain(d3.range(this.FRAME_COUNT))
			.range([this.DIMENSIONS.height, 0]);
	}

	render() {
		const arrows = this.SVG.append("svg:defs")
			.attr("id", "arrow")
			.append("svg:marker")
			.attr("viewBox", "0 -5 10 10")
			.attr("refX", 80)
			.attr("refY", 0)
			.attr("markerWidth", 8)
			.attr("markerHeight", 8)
			.attr("orient", "auto")
			.attr("fill", "#000")
			.append("svg:path")
			.attr("d", "M0,-5L10,0L0,5");
		const queueGroup = this.SVG.selectAll("g")
			.data(this.DATA)
			.enter()
			.append("g")
			.attr("transform", (d, i) => `translate(${this.xSCALE(i)}, 0)`);
		const dataFrame = queueGroup
			.append("rect")
			.attr("width", this.xSCALE.bandwidth())
			.attr("height", this.ySCALE.bandwidth() * 0.75)
			.attr("fill", "white")
			.attr("stroke", "#C3DBD9");
		const indexFrame = queueGroup
			.append("rect")
			.attr("width", this.xSCALE.bandwidth())
			.attr("height", this.ySCALE.bandwidth() * 0.25)
			.attr("y", this.ySCALE.bandwidth() / 2)
			.attr("fill", "#EFFFFD")
			.attr("stroke", "#C3DBD9");
		const dataLabel = queueGroup
			.append("text")
			.attr("text-anchor", "middle")
			// .attr("fill", "#1572A1")
			.attr("fill", "#709FB0")
			.attr("x", this.xSCALE.bandwidth() / 2)
			.attr("y", this.ySCALE.bandwidth() / 4)
			.attr("dy", "0.4em")
			.style("font-family", "system-ui")
			.style("font-size", "1.2rem")
			.text((d) => d.val);
		const indexLabel = queueGroup
			.append("text")
			.attr("text-anchor", "middle")
			.attr("fill", "#8AC6D1")
			.attr("x", this.xSCALE.bandwidth() / 2)
			.attr("y", this.ySCALE.bandwidth() / 1.65)
			.attr("dy", "0.4em")
			.style("font-family", "system-ui")
			.style("font-size", "0.7rem")
			.text((d, i) => i);
	}
}

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
			top: 20,
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

export class Stack extends D3Base {
	constructor(obj) {
		super(obj);
		this.containerWidthDefault = "60%";

		this.containerHeightDefault = "50%";

		this.D3_CONTAINER_WIDTH = this.OBJ.width
			? `${this.OBJ.width}%`
			: this.containerHeightDefault;

		this.D3_CONTAINER_HEIGHT = this.OBJ.height
			? `${this.OBJ.height}%`
			: this.containerHeightDefault;

		// Set the SVG's width
		this.SVG_WIDTH = this.OBJ.svg_width ? this.OBJ.svg_width : 300;

		// Set the SVG's height
		this.SVG_HEIGHT = this.OBJ.svg_height ? this.OBJ.svg_height : 250;

		// Set the SVG's dimensions
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.left,
		};

		// The SVG container is <div> that wraps the SVG. This allows for resizing.
		this.SVG_CONTAINER = this.D3_CONTAINER.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", this.D3_CONTAINER_WIDTH)
			.style("padding-bottom", this.D3_CONTAINER_HEIGHT)
			.style("overflow", "hidden");

		this.SVG = this.SVG_CONTAINER.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${
					this.DIMENSIONS.width + this.MARGIN.left + this.MARGIN.right
				} ${this.DIMENSIONS.height + this.MARGIN.top + this.MARGIN.bottom}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr(
				"transform",
				`translate(${this.MARGIN.left}, ${this.MARGIN.top})`
			);

		// Arrow Definitions

		this.DATA = this.OBJ.frames;
		this.FRAME_COUNT = this.OBJ.frames.length;
		this.MARGIN = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		};
		this.FRAME_DIMENSIONS = {
			width: this.OBJ.frameWidth ? this.OBJ.frameWidth : 60,
			height: this.OBJ.frameHeight ? this.OBJ.frameHeight : 20,
		};
		this.SCALE = d3
			.scaleBand()
			.domain(this.DATA)
			.range([0, this.FRAME_COUNT * 22]);
		this.COLORS = {
			frameColor: this.OBJ.colorFrame ? this.OBJ.colorFrame : "white",
			frameStrokeColor: this.OBJ.colorStroke ? this.OBJ.colorStroke : 'black',
			textColor: this.OBJ.colorText ? this.OBJ.colorText : 'black'
		};
	}
	render() {
		const arrowEnd = this.SVG.append("svg:defs")
			.selectAll("marker")
			.data(["end"])
			.enter()
			.append("svg:marker")
			.attr("id", "arrow")
			.attr("viewBox", "0 -5 10 10")
			.attr("refX", 8)
			.attr("refY", 0)
			.attr("markerWidth", 7)
			.attr("markerHeight", 7)
			.attr("orient", "auto")
			.attr("fill", "black")
			.append("svg:path")
			.attr("d", "M0,-5L10,0L0,5");

		const frameGroup = this.SVG.selectAll("g")
			.data(this.DATA)
			.enter()
			.append("g")
			.attr(
				"transform",
				(d) => `translate(${this.DIMENSIONS.width / 2}, ${this.SCALE(d)})`
			);

		const rect = frameGroup
			.append("rect")
			.attr('stroke', this.COLORS.frameStrokeColor)
			.attr("x", (d) => {
				if (d.popped) {
					return this.FRAME_DIMENSIONS.width / 2;
				} else {
					return -this.FRAME_DIMENSIONS.width / 2;
				}
			})
			.attr("y", (d) => {
				if (d.popped) {
					return 0;
				} else {
					return 0;
				}
			})
			.attr("fill", (d) => {
				if (d.fill) {
					return d.fill;
				} else {
					return this.COLORS.frameColor;
				}
			})
			.attr("height", this.FRAME_DIMENSIONS.height)
			.attr("width", this.FRAME_DIMENSIONS.width);

		const pointer = frameGroup
			.append("line")
			.filter((d) => d.pointer)
			.attr("stroke", this.COLORS.frameStrokeColor)
			.attr("x1", -this.FRAME_DIMENSIONS.width)
			.attr("y1", this.FRAME_DIMENSIONS.height / 2)
			.attr("x2", -this.FRAME_DIMENSIONS.width / 2)
			.attr("y2", this.FRAME_DIMENSIONS.height / 2)
			.attr("marker-end", "url(#arrow)");
		const pointerText = frameGroup
			.append("text")
			.filter((d) => d.pointer)
			.attr("fill", "black")
			.attr("x", -this.FRAME_DIMENSIONS.width)
			.attr('dx', '-0.3em')
			.attr("y", this.FRAME_DIMENSIONS.height/1.5)
			.attr('text-anchor', 'end')
			.style('font-family', 'Monospace')
			.style('font-size', '0.9em')
			.text(d => d.pointer)

		const dataLabel = frameGroup
			.append("text")
			.attr("text-anchor", "middle")
			.attr("x", (d) => {
				if (d.popped) {
					return this.FRAME_DIMENSIONS.width;
				} else {
					return 0;
				}
			})
			.attr("y", this.FRAME_DIMENSIONS.height / 2)
			.attr("dy", 5)
			.text((d) => `${d.val}`)
			.style("font-family", "Fira")
			.style("font-size", "0.75rem")
			.attr("fill", this.COLORS.textColor);
	}
}

export class Memgram extends D3Base {
	constructor(obj) {
		super(obj);
		this.containerWidthDefault = "60%";

		this.containerHeightDefault = "50%";

		this.D3_CONTAINER_WIDTH = this.OBJ.width
			? `${this.OBJ.width}%`
			: this.containerHeightDefault;

		this.D3_CONTAINER_HEIGHT = this.OBJ.height
			? `${this.OBJ.height}%`
			: this.containerHeightDefault;

		// Set the SVG's width
		this.SVG_WIDTH = this.OBJ.svg_width ? this.OBJ.svg_width : 300;

		// Set the SVG's height
		this.SVG_HEIGHT = this.OBJ.svg_height ? this.OBJ.svg_height : 250;

		// Set the SVG's dimensions
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.left,
		};

		// The SVG container is <div> that wraps the SVG. This allows for resizing.
		this.SVG_CONTAINER = this.D3_CONTAINER.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", this.D3_CONTAINER_WIDTH)
			.style("padding-bottom", this.D3_CONTAINER_HEIGHT)
			.style("overflow", "hidden");

		this.SVG = this.SVG_CONTAINER.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${
					this.DIMENSIONS.width + this.MARGIN.left + this.MARGIN.right
				} ${this.DIMENSIONS.height + this.MARGIN.top + this.MARGIN.bottom}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr(
				"transform",
				`translate(${this.MARGIN.left}, ${this.MARGIN.top})`
			);

		// Arrow Definitions
		this.SVG_DEFINITIONS = this.SVG.append("svg:defs")
			.attr("id", "arrow")
			.append("svg:marker")
			.attr("viewBox", "0 0 10 10")
			.attr("refX", 5)
			.attr("refY", 5)
			.attr("markerWidth", 6)
			.attr("markerHeight", 6)
			.attr("orient", "auto")
			.append("svg:path")
			.attr("d", "M 0 0 L 10 5 L 0 10 z")
			.attr("stroke", "#000")
			.attr("stroke-width", 2);
		this.DATA = this.OBJ.registers;
		this.REGISTER_COUNT = this.OBJ.registers.length;
		this.MARGIN = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		};
		this.REGISTER_DIMENSIONS = {
			width: 60,
			height: 20,
		};
		this.SCALE = d3
			.scaleBand()
			.domain(this.DATA)
			.range([0, this.REGISTER_COUNT * 28]);
		this.COLORS = {
			registerColor: "rgba(48, 71, 94, 0.9)",
			registerContentColor: "#EEEEEE",
			addressTextColor: "#EEEEEE",
		};
	}
	render() {
		const registerGroup = this.SVG.selectAll("g")
			.data(this.DATA)
			.enter()
			.append("g")
			.attr(
				"transform",
				(d) => `translate(${this.DIMENSIONS.width / 2}, ${this.SCALE(d)})`
			);

		const data = registerGroup
			.append("rect")
			.attr("x", this.REGISTER_DIMENSIONS.width / 2)
			.attr("y", 0)
			.attr("fill", (d) => {
				if (d.focus) {
					return d.focus;
				} else {
					return this.COLORS.registerContentColor;
				}
			})
			.attr("stroke", "lightgrey")
			.attr("height", this.REGISTER_DIMENSIONS.height)
			.attr("width", this.REGISTER_DIMENSIONS.width)
			.attr("filter", "drop-shadow(0px 3px 0px rgba(0, 0, 0, 0.4))");

		const register = registerGroup
			.append("rect")
			.attr("x", -this.REGISTER_DIMENSIONS.width / 2)
			.attr("y", 0)
			.attr("fill", (d) => {
				if (d.focus) {
					return d.focus;
				} else {
					return this.COLORS.registerColor;
				}
			})
			.attr("stroke", "#30475E")
			.attr("height", this.REGISTER_DIMENSIONS.height)
			.attr("width", this.REGISTER_DIMENSIONS.width)
			.attr("filter", "drop-shadow( 0px 3px 0px rgb(48, 71, 94))");

		const address = registerGroup
			.append("text")
			.attr("text-anchor", "middle")
			.attr("x", 0)
			.attr("y", this.REGISTER_DIMENSIONS.height / 2)
			.attr("dy", 5)
			.text((d) => (d.ad ? d.ad : "⋮"))
			.style("font-family", "system-ui")
			.style("font-size", "0.75rem")
			.attr("fill", this.COLORS.addressTextColor);

		const registerName = registerGroup
			.append("text")
			.attr("text-anchor", "end")
			.attr("x", -this.REGISTER_DIMENSIONS.width / 1.5)
			.attr("y", this.REGISTER_DIMENSIONS.height / 2)
			.attr("dy", 5)
			.text((d) => (d.id ? d.id : "⋮"))
			.style("font-family", "system-ui")
			.style("font-size", "0.75rem")
			.attr("fill", "black");

		const dataLabel = registerGroup
			.append("text")
			.attr("text-anchor", "middle")
			.attr("x", this.REGISTER_DIMENSIONS.width)
			.attr("y", this.REGISTER_DIMENSIONS.height / 2)
			.attr("dy", 5)
			.text((d) => (d.val ? d.val : "⋮"))
			.style("font-family", "system-ui")
			.style("font-size", "0.75rem")
			.attr("fill", "black");
	}
}

export class LinkedList extends D3Base {
	constructor(obj) {
		super(obj);
		this.containerWidthDefault = "60%";

		this.containerHeightDefault = "50%";

		this.D3_CONTAINER_WIDTH = this.OBJ.width
			? `${this.OBJ.width}%`
			: this.containerHeightDefault;

		this.D3_CONTAINER_HEIGHT = this.OBJ.height
			? `${this.OBJ.height}%`
			: this.containerHeightDefault;

		// Set the SVG's width
		this.SVG_WIDTH = this.OBJ.svg_width ? this.OBJ.svg_width : 300;

		// Set the SVG's height
		this.SVG_HEIGHT = this.OBJ.svg_height ? this.OBJ.svg_height : 250;

		// Set the SVG's dimensions
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.left,
		};

		// The SVG container is <div> that wraps the SVG. This allows for resizing.
		this.SVG_CONTAINER = this.D3_CONTAINER.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", this.D3_CONTAINER_WIDTH)
			.style("padding-bottom", this.D3_CONTAINER_HEIGHT)
			.style("overflow", "hidden");

		this.SVG = this.SVG_CONTAINER.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${
					this.DIMENSIONS.width + this.MARGIN.left + this.MARGIN.right
				} ${this.DIMENSIONS.height + this.MARGIN.top + this.MARGIN.bottom}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr(
				"transform",
				`translate(${this.MARGIN.left}, ${this.MARGIN.top})`
			);

		// Arrow Definitions
		this.SVG_DEFINITIONS = this.SVG.append("svg:defs")
			.attr("id", "arrow")
			.append("svg:marker")
			.attr("viewBox", "0 0 10 10")
			.attr("refX", 5)
			.attr("refY", 5)
			.attr("markerWidth", 6)
			.attr("markerHeight", 6)
			.attr("orient", "auto")
			.append("svg:path")
			.attr("d", "M 0 0 L 10 5 L 0 10 z")
			.attr("stroke", "#000")
			.attr("stroke-width", 2);
		this.NODES = this.OBJ.nodes;
		this.isIndexed = this.OBJ.indexed ? this.OBJ.indexed : false;
		this.NODE_COUNT = this.OBJ.nodes.length;
		this.MARGIN = {
			top: 10,
			right: 30,
			bottom: 10,
			left: 30,
		};
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.bottom,
		};

		this.SCALE = d3
			.scaleBand()
			.domain(d3.range(this.NODE_COUNT))
			.rangeRound([0, this.DIMENSIONS.width])
			.paddingInner(0.5);

		this.NODE = {
			width: this.SCALE.bandwidth(),
			height: 10,
		};
		this.COLORS = {
			arrowColor: "#FF7878",
			dataFieldColor: "#FFF",
			dataFieldStrokeColor: "#79B4B7",
			nextFieldColor: "#C1FFD7",
			nextFieldStrokeColor: "#79B4B7",
			indexColor: "#8CA1A5",
		};
	}
	render() {
		const nodeGroup = this.SVG.selectAll("g")
			.data(this.NODES)
			.enter()
			.append("g")
			.attr("transform", (d, i) => {
				return `translate(${this.SCALE(i)}, 0)`;
			})
			.attr("y", 0);

		const arrows = this.SVG.append("svg:defs")
			.selectAll("marker")
			.data(["end"])
			.enter()
			.append("svg:marker")
			.attr("id", String)
			.attr("viewBox", "0 -5 10 10")
			.attr("refX", 8)
			.attr("refY", 0)
			.attr("markerWidth", 5)
			.attr("markerHeight", 5)
			.attr("orient", "auto")
			.attr("fill", this.COLORS.arrowColor)
			.append("svg:path")
			.attr("d", "M0,-5L10,0L0,5");

		// Data Field
		const dataField = nodeGroup.append("g");

		// Deleted Node

		const dataFieldRectangle = dataField
			.append("rect")
			.attr("width", this.NODE.width)
			.attr("stroke", this.COLORS.dataFieldStrokeColor)
			.attr("fill", this.COLORS.dataFieldColor)
			.attr("height", this.NODE.height);

		const dataFieldLabel = dataField
			.append("text")
			.attr("fill", this.COLORS.dataFieldStrokeColor)
			.attr("text-anchor", "middle")
			.style("font-size", "7px")
			.style("font-family", "Fira")
			.attr("x", this.NODE.width / 2)
			.attr("y", this.NODE.height / 2)
			.attr("dy", "0.3em")
			.text((d) => d.data);

		// Indexing
		if (this.isIndexed) {
			const index = dataField
				.append("text")
				.attr("text-anchor", "middle")
				.attr("fill", this.COLORS.indexColor)
				.style("font-size", "8px")
				.style("font-family", "CMU")
				.attr("x", this.NODE.width / 1.5)
				.attr("y", this.NODE.height + 10)
				.text((d, i) => i);
		}

		// Next Field
		const nextField = nodeGroup
			.append("g")
			.classed("next-field", true)
			.attr("transform", `translate(${this.SCALE.bandwidth()}, 0)`);

		const nextFieldRectangle = nextField
			.append("rect")
			.attr("stroke", this.COLORS.nextFieldStrokeColor)
			.attr("fill", this.COLORS.nextFieldColor)
			.attr("width", this.NODE.width / 2)
			.attr("height", this.NODE.height);

		// arrow
		const link = nodeGroup
			.filter((d) => !d.alone)
			.append("line")
			.attr("stroke", this.COLORS.arrowColor)
			.attr("x1", this.NODE.width + this.NODE.width / 4)
			.attr("y1", this.NODE.height / 2)
			.attr("x2", this.NODE.width + this.SCALE.bandwidth())
			.attr("y2", this.NODE.height / 2)
			.attr("marker-end", "url(#end)");

		const linkStarter = nodeGroup
			.filter((d) => !d.alone)
			.append("circle")
			.attr("fill", this.COLORS.arrowColor)
			.attr("r", 1.5)
			.attr("cx", this.NODE.width + this.NODE.width / 4)
			.attr("cy", this.NODE.height / 2);

		const annotation = nextField
			.filter((d) => d.annotate)
			.append("text")
			.attr("text-anchor", "middle")
			.style("font-size", "9px")
			.style("font-family", "Fira")
			.attr("x", -this.SCALE.bandwidth() / 4)
			.attr("y", -4)
			.text((d, i) => d.annotate)
			.style("fill", "var(--darkRed)");
	}
}

export class HeatMap extends D3Base {
	constructor(obj) {
		super(obj);
		this.containerWidthDefault = "60%";

		this.containerHeightDefault = "50%";

		this.D3_CONTAINER_WIDTH = this.OBJ.width
			? `${this.OBJ.width}%`
			: this.containerHeightDefault;

		this.D3_CONTAINER_HEIGHT = this.OBJ.height
			? `${this.OBJ.height}%`
			: this.containerHeightDefault;

		// Set the SVG's width
		this.SVG_WIDTH = this.OBJ.svg_width ? this.OBJ.svg_width : 300;

		// Set the SVG's height
		this.SVG_HEIGHT = this.OBJ.svg_height ? this.OBJ.svg_height : 250;

		this.MARGIN = this.OBJ.margin
			? this.OBJ.margin
			: {
					top: 10,
					bottom: 10,
					left: 10,
					right: 10,
			  };

		// Set the SVG's dimensions
		this.DIMENSIONS = {
			width: this.SVG_WIDTH - this.MARGIN.left - this.MARGIN.right,
			height: this.SVG_HEIGHT - this.MARGIN.top - this.MARGIN.left,
		};

		// The SVG container is <div> that wraps the SVG. This allows for resizing.
		this.SVG_CONTAINER = this.D3_CONTAINER.append("div")
			.style("display", "inline-block")
			.style("position", "relative")
			.style("width", this.D3_CONTAINER_WIDTH)
			.style("padding-bottom", this.D3_CONTAINER_HEIGHT)
			.style("overflow", "hidden");

		this.SVG = this.SVG_CONTAINER.append("svg")
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr(
				"viewBox",
				`0 0 ${
					this.DIMENSIONS.width + this.MARGIN.left + this.MARGIN.right
				} ${this.DIMENSIONS.height + this.MARGIN.top + this.MARGIN.bottom}`
			)
			.classed("svg-content-responsive", true)
			.append("g")
			.attr(
				"transform",
				`translate(${this.MARGIN.left}, ${this.MARGIN.top})`
			);

		// Arrow Definitions
		this.SVG_DEFINITIONS = this.SVG.append("svg:defs")
			.attr("id", "arrow")
			.append("svg:marker")
			.attr("viewBox", "0 0 10 10")
			.attr("refX", 5)
			.attr("refY", 5)
			.attr("markerWidth", 6)
			.attr("markerHeight", 6)
			.attr("orient", "auto")
			.append("svg:path")
			.attr("d", "M 0 0 L 10 5 L 0 10 z")
			.attr("stroke", "#000")
			.attr("stroke-width", 2);

		this.DATA = this.OBJ.data;

		this.KEYS = this.OBJ.key;

		this.GROUPS = d3.map(obj.data, (d) => {
			return d.g;
		});

		this.VARS = d3.map(obj.data, (d) => {
			return d.v;
		});

		this.X_SCALE = d3
			.scaleBand()
			.range([0, this.DIMENSIONS.width])
			.domain(this.GROUPS)
			.padding(0.05);

		this.X_AXIS = this.SVG.append("g")
			.style("font-size", 10)
			.style("font-family", "system-ui")
			.attr("transform", `translate(0, ${this.DIMENSIONS.height})`)
			.call(d3.axisBottom(this.X_SCALE).tickSize(0));
		this.X_AXIS.selectAll("text")
			.attr("transform", "rotate(45)")
			.style("text-anchor", "start");
		this.X_AXIS.selectAll(".domain").remove();

		this.Y_SCALE = d3
			.scaleBand()
			.range([this.DIMENSIONS.height, 0])
			.domain(this.VARS)
			.padding(0.05);

		this.Y_AXIS = this.SVG.append("g")
			.style("font-size", 10)
			.style("font-family", "system-ui")
			.call(d3.axisLeft(this.Y_SCALE).tickSize(0))
			.select(".domain")
			.remove();

		this.COLOR = d3
			// .interpolateWarm()
			.quantize(d3.interpolateHcl("#C2F784", "#FD5D5D"), 8);
		// .scaleSequential()
		// .interpolator(d3.interpolatePlasma)
		// .domain([1, 14]);

		// this.MOUSEOVER = (d) => {
		// 	this.TOOLTIP.style("opacity", 1);
		// 	d3.select(this).style("stroke", "black").style("opacity", 1);
		// };

		// this.MOUSEMOVE = (d) => {
		// 	this.TOOLTIP.html("test")
		// 		.style("left", d3.mouse(this)[0] + 70 + "px")
		// 		.style("top", d3.mouse(this)[1] + "px");
		// };

		// this.MOUSELEAVE = (d) => {
		// 	this.TOOLTIP.style("opacity", 0);
		// 	d3.select(this).style("stroke", "none").style("opacity", 0.8);
		// };
	}
	render() {
		const g = this.SVG.selectAll()
			.data(this.DATA, (d) => {
				`${d.g}:${d.v}`;
			})
			.enter()
			.append("g")
			.attr(
				"transform",
				(d) => `translate(${this.X_SCALE(d.g)}, ${this.Y_SCALE(d.v)})`
			);

		const square = g
			.append("rect")
			.attr("x", 0)
			.attr("y", 0)
			.attr("width", this.X_SCALE.bandwidth())
			.attr("height", this.Y_SCALE.bandwidth())
			.style("stroke-width", 4)
			.style("stroke", "none")
			.style("opacity", 0.8)
			.style("fill", (d) => {
				if (d.l === 0) {
					return "#EEEEEE";
				} else {
					return this.COLOR[d.l];
				}
			});

		const foreignbject = g
			.append("foreignObject")
			.attr("width", this.X_SCALE.bandwidth())
			.attr("height", this.Y_SCALE.bandwidth());

		const span = foreignbject
			.append("xhtml:span")
			.html((d) => this.KEYS[d.l])
			.style("display", "flex")
			.style("justify-content", "center")
			.style("text-align", "center")
			.style("font-size", "0.5rem")
			.style("color", "black");
	}
}

export class CBA extends CSMD {
	constructor(obj) {
		super(obj);
		this.SECTIONS = this.CONTAINER.querySelectorAll("section");
		this.COST_TD = this.CONTAINER.querySelector("td:first-child");
		this.BENEFIT_TD = this.CONTAINER.querySelector("td:last-child");
		this.TABLE_STYLES = {
			backgroundColor: "none",
			margin: "0 auto",
			border: "none",
		};
		this.COST_TD_STYLES = {
			border: "none",
			"vertical-align": "top",
			width: "50%",
		};
		this.BENEFIT_TD_STYLES = {
			border: "none",
			// borderLeft: 'solid thin #E3CAA5',
			"vertical-align": "top",
			width: "50%",
		};
		this.TH_BENEFIT_STYLES = {
			"border-bottom": "solid 3px #95CD41",
			color: "#4E9F3D",
		};
		this.TH_COST_STYLES = {
			"border-bottom": "solid 3px #FC4F4F",
			color: "#FF0000",
		};
		this.TH_STYLES = {
			"text-align": "center",
			border: "none",
			width: "50%",
		};
		this.SECTION_STYLES = {
			padding: "5px",
			fontSize: "0.75rem",
			margin: "1px 0",
		};
	}
	render() {
		Object.assign(this.CONTAINER.style, this.TABLE_STYLES);
		Object.assign(this.COST_TD.style, this.COST_TD_STYLES);
		Object.assign(this.BENEFIT_TD.style, this.BENEFIT_TD_STYLES);
		const costs = this.TH();
		costs.innerText = "Cost(s)";
		Object.assign(costs.style, this.TH_STYLES);
		Object.assign(costs.style, this.TH_COST_STYLES);
		const benefits = this.TH();
		benefits.innerText = "Benefit(s)";
		Object.assign(benefits.style, this.TH_STYLES);
		Object.assign(benefits.style, this.TH_BENEFIT_STYLES);
		const headings = this.THEAD();
		headings.append(benefits);
		headings.append(costs);
		this.CONTAINER.append(headings);
		for (let i = 0; i < this.SECTIONS.length; i++) {
			Object.assign(this.SECTIONS[i].style, this.SECTION_STYLES);
		}
	}
}

export class Circuit extends CSMD {
	constructor(obj) {
		super(obj);
		this.CIRCUIT = document.querySelector(`#${this.OBJ.id}`);
		this.CIRCUIT_LABEL = this.OBJ.name;
		this.INPUT_PINS = this.OBJ.in;
		this.INPUT_PIN_COUNT = this.INPUT_PINS.length;
		this.OUT_PINS = this.OBJ.out;
		this.OUT_PIN_COUNT = this.OUT_PINS.length;
		this.CIRCUIT_CONTAINER_STYLES = {
			display: "flex",
			justifyContent: "center",
		};
		this.CHIP_CONTAINER_STYLES = {
			display: "grid",
			"grid-template-columns": "1fr 1fr 1fr",
			"font-family": "Fira",
			"font-size": "0.6rem",
		};
		this.INPUT_PIN_STYLE = {
			display: "block",
			margin: "5px 0",
			"padding-right": "20px",
			color: `${this.COLORS.fireBrick}`,
			"border-bottom": `solid thin ${this.COLORS.fireBrick}`,
			display: "flex",
			"flex-direction": "column",
		};
		this.OUTPUT_PIN_STYLE = {
			display: "block",
			margin: "5px 0",
			"padding-left": "20px",
			color: `${this.COLORS.darkBlue}`,
			"border-bottom": `solid thin ${this.COLORS.darkBlue}`,
			"text-align": "right",
			display: "flex",
			"flex-direction": "column",
		};
		this.IC_CONTAINTER_STYLE = {
			display: "flex",
			"justify-content": "center",
			"background-color": "rgb(80, 80, 80)",
			"border-radius": "12px",
			"box-shadow":
				"0 2px 2px 0px rgb(19, 19, 19), 0 4px 2px 0px rgb(0, 0, 0)",
		};
		this.IC_LABEL_STYLE = {
			display: "block",
			color: "gold",
			"font-size": "0.7rem",
			margin: "auto",
		};
	}
	render() {
		const circuit = document.createElement("div");
		Object.assign(circuit.style, this.CIRCUIT_CONTAINER_STYLES);

		const chip = document.createElement("div");
		Object.assign(chip.style, this.CHIP_CONTAINER_STYLES);

		circuit.append(chip);

		const inputPinContainer = document.createElement("div");
		for (let i = 0; i < this.INPUT_PIN_COUNT; i++) {
			const in_pin = document.createElement("span");
			Object.assign(in_pin.style, this.INPUT_PIN_STYLE);
			in_pin.innerHTML = this.INPUT_PINS[i];
			inputPinContainer.append(in_pin);
		}
		const outputPinContainer = document.createElement("div");
		for (let i = 0; i < this.OUT_PIN_COUNT; i++) {
			const out_pin = document.createElement("span");
			Object.assign(out_pin.style, this.OUTPUT_PIN_STYLE);
			out_pin.innerHTML = this.OUT_PINS[i];
			outputPinContainer.append(out_pin);
		}

		const ic = document.createElement("div");
		Object.assign(ic.style, this.IC_CONTAINTER_STYLE);
		const ic_label = document.createElement("span");
		ic_label.innerHTML = this.CIRCUIT_LABEL;
		Object.assign(ic_label.style, this.IC_LABEL_STYLE);
		ic.append(ic_label);

		chip.append(inputPinContainer);
		chip.append(ic);
		chip.append(outputPinContainer);

		this.CIRCUIT.append(circuit);
	}
}

export class Logic {
	constructor(obj) {
		this.OBJ = obj;
		this.COLORS = {
			textColor: "gold",
			bitOff: "#24E0FF",
			bitOn: "#ABFF00",

			bitBorder: "none",
			chassisBackground: "#334756",
			chassisShadow: "0px 1px 0 #bbbbbb, 1px 1px 2px #bdbdbd",
			bitShadowOn:
				"rgba(0, 0, 0, 0.2) 0 -1px 2px 1px, inset #304701 0 -1px 2px, #89FF00 0 0px 4px",
			bitShadowOff:
				"rgba(0, 0, 0, 0.2) 0 -1px 2px 1px, inset #006 0 -1px 2px, #3F8CFF 0 0px 4px",
			chassisBorder: "solid thin black",
		};
	}
}

export class Bit extends Logic {
	static #COMPONENT_COUNT = 0;
	constructor(obj) {
		super(obj);
		this.DEFAULT = obj.default ? obj.default : false;
		this._id = Bit.#COMPONENT_COUNT++;
		this.BOARD = document.createElement("div");
		this.BITID = `bit${this._id}`;
		this.CHECKBOX = document.createElement("input");

		this.LABEL = document.createElement("label");
		this.LABEL.htmlFor = this.BITID;
		Object.assign(this.LABEL.style, {
			display: "table-row",
			textAlign: "center",
			fontFamily: "Fira",
			fontSize: "0.6rem",
			lineHeight: "0.5",
			margin: "0",
			padding: "0",
			color: this.COLORS.textColor,
			transition: "all 0.5s",
		});

		this.CHECKBOX.type = "checkbox";
		// this.CHECKBOX.checked = false;
		// this.LABEL.innerText = this.CHECKBOX.defaultChecked ? '1' : '0';
		this.CHECKBOX.checked = this.DEFAULT;
		this.CHECKBOX.style.backgroundColor = this.CHECKBOX.checked
			? this.COLORS.bitOn
			: this.COLORS.bitOff;
		this.CHECKBOX.id = this.BITID;
		Object.assign(this.CHECKBOX.style, {
			width: "0.7rem",
			height: "0.7rem",
			padding: "0",
			"border-radius": "50%",
			"vertical-align": "middle",
			border: this.COLORS.bitBorder,
			"box-shadow": this.COLORS.bitShadowOff,
			appearance: "none",
			outline: "none",
			cursor: "pointer",
			transition: "all 0.2s",
		});
		if (this.CHECKBOX.checked) {
			this.LABEL.innerText = "1";
		} else {
			this.LABEL.innerText = "0";
		}
		this.CHECKBOX.addEventListener("change", () => {
			if (this.CHECKBOX.checked) {
				this.CHECKBOX.style.backgroundColor = this.COLORS.bitOn;
				this.CHECKBOX.style.boxShadow = this.COLORS.bitShadowOn;
			} else {
				this.CHECKBOX.style.backgroundColor = this.COLORS.bitOff;
				this.CHECKBOX.style.boxShadow = this.COLORS.bitShadowOff;
			}
			this.LABEL.innerText = this.CHECKBOX.checked ? "1" : "0";
		});

		Object.assign(this.BOARD.style, {
			display: "table",
			margin: "0 auto",
			padding: "0.3rem 0.3rem 0 0.3rem",
			backgroundColor: this.COLORS.chassisBackground,
			"box-shadow": this.COLORS.chassisShadow,
			border: this.COLORS.chassisBorder,
			borderRadius: "5px",
		});
	}
	render(_container = document.querySelector(`#${this.OBJ.id}`)) {
		this.BOARD.append(this.LABEL);
		this.BOARD.append(this.CHECKBOX);
		_container.append(this.BOARD);
	}
}

export class Gate {
	constructor(obj) {
		this.OBJ = obj;
		this.IN = obj.in; // Array<Bit>
		this.OUT = obj.out; // Array<Bit>
		this.PARTS = obj.parts; // Array<Gate>

		this.INPUT_PIN_COUNT = obj.in.length; // Length of IN
		this.OUT_PIN_COUNT = obj.out.length; // Length of OUT

		this.TABLE = document.createElement("table");
		Object.assign(this.TABLE.style, {
			backgroundColor: "#fdfdfd",
			borderRadius: "5px",
			border: "solid thin #f0f0f0",
			"border-collapse": "separate",
			margin: "0 auto",
			boxShadow:
				"inset -1px 1px 2px rgb(173,173,173), -1px 1px 2px rgb(132,132,132)",
		});

		this.TD_styles = {
			margin: "0",
			padding: "2px",
			border: "none",
		};

		this.TBODY = document.createElement("tbody");
	}
	render(_container = document.querySelector(`#${this.OBJ.id}`)) {
		this.TABLE.append(this.TBODY);
		_container.append(this.TABLE);

		for (let i = 0; i < this.INPUT_PIN_COUNT; i++) {
			// new bit object
			const input_bit = new Bit({ default: false });

			// create TR cell for in pins
			const tr_for_input = document.createElement("tr");

			// casing for IN pins (TD elements)
			const td_for_input = document.createElement("td");
			Object.assign(td_for_input.style, this.TD_styles);

			// add bit to TD
			input_bit.render(td_for_input);

			// td_for_input.innerText='test'

			// add TD to tr
			tr_for_input.append(td_for_input);

			// add TR to table
			this.TBODY.append(tr_for_input);
		}
		const existing_rows = this.TABLE.querySelectorAll("tr");
		for (let i = 0; i < this.OUT_PIN_COUNT; i++) {
			const current_row = existing_rows[i];
			// new bit object
			const output_bit = new Bit({});

			const td_for_output = document.createElement("td");
			Object.assign(td_for_output.style, this.TD_styles);

			// add bit to TD
			output_bit.render(td_for_output);

			// add TD to tr
			current_row.append(td_for_output);
		}
		const pins = this.TABLE.querySelectorAll('input[type="checkbox"]');
		for (let i = 0; i < pins.length; i++) {
			pins[i].addEventListener("change", () => {
				if (pins[0].checked && pins[2].checked) {
					pins[1].checked = false;
				} else {
					pins[1].checked = true;
				}
			});
		}
	}
}

/* ------------------------------- CONVENTIONS ------------------------------ */
/*
		Conventions used:
			- Class properties and methods are always capitalized.
			- If a property or method's identifier consists of multiple words,
				UNDERSCORES_ARE_USED_FOR_SPACES.
*/

export class CSMD {
	constructor(obj) {
/* ----------------------------- Object wrapper ----------------------------- */
	/* 
		 All instances of CSMD require take objects as arguments. 
		 The OBJ property is a wrapper for this argument.
	*/

		this.OBJ = obj;

/* ------------------------------ Body wrapper ------------------------------ */
		/*
				The body property targets <body></body>
		*/
		this.BODY = d3.select("body");

/* ---------------------------- Container wrapper --------------------------- */
		/* 
				Container is a DIV of the form:

					<div id="foo"></div>

				The diagrams are rendered inside this div.
	  */
		this.CONTAINER = document.querySelector(`#${this.OBJ.id}`);
		
	// Margins
		/*
				SVG Margins
					- Used to create padding, following D3's margin convention.
		*/
		this.MARGIN = {
			top: 10,
			right: 10,
			bottom: 10,
			left: 10,
		};

	// Set the container's width
		this.CONTAINER_WIDTH = this.OBJ.container_width
		? `${this.OBJ.container_width}%`
		: "40%";

	// Set the container's height
		// Container height is a percent value. 
		// Really, it's what changes the padding bottom.
		this.CONTAINER_HEIGHT = this.OBJ.container_height
		? `${this.OBJ.container_height}%`
		: "40%";
	
/* --------------------------- Table constructors --------------------------- */

	// <th></th> constructor

		this.TH = () => {
			const TH = document.createElement("th");
			return TH;
		}

	// <td></td> constructor

		this.TD = () => {
			const TD = document.createElement("td");
			return TD;
		}

	// <tr></tr> constructor

		this.TR = () => {
			const TR = document.createElement('tr');
			return TR;
		}

	// <thead></thead> constructor

		this.THEAD = () => {
			const THEAD = document.createElement("thead");
			return THEAD;
		}

	// <tbody></tbody> constructor

		this.TBODY = () => {
			const TBODY = document.createElement("tbody");
			return TBODY;
		}

	// <table></table> constructor

		this.TABLE = () => {
			const TABLE = document.createElement("table");
			return TABLE;
		};

/* --------------------------------- Colors --------------------------------- */

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
			greyBlue: "#AECBD6"
		};

/* ---------------------------------- Fonts --------------------------------- */

		this.fonts = {
			Mono: "Fira",
			Serif: "CMU",
		};

	}
}

export class D3Base extends CSMD {
	constructor(obj) { 
		super(obj);
		this.D3_CONTAINER_WIDTH = this.OBJ.width
		? `${this.OBJ.width}%`
		: "60%";
		this.D3_CONTAINER_HEIGHT = this.OBJ.height
		? `${this.OBJ.height}%`
		: "50%";
		this.D3_CONTAINER = this.BODY.selectAll(`#${this.OBJ.id}`);
		this.D3_CONTAINER.classed("demo-container", true);
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
		this.SVG_CONTAINER = this.D3_CONTAINER
		.append("div")
		.style('display', 'inline-block')
		.style('position','relative')
		.style('width', this.D3_CONTAINER_WIDTH)
		.style('padding-bottom', this.D3_CONTAINER_HEIGHT)
		.style('overflow', 'hidden')

	this.SVG = this.SVG_CONTAINER
		.append("svg")
		.attr('preserveAspectRatio', 'xMinYMin meet')
		.attr('viewBox',
			`0 0 ${this.DIMENSIONS.width + this.MARGIN.left + this.MARGIN.right} ${this.DIMENSIONS.height + this.MARGIN.top + this.MARGIN.bottom}`)
		.classed('svg-content-responsive', true)
		.append('g')
		.attr('transform', `translate(${this.MARGIN.left}, ${this.MARGIN.top})`)

	// Arrow Definitions
	this.SVG_DEFINITIONS = this.SVG
		.append('svg:defs')
		.attr('id', 'arrow')
		.append('svg:marker')
		.attr('viewBox', "0 -5 10 10")
		.attr('refX', 15)
		.attr('refY', -1.5)
		.attr('markerWidth', 6)
		.attr('markerHeight', 6)
		.attr('orient', 'auto')
		.append('svg:path')
		.attr('d', 'M 0 -5 10 10')
		.attr('stroke', '#000')
		.attr('stroke-width', 2)
	}
}

export class StaticArray extends CSMD {
/* --------------------------- Object constructor --------------------------- */
	constructor(obj) {

		super(obj);

/* ------------------------------ Array Styles ------------------------------ */

	/* 
			An array is represented with the <ul></ul> element.
			Display is set to flex to render the elements horizontally:

			[1][2][3][4]

	*/

		this.arrayStyles = {
			listStyle: "none",
			overflow: 'scroll',
			display: "flex",
			justifyContent: "center",
			padding: "5px",
			margin: "0",
		};

/* --------------------------- Array border style --------------------------- */
	/* 
			This property applies a border style to the <ul> element. 
			Creates an outline around the <ul> element.
			Property is not applied by default. 
			User must set 'bordered' key to true for style to apply.
	*/ 

		this.arrayBorderSyle = {
			border: `solid thin ${this.COLORS.lightGrey}`,
			boxShadow:
				"2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #ffffff inset",
		};

/* --------------------------- Array Element Style -------------------------- */

		this.arrayElementStyles = {
			padding: "0",
			margin: "0",
		};

/* -------------------------- Array spaces styling -------------------------- */

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

/* ----------------------- Array element focus styles ----------------------- */
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

/* ---------------------------- Array Index Style --------------------------- */

		this.arrayIndexStyles = {
			listStyle: "none",
			fontFamily: this.fonts.Serif,
			textAlign: "center",
			fontSize: "0.7rem",
		};
	}

/* -------------------------- Render array function ------------------------- */

	render() {
		this.array = document.createElement("ol");
		this.CONTAINER.appendChild(this.array);
		Object.assign(this.array.style, this.arrayStyles);

		// If 'bordered' attribute is true, add a border around the array
		if (this.OBJ.bordered) {
			Object.assign(this.array.style, this.arrayBorderSyle);
		}

		for (let i = 0; i < this.OBJ.data.length; i++) {
			this.arrayElement = document.createElement("ul");
			Object.assign(this.arrayElement.style, this.arrayElementStyles);
			this.array.appendChild(this.arrayElement);

			this.arrayElementDataField = document.createElement("li");
			Object.assign(
				this.arrayElementDataField.style,
				this.arrayDataFieldStyles
			);

			this.arrayElementDataField.innerText = this.OBJ.data[i].val;

			if (this.OBJ.data[i].focus == "red") {
				Object.assign(
					this.arrayElementDataField.style,
					this.elementRedFocusStyle
				);
			} else if (this.OBJ.data[i].focus == "blue") {
				Object.assign(
					this.arrayElementDataField.style,
					this.elementBlueFocusStyle
				);
			} else if (this.OBJ.data[i].focus == "green") {
				Object.assign(
					this.arrayElementDataField.style,
					this.elementGreenFocusStyle
				);
			} else if (this.OBJ.data[i].focus == "orange") { 
				Object.assign(
					this.arrayElementDataField.style,
					this.elementOrangeFocusStyle
				);
			}

			this.arrayElement.appendChild(this.arrayElementDataField);
			if (this.OBJ.indexed) {
				const arrayElementIndexField = document.createElement("li");
				Object.assign(arrayElementIndexField.style, this.arrayIndexStyles);
				arrayElementIndexField.innerText = i;
				this.arrayElement.appendChild(arrayElementIndexField);
			}
		}
	}
}

export class TruthTable extends CSMD {
/* ---------------------------- Object contructor --------------------------- */
	constructor(obj) {
		super(obj);
/* ------------------------------- Color array ------------------------------ */

		this.color_array = ["#F9ECEC", "#F0D9DA", "#C8D9EB", "#ECF2F9"];

/* ------------------------- <table></table> Styles ------------------------- */

		this.TABLE_styles = {
			margin: "0 auto",
			fontFamily: "system-ui",
			fontSize: "0.7rem",
			border: "none",
		};

/* ------------------------- <thead></thead> Styles ------------------------- */

		this.THEAD_styles = {
			border: "none",
		};

/* ------------------------- <tbody></tbody> Styles ------------------------- */

		this.TBODY_styles = {};

/* ---------------------------- <td></td> Styles ---------------------------- */

		this.TD_styles = {
			textAlign: "center",
			border: "thin solid white",
		};

		this.TD_focus_style = {
			padding: "0.1em 0.4em",
			backgroundColor: this.OBJ.focusColor
				? this.OBJ.focusColor : this.COLORS.tomato,
			color: this.COLORS.white,
		};

/* ---------------------------- <tr></tr> Styles ---------------------------- */

		this.TR_styles = {};

/* ---------------------------- <th></th> Styles ---------------------------- */

		this.TH_styles = {
			textAlign: "center",
			padding: "0 0.5rem",
			border: "none",
		};
	}

/* -------------------------- Render table function ------------------------- */
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
				? this.OBJ.focusBGColor : `rgb(48, 48, 48)`,
			color: this.OBJ.focusTextColor ? this.OBJ.focusTextColor : this.COLORS.orange,
			border: `solid thin ${this.OBJ.focusBorderColor ? this.OBJ.focusBorderColor : 'rgb(51, 51, 51)'}`,
			boxShadow: `0 3px 2px 0px ${this.OBJ.focusBorderColor ? this.OBJ.focusBorderColor : 'black'}, 0 2px 1px 0 rgba(0,0,0,0.2)`,
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
		this.USER_INPUT_PRECISION = this.OBJ.precision ? this.OBJ.precision : 100;
		this.COLORS = {
			plotColor: "firebrick",
			yAxisColor: "#AECBD6",
			xAxisColor: "#AECBD6"
		}

		// fn is a mathematical function written in JavaScript
		this.f = this.OBJ.fn;

		this.DATA = {
			domain: d3.ticks(
				this.OBJ.domain[0],
				this.OBJ.domain[1],
				this.USER_INPUT_PRECISION),
			// Range is a 2-element array object attribute 
			domainUpperBound: this.OBJ.domain[0],
			domainLowerBound: this.OBJ.domain[1],
			rangeUpperBound: this.OBJ.range[0],
			rangeLowerBound: this.OBJ.range[1],
		}
		this.MARGIN = {
			top: 10,
			right: 10,
			bottom: 10,
			left: 10
		}
		this.FONTS = {
			serif: "CMU",
			mono: "Fira",
			size: {
				tiny: "0.45rem",
				small: "0.6rem",
				medium: "0.8rem",
				large: "1rem",
			}
		}
		this.SCALE = {
			xAxis: d3.scaleLinear(
				[this.DATA.domainLowerBound, this.DATA.domainUpperBound],
				[this.DIMENSIONS.width,0]),
			yAxis: d3.scaleLinear(
				[this.DATA.rangeLowerBound, this.DATA.rangeUpperBound],
				[0, this.DIMENSIONS.height]),
			xValue: d3.scaleLinear([0,100]),
			yValue: d3.scaleLinear([100,0]),
		}

		// Data point generator
		this.DATAPOINTS = () => {
			let dataset = []
			let x, y;
			for (let i = 0; i <= this.DATA.domain.length - 1; i++) {
				x = this.DATA.domain[i];
				y = this.f(x);
				if (isNaN(y) || !isFinite(y)) { continue; }
				else { dataset.push([x, y]); }
			}
			return dataset;
		}

		// Line generator
		this.LINE = d3.line()
			.x(d => this.SCALE.xAxis(d[0]))
			.y(d => this.SCALE.yAxis(d[1]))
		
		// Clip Path
		this.CLIP_PATH = this.SVG
			.append("clipPath")
			.attr("id", "chart-area")
			.append("rect")
			.attr("x", this.MARGIN.right)
			.attr("y", this.MARGIN.top)
			.attr("width", this.DIMENSIONS.width)
			.attr("height", this.DIMENSIONS.height)
	}

	render() {
		const xAxis = d3
			.axisBottom(this.SCALE.xAxis)
			.tickSizeInner(3)
			.tickSizeOuter(0)
		const yAxis = d3
			.axisLeft(this.SCALE.yAxis)
			.tickSizeInner(3)
			.tickSizeOuter(0)

		// Append x-axis
		const append_xAxis = this.SVG
			.append('g')
			.attr('transform', `translate(0, ${this.DIMENSIONS.height/2})`)
			.style('font-size', this.FONTS.size.tiny)
			.style('font-family', this.FONTS.serif)
			.style('color', this.COLORS.xAxisColor)
			.call(xAxis)
		
		// Append y-axis
		const append_yAxis = this.SVG
			.append('g')
			.attr('transform', `translate(${this.DIMENSIONS.width / 2}, 0)`)
			.style('font-size', this.FONTS.size.tiny)
			.style('color', this.COLORS.yAxisColor)
			.call(yAxis);

		// Select x-axis ticks
		const xAxis_ticks = append_xAxis
			.selectAll('.tick')
			.selectAll('line')

		// Select y-axis ticks
		const yAxis_ticks = append_yAxis
			.selectAll('.tick')
			.selectAll('line')

		// Last ticks selection
		const last_xTick = append_xAxis
			.selectAll('.tick:last-child')
			.selectAll('line')
		const last_xTick_text = append_xAxis
			.selectAll('.tick:last-child')
			.selectAll('text')

		const first_xTick = append_xAxis
			.select('.tick')
			.selectAll('line')
		const first_xTick_text = append_xAxis
			.select('.tick')
			.selectAll('text')
		
		const last_yTick = append_yAxis
			.selectAll('.tick:last-child')
			.selectAll('line')
		const last_yTick_text = append_yAxis
			.selectAll('.tick:last-child')
			.selectAll('text')

		const first_yTick = append_yAxis
			.select('.tick')
			.selectAll('line')
		const first_yTick_text = append_yAxis
			.select('.tick')
			.selectAll('text')

		const ticks = [
			first_xTick,
			first_xTick_text,
			last_xTick,
			last_xTick_text,

			first_yTick,
			first_yTick_text,
			last_yTick,
			last_yTick_text,
		]
		for (let i = 0; i < ticks.length; i++) { 
			ticks[i].style('display', 'none')
		}
		xAxis_ticks.attr('y1', -3);
		yAxis_ticks.attr('x1', 3);

		const plot = this.SVG
			.append('path')
			.datum(this.DATAPOINTS())
			.attr('clip-path', `url(#chart-area)`)
			.attr('fill', 'none')
			.attr('stroke', this.COLORS.plotColor)
			.attr('stroke-width', 1)
			.attr('d', this.LINE)
	}
}

export class Logic {
	constructor(obj) {
		this.OBJ = obj;
		this.COLORS = {
			textColor: 'gold',
			bitOff: '#24E0FF',
			bitOn: '#ABFF00',
			
			bitBorder: 'none',
			chassisBackground: '#334756',
			chassisShadow: '0px 1px 0 #bbbbbb, 1px 1px 2px #bdbdbd',
			bitShadowOn: 'rgba(0, 0, 0, 0.2) 0 -1px 2px 1px, inset #304701 0 -1px 2px, #89FF00 0 0px 4px',
			bitShadowOff: 'rgba(0, 0, 0, 0.2) 0 -1px 2px 1px, inset #006 0 -1px 2px, #3F8CFF 0 0px 4px',
			chassisBorder: 'solid thin black',
		}
	}
}

export class Bit extends Logic {
	static #COMPONENT_COUNT = 0;
	constructor(obj) {
		super(obj);
		this.DEFAULT = obj.default ? obj.default : false;
		this._id = Bit.#COMPONENT_COUNT++;
		this.BOARD = document.createElement('div');
		this.BITID = `bit${this._id}`;
		this.CHECKBOX = document.createElement('input')

		this.LABEL = document.createElement('label');
		this.LABEL.htmlFor = this.BITID;
		Object.assign(this.LABEL.style, {
			display: 'table-row',
			textAlign: 'center',
			fontFamily: 'Fira',
			fontSize: '0.6rem',
			lineHeight: '0.5',
			margin: '0',
			padding: '0',
			color: this.COLORS.textColor,
			transition: 'all 0.5s'
		})

		this.CHECKBOX.type = "checkbox";
		// this.CHECKBOX.checked = false;
		// this.LABEL.innerText = this.CHECKBOX.defaultChecked ? '1' : '0';
		this.CHECKBOX.checked = this.DEFAULT;
		this.CHECKBOX.style.backgroundColor = this.CHECKBOX.checked
			? this.COLORS.bitOn : this.COLORS.bitOff;
		this.CHECKBOX.id = this.BITID
		Object.assign(this.CHECKBOX.style, {
			width: '0.7rem',
			height: '0.7rem',
			padding: '0',
			'border-radius': '50%',
			'vertical-align': 'middle',
			border: this.COLORS.bitBorder,
			'box-shadow': this.COLORS.bitShadowOff,
			appearance: 'none',
			outline: 'none',
			cursor: 'pointer',
			transition: 'all 0.2s'
		})
		if (this.CHECKBOX.checked) {
			this.LABEL.innerText = '1';
		} else { 
			this.LABEL.innerText = '0';
		}
		this.CHECKBOX.addEventListener('change', () => {
			if (this.CHECKBOX.checked) {
				this.CHECKBOX.style.backgroundColor = this.COLORS.bitOn;
				this.CHECKBOX.style.boxShadow = this.COLORS.bitShadowOn;
			} else { 
				this.CHECKBOX.style.backgroundColor = this.COLORS.bitOff;
				this.CHECKBOX.style.boxShadow = this.COLORS.bitShadowOff;
			}
			this.LABEL.innerText = (this.CHECKBOX.checked) ? '1' : '0';
		});

		Object.assign(this.BOARD.style, {
			display: 'table',
			margin: '0 auto',
			padding: '0.3rem 0.3rem 0 0.3rem',
			backgroundColor: this.COLORS.chassisBackground,
			'box-shadow': this.COLORS.chassisShadow,
			border: this.COLORS.chassisBorder,
			borderRadius: '5px'
		})
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
		this.IN = obj.in;     // Array<Bit>
		this.OUT = obj.out;    // Array<Bit>
		this.PARTS = obj.parts;  // Array<Gate>

		this.INPUT_PIN_COUNT = obj.in.length; // Length of IN
		this.OUT_PIN_COUNT = obj.out.length;  // Length of OUT

		
		this.TABLE = document.createElement('table');
		Object.assign(this.TABLE.style, {
			backgroundColor: '#fdfdfd',
			borderRadius: "5px",
			border: 'solid thin #f0f0f0',
			'border-collapse': 'separate',
			margin: '0 auto',
			boxShadow: 'inset -1px 1px 2px rgb(173,173,173), -1px 1px 2px rgb(132,132,132)'	
		})

		this.TD_styles = {
			margin: '0',
			padding: '2px',
			border: 'none',
		}


		this.TBODY = document.createElement('tbody');
	}
	render(_container = document.querySelector(`#${this.OBJ.id}`)) {
		this.TABLE.append(this.TBODY);
		_container.append(this.TABLE);

		for (let i = 0; i < this.INPUT_PIN_COUNT; i++) {
			// new bit object
			const input_bit = new Bit({default: false});

			// create TR cell for in pins
			const tr_for_input = document.createElement('tr');

			// casing for IN pins (TD elements)
			const td_for_input = document.createElement('td');
			Object.assign(td_for_input.style, this.TD_styles);

			// add bit to TD
			input_bit.render(td_for_input);

			// td_for_input.innerText='test'

			// add TD to tr
			tr_for_input.append(td_for_input);

			// add TR to table
			this.TBODY.append(tr_for_input);
		}
		const existing_rows = this.TABLE.querySelectorAll('tr');
		for (let i = 0; i < this.OUT_PIN_COUNT; i++) {
			const current_row = existing_rows[i];
			// new bit object
			const output_bit = new Bit({});

			const td_for_output = document.createElement('td');
			Object.assign(td_for_output.style, this.TD_styles);

			// add bit to TD
			output_bit.render(td_for_output);

			// add TD to tr
			current_row.append(td_for_output);
		}
		const pins = this.TABLE.querySelectorAll('input[type="checkbox"]');
		for (let i = 0; i < pins.length; i++) {
			pins[i].addEventListener('change', () => {
				if (pins[0].checked && pins[2].checked) { pins[1].checked = false; }
				else { pins[1].checked = true; }
			})
		}
	}
}
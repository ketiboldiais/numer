import CDemo from "./cdemo.mjs";

export class StaticArray extends CDemo {
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

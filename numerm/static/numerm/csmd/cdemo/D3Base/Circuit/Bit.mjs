import { Logic } from "./Logic.mjs";
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

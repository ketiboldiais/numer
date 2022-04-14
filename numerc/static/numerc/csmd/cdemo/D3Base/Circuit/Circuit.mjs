import CDemo from "./cdemo.mjs";

export class Circuit extends CDemo {
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



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

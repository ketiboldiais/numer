import CDemo from "./cdemo.mjs";

class D3Base extends CDemo {
	constructor(obj) {
		super(obj);
		this.D3_CONTAINER = this.BODY.selectAll(`#${this.OBJ.id}`);
		this.D3_CONTAINER.classed("demo-container", true);
	}
}

export default D3Base;

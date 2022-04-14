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


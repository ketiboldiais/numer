const array1 = {
	id: "array1",
	indexed: true,
	data: [
		{ val: "a" },
		{ val: "b" },
		{ val: "a" },
		{ val: " " },
		{ val: "a" },
		{ val: "d" },
		{ val: "a" },
	],
};
renderStaticArray(array1);

const array2 = {
	id: "array2",
	indexed: true,
	data: [
		{ val: "a", focus: "blue" },
		{ val: "b" },
		{ val: "a" },
		{ val: " " },
		{ val: "a" },
		{ val: "d" },
		{ val: "a" },
	],
};
renderStaticArray(array2);

const array3 = {
	id: "array3",
	indexed: true,
	data: [
		{ val: "a", focus: "green" },
		{ val: "b", focus: "red" },
		{ val: "a" },
		{ val: " " },
		{ val: "a" },
		{ val: "d" },
		{ val: "a" },
	],
};
renderStaticArray(array3);


const array4 = {
	id: "array4",
	indexed: true,
	data: [
		{ val: "a", focus: "blue" },
		{ val: "b" },
		{ val: "a" },
		{ val: " " },
		{ val: "a" },
		{ val: "d" },
		{ val: "a" },
	],
};
renderStaticArray(array4);

const array5 = {
	id: "array5",
	indexed: true,
	data: [
		{ val: "a", focus: "blue" },
		{ val: "b", focus: "blue" },
		{ val: "a", focus: "green" },
		{ val: " " },
		{ val: "a" },
		{ val: "d" },
		{ val: "a" },
	],
};
renderStaticArray(array5);


const array6 = {
	id: "array6",
	indexed: true,
	data: [
		{ val: "a", focus: "blue" },
		{ val: "b", focus: "blue" },
		{ val: "a", focus: "green" },
		{ val: " ", focus: 'red'},
		{ val: "a" },
		{ val: "d" },
		{ val: "a" },
	],
};
renderStaticArray(array6);


const array7 = {
	id: "array7",
	indexed: true,
	data: [
		{ val: "a", focus: "blue" },
		{ val: "b", focus: "blue" },
		{ val: "a", focus: "blue" },
		{ val: " ", focus: 'blue'},
		{ val: "a" },
		{ val: "d" },
		{ val: "a" },
	],
};
renderStaticArray(array7);


const array8 = {
	id: "array8",
	indexed: true,
	data: [
		{ val: "a", focus: "blue" },
		{ val: "b", focus: "blue" },
		{ val: "a", focus: "blue" },
		{ val: " ", focus: 'blue'},
		{ val: "a", focus: 'green'},
		{ val: "d", focus: 'green'},
		{ val: "a", focus: 'green'},
	],
};
renderStaticArray(array8);

function renderStaticArray(obj) {
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
		array.appendChild(arrayElement);
	}
}

// Margin notes
function marginNote() {
	const noteContent = document.querySelectorAll("div.note");
	const noteNumbers = document.querySelectorAll("p sup");
	for (let i = 0; i < noteNumbers.length; i++) {
		let noteText = noteContent[i];
		let noteNumber = i + 1;
		noteText.insertAdjacentHTML(
			"afterbegin",
			`<span class="noteNumber">${noteNumber}</span> `
		);
		noteNumbers[i].addEventListener("click", function () {
			noteContent[i].classList.toggle("annotated");
		});
	}
}
// Remark Header
function mainIdeaHeader() {
	const header = document.createElement("p");
	header.innerText = "Remark";
	header.classList.toggle("header");
	const mainIdeas = document.getElementsByClassName("mainIdea");
	for (let i = 0; i < mainIdeas.length; i++) {
		mainIdeas[i].prepend(header);
	}
}
// Show navigation bar at narrow width
function showNav() {
	const tocButton = document.getElementById("tocButton");
	const navBar = document.querySelector("nav");
	tocButton.addEventListener("click", function () {
		navBar.classList.toggle("tocShow");
		tocButton.classList.toggle("pressed");
	});
}
// Add input checkbox for checklist
function addCheckBoxToCheckList() {
	const checkList = document.querySelectorAll("ol.checklist li");
	for (let i = 0; i < checkList.length; i++) {
		const checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkList[i].prepend(checkbox);
	}
}

// Add numbering for propositions
function numberPropositions() {
	const propositionList = document.querySelectorAll("small");
	let theoremNumber = 0;
	let corollaryNumber = 0;
	let definitionNumber = 0;
	let lemmaNumber = 0;
	let postulateNumber = 0;
	let axiomNumber = 0;
	let propositionNumber = 0;
	for (let i = 0; i < propositionList.length; i++) {
		let proposition = propositionList[i];
		let propositionText = clean(proposition.innerText);
		console.log(propositionText);
		if (propositionText == "theorem") addNumber(++theoremNumber);
		if (propositionText == "axiom") addNumber(++axiomNumber);
		if (propositionText == "proposition") addNumber(++propositionNumber);
		if (propositionText == "corollary") addNumber(++corollaryNumber);
		if (propositionText == "definition") addNumber(++definitionNumber);
		if (propositionText == "lemma") addNumber(++lemmaNumber);
		if (propositionText == "problem") addNumber(++lemmaNumber);
		if (propositionText == "postulate") addNumber(++postulateNumber);
		if (propositionText == "constraint") addNumber(++postulateNumber);
		function addNumber(j) {
			proposition.innerText += ` ${j}`;
		}
		function clean(word) {
			const result = word.toLowerCase();
			const noPunct = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      return noPunct;
		}
	}
}

class Proof extends HTMLElement {
	constructor() {
		super();
	}
}
customElements.define("math-proof", Proof);

// Main
(function () {
	showNav();
	mainIdeaHeader();
	addCheckBoxToCheckList();
	marginNote();
	if (document.querySelector("small")) {
		numberPropositions();
	}
})();

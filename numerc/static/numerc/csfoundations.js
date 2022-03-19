// Margin notes
function marginNote() {
	const noteContent = document.querySelectorAll("div.note");
	const noteNumbers = document.querySelectorAll("sup");
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

// Add main idea header
function mainIdeaHeader() {
	const mainIdeas = document.getElementsByClassName("mainIdea");
	for (let i = 0; i < mainIdeas.length; i++) {
		const header = document.createElement("p");
		header.innerText = "Remark";
		header.classList.toggle("header");
		mainIdeas[i].prepend(header);
	}
}

// Add header to reference list
function referenceListHeader() {
	const references = document.getElementsByClassName("references");
	for (let i = 0; i < references.length; i++) {
		const header = document.createElement("p");
		header.innerText = "References";
		header.classList.toggle("referencesHeader");
		references[i].prepend(header);
	}
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

// Show code illustration
function showCodeIllustration() {
	const demos = document.querySelectorAll("div.demo");
	const languageButtons = document.querySelectorAll("div.demo button");
	const implements = document.querySelectorAll(
		"div.demo div.implementation"
	);
	for (let i = 0; i < demos.length; i++) {
		const demoHeader = document.createElement("p");
		demoHeader.innerText = "Language-specific Implementations";
		demoHeader.classList.add("demoHeader");
		demos[i].prepend(demoHeader);
	}
	for (let i = 0; i < languageButtons.length; i++) {
		languageButtons[i].addEventListener("click", () => {
			implements[i].classList.toggle("illustrate");
			languageButtons[i].classList.toggle("pressed");
		});
	}
}
// Pop Up
function reveal() {
	const popups = document.getElementsByClassName("pop");
	const popupText = document.getElementsByClassName("popText");
	for (let i = 0; i < popups.length; i++) {
		popups[i].addEventListener("click", function () {
			popupText[i].classList.toggle("show");
		});
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

// Pseudosource div contains two OLs - ol.alg and ol.algc
// ol.alg contains pseudocode, ol.algc contains explanatory comments for that pseudocode
// For each li in ol.alg, if that li is clicked, the corresponding li in ol.algc is highlighted.

function pseudocode() {
	const pseudosource_DIVS = document.querySelectorAll("div.pseudosource");
	for (let i = 0; i < pseudosource_DIVS.length; i++) {
		let pseudosource_DIV = pseudosource_DIVS[i];
		const pseudosources_olAlg_LI =
			pseudosource_DIV.querySelectorAll("ol.alg li");
		const pseudosources_olAlgC_LI =
			pseudosource_DIV.querySelectorAll("ol.algc li");
		for (let j = 0; j < pseudosources_olAlg_LI.length; j++) {
			pseudosources_olAlg_LI[j].addEventListener('click', () => {
				pseudosources_olAlgC_LI[j].classList.toggle('expand');
				pseudosources_olAlgC_LI[j].classList.toggle('highlight_match');
				pseudosources_olAlg_LI[j].classList.toggle('highlight_match');
			})
			pseudosources_olAlgC_LI[j].addEventListener('click', () => { 
				pseudosources_olAlgC_LI[j].classList.toggle('expand');
				pseudosources_olAlg_LI[j].classList.toggle('highlight_match');
				pseudosources_olAlgC_LI[j].classList.toggle('highlight_match');
			})
		}
	}
}

// Main
(function () {
	showNav();
	reveal();
	mainIdeaHeader();
	addCheckBoxToCheckList();
	showCodeIllustration();
	referenceListHeader();
	marginNote();
	pseudocode();
})();

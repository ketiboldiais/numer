// Margin notes
function marginNote() { 
  const noteContent = document.querySelectorAll('div.note');
  const noteNumbers = document.querySelectorAll('p sup');
  for (let i = 0; i < noteNumbers.length; i++) { 
    let noteText = noteContent[i];
    let noteNumber = i + 1;
    noteText.insertAdjacentHTML(
      "afterbegin",
      `<span class="noteNumber">${noteNumber}</span> `
    )
    noteNumbers[i].addEventListener('click', function () { 
      noteContent[i].classList.toggle('annotated');
    })
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
  const demo = document.querySelectorAll("div.demo");
  for (let i = 0; i < demo.length; i++) { 
    const demoHeader = document.createElement("p");
    demoHeader.innerText = "Language-specific Implementations";
    demoHeader.classList.add('demoHeader');
    demo[i].prepend(demoHeader);
    const languageButton = document.querySelectorAll("div.demo button");
    console.log(languageButton);
    const codeExample = document.querySelectorAll("div.demo div.implementation");
    for (let i = 0; i < languageButton.length; i++) { 
      languageButton[i].addEventListener('click', function () { 
        codeExample[i].classList.toggle('illustrate');
        languageButton[i].classList.toggle('pressed');
      })
    }
  }
}
// Pop Up
function reveal() {
  const popups = document.getElementsByClassName("pop");
  const popupText = document.getElementsByClassName("popText");
  for (let i = 0; i < popups.length; i++) {
    popups[i].addEventListener('click', function () {
      popupText[i].classList.toggle("show");
    })
  }
}

// Show navigation bar at narrow width
function showNav() { 
  const tocButton = document.getElementById("tocButton");
  const navBar = document.querySelector("nav"); 
  tocButton.addEventListener('click', function () { 
    navBar.classList.toggle("tocShow");
    tocButton.classList.toggle("pressed");
  })
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
})();
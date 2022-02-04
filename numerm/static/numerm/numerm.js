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
  tocButton.addEventListener('click', function () { 
    navBar.classList.toggle("tocShow");
    tocButton.classList.toggle("pressed");
  })
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

class Proof extends HTMLElement { 
  constructor() { 
    super();
  }
}
customElements.define('math-proof', Proof);


// Main
(function () {
  showNav();
  mainIdeaHeader();
  addCheckBoxToCheckList();
  marginNote();
})();
var subjects = [];
var ids = [];
function generateID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 10;
  let id = '';

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return ids.includes(id) ? generateID() : id;
}


const subjectName = document.getElementById("subject-name");
const colorSelector = document.getElementById("color-select");
const createSubjectBtn = document.getElementById("create-subject-btn");
const subjectDisplay = document.getElementById("subject-display");

const addSubject = () => {
  createSubjectBtn.setAttribute("disabled", true);
  const name = subjectName.value;
  const color = colorSelector.value;
  subjects.push({ name: name, color: color, id: generateID() });
  subjects.saveInUrl("subjects");
  createSubjectBtn.removeAttribute("disabled");
  displaySubjects();
};

const switchEditMode = document.getElementById("switch-edit-mode");
const switchEditModeLabel = document.getElementById("switch-edit-mode-label");

function updateSwitchEditMode(){
  displaySubjects();
  if (switchEditMode.checked) {
    switchEditModeLabel.innerHTML = "Modo edición";
  } else {
    switchEditModeLabel.innerHTML = "Modo drag&drop";
  }
}
switchEditMode.addEventListener("click", updateSwitchEditMode);


const withEditMode = () => {
  let index = 0;
  subjects.forEach((subject) => {
    const i = index;
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "button");
    buttonElement.classList.add(
      "list-group-item",
      "list-group-item-action",
      "rounded",
      "text-truncate",
      "d-flex",
      "align-content-center",
      "my-1",
      "border"
    );
    const inputName = document.createElement("input");
    inputName.value = subject.name;
    inputName.classList.add("form-control", "w-100", "me-1");
    inputName.setAttribute("type", "text");

    const inputColor = document.createElement("input");
    inputColor.setAttribute("type", "color");
    inputColor.setAttribute("value", subject.color);
    inputColor.classList.add("form-control", "ms-auto");

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.classList.add("btn", "btn-danger", "ms-1");
    deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteBtn.style.width = "40px";
    buttonElement.appendChild(inputName);
    buttonElement.appendChild(inputColor);
    buttonElement.appendChild(deleteBtn);

    function writtingInName() {
      subjects[i]["name"] = inputName.value;
      subjects.saveInUrl("subjects");
      displayTable();
    }
    function deleteIndex() {
      subjects.splice(i, 1);
      subjects.saveInUrl("subjects");
      displaySubjects();
      displayTable();
      
    }
    // Add listeners
    inputName.addEventListener("keydown", writtingInName);
    inputName.addEventListener("keyup", writtingInName);
    deleteBtn.addEventListener("click", deleteIndex);

    inputColor.addEventListener("change", () => {
      subjects[i]["color"] = inputColor.value;
      subjects.saveInUrl("subjects");
      displayTable();
    });

    subjectDisplay.appendChild(buttonElement);

    index++;
  });
};
const withDragAndDrop = () => {
  subjects.forEach((subject, index) => {
    const i = index;
    const buttonElement = document.createElement("div");
    // buttonElement.setAttribute("type", "button");
    buttonElement.classList.add(
      "list-group-item",
      "list-group-item-action",
      "rounded",
      "text-truncate",
      "d-flex",
      "align-content-center",
      "my-1",
      "border",
      'text-truncate'
    );
    buttonElement.setAttribute("ids", subject.id);
    buttonElement.style.backgroundColor = subject.color;
    buttonElement.textContent = subject.name;
    buttonElement.style.color = getTextColor(hexToRgb(subject.color));
    buttonElement.style.cursor = "pointer";


    // Drag and drop functionality
    buttonElement.draggable = true;

    subjectDisplay.appendChild(buttonElement);

    buttonElement.addEventListener('dragstart', (ev)=>{
      ev.dataTransfer.setData("ids", subject.id);
      document.querySelectorAll(".draggableZone").forEach(node => {
        node.style.backgroundColor = "#abffb4";
      });
    });
    buttonElement.addEventListener('dragend', (ev)=>{
      document.querySelectorAll(".draggableZone").forEach(node => {
        node.style.backgroundColor = "transparent";
      });
    })
  });
};
const displaySubjects = () => {
  // Remove all child nodes from the parent element
  while (subjectDisplay.firstChild) {
    subjectDisplay.removeChild(subjectDisplay.firstChild);
  }
  // Drag&drop
  if (switchEditMode.checked) {
    withEditMode();
  } else {
    withDragAndDrop();
  }

  // Edit mode
};

updateSwitchEditMode();

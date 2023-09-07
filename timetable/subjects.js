var subjects = [];
function hexToRgb(hex) {
  // Remove the # symbol if present
  hex = hex.replace("#", "");

  // Extract the individual color components
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB values
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
function getTextColor(background) {
  // Convert background color to RGB values
  var rgb = background.match(/\d+/g);
  var red = parseInt(rgb[0]);
  var green = parseInt(rgb[1]);
  var blue = parseInt(rgb[2]);

  // Calculate luminance
  var luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  // Check if luminance is below threshold
  if (luminance < 0.5) {
    return 'white';
  } else {
    return 'black';
  }
}
const subjectName = document.getElementById("subject-name");
const colorSelector = document.getElementById("color-select");
const createSubjectBtn = document.getElementById("create-subject-btn");
const subjectDisplay = document.getElementById("subject-display");

const addSubject = () => {
  createSubjectBtn.setAttribute("disabled", true);
  const name = subjectName.value;
  const color = colorSelector.value;
  subjects.push({ name: name, color: color });
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
    }
    function deleteIndex() {
      subjects.splice(i, 1);
      subjects.saveInUrl("subjects");
      displaySubjects();
    }
    // Add listeners
    inputName.addEventListener("keydown", writtingInName);
    inputName.addEventListener("keyup", writtingInName);
    deleteBtn.addEventListener("click", deleteIndex);

    inputColor.addEventListener("change", () => {
      subjects[i]["color"] = inputColor.value;
      subjects.saveInUrl("subjects");
    });

    subjectDisplay.appendChild(buttonElement);

    index++;
  });
};
const withDragAndDrop = () => {
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
    buttonElement.style.backgroundColor = subject.color;
    buttonElement.textContent = subject.name;
    buttonElement.style.color = getTextColor(hexToRgb(subject.color));
    subjectDisplay.appendChild(buttonElement);
    index++;
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

var subjects = [];

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

const displaySubjects = () => {
    // Remove all child nodes from the parent element
    while (subjectDisplay.firstChild) {
        subjectDisplay.removeChild(subjectDisplay.firstChild);
    }
    subjects.forEach(subject => {
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
        inputName.classList.add('form-control', 'w-100');
        inputName.setAttribute("type", "text");
        
        const inputColor = document.createElement("input");
        inputColor.setAttribute("type", "color");
        inputColor.setAttribute("value", subject.color);
        inputColor.classList.add("form-control", "ms-auto");
        
        buttonElement.appendChild(inputName);
        buttonElement.appendChild(inputColor);
        
        subjectDisplay.appendChild(buttonElement);
    });
    
  
};

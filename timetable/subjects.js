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

const switchEditMode = document.getElementById("switch-edit-mode");
const switchEditModeLabel = document.getElementById("switch-edit-mode-label");
const displaySubjects = () => {
    // Remove all child nodes from the parent element
    while (subjectDisplay.firstChild) {
        subjectDisplay.removeChild(subjectDisplay.firstChild);
    }
    let index = 0;


    // Drag&drop
    

    // Edit mode
    subjects.forEach(subject => {
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
        inputName.classList.add('form-control', 'w-100', 'me-1');
        inputName.setAttribute("type", "text");
        
        const inputColor = document.createElement("input");
        inputColor.setAttribute("type", "color");
        inputColor.setAttribute("value", subject.color);
        inputColor.classList.add("form-control", "ms-auto");
        
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute("type", "button");
        deleteBtn.classList.add('btn', 'btn-danger', 'ms-1');
        deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';
        deleteBtn.style.width = "40px";
        buttonElement.appendChild(inputName);
        buttonElement.appendChild(inputColor);
        buttonElement.appendChild(deleteBtn);

        function writtingInName(){
          subjects[i]['name'] = inputName.value;
          subjects.saveInUrl('subjects');    
        }
        function deleteIndex(){
          subjects.splice(i, 1);
          subjects.saveInUrl("subjects");
          displaySubjects();
        }
        // Add listeners
        inputName.addEventListener('keydown', writtingInName);
        inputName.addEventListener('keyup', writtingInName);
        deleteBtn.addEventListener('click', deleteIndex);


        inputColor.addEventListener('change', ()=>{
          subjects[i]['color'] = inputColor.value;
          subjects.saveInUrl('subjects');
          
        });


        
        
        subjectDisplay.appendChild(buttonElement);


        index++;
    });
    
  
};

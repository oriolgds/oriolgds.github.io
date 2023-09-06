const url = new URL(location);
const urlParams = new URLSearchParams(window.location.search);


const subjectName = document.getElementById("subject-name")
const colorSelector = document.getElementById('color-select');
const createSubjectBtn = document.getElementById("create-subject-btn");
const subjectDisplay = document.getElementById("subject-display");
var subjects = [];

const addSubject = ()=>{
    createSubjectBtn.setAttribute("disabled", true);
    const name = subjectName.value;
    const color = colorSelector.value;
    subjects.push({"name": name, "color": color});
    subjects.saveInUrl("subjects");
    createSubjectBtn.removeAttribute("disabled");
}

createSubjectBtn.addEventListener('click', addSubject);

document.addEventListener('DOMContentLoaded', ()=>{
    subjects = subjects.restoreFromUrl('subjects');
    console.log(subjects)
})
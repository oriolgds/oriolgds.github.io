const url = new URL(location);
const urlParams = new URLSearchParams(window.location.search);





createSubjectBtn.addEventListener('click', addSubject);

document.addEventListener('DOMContentLoaded', ()=>{
    subjects = subjects.restoreFromUrl('subjects');
    displaySubjects();
})
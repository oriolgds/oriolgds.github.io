const url = new URL(location);
const urlParams = new URLSearchParams(window.location.search);





createSubjectBtn.addEventListener('click', addSubject);

document.addEventListener('DOMContentLoaded', ()=>{
    subjects = subjects.restoreFromUrl('subjects');
    rows = rows.restoreFromUrl("rows");
    // Restore the id list
    subjects.forEach(subject => {
        ids.push(subject.id);
    });
    displaySubjects();
})
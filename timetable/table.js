const tbody = document.querySelector('tbody');
const btnAddRowBottom = document.getElementById("add-row-bottom");

var rows = [];

function addRowBottom(){
    rows.push({
        "hour": "0:00",
        "days": []
    });
    rows.saveInUrl("rows");
    displayTable();
}

function displayTable(){
    // Remove children
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
    rows.forEach(row => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.textContent = row.hour;
        tr.appendChild(tr);
    });
}

btnAddRowBottom.addEventListener('click', addRowBottom);
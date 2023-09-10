const tbody = document.querySelector('tbody');
const btnAddRowButton = document.getElementById("add-row-button");
const btnDeleteRowButton = document.getElementById("delete-row-button")
var rows = [];

function addRowLast(){
    rows.push({
        "hour": "0:00",
        "days": []
    });
    rows.saveInUrl("rows");
    displayTable();
}
function deleteLastRow(){
    rows.pop();
    rows.saveInUrl("rows");
    displayTable();
}

function displayTable(){
    // Remove children
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    rows.forEach((row, index) => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.scope = "row";
        let inputHour = document.createElement("input");
        inputHour.classList.add('form-control', 'text-center');
        inputHour.type = "time";
        inputHour.value = row.hour;

        th.appendChild(inputHour); 

        
        tr.appendChild(th);

        for (let i = 0; i < 5; i++) {       
            let td = document.createElement("td");
            
            if(row.days[i] === undefined){
                td.textContent = "Vacio";
                td.classList.add(
                    'draggableZone'
                );
            }
            subjects.forEach((subject) => {
                if(subject.id === row.days[i]){
                    td.textContent = subject.name;
                    td.style.backgroundColor = subject.color;
                }
            });
            tr.appendChild(td);

            td.addEventListener('dragover', (ev)=>{
                ev.preventDefault();
                console.log(td);
            })
        }
        
        tbody.appendChild(tr);



        // Change hour event
        function changeHour(){
            row.hour = inputHour.value;
            rows.saveInUrl("rows");
        }
        inputHour.addEventListener('keydown', changeHour);
        inputHour.addEventListener('keyup', changeHour);
    });
}

btnAddRowButton.addEventListener('click', addRowLast);
btnDeleteRowButton.addEventListener('click', deleteLastRow);
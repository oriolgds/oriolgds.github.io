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
        inputHour.classList.add('form-control', 'text-center', 'hour-input');
        inputHour.type = "time";
        inputHour.value = row.hour;

        th.appendChild(inputHour); 

        
        tr.appendChild(th);

        for (let i = 0; i < 5; i++) {       
            let td = document.createElement("td");
            if(row.days[i] == null || row.days[i] == undefined){
                td.textContent = "Vacio";
                td.classList.add(
                    'draggableZone',
                );
            }
            else {
                let exists = false;
                subjects.forEach((subject) => {                    
                    if(subject.id === row.days[i]){
                        exists = true;
                        const text = document.createElement('div');
                        text.classList.add('me-auto');
                        text.textContent = subject.name;

                        text.style.color = getTextColor(hexToRgb(subject.color));
                        td.style.backgroundColor = subject.color;
                        
                        td.appendChild(text);
                        const btnDelete = document.createElement("button");
                        btnDelete.type = "button";
                        btnDelete.classList.add('btn', 'btn-danger', 'mt-1', 'btn-delete-cell');
                        btnDelete.innerHTML = `<i class="bi bi-trash3"></i>`;

                        td.appendChild(btnDelete);

                        btnDelete.addEventListener('click', ()=>{
                            row.days[i] = null;
                            displayTable();
                        })
                    }
                });
                if(!exists){
                    row.days[i] == null;
                    td.textContent = "Vacio";
                td.classList.add(
                    'draggableZone',
                );
                }
            }
            
            tr.appendChild(td);

            td.addEventListener('dragover', (ev)=>{
                ev.preventDefault();
            })
            td.addEventListener('drop', (ev)=>{
                ev.preventDefault();
                row.days[i] = ev.dataTransfer.getData("ids");
                rows.saveInUrl("rows");
                console.log(row);
                displayTable();
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
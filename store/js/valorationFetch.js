const valorationBars = document.getElementById("valoration-bars");
const valorationDisplayContent = document.getElementById("valorations-display-content");
const starsAvg = document.getElementById("stars-avg");
function roundToOneDecimal(number) {
    return Number(number.toFixed(1));
}
function createBars(values = [0, 0, 0, 0, 0]){
    valorationBars.innerHTML = "";
    let total = 0;
    // Calculate the total
    values.forEach(value => {
        total += parseInt(value);
    });    
    for (let i = 5; i > 0; i--) {
        // Calculate the percent
        let percent = (parseInt(values[i - 1]) * 100) / total;
        console.log("Percent" + percent);
        if(percent == 0){
            percent = "10px";
        } else {
            percent += "%"
        }
        valorationBars.innerHTML += `<div class="d-flex my-1 align-items-center">
        <div class="stars me-2" style="min-width: 40px;">
            ${i}
        </div>
        <div class="progress w-100 rounded-5" role="progressbar" aria-label="Basic example" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: ${percent}"></div>
        </div>
    </div>`;

    }
}
if(valorationBars !== null){
    createBars([20, 0, 5, 0, 17]);
}
function fetchValorations(projectID){
    if(valorationBars === null) return;
    // Reset all values
    starsAvg.innerHTML = "--";
    createBars();
    // Fetch the star average    
    $.ajax({
        type: "GET",
        url: "valoration/fetchStars.php",
        data: {
            'projectID': projectID,
            "avg": "true"
        },
        success: function (response) {
            if(isNaN(parseFloat(response))){
                starsAvg.innerHTML = "--";
            }
            else {
                starsAvg.innerHTML = roundToOneDecimal(parseFloat(response));
            }            
        }
    });
    $.ajax({
        type: "GET",
        url: "valoration/fetchStars.php",
        data: {
            'projectID': projectID,
            "avg": "false"
        },
        success: function (response) {
            console.log("Bars response" + response);
            createBars(JSON.parse(response));
        }
    });
}
let valorationsCounterDisplay = 0;
function resetContentTextValorations(){
    valorationsCounterDisplay = 0;
    if(valorationDisplayContent !== null){
        valorationDisplayContent.innerHTML = "";
    }    
}

function loadMoreTextValorations(){
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "valoration/fetchValorationContent.php",
        data: {
            "min": valorationsCounterDisplay,
            "max": valorationsCounterDisplay + 3,
            "projectID": cardIdPressed
        },
        success: function (response) {
            valorationsCounterDisplay += 4;
            console.log(response);
        }
    });
}


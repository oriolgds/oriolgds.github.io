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
            createBars(JSON.parse(response));
        }
    });
}
let valorationsCounterDisplay = 0;
function resetContentTextValorations(){
    valorationsCounterDisplay = 0;
    if(valorationDisplayContent !== null){
        valorationDisplayContent.firstElementChild.innerHTML = "";
    }    
}

// Esta variable indica cuantas reseñas se cargan cada vez que se presiona el boton de cargar más
const valorationLoadedForeachClick = 2;
function loadMoreTextValorations(){
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: "valoration/fetchValorationContent.php",
        data: {
            "min": valorationsCounterDisplay,
            "max": valorationsCounterDisplay + valorationLoadedForeachClick,
            "projectID": cardIdPressed
        },
        success: function (response) {
            console.log({
                "min": valorationsCounterDisplay,
                "max": valorationsCounterDisplay + valorationLoadedForeachClick,
                "projectID": cardIdPressed
            });
            valorationsCounterDisplay += valorationLoadedForeachClick;
            console.log(response);
            response = JSON.parse(response);
            response.forEach(item => {
                let stars = "";
                for (let i = 1; i <= 5; i++) {
                    if(i < item.stars){
                        stars += '<span class="bi bi-star-fill"></span>';
                    } else {
                        stars += '<span class="bi bi-star"></span>';
                    }
                }
                valorationDisplayContent.firstElementChild.innerHTML += `
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">@${item.username}</h5>
                                <div class="rating">
                                    ${stars}
                                </div>
                                <p class="card-text">${item.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
            });
        }
    });
}


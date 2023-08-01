const valorationBars = document.getElementById("valoration-bars");

function createBars(values = [0, 0, 0, 0, 0]){
    valorationBars.innerHTML = "";
    let total = 0;
    // Calculate the total
    values.forEach(value => {
        total += value;
    });    
    for (let i = 5; i > 0; i--) {
        // Calculate the percent
        let percent = (values[i - 1] * 100) / total;
        if(percent < 1){
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
    </div>`

    }
}
if(valorationBars !== null){
    createBars([20, 0, 5, 0, 17]);
}


const valorationBars = document.getElementById("valoration-bars");
valorationBars.innerHTML = "";
for (let i = 5; i > 0; i--) {
    valorationBars.innerHTML += `<div class="d-flex my-1 align-items-center">
    <div class="starts me-2" style="min-width: 40px;">
        ${i}
    </div>
    <div class="progress w-100 rounded-5" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 100%"></div>
    </div>
</div>`
    
}
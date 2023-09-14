const btnPrint = document.getElementById("btn-print");
const table = document.querySelector("table");

btnPrint.addEventListener("click", () => {
    document.querySelectorAll(".btn-delete-cell").forEach(btn => btn.remove());
    document.querySelectorAll('.hour-input').forEach(input => {
        const val = input.value;
        input.parentElement.innerHTML = val;
    });
    domtoimage.toPng(table)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        img.classList.add("img-output-print");
        document.querySelectorAll('.img-output-print').forEach(img => img.remove());
        document.body.appendChild(img);
        displayTable();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
});



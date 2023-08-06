let stars = 5;


const writeValorationBtn = document.getElementById("add-valoration-btn");
const starsValoration = document.getElementById("stars-valoration");
const valorationObservations = document.getElementById("valoration-observations");
const sendValorationForm = document.getElementById("send-valoration-form");

const changeStars = (n = 5)=>{
    stars = n;
    starsValoration.innerHTML = "";
    for (let i = 1; i <= 5; i++){
        let fill = i <= n ? "-fill" : "";
        starsValoration.innerHTML += `
        <div class="star-button" order="${i}" onclick="changeStars(${i})">
            <i class="bi bi-star${fill}"></i>
        </div>`;
    }
}
changeStars(5);

if(writeValorationBtn !== null){
    writeValorationBtn.addEventListener('click', ()=>{    
        changeProjectTitleValoration(cardTitlePressed);
        toggleWriteValorationView(true);
    });
}



sendValorationForm.addEventListener('submit', (e)=>{
    e.submitter.innerHTML = `<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Cargando...</span></div>`;    
    e.submitter.setAttribute("disabled", "true");
    $.ajax({
        type: "POST",
        url: "valoration/insertValoration.php",
        data: {
            "projectID": cardIdPressed,
            "stars": stars,
            "observations": valorationObservations.value
        },
        success: function (response) {
            e.submitter.innerHTML = `¡Publicado!`;
            setTimeout(() => {
                e.submitter.innerHTML = `<i class="bi bi-send"></i> Publicar`;
                e.submitter.removeAttribute("disabled");
                closeValorationView();
            }, 1500);            
        }
    });  
    e.preventDefault();  
});
function closeValorationView(){
    toggleWriteValorationView(false);
    sendValorationForm.reset();
    changeStars(5);
}
document.getElementById("btn-close-valoration").addEventListener('click', ()=>{
    closeValorationView();
});

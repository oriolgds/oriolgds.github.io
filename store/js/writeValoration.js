let stars = 5;


const writeValorationBtn = document.getElementById("add-valoration-btn");
const starsValoration = document.getElementById("stars-valoration");



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
    console.log("Stars" + stars);
}
changeStars(5);

if(writeValorationBtn !== null){
    writeValorationBtn.addEventListener('click', ()=>{
    
        toggleWriteValorationView(true);
    });
}

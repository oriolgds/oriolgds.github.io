window.addEventListener('load', ()=>{
    const cards = document.querySelectorAll('.cr-card');
    cards.forEach(card => {
        card.addEventListener('click', ()=>{
            console.log("Clicked!");
            card.classList.add("selected");
        });
    });
});
const main = document.querySelector("main");
let html = ``;
data.forEach(element => {
    // If the element is a title
    if(element.type === "title"){
        html += `<h3>${element.content}</h3>`;
    }
    // If it's a carrousel
    else if(element.type === "carrousel"){
        let cardsHTML = ``;
        element.cards.forEach(card => {
            cardsHTML += `
            <div class="card cr-card" links="${JSON.stringify(card.links)}">
                <div class="title">${card.title}</div>
                <img src="${card.imgSRC}" width="0" height="0" alt="${card.imgALT}" loading="lazy">
                <div class="description">${card.description}</div>
            </div>`;
        });
        let carrouselHTML = `
        <carrousel>
            <div class="btn-cr-container left">
                <button class="ripple btn-cr cr-previous"><i class="bi bi-caret-left"></i></button>
            </div>        
            <div class="cr-content">
                ${cardsHTML}
            </div>
            <div class="btn-cr-container right">
                <button class="ripple btn-cr cr-posterior"><i class="bi bi-caret-right"></i></button>
            </div>
        </carrousel>    
        `;
        html += carrouselHTML;
    }
});
console.log(html);
main.innerHTML = html;
addListenersToCards();
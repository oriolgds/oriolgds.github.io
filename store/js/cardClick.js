var cardTitlePressed;
var cardIdPressed;
const detailView =  document.getElementById("detail-view");
const writeValorationContainer = document.getElementById("write-valoration");
const detailViewTopContainer = document.getElementById("detail-view-top-container");
const toggleScrollControl = (bodyControl = true, valorationControl = false)=>{
    if (bodyControl) {
        document.body.style.overflowY = "auto";
        detailView.style.overflowY = "hidden";
        writeValorationContainer.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "hidden";
        detailView.style.overflowY = "auto";
        writeValorationContainer.style.overflowY = "hidden";
    }
    if(valorationControl){
        document.body.style.overflowY = "hidden";
        detailView.style.overflowY = "hidden";
        writeValorationContainer.style.overflowY = "auto";
    }
}
function disableCards(){
    const cards = document.querySelectorAll('.cr-card');
    cards.forEach(card => {
        card.classList.add("disabled");
    });
}
function enableCards(){
    const cards = document.querySelectorAll('.cr-card');
    cards.forEach(card => {
        card.classList.remove("disabled");
    });
}
function updateDetailView(description = "", links = ""){
    hideAllLinkButtons();
    changeDescription(description);
    links = JSON.parse(links);
    if(links.length == 0){
        document.getElementById("proximately-text").classList.remove("d-none");
    }
    else {
        document.getElementById("proximately-text").classList.add("d-none");
    }
    links.forEach(link => {
        if(link.type == "web"){
            displayNoneR(btnLinkWeb, true);
            changeHref(btnLinkWeb, link.link);
        } else if (link.type == "android"){
            displayNoneR(btnLinkAndroid, true);
            changeHref(btnLinkAndroid, link.link);
        } else if (link.type == "external"){
            displayNoneR(btnLinkExternal, true);
            changeHref(btnLinkExternal, link.link);
        } else if (link.type == "windows"){
            displayNoneR(btnLinkWindows, true);
            changeHref(btnLinkWindows, link.link);
        }
        else {
            console.error("Wrong type in link button");
        }
    });
}
function addListenersToCards(){    
    const cards = document.querySelectorAll('.cr-card');
    cards.forEach(card => {
        card.addEventListener('click', (e)=>{
            if(card.classList.contains("disabled")){
                return;
            }
            cardIdPressed = card.getAttribute("vid");
            cardTitlePressed = card.getAttribute("title");
            resetContentTextValorations();
            disableCards();            
            toggleScrollControl(false);
            toggleDetailView(true);
            fetchValorations(cardIdPressed);
            // Update the detail view information
            updateDetailView(card.querySelector(".description").innerHTML, card.getAttribute("links"));
            card.classList.add("selected");
            setTimeout(() => {
                card.classList.remove("selected");
            }, 1000);
            // Remove all the detail images
            document.querySelectorAll(".detail-view-img-logo").forEach(element => {
                element.remove();
            });
            let img = document.createElement("img");
            let detailImg = document.createElement("img");
            let nodes = card.childNodes;
            let fixedPosition = {
                top: 0,
                left: 0,
            };
            nodes.forEach(node => {
                if(node.nodeName.toLowerCase() == "img"){
                    img.src = node.src;
                    detailImg.src = node.src;
                    const staticRect = node.getBoundingClientRect();
                    fixedPosition.top = staticRect.top;
                    fixedPosition.left = staticRect.left;                  
                }
            });
            img.width = "140";
            img.height = "140";
            img.style.position = "fixed";
            img.style.borderRadius = "25px";
            img.style.top = fixedPosition.top + "px";
            img.style.left = fixedPosition.left + "px";
            img.style.transition = "500ms all";
            img.style.zIndex = 1000;
            detailImg.style.width = "300px";
            detailImg.style.height = "300px";
            detailImg.style.zIndex = 1100;
            detailImg.classList.add("detail-view-img-logo");
            document.body.appendChild(img);

            // Create the placeholder for the image to show the description on position
            let placeholder = document.createElement("img");
            placeholder.style.width = "300px";
            placeholder.style.height = "300px";
            placeholder.style.opacity = "0";
            placeholder.src = img.src;
            placeholder.classList.add = "placeholder";
            detailViewTopContainer.appendChild(placeholder);
            setTimeout(() => {
                if(window.innerWidth < 500){
                    img.style.top = "20px";
                    img.style.left = "20px";
                }
                else {
                    img.style.top = "90px";
                    img.style.left = "90px";
                    
                }
                img.style.width = "300px";
                img.style.height = "300px";

            }, 200);
            setTimeout(() => {
                placeholder.remove();
                document.getElementById("detail-view-top-container").appendChild(detailImg);
                img.remove();
            }, 1200);
        });
    });
}
toggleScrollControl();

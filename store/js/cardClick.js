window.addEventListener('load', ()=>{
    const detailView =  document.getElementById("detail-view");
    const cards = document.querySelectorAll('.cr-card');
    cards.forEach(card => {
        card.addEventListener('click', (e)=>{
            detailView.classList.add("show");
            card.classList.add("selected");
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
                    console.log('Top:', staticRect.top);
                    console.log('Left:', staticRect.left);                    
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
                document.getElementById("detail-view-top-container").appendChild(detailImg);
                img.remove();
            }, 1200);
        });
    });
});
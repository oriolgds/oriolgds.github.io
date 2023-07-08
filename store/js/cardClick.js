window.addEventListener('load', ()=>{
    const cards = document.querySelectorAll('.cr-card');
    cards.forEach(card => {
        card.addEventListener('click', (e)=>{
            card.classList.add("selected");
            let img = document.createElement("img");
            let nodes = card.childNodes;
            let fixedPosition = {
                top: 0,
                left: 0,
            };
            nodes.forEach(node => {
                if(node.nodeName.toLowerCase() == "img"){
                    img.src = node.src;

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
            document.body.appendChild(img);
            setTimeout(() => {
                img.style.top = "100px";
                img.style.left = "100px";
                img.style.width = "500px";
                img.style.height = "500px";
            }, 200);
        });
    });
});
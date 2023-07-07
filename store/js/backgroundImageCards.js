let nodes = document.querySelectorAll('.cr-content .card');
if(nodes.length > 0){
    nodes.forEach(element => {
        element.style.background = "url(logos/Ors Chat.jpg)";
        element.style.backgroundSize = "cover";
        element.style.backgroundPosition = "center";
    });
}
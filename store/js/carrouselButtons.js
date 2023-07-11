const previousButton = document.querySelectorAll(".btn-cr.cr-previous");
const posteriorButton = document.querySelectorAll(".btn-cr.cr-posterior");

posteriorButton.forEach(button => {
    button.addEventListener('click', ()=>{
        const content = button.parentElement.parentElement.querySelector(".cr-content");
        console.log(content);
        $(content).stop().animate({scrollLeft: content.scrollLeft + 210}, 200, 'swing');
    });
});
previousButton.forEach(button => {
    button.addEventListener('click', ()=>{
        const content = button.parentElement.parentElement.querySelector(".cr-content");
        console.log(content);
        $(content).stop().animate({scrollLeft: content.scrollLeft - 210}, 200, 'swing');
    });
});
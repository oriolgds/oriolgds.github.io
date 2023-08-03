function toggleDetailView(open = false){
    if(open){
        detailView.classList.remove("hide");
        detailView.classList.remove("show");
        detailView.classList.add("show");
        toggleScrollControl(false);
        detailView.scrollTo(0, 0);
    }
    else {
        detailView.classList.add("hide");
        setTimeout(() => {
            detailView.classList.remove("hide");
            detailView.classList.remove("show");
            enableCards();
        }, 1200);
        setTimeout(() => {
            toggleScrollControl(true);
        }, 1000);           
    }
}

function toggleWriteValorationView(open = false){
    if(open){
        writeValorationContainer.classList.remove("hide");
        writeValorationContainer.classList.remove("show");
        writeValorationContainer.classList.add("show");
        
        writeValorationContainer.scrollTo(0, 0);
        setTimeout(() => {
            toggleScrollControl(false, true);
        }, 1001);
    }
    else {
        writeValorationContainer.classList.add("hide");
        setTimeout(() => {
            writeValorationContainer.classList.remove("hide");
            writeValorationContainer.classList.remove("show");
            enableCards();
        }, 1200);
        toggleScrollControl(true);
    }
}
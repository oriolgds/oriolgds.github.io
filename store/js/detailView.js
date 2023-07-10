function toggleDetailView(open = false){
    if(open){
        detailView.classList.remove("hide");
        detailView.classList.remove("show");
        detailView.classList.add("show");
        toggleScrollControl(false);
    }
    else {
        detailView.classList.add("hide");
        setTimeout(() => {
            detailView.classList.remove("hide");
            detailView.classList.remove("show");
            enableCards();
        }, 1200);
        toggleScrollControl(true);

        
    }
}
function toggleDetailView(open = false){
    if(open){
        detailView.classList.remove("hide");
        detailView.classList.add("show");
    }
    else {
        detailView.classList.remove("show");
        detailView.classList.add("hide");
    }
}
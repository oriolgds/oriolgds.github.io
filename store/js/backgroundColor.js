window.onscroll = ()=>{
    if(window.scrollY > 1){
        document.body.style.backgroundColor = "#e2e2e2";
    }
    else {
        document.body.style.backgroundColor = "#212121";
    }
}
function hasScrollbar() {
    var bodyHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  
    var windowHeight = window.innerHeight;
  
    return bodyHeight > windowHeight;
}
if(!hasScrollbar()){
    document.body.style.backgroundColor = "#e2e2e2";
}
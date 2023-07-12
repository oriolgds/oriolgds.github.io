const btnLinkAndroid = document.getElementById("btn-link-android");
const btnLinkWeb = document.getElementById("btn-link-web");
const btnLinkWindows = document.getElementById("btn-link-windows");
const btnLinkExternal = document.getElementById("btn-link-external");

const descriptionText = document.querySelector("#detail-view .description .text");
const changeDescription = (text = "La descripción no está disponible")=>{
    descriptionText.innerHTML = text;
}
const changeHref = (element, value)=>{
    element.parentElement.setAttribute("href", value);
}
const displayNone = (element, parent = false)=>{
    if(parent){
        element.parentElement.classList.add("d-none");
    } 
    else {
        element.classList.add("d-none");
    }    
}
const displayNoneR = (element)=>{
    if(parent){
        element.parentElement.classList.remove("d-none");
    } 
    else {
        element.classList.remove("d-none");
    } 
}
const hideAllLinkButtons = ()=>{
    displayNone(btnLinkAndroid, true);
    displayNone(btnLinkWeb, true);
    displayNone(btnLinkWindows, true);
    displayNone(btnLinkExternal, true);
}
hideAllLinkButtons();

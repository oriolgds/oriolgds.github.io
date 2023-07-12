const btnLinkAndroid = document.getElementById("btn-link-android");
const btnLinkWeb = document.getElementById("btn-link-web");
const btnLinkWindows = document.getElementById("btn-link-windows");
const btnLinkExternal = document.getElementById("btn-link-external");

const descriptionText = document.querySelector("#detail-view .description .text");
const changeDescription = (text = "La descripción no está disponible")=>{
    descriptionText.textContent = text;
}
const displayNone = (element)=>{
    element.classList.add("d-none");
}
const displayNoneR = (element)=>{
    element.classList.remove("d-none");
}
const hideAllLinkButtons = ()=>{
    displayNone(btnLinkAndroid);
    displayNone(btnLinkWeb);
    displayNone(btnLinkWindows);
    displayNone(btnLinkExternal);
}


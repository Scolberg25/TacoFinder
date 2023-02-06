//Main
function prevPage() {
    window.history.back()
}

//Functional
function clear() {
    loaderElm.style.display = "none"
    allNamesElm.style.display = "block"
    errorMessageElm.style.display = "none"
}

//Img
function rotateImg() {
    let img = document.getElementById("downArrow");
    img.setAttribute("class", "rotated-image");
}

function resetImg() {
    let img = document.getElementById("downArrow");
    img.setAttribute("class", "none");
}
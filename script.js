//Main
function prevPage() {
    window.history.back()
}

//Functional
function clear() {
    window.location.reload();
}

function popup() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
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
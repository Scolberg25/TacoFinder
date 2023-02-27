/*document.getElementById('clearButton').addEventListener('click', function() {
    let allNamesElm = document.getElementsByClassName("name-row");
    allNamesElm.classList.add("showing");
    window.alert("Cleared!");
    console.log("cleared");
});*/

//Main
function prevPage() {
    window.history.back()
}

//Functional
function popup() {
    let popup = document.getElementById("popupbox");
    popup.classList.toggle("show");
}

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
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
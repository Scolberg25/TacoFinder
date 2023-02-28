function clearButton() {
    document.getElementById("location-select").selectedIndex = 0;
    document.getElementById("vibe-select").selectedIndex = 0;
    document.getElementById("stars-select").selectedIndex = 0;
    let allNameRows = document.querySelectorAll(".name-row");
    //console.log(allNameRows)

    for (let i = 0; i < allNameRows.length; i++) {
        let row = allNameRows[i]
        row.classList.add("showing");
    }

    let chip = document.getElementById('clearChip');
    chip.style.visibility = "visible";
    chip.classList.add("clearChipSelected");
    setTimeout(() => { chip.style.visibility = "hidden"; chip.classList.remove("clearChipSelected"); }, 5200);
}

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
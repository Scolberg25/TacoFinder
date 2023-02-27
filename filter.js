let itemSelected = false;
let starsSelected = false;
let vibeSelected = false;
let locationSelected = false;

//Event listeners for dropdown menus
document.querySelector('#stars-select').addEventListener("change", function() {
    if (this.value == "4") {
        searchStars('stars', 4);
    } else if (this.value == "4.2") {
        searchStars('stars', 4.2);
    } else if (this.value == "4.4") {
        searchStars('stars', 4.4);
    } else if (this.value == "4.6") {
        searchStars('stars', 4.6);
    } else {
        console.log('No selected');
    }
});

document.querySelector('#vibe-select').addEventListener("change", function() {
    if (this.value == "mild") {
        searchVibe('vibe', "🔥 Mild");
    } else if (this.value == "med") {
        searchVibe('vibe', "🔥 Medium");
    } else if (this.value == "hot") {
        searchVibe('vibe', "🔥 Hot");
    } else if (this.value == "xhot") {
        searchVibe('vibe', "🔥 Extra Hot");
    } else if (this.value == "burn") {
        searchVibe('vibe', "🔥 Burning");
    } else {
        console.log('No selected');
    }
});

document.querySelector('#location-select').addEventListener("change", function() {
    if (this.value == "cambridge") {
        searchLocation('location', "🚲 Cambridge");
    } else if (this.value == "somerville") {
        searchLocation('location', "🚲 Somerville");
    } else if (this.value == "watertown") {
        searchLocation('location', "🚲 Watertown");
    } else if (this.value == "allston") {
        searchLocation('location', "🚲 Allston");
    } else if (this.value == "boston") {
        searchLocation('location', "🚲 Boston");
    } else if (this.value == "medford") {
        searchLocation('location', "🚲 Medford");
    } else if (this.value == "waltham") {
        searchLocation('location', "🚲 Waltham");
    } else if (this.value == "brookline") {
        searchLocation('location', "🚲 Brookline");
    } else {
        console.log('No selected');
    }
});

//Stars Filter Function
function searchStars(filterByClass, filter) {
    let matchCount = 0;
    let allNameRows = document.querySelectorAll(".name-row.showing")

    for (let i = 0; i < allNameRows.length; i++) {
        let row = allNameRows[i]
        let name = row.getElementsByClassName(filterByClass)[0]
        let value = name.innerHTML

        let data = value.substring(0, filter.length);
        const dataParse = data.split(" ");
        const dataParsed = dataParse[1];

        if (filter <= parseFloat(dataParsed)) {
            row.style.display = "flex"
            matchCount += 1
        } else {
            row.classList.remove("showing")
    }
    loaderElm.style.display = "none"
    allNamesElm.style.display = "grid"
    errorMessageElm.style.display = "none"
}
    let noNameFoundElm = document.getElementById("noNameFound");

    if (matchCount === 0) {
        noNameFoundElm.style.display = "block"
    } else {
        noNameFoundElm.style.display = "none"
    }
}

//Vibe Filter Function
function searchVibe(filterByClass, filter) {
    let matchCount = 0;
    let allNameRows = document.querySelectorAll(".name-row.showing")

    for (let i = 0; i < allNameRows.length; i++) {
        let row = allNameRows[i]
        let name = row.getElementsByClassName(filterByClass)[0]
        let value = name.innerHTML

        if (filter == value.substring(0, filter.length)) {
            row.style.display = "flex"
            matchCount += 1
        } else {
            row.classList.remove("showing")
    }
    loaderElm.style.display = "none"
    allNamesElm.style.display = "grid"
    errorMessageElm.style.display = "none"
}
    console.log(filter)
    let noNameFoundElm = document.getElementById("noNameFound");

    if (matchCount === 0) {
        noNameFoundElm.style.display = "block"
    } else {
        noNameFoundElm.style.display = "none"
    }
}

//Location Filter Function
function searchLocation(filterByClass, filter) {
    let matchCount = 0;
    let allNameRows = document.querySelectorAll(".name-row.showing")

    for (let i = 0; i < allNameRows.length; i++) {
        let row = allNameRows[i]
        let name = row.getElementsByClassName(filterByClass)[0]
        let value = name.innerHTML

        if (filter == value.substring(0, filter.length)) {
            row.style.display = "flex"
            matchCount += 1
        } else {
            row.classList.remove("showing")
    }
    loaderElm.style.display = "none"
    allNamesElm.style.display = "grid"
    errorMessageElm.style.display = "none"
}
    console.log(filter)
    let noNameFoundElm = document.getElementById("noNameFound");

    if (matchCount === 0) {
        noNameFoundElm.style.display = "block"
    } else {
        noNameFoundElm.style.display = "none"
    }
}

//I'm feeling spicy (random)
function searchFunction() {
    let filter = Math.floor(Math.random() * 28);
    let matchCount = 0;
    let allNameRows = document.querySelectorAll(".name-row.showing")

    for (let i = 0; i < allNameRows.length; i++) {
        let row = allNameRows[i]
        let name = row.getElementsByClassName("id")[0]
        let value = name.innerHTML

        if (filter == value.substring(0, filter.length)) {
            row.style.display = "flex"
            matchCount += 1
        } else {
            row.style.display = "none"
    }
    loaderElm.style.display = "none"
    allNamesElm.style.display = "grid"
    errorMessageElm.style.display = "none"
}
    console.log(filter)

    if (matchCount === 0) {
        window.alert("Error")
    }
}
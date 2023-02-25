//Event listeners for dropdown menus
document.querySelector('#stars-select').addEventListener("change", function() {
    if (this.value == "3") {
        searchStars('stars', 3);
    } else if (this.value == "3.5") {
        searchStars('stars', 3.5);
    } else if (this.value == "4") {
        searchStars('stars', 4);
    } else if (this.value == "4.5") {
        searchStars('stars', 4.5);
    } else if (this.value == "5") {
        searchStars('stars', 5);
    } else {
        console.log('No selected');
    }
});

document.querySelector('#vibe-select').addEventListener("change", function() {
    if (this.value == "mild") {
        searchItem('vibe', "🔥 Mild");
    } else if (this.value == "med") {
        searchItem('vibe', "🔥 Medium");
    } else if (this.value == "hot") {
        searchItem('vibe', "🔥 Hot");
    } else if (this.value == "xhot") {
        searchItem('vibe', "🔥 Extra Hot");
    } else if (this.value == "burn") {
        searchItem('vibe', "🔥 Burning");
    } else {
        console.log('No selected');
    }
});

document.querySelector('#location-select').addEventListener("change", function() {
    if (this.value == "cambridge") {
        searchItem('location', "🚲 Cambridge");
    } else if (this.value == "somerville") {
        searchItem('location', "🚲 Somerville");
    } else if (this.value == "watertown") {
        searchItem('location', "🚲 Watertown");
    } else if (this.value == "allston") {
        searchItem('location', "🚲 Allston");
    } else if (this.value == "boston") {
        searchItem('location', "🚲 Boston");
    } else if (this.value == "medford") {
        searchItem('location', "🚲 Medford");
    } else if (this.value == "waltham") {
        searchItem('location', "🚲 Waltham");
    } else if (this.value == "brookline") {
        searchItem('location', "🚲 Brookline");
    } else {
        console.log('No selected');
    }
});

//Stars Function
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
            row.style.display = "block"
            matchCount += 1
        } else {
            row.style.display = "none"
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

//Main filter function
function searchItem(filterByClass, filter) {
    let matchCount = 0;
    let allNameRows = document.querySelectorAll(".name-row.showing")

    for (let i = 0; i < allNameRows.length; i++) {
        let row = allNameRows[i]
        let name = row.getElementsByClassName(filterByClass)[0]
        let value = name.innerHTML

        if (filter == value.substring(0, filter.length)) {
            row.style.display = "block"
            matchCount += 1
        } else {
            row.style.display = "none"
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
    let allNameRows = document.getElementsByClassName("name-row")

    for (let i = 0; i < allNameRows.length; i++) {
        let row = allNameRows[i]
        let name = row.getElementsByClassName("id")[0]
        let value = name.innerHTML

        if (filter == value.substring(0, filter.length)) {
            row.style.display = "block"
            matchCount += 1
        } else {
            row.style.display = "none"
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
document.querySelector('#stars-select').addEventListener("change", function() {
    if (this.value == "3") {
        searchItem('stars', 3);
    } else if (this.value == "3.5") {
        searchItem('stars', 3.5);
    } else if (this.value == "4") {
        searchItem('stars', 4);
    } else if (this.value == "4.5") {
        searchItem('stars', 4.5);
    } else if (this.value == "5") {
        searchItem('stars', 5);
    } else {
        console.log('No selected');
    }
});

document.querySelector('#vibe-select').addEventListener("change", function() {
    if (this.value == "mild") {
        searchItem('vibe', "Mild");
    } else if (this.value == "med") {
        searchItem('vibe', "Medium");
    } else if (this.value == "hot") {
        searchItem('vibe', "Hot");
    } else if (this.value == "xhot") {
        searchItem('vibe', "Extra Hot");
    } else if (this.value == "burn") {
        searchItem('vibe', "Burning");
    } else {
        console.log('No selected');
    }
});

function searchItem(filterByClass, filter) {
    let matchCount = 0;
    let allNameRows = document.getElementsByClassName("name-row")

    for (let i = 0; i < allNameRows.length; i++) {
        let row = allNameRows[i]
        let name = row.getElementsByClassName(filterByClass)[0]
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
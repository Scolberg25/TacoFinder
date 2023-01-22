function searchFunction(random) {
    let filter = random
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
}
    console.log(filter)
    let noNameFoundElm = document.getElementById("noNameFound");

    if (matchCount === 0) {
        noNameFoundElm.style.display = "block"
    } else {
        noNameFoundElm.style.display = "none"
    }
}

function populate() {
    let random = Math.floor(Math.random() * 11);
    setTimeout(searchFunction, 800, random);
}
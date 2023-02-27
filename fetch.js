//Error management
function setErrorDisplay(loaderElm, allNamesElm, errorMessageElm) {
    loaderElm.style.display = "none"
    allNamesElm.style.display = "none"
    errorMessageElm.style.display = "block"
}

let allNamesElm = document.getElementById("allNames");
let loaderElm = document.getElementById("loader");
let errorMessageElm = document.getElementById("errorMessage");

//Fetch API from API Spreadsheets
fetch("https://api.apispreadsheets.com/data/SrxOBBnogNgBYUFz/").then(res => {
    if (res.status === 200) {
        res.json().then(data => {
            const yourData = data["data"]
            for (let i = 0; i < yourData.length; i++) {
                let rowInfo = yourData[i]

                //Creating Div
                let rowInfoDiv = document.createElement("div")
                rowInfoDiv.classList.add("name-row")
                rowInfoDiv.classList.add("showing")

                //ID (h4)
				let rowId = document.createElement("h4")
                let rowIdNode = document.createTextNode(rowInfo["id"])
                rowId.appendChild(rowIdNode)
                rowId.classList.add("id")
                rowId.data = (rowInfo["id"])

                //Name (p)
                let rowName = document.createElement("p")
                let rowNameNode = document.createTextNode(rowInfo["name"])
                rowName.appendChild(rowNameNode)
                rowName.classList.add("name")

                //Image (img)
                var rowImg = new Image();
                imgSrc = rowInfo["image"]
                rowImg.src = imgSrc;
                rowImg.classList.add("image")

                //Location (p)
                let rowLocation = document.createElement("a")
                let rowLocationNode = document.createTextNode(rowInfo["location"])
                rowLocation.appendChild(rowLocationNode)
                rowLocation.classList.add("location")
                rowLocation.href = rowInfo["locationlink"]

                //Stars (p)
				let rowStars = document.createElement("p")
                let rowStarsNode = document.createTextNode(rowInfo["stars"])
                rowStars.appendChild(rowStarsNode)
                rowStars.classList.add("stars")

                //Vibe (p)
                let rowVibe = document.createElement("p")
                let rowVibeNode = document.createTextNode(rowInfo["vibe"])
                rowVibe.appendChild(rowVibeNode)
                rowVibe.classList.add("vibe")

                //Append
                rowInfoDiv.appendChild(rowId)
				rowInfoDiv.appendChild(rowName)
                rowInfoDiv.appendChild(rowImg)
                rowInfoDiv.appendChild(rowLocation)
				rowInfoDiv.appendChild(rowStars)
                rowInfoDiv.appendChild(rowVibe)

                allNamesElm.appendChild(rowInfoDiv)
}
            loaderElm.style.display = "none"
			allNamesElm.style.display = "grid"
			errorMessageElm.style.display = "none"
        }).catch(err => {
            setErrorDisplay(loaderElm, allNamesElm, errorMessageElm);
})} else {
            setErrorDisplay(loaderElm, allNamesElm, errorMessageElm);
}}).catch(err => {
            setErrorDisplay(loaderElm, allNamesElm, errorMessageElm);
});

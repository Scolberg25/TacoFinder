//Main
function prevPage() {
    window.history.back()
}

var randomProperty = function (restaurants) {
    var keys = Object.keys(restaurants);
    return restaurants[keys[ keys.length * Math.random() << 0]];
};

//Spicy
function spicy() {
    //const random = Math.floor(Math.random() * 10)+1;

    var $url = 'https://spreadsheets.google.com/feeds/list/1IHF0mSHs1HdYpIlIzYKG3O8SnAhKU_a6nEJSz04Togk/1/public/basic?alt=json';
    $.getJSON($url,function(data){
        alert(JSON.stringify(data.Sheet1.D12));
});
};

//Nav
function openNav() {
    document.getElementById("mySidenav").style.height = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
}

//Img
function rotateImg() {
    var img = document.getElementById("downArrow");
    img.setAttribute("class", "rotated-image");
}

function resetImg() {
    var img = document.getElementById("downArrow");
    img.setAttribute("class", "none");
}

//Location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        let loc = showPosition
    } else {
        window.alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
//Main
function prevPage() {
    window.history.back()
}

var randomProperty = function (restaurants) {
    var keys = Object.keys(restaurants);
    return restaurants[keys[ keys.length * Math.random() << 0]];
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
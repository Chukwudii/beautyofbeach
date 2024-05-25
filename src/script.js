// Region page
window.onload = function () {
    // Get the slide-in element
    var region = document.getElementById("regions");

    // Add the 'active' class to trigger the animation
    region.classList.add("active");
    const East = document.getElementById("East");
    const West = document.getElementById("West");
    const North = document.getElementById("North");
    const South = document.getElementById("South")
    East.style.display = "none"
    West.style.display = "none"
    South.style.display = "none"
    North.style.display = "block"
};

function north() {
    const East = document.getElementById("East");
    const West = document.getElementById("West");
    const North = document.getElementById("North");
    const South = document.getElementById("South")
    East.style.display = "none"
    West.style.display = "none"
    South.style.display = "none"
    North.style.display = "block"
}
function south() {
    const East = document.getElementById("East");
    const West = document.getElementById("West");
    const North = document.getElementById("North");
    const South = document.getElementById("South")
    East.style.display = "none"
    West.style.display = "none"
    North.style.display = "none"
    South.style.display = "block"
}
function east() {
    const East = document.getElementById("East");
    const West = document.getElementById("West");
    const North = document.getElementById("North");
    const South = document.getElementById("South")
    North.style.display = "none"
    West.style.display = "none"
    South.style.display = "none"
    East.style.display = "block"
}
function west() {
    const East = document.getElementById("East");
    const West = document.getElementById("West");
    const North = document.getElementById("North");
    const South = document.getElementById("South")
    North.style.display = "none"
    East.style.display = "none"
    South.style.display = "none"
    West.style.display = "block"
}
// Regions page

// Map section on homepage
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 15
    });

    // Get current location
    navigator.geolocation.getCurrentPosition(function (position) {
        var currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        // Center the map on the current location
        map.setCenter(currentLocation);
    }, function (error) {
        alert('Error getting current location: ' + error.message);
    });
}
// Map section on homepage


function send(){
    const fname = document.getElementById("fname").value;
    const nob = document.getElementById("nob").value;
    const message = document.getElementById("message").value;
    // console.log(fname + nob + message);

    var div = document.createElement("div");
    var p = document.createElement("p");
    var beach = document.createElement("h6");
    var name = document.createElement("h6");

    p.innerHTML = message;
    beach.innerHTML = nob;
    name.innerHTML = fname;

    div.classList.add("carousel-item");
    div.appendChild(p);
    div.appendChild(beach);
    div.appendChild(fname);

    var parentelement = document.getElementById("parent")
    parentelement.appendChild(div);
    div.appendChild(p);
    div.appendChild(beach);
    div.appendChild(name);

}


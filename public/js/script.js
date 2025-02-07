// intialize the google map
function myMap() {
    // Set the center of the map (latitude, longitude) and the zoom level
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850), // London coordinates as an example
        zoom: 5,
    };
    //Create the map
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // Create an array of parking spots
    var parkingSpots = [
        { lat: 51.508742, lng: -0.120850, name: "London Eye" },
        { lat: 51.508742, lng: -0.120850, name: "Big Ben" },
        { lat: 51.508742, lng: -0.120850, name: "Tower Bridge" },
        { lat: 51.508742, lng: -0.120850, name: "Buckingham Palace" },
        { lat: 51.508742, lng: -0.120850, name: "The Shard" },

    ];
    // Loop through each parking spot and add a marker to the map
    parkingSpots.forEach(function (parkingSpot) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(parkingSpot.lat, parkingSpot.lng),
            map: map,
            title: parkingSpot.name,
        });
    });
}
// Get the login modal
function loginModal(){
    document.getElementById("loginModal").style.display = "block";

}
// Show and hide the password on login page
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      this.textContent = 'Hide';
    } else {
      passwordField.type = 'password';
      this.textContent = 'Show';
    }
  });

// Close the login modal when clicking on <span> (x)
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        document.getElementById("loginModal").style.display = "none";
        document.getElementById("signupModal").style.display = "none";
        document.getElementById("availableSpots").style.display = "none";
        document.getElementById("reservations").style.display = "none";
        document.getElementById("invoicesModal").style.display = "none";
        document.getElementById("contactModal").style.display = "none";
    });
});

// Close the login modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) {
        document.getElementById("loginModal").style.display = "none";
    }
    if (event.target == document.getElementById("signupModal")) {
        document.getElementById("signupModal").style.display = "none";
    }
    if (event.target == document.getElementById("availableSpots")) {
        document.getElementById("availableSpots").style.display = "none";
    }
    if (event.target == document.getElementById("reservations")) {
        document.getElementById("reservations").style.display = "none";
    }
    if (event.target == document.getElementById("invoicesModal")) {
        document.getElementById("invoicesModal").style.display = "none";
    }
    if (event.target == document.getElementById("contactModal")) {
        document.getElementById("contactModal").style.display = "none";
    }
};

//Get signup modal
function signupModal(){
    document.getElementById("signupModal").style.display = "block";
}

// GET Available parking spots modal
function availableSpots(){
    document.getElementById("availableSpots").style.display = "block";
}

//GET Reservations modal
function reservations(){
    document.getElementById("reservations").style.display = "block";
}

// GET the invoices modal
function invoices(){
    document.getElementById("invoicesModal").style.display = "block";
}

// GET the contact modal
function contact(){
    document.getElementById("contactModal").style.display = "block";
}
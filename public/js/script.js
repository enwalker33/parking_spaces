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
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("loginModal").style.display = "none";
});

// Close the login modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) {
        document.getElementById("loginModal").style.display = "none";
    }
};

//Get signup modal
function signupModal(){
    document.getElementById("signupModal").style.display = "block";
}
// Close the sign up modal when clicking on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("signupModal").style.display = "none";
});
 
// Close the sign up modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("signupModal")) {
        document.getElementById("signupModal").style.display = "none";
    }
};

// GET Available parking spots modal
function availableSpots(){
    document.getElementById("availableSpots").style.display = "block";
}
// Close the available parking spots modal when clicking on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("availableSpots").style.display = "none";
});
//GET Reservations modal
function reservations(){
    document.getElementById("reservations").style.display = "block";
}
// Close the reservations modal when clicking on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("reservations").style.display = "none";
});
// Close the reservations modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("reservations")) {
        document.getElementById("reservations").style.display = "none";
    }
};
 // GET the invoices modal
function invoices(){
    document.getElementById("invoices").style.display = "block";
}
// Close the invoices modal when clicking on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("invoices").style.display = "none";
});
// Close the invoices modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("invoices")) {
        document.getElementById("invoices").style.display = "none";
    }
};
// GET the about modal
function about(){
    document.getElementById("about").style.display = "block";
}
// Close the about modal when clicking on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("about").style.display = "none";
});
// Close the about modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("about")) {
        document.getElementById("about").style.display = "none";
    }
};
// GET the contact modal
function contact(){
    document.getElementById("contact").style.display = "block";
}
// Close the contact modal when clicking on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("contact").style.display = "none";
});
// Close the contact modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("contact")) {
        document.getElementById("contact").style.display = "none";
    }
};
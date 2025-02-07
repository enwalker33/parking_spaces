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

// Close the modal when clicking on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById("loginModal").style.display = "none";
});

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) {
        document.getElementById("loginModal").style.display = "none";
    }
};



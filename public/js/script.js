document.addEventListener("DOMContentLoaded", function() {
    // Initialize the Google Map
    myMap();

    // Sample data for available spots, reservations, and invoices
    var availableSpots = [
        { id: 1, location: "London Eye", status: "Available" },
        { id: 2, location: "Big Ben", status: "Available" },
        { id: 3, location: "Tower Bridge", status: "Available" },
        { id: 4, location: "Buckingham Palace", status: "Available" },
        { id: 5, location: "The Shard", status: "Available" }
    ];

    var reservations = [
        { id: 1, location: "London Eye", date: "2023-10-01" },
        { id: 2, location: "Big Ben", date: "2023-10-02" }
    ];

    var invoices = [
        { id: 1, amount: "$10", date: "2023-09-01" },
        { id: 2, amount: "$15", date: "2023-09-02" }
    ];

    // Function to generate the list of available spots
    function generateAvailableSpots() {
        var spotList = document.querySelector(".spot-list");
        availableSpots.forEach(function(spot) {
            var spotItem = document.createElement("div");
            spotItem.className = "spot-item";
            spotItem.innerHTML = `<p>${spot.location} - ${spot.status}</p>`;
            spotList.appendChild(spotItem);
        });
    }

    // Function to generate the list of reservations
    function generateReservations() {
        var reservationList = document.querySelector(".reservation-list");
        reservations.forEach(function(reservation) {
            var reservationItem = document.createElement("div");
            reservationItem.className = "reservation-item";
            reservationItem.innerHTML = `<p>${reservation.location} - ${reservation.date}</p>`;
            reservationList.appendChild(reservationItem);
        });
    }

    // Function to generate the list of invoices
    function generateInvoices() {
        var invoiceList = document.querySelector(".invoice-list");
        invoices.forEach(function(invoice) {
            var invoiceItem = document.createElement("div");
            invoiceItem.className = "invoice-item";
            invoiceItem.innerHTML = `<p>${invoice.amount} - ${invoice.date}</p>`;
            invoiceList.appendChild(invoiceItem);
        });
    }

    // Call the functions to generate the lists
    generateAvailableSpots();
    generateReservations();
    generateInvoices();
});

// Initialize the Google Map
function myMap() {
    // Set the center of the map (latitude, longitude) and the zoom level
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850), // London coordinates as an example
        zoom: 5,
    };
    // Create the map
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
    parkingSpots.forEach(function(parkingSpot) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(parkingSpot.lat, parkingSpot.lng),
            map: map,
            title: parkingSpot.name,
        });
    });
}
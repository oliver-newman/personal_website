var map;

function initMap() {
  latitude = 5;
  longitude = 5;

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 8
  });
}

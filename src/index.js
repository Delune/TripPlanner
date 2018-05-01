const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFua2ltIiwiYSI6ImNqZ280aWw1eDJsbGUyd3FxeGhkZGE3cXgifQ.F_0IXkWvwkk5X8luow6DNQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 14, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activity", [-74.009151, 40.705086]);

marker.addTo(map);

// const markerDomEL = document.createElement("div");
// markerDomEL.style.width = "32px";
// markerDomEL.style.height = "39px";
// markerDomEL.style.backgroundImage = "url(http://i.imgur.com/WbMofMl.png";
// new mapboxgl.Marker(markerDomEL).setLngLat([-74.009, 40.705]).addTo(map);

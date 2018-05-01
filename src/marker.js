const mapboxgl = require("mapbox-gl");

const icons = {
  Activities: "http://i.imgur.com/WbMOfMl.png",
  Hotels: "http://i.imgur.com/D9574Cu.png",
  Restaurant: "http://i.imgur.com/cqR6pUI.png"
};

const buildMarker = (type, cords) => {
  if (type === "activity") {
    const markerDomEL = document.createElement("div");
    markerDomEL.style.width = "32px";
    markerDomEL.style.height = "39px";
    markerDomEL.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png";
    return new mapboxgl.Marker(markerDomEL).setLngLat(cords);
  }
};

module.exports = buildMarker;

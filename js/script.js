
// Initialiser la carte
/* var map = L.map('map', {
  center: [46.694667307773116, 2.61474609375],
  gestureHandling: 'cooperative',
  zoom: 6,
  zoomSnap: 0.25
}) */
var map1 = L.map('map1', {
  center: [46.694667307773116, 2.61474609375],
  gestureHandling: 'cooperative',
zoom: 6.5,
  zoomSnap: 0.05, 
})



/*tuile OSM /// FDC
$.getJSON("FDC.geojson",function(poly_data){
  
filter: function (feature, layer) {
      return feature.properties.NOM_DEP =! null
    },
    style: function (feature, layer) {
      return { fillColor: 'null', color: 'black', weight: 0.5, opacity: 1, fillOpacity: 0 }
    },
  
  L.geoJson(poly_data)  .addTo(map);
});
 
NOM_DEP*/


/* L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png').addTo(map1); */





function setViewToMyCoordinates(event) {
  //On récupère les coordonnées
  var coordinates = event.target.getAttribute('data-coordinates');
  var zoomLevel = event.target.getAttribute('data-zoom');
  //On nettoie la valeur récupérée
  var splittedCoordinates = coordinates.split(';');
  var lat = splittedCoordinates[0];
  var lng = splittedCoordinates[1];
/*  console.log(lat, lng); */
  map1.setView([lat, lng], zoomLevel);
  
}

//PanTO DOMTOM
//On récupère tous les éléments qui nous intéresse
var navigationElements = document.querySelectorAll('#controls nav ul li a');
//ON boucle sur les elements récupérés pour leur ajouter un listener
[].forEach.call(navigationElements, function(element) {
  //Au click, on lance la function panToMyCoordinates
  element.addEventListener('click', setViewToMyCoordinates);
});
//Un EventListiner pour écouter les évènements



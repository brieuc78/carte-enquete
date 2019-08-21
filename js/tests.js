//////////////////////////////////////////////DEPARTEMENT  REPONDANT ///////////////////////

$.getJSON('DEPARTEMENT.geojson', function (data_DEP) {
  // ajouter le fichier GeoJSON � la carte une fois le fond charg�
  $.getJSON('EPCI_POINT.geojson', function (data_point) {
	$.getJSON('REGION.geojson', function (data_REG) {
  
  
  
  var DEP = L.geoJson(data_DEP, {
    style: function (feature) {
      var fillColor,
        color,

        // D�finir la varialbe "DENSITE"
        pop = feature.properties.ENKTER
      // Valeur de discr�tisation
      if (pop == 'Oui') fillColor = '#6aa600'
      else fillColor = '#deedc2', color = '#ffffff' // no data
      return { color: 'black', opacity: 0.065, weight: 2, fillColor: fillColor, fillOpacity: 0.35 }
    },

    // Affichage de la popup
    onEachFeature: function (feature, layer) {
      var pop = feature.properties.ENKTER
      if (pop == 'Oui') {
        layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>')
      }
    }
  })

  
    var EPCI = L.geoJson(data_point, {
    filter: function (feature, layer) {

      return feature.properties.PLAN == 'OUI'
    },

/// // Affichage de la popup
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>')
    },

    // pointToLayer: function(feature,latlng){
    //		label = String(feature.properties.NOM_MIN) // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
    //  return  L.CircleMarker(latlng, {
    //     radius: 1,
    //  }).tooltip('label',{permanent: true, opacity: 0.7});
    //   }

    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: 'icon.png',
          iconSize: [8, 8],
          iconAnchor: [8, 8],
          popupAnchor: [8, 8],

        })
      })
    }

  })
  
  
  var REG = L.geoJson(data_REG, {
    filter: function (feature, layer) {
      return feature.properties.ENKTER == 'Oui'
    },
    style: function (feature, layer) {
      return { fillColor: '#ffffff', color: '#024096', weight: 2, opacity: 1, fillOpacity: 0 }
    },

    /// // Affichage de la popup
    onEachFeature: function (feature, layer) {

      var pop = feature.properties.ENKTER
      if (pop == 'Oui') {

        layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>')
      }
    }
  })
  
  
  
  
  /*   title:'Département'
  setTimeout(function () { //////////controle superposition de couche
    DEP.bringToFront()}, 1000) */
	
	
	
	
	
	
	
	
	

  DEP.addTo(map)
  var mixed = {
    'Département': DEP, 
 'Intercommunalité': EPCI,
'Région': REG, // BaseMaps
  }
  L.control.layers(null, mixed, {
    collapsed: false
  }).addTo(map)
})
})
})
//////////////////////////////////////REGION SUFACE



  



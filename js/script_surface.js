$.getJSON('DEPARTEMENT.geojson', function (data_DEP_surf) {
	$.getJSON('EPCI_POLY.geojson', function (data_point) {
		$.getJSON('REGION.geojson', function (data_REG) {
	//		$.getJSON('AUTRE.geojson', function (data_AUTRE) {
	
	
 ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	
  var DEP_PLAN = L.geoJson(data_DEP_surf, {
    filter: function (feature, layer) {
      return feature.properties.PLAN == 'OUI'
    },
    style: function (feature, layer) {
      return { fillColor: '#90bb45', color: 'white', weight: 0.5, opacity: 1, fillOpacity: 1 }
    },

    /// // Affichage de la popup
    onEachFeature: function (feature, layer) {

      var pop = feature.properties.PLAN
      if (pop == 'OUI') {

        layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>'+ "<a href='"+feature.properties.SITE_OFF +"'>"+feature.properties.SITE_OFF+ "</normal>" + "</a>")
      }
    }
    }) 
	  .addTo(map1)
	
	
	
  var DEP_NOPLAN = L.geoJson(data_DEP_surf, {
    filter: function (feature, layer) {
      return feature.properties.PLAN == 'NON'
    },
    style: function (feature, layer) {
      return { fillColor: '#d5e3a4', color: 'white', weight: 0.5, opacity: 1, fillOpacity: 1 }
    },

    /// // Affichage de la popup
    onEachFeature: function (feature, layer) {

      var pop = feature.properties.PLAN
      if (pop == 'NON') {

        layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>'+ "<a href='"+feature.properties.SITE_OFF +"'>"+feature.properties.SITE_OFF+ "</normal>" + "</a>")
      }
    }
    }) 
	
	/*  setTimeout(function () { //////////controle superposition de couche
    EPCI.bringToFront()
  }, 1000) */
/*   
  */
	

	

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	
 var REG_PLAN = L.geoJson(data_REG, {
    filter: function (feature, layer) {
      return feature.properties.PLAN == 'OUI'
    },
    style: function (feature, layer) {
      return { color: '#243a85', weight: 3, opacity: 1, fillOpacity: 0 }
    },

    /// // Affichage de la popup
    onEachFeature: function (feature, layer) {

      var pop = feature.properties.PLAN
      if (pop == 'OUI') {

        layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>'+ "<a href='"+feature.properties.SITE_OFF +"'>"+feature.properties.SITE_OFF+ "</normal>" + "</a>")
      }
    }
    })
	  .addTo(map1)
  
  var REG_NOPLAN = L.geoJson(data_REG, {
    filter: function (feature, layer) {
      return feature.properties.PLAN == 'NON'
    },
    style: function (feature, layer) {
      return {  color: '#008bce', weight: 3, opacity: 1, fillOpacity: 0 }
    },

    /// // Affichage de la popup
    onEachFeature: function (feature, layer) {

      var pop = feature.properties.PLAN
      if (pop == 'NON') {

        layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>')
      }
    }
    }) 
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	
  var EPCI_PLAN = L.geoJson(data_point, {
    filter: function (feature, layer) {
      return feature.properties.PLAN == 'OUI'
    },
    style: function (feature, layer) {
      return { fillColor: 'black', color: 'white', weight: 0.5, opacity: 1, fillOpacity: 1 }
    },

    /// // Affichage de la popup
    onEachFeature: function (feature, layer) {

      var pop = feature.properties.PLAN
      if (pop == 'OUI') {

        layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>'+ "<a href='"+feature.properties.SITE_OFF +"'>"+feature.properties.SITE_OFF+ "</normal>" + "</a>")
      }
    }
    }) 
		.addTo(map1)

	
  var EPCI_NOPLAN = L.geoJson(data_point, {
    filter: function (feature, layer) {
      return feature.properties.PLAN == 'NON'
    },
    style: function (feature, layer) {
      return { fillColor: 'grey', color: 'white', weight: 0.5, opacity: 1, fillOpacity: 1 }
    },

    /// // Affichage de la popup
    onEachFeature: function (feature, layer) {

      var pop = feature.properties.PLAN
      if (pop == 'NON') {

        layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>'+ "<a href='"+feature.properties.SITE_OFF +"'>"+feature.properties.SITE_OFF+ "</normal>" + "</a>")
      }
    }
    }) 
	  
	/*  setTimeout(function () { //////////controle superposition de couche
    EPCI.bringToFront()
  }, 1000) */
/*   
  */
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	
//  var AUTRE_PLAN = L.geoJson(data_AUTRE, {
  //  filter: function (feature, layer) {
    //  return feature.properties.PLAN == 'OUI'
 //   },
   // style: function (feature, layer) {
     // return { fillColor: 'black', color: 'white', weight: 0.5, opacity: 1, fillOpacity: 1 }
   // },

    /// // Affichage de la popup
   // onEachFeature: function (feature, layer) {

   //   var pop = feature.properties.PLAN
   //   if (pop == 'OUI') {

  //      layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>')
  //    }
 //   }
 //   }) 
		

	
//  var AUTRE_NOPLAN = L.geoJson(data_AUTRE, {
 //   filter: function (feature, layer) {
 //     return feature.properties.PLAN == 'NON'
 //   },
 //   style: function (feature, layer) {
 //     return { fillColor: 'grey', color: 'white', weight: 0.5, opacity: 1, fillOpacity: 1 }
 //   },

    /// // Affichage de la popup
  //  onEachFeature: function (feature, layer) {

  //    var pop = feature.properties.PLAN
  //    if (pop == 'NON') {

   //     layer.bindPopup('<strong>' + feature.properties.NOM + '</strong><br/>')
  //    }
  //  }
   // }) 
//
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////	
  
     
  
  var OSM =L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
    attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map1);

/*   var mixed = {
	
'Département': DEP_PLAN,
'Région': REG_PLAN,
'Intercommunalité': EPCI_NOPLAN,


 'Département': DEP_NOPLAN,
 'Région': REG_NOPLAN,
'Intercommunalité': EPCI_PLAN,
	
 

  // BaseMaps
 
 'Sans plan vélo':REG_NOPLAN,
  }
  L.control.layers(null, mixed).addTo(map1)
 */
  
  
  var groupedOverlays = {
	  

  "<span class='controlHeading'>Fond de carte</span>": {
	"OSM": OSM.addTo(map1),
	
  },
  "<span class='controlHeading'>Avec schéma cyclable</span>": {
  'Région': REG_PLAN,
	'Département': DEP_PLAN,
	'Intercommunalité': EPCI_PLAN,
	
  },
  "<span class='controlHeading'>Sans schéma cyclable</span>": {
 'Département': DEP_NOPLAN,
 'Région': REG_NOPLAN,
'Intercommunalité': EPCI_NOPLAN,

  }
};

var options = {
  // Make the "Base Maps" group exclusive (use radio inputs)
/*   exclusiveGroups: ["<span class='controlHeading'>Fond de carte</span>"], */
  // Show a checkbox next to non-exclusive group labels for toggling all
  groupCheckboxes: true,
  collapsed: false
};

// Use the custom grouped layer control, not "L.control.layers"
L.control.groupedLayers(null, groupedOverlays,options).addTo(map1);



  

  
  
  
  
  
  
  
//})
})
})
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////EPCI POLY



  // ajouter le fichier GeoJSON � la carte une fois le fond charg�



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////REGION POLY



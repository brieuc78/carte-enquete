var myParent = document.body;
    var selectList3 = document.createElement("select3");
    selectList3.id = "mySelect3";
    myParent.appendChild(selectList3);
    var select3 = document.getElementById("mySelect3");

   

    $.getJSON('REGION.geojson', function(data_REG) {
		
			
			
        data_REG.features.forEach(function(element) {
            select3.options[select3.options.length] = new Option(element.properties.NOM_REG_2, element.geometry.coordinates[0]+';'+element.geometry.coordinates[1]);
        });
			
    });
	
 
function ToCentroid(data_REG) {
	var centroidgroup = L.layerGroup();
  for (var i = 0; i < data_REG.length; ++i) {
  var centroidtemp = turf.centroid(data_REG[i].toGeoJSON());
  centroidgroup.addLayer(L.geoJson(centroidtemp, {
					onEachFeature : onEachFeature,
          }));
    }
  return centroidgroup;
  }


 
    $('#mySelect3').change(function(e) {
       console.log($(e.target).val());
		
			var centroidtemp = ($(e.target).val());
			var splittedOptionValue = centroidtemp.split(',');
			console.log(splittedOptionValue);
			var  lng= splittedOptionValue[0];
			var lat = splittedOptionValue[1];
			map1.setView([lat, lng], zoomLevel=8);		
    });
 
  
/* var navigationElements = document.querySelectorAll('#select option value'); */





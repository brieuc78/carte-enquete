var myParent = document.body;
    var selectList = document.createElement("select2");
    selectList.id = "mySelect2";
    myParent.appendChild(selectList);
    var select2 = document.getElementById("mySelect2");

   


	
	    $.getJSON('EPCI_POLY.geojson', function(data_point) {
		
			 var EPCI = L.geoJson(data_point, {
			filter: function (feature, layer) {
			return feature.properties.ENKTER == 'OUI'
			}, })
			
        data_point.features.forEach(function(element) {
            select2.options[select2.options.length] = new Option(element.properties.NOM, element.geometry.coordinates[0]+';'+element.geometry.coordinates[1]);
        });
			
    });
 
    $('#mySelect2').change(function(e) {
        console.log($(e.target).val());
			var optionValue = ($(e.target).val());
			var splittedOptionValue = optionValue.split(',');
			console.log(splittedOptionValue);
			var lng = splittedOptionValue[0];
			var lat = splittedOptionValue[1];
			

			map1.setView([lat, lng], zoomLevel=10);
    });
   


/*  */



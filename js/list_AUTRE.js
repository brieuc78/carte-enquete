var myParent = document.body;
    var selectList4 = document.createElement("select4");
    selectList4.id = "mySelect1";
    myParent.appendChild(selectList1);
    var select4 = document.getElementById("mySelect4");

   


    $.getJSON('AUTRE.geojson', function(data_AUTRE) {
		
			 var AUTRE = L.geoJson(data_AUTRE, {
			filter: function (feature, layer) {
			return feature.properties.ENKTER == 'OUI'
			}, })
			
        data_AUTRE.features.forEach(function(element) {
            select4.options[select4.options.length] = new Option(element.properties.NOM, element.geometry.coordinates[0]+';'+element.geometry.coordinates[1]);
        });
			
    });
	

 
    $('#mySelect4').change(function(e) {
        console.log($(e.target).val());
			var optionValue = ($(e.target).val());
			var splittedOptionValue = optionValue.split(',');
//			console.log(splittedOptionValue);
			var lng = splittedOptionValue[0];
			var lat = splittedOptionValue[1];
			map1.setView([lat, lng], zoomLevel=15);
    });
   


 
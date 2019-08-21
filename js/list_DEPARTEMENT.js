var myParent = document.body;
    var selectList1 = document.createElement("select1");
    selectList1.id = "mySelect1";
    myParent.appendChild(selectList1);
    var select1 = document.getElementById("mySelect1");

   


    $.getJSON('DEPARTEMENT.geojson', function(data_DEP_surf) {
		
			 var DEP = L.geoJson(data_DEP_surf, {
			filter: function (feature, layer) {
			return feature.properties.ENKTER == 'OUI'
			}, })
			
        data_DEP_surf.features.forEach(function(element) {
            select1.options[select1.options.length] = new Option(element.properties.NOM, element.geometry.coordinates[0]+';'+element.geometry.coordinates[1]);
        });
			
    });
	

 
    $('#mySelect1').change(function(e) {
        console.log($(e.target).val());
			var optionValue = ($(e.target).val());
			var splittedOptionValue = optionValue.split(',');
			console.log(splittedOptionValue);
			var lng = splittedOptionValue[0];
			var lat = splittedOptionValue[1];
			map1.setView([lat, lng], zoomLevel=10);
    });
   


/*  */


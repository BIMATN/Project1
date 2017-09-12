function placeData(lat, long){
    var areaInfo;
    var service;
    var eventGeometry;

    eventGeometry = new google.maps.LatLng(lat,long);

    areaInfo = {
    location: eventGeometry,
    radius: '5000',
    keyword: 'hotel',
    type: ['establishment']
    };

    service = new google.maps.places.PlacesService($('#emptyDiv').get(0));
    service.nearbySearch(areaInfo, function(data){
    console.log(data);
  });
}
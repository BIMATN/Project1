function placeData(){
    var areaInfo;
    var service;
    var eventGeometry;

    eventGeometry = new google.maps.LatLng(33,-112);

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
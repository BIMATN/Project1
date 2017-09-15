var hotels=[];
var hotelIcon;
var restaurants=[];
var restaurantIcon;

function placeHotelData(lat, long){
    var areaInfo;
    var service;
    var eventGeometry;

    eventGeometry = new google.maps.LatLng(lat,long);

    areaInfo = {
    location: eventGeometry,
    radius: '5000',
    keyword: 'hotel',
    type: ['establishment'],
    rankBy: google.maps.places.RankBy.PROMINENCE
    };

    service = new google.maps.places.PlacesService($('#emptyDiv').get(0));
    service.nearbySearch(areaInfo, function(data){
        hotelIcon = '<img src="'+data[0].icon+'" alt="hotel icon">';
        for(var i=0;i<5;i++){
            hotels.splice(i,1,data[i].name);//pushes to array with data return by splicing at array index equal to i
        }
    /*setTimeout(*/placePrint()//, 2000);
  });
}

function placeRestaurantData(lat, long){
    var areaInfo;
    var service;
    var eventGeometry;

    eventGeometry = new google.maps.LatLng(lat,long);

    areaInfo = {
    location: eventGeometry,
    radius: '5000',
    keyword: 'food',
    type: ['establishment'],
    rankBy: google.maps.places.RankBy.PROMINENCE
    };

    service = new google.maps.places.PlacesService($('#emptyDiv').get(0));
    service.nearbySearch(areaInfo, function(data){
        restaurantIcon = '<img src="'+data[0].icon+'" alt="restaurant icon">';
        for(var i=0;i<5;i++){
            restaurants.splice(i,1,data[i].name);//pushes to array with data return by splicing at array index equal to i
        }
    /*setTimeout(*/placePrint()//, 1000);
  });
}

function placePrint(){
    $("#hotel1").html(hotelIcon+" "+hotels[0]);
    $("#hotel2").html(hotelIcon+" "+hotels[1]);
    $("#hotel3").html(hotelIcon+" "+hotels[2]);
    $("#hotel4").html(hotelIcon+" "+hotels[3]);
    $("#hotel5").html(hotelIcon+" "+hotels[4]);
    $("#restaurant1").html(restaurantIcon+" "+restaurants[0]);
    $("#restaurant2").html(restaurantIcon+" "+restaurants[1]);
    $("#restaurant3").html(restaurantIcon+" "+restaurants[2]);
    $("#restaurant4").html(restaurantIcon+" "+restaurants[3]);
    $("#restaurant5").html(restaurantIcon+" "+restaurants[4]);
}
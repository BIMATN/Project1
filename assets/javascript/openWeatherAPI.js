//Scripting for openWeather API calls

/*API data available at the free tier:

1. Current Weather
2. 5 Day/3 Hour Forecast
3. Weather Maps API
4. UV Index
5. Air Pollution
6. Weather Alerts

Maximum 60 Calls per Minute - I will work off of assumption that we only get weather info when a card is selected*/
/*Might need to limit events to 5 day searches because of forecast limitation and no access to historical data*/

 /*____________________________________________VARIABLES__________________________________________________*/

 var weatherCast=[{},{},{},{},{}];
 var weatherCurrent={};
 var appId="appid=8d122bcbebb8b66272304e0075264f6d";
 var queryURL;

 /*_____________________________________________Functions__________________________________________________*/

 //this function actually prints to the card
  function weatherPrint(){
   $("#weatherSubHead").html("What's it like in "+weatherCurrent.city+"?");
   if(weatherCurrent.clouds !== undefined){
    $("#weatherIcon").html(weatherCurrent.icon+""+weatherCurrent.clouds);
   }
   else{
    $("#weatherIcon").html(weatherCurrent.icon);
   }
   $("#temp").html("Temp: "+weatherCurrent.temp+String.fromCharCode(176)+" F");
   $("#wind").html("Wind: "+weatherCurrent.wind+" mph");
   $("#sunriseTime").html("Sunrise: "+weatherCurrent.sunrise);
   $("#sunsetTime").html("Sunset: "+weatherCurrent.sunset);
  }

//this function retreives current weather data
 function weatherNow(lat,long) {

   queryURL= 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=imperial&'+appId;

   $.ajax({
     url: queryURL,
     method: "GET"
   }).done(function(response) 
   {
     //console.log(response)
     weatherCurrent.city=response.name;
     weatherCurrent.temp=response.main.temp;
     weatherCurrent.clouds=response.weather[0].description;
     weatherCurrent.precip=response.rain;
     weatherCurrent.humid=response.main.humidity;
     weatherCurrent.wind=response.wind.speed;
     weatherCurrent.sunrise=moment(response.sys.sunrise, 'X').format('h:mm:ss a');
     weatherCurrent.sunset=moment(response.sys.sunset, 'X').format('h:mm:ss a');
     weatherCurrent.icon='<img src="https://openweathermap.org/img/w/'+response.weather[0].icon+'.png" alt="weather icon">';
     weatherPrint();
   });
   console.log(weatherCurrent);
   
 }


/*-------------------------------------------Function below is for future use--------------------------------------------*/
/*this function retrieves forecast info for next 5 days at 2pm each day
 function weatherThen(lat,long){
  queryURL= 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+long+'&units=imperial&'+appId;

   $.ajax({
     url: queryURL,
     method: "GET"
   }).done(function(response) 
   {
    //Future scripting that utilizes date and time to pick most relevant time of forecast
     //console.log(response);
     //for loop to test getting forecast data - choosing approx high temps of each day - results in 5 days worth of forecast in console
     var j=7;
     if(response.cnt > 39){//this if condition changes based on the qty of returned info from openweather to ensure that 2pm is always chosen
       j=7;
     }
     else{
       j=6;
     }
     var i;
     for(i=0;i<5;i++){
     weatherCast[i].city=response.city.name;
     weatherCast[i].temp=response.list[j].main.temp;
     weatherCast[i].clouds=response.list[j].weather[0].description;
     weatherCast[i].precip=response.list[j].rain;
     weatherCast[i].humid=response.list[j].main.humidity;
     weatherCast[i].wind=response.list[j].wind.speed;
     weatherCast[i].time=moment(response.list[j].dt, 'X').format('dddd, MMMM Do YYYY, h:mm:ss a');
     weatherCast[i].icon='<img src="http://openweathermap.org/img/w/'+response.list[j].weatherCast[0].icon+'.png" alt="weather-icon">';
     j+=8;
     }
   });
   console.log(weatherCast);
 }*/
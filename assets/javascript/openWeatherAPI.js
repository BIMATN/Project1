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

 var weather={};
 var appId = "appid=8d122bcbebb8b66272304e0075264f6d";
 var queryURL;

 /*_____________________________________________Functions__________________________________________________*/

 function weatherNow(city) {

   queryURL= 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&'+appId;

   $.ajax({
     url: queryURL,
     method: "GET"
   }).done(function(response) 
   {
     console.log(response)
     weather.city=response.name;
     weather.temp=response.main.temp;
     weather.clouds=response.weather[0].description;
     weather.precip=response.rain;
     weather.humid=response.main.humidity;
     weather.wind=response.wind.speed;
     weather.sunrise=response.sys.sunrise;
     weather.sunset=response.sys.sunset;
     console.log(weather);
   });
 }

 function weatherThen(city,time){
  queryURL= 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&'+appId;

   $.ajax({
     url: queryURL,
     method: "GET"
   }).done(function(response) 
   {
    //Future scripting that utilizes date and time to pick most relevant time of forecast
     console.log(response);
     //for loop to test getting forecast data - choosing approx high temps of each day - results in 5 days worth of forecast in console
     for(i=7;i<39;i=i+7){
      weather.city=response.city.name;
      weather.temp=response.list[i].main.temp;
      weather.clouds=response.list[i].weather[0].description;
      weather.precip=response.list[i].rain;
      weather.humid=response.list[i].main.humidity;
      weather.wind=response.list[i].wind.speed;
      weather.sunrise=response.list[i].sys.sunrise;
      weather.sunset=response.list[i].sys.sunset;
      console.log(weather);
     }
   });
 }
 weatherNow('boulder');
 weatherThen('boulder'/*,time of event*/);
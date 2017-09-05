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

 var weather=[{},{},{},{},{}];
 var weatherCurrent={};
 var weatherCast=[];
 var appId="appid=8d122bcbebb8b66272304e0075264f6d";
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
     weatherCurrent.city=response.name;
     weatherCurrent.temp=response.main.temp;
     weatherCurrent.clouds=response.weather[0].description;
     weatherCurrent.precip=response.rain;
     weatherCurrent.humid=response.main.humidity;
     weatherCurrent.wind=response.wind.speed;
     weatherCurrent.sunrise=response.sys.sunrise;
     weatherCurrent.sunset=response.sys.sunset;
     weatherCurrent.icon='<img src="http://openweathermap.org/img/w/"'+response.weather[0].icon+'".png alt="weather icon>"';
     console.log(weatherCurrent);
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
     var j=7;
     var i;
     for(i=0;i<5;i++){
		weather[i].city=response.city.name;
		weather[i].temp=response.list[j].main.temp;
		weather[i].clouds=response.list[j].weather[0].description;
		weather[i].precip=response.list[j].rain;
		weather[i].humid=response.list[j].main.humidity;
		weather[i].wind=response.list[j].wind.speed;
		weather[i].sunrise=response.list[j].sys.sunrise;
		weather[i].sunset=response.list[j].sys.sunset;
		weather[i].icon='<img src="http://openweathermap.org/img/w/'+response.list[j].weather[0].icon+'.png" alt="weather-icon">';
		weatherCast.push(weather[i]);
		console.log(weather[i]);
		j+=8;
     }
   });
 }
 weatherNow('Eureka');
 weatherThen('santa fe'/*,time of event*/);
 // weatherThen('honolulu'/*,time of event*/);
 // weatherThen('miami'/*,time of event*/);
 // weatherThen('phoenix'/*,time of event*/);
 // weatherThen('santa fe'/*,time of event*/);
 console.log(weatherCast);
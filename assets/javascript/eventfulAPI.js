// $(document).ready(function() {
  var latitude;
  var longitude;
  var latlong = [{},{},{},{},{}];

  function eventPrint(event) {
    for(var i = 0; i < 5; i++) {
      $("#c"+(i+1)+"EventTitle").text(event[i].title);
      if(event[i].description === null) {
        $("#c"+(i+1)+"Text").html('<ul><li>City: '+ event[i].city_name + ", " + event[i].region_abbr +
                        '<li>Event Start: '+ event[i].start_time + '</ul>');
      }
      else {
        $("#c"+(i+1)+"Text").html('<ul><li>City: '+ event[i].city_name + ", " + event[i].region_abbr +
                        '<li>Event Start: '+ event[i].start_time + 
                        /* '<li>Description: '+ event[i].description +*/ '</ul>');
      }
    }
  }

  function returnEventLatLong() {
    // var eventLatLong = {latitude , longitude};
    // console.log(eventLatLong);
    // return eventLatLong;
    return latlong[4];
  }

  function findEvents(search) {
    //var event = [] throws error
    var event = [{},{},{},{},{}];
    var eventfulURL = "http://api.eventful.com/json/events/search/rss?...&keywords=" + search +"&app_key=9zCDHrBz5GtqXSLv&sort_order=popularity&date=This Week";
    $.ajax({
      url: eventfulURL,
      method: "GET",
      crossDomain: true,
      dataType: 'jsonp',
      jsonpCallback: 'test',
      success: function(oData) {
        console.log('new',oData);
        for(var i = 0; i < 5; i++) {
          event[i].title = oData.events.event[i].title,
          event[i].city_name = oData.events.event[i].city_name,
          event[i].region_abbr = oData.events.event[i].region_abbr,
          event[i].start_time = oData.events.event[i].start_time,
          event[i].description = oData.events.event[i].description,
          event[i].latitude = oData.events.event[i].latitude,
          event[i].longitude = oData.events.event[i].longitude
          latlong[i].latitude = event.map(function(a) {return a.latitude;});
          latlong[i].longitude = event.map(function(a) {return a.longitude;});
        }
        // console.log(event[1].description.dataType);
        eventPrint(event);
        // latitude = event.map(function(a) {return a.latitude;});
        // longitude = event.map(function(a) {return a.longitude;});
        returnEventLatLong(event);
        
      },
      error: function(errorp){
        console.log(errorp);
      },

      beforeSend: setHeader
    });

    function setHeader(xhr) {
      // xhr.setRequestHeader(‘Access-Control-Allow-Origin’, ‘*’);
      // xhr.setRequestHeader(‘Access-Control-Allow-Methods’, ‘GET’);
    }


    // var event = [];
    // var app_key;
    // var query = query;
    // var oArgs = {
    //   app_key: "9zCDHrBz5GtqXSLv" ,
    //   q: query,
    //   "date": "Future",
    //   "include": "tags,categories",
    //   page_size: 5,
    //   sort_order: "popularity",
    // };

    // EVDB.API.call("/events/search", oArgs, function(oData) {
    //   for(var i = 0; i < 5; i++) {
    //     event[i] = {
    //       title : oData.events.event[i].title,
    //       venue_name : oData.events.event[i].venue_name,
    //       venue_address : oData.events.event[i].venue_address,
    //       city_name : oData.events.event[i].city_name,
    //       region_abbr : oData.events.event[i].region_abbr,
    //       start_time : oData.events.event[i].start_time,
    //       latitude : oData.events.event[i].latitude,
    //       longitude : oData.events.event[i].longitude
    //     }
    //   }
    // });
    // $("#c1EventTitle").text(event[0].title);

    return event;

  }

  function findEventsInLocation(query, where) {
    var event = [];
    var app_key;
    var where   = where;
    var query   = query;
    var oArgs = {
      app_key: "9zCDHrBz5GtqXSLv" ,
      q: query,
      where: where,
      "date": "Future",
      "include": "tags,categories",
      page_size: 5,
      sort_order: "popularity",
    };

    EVDB.API.call("/events/search", oArgs, function(oData) {
      for(var i = 0; i < 5; i++) {
        event[i] = {
          title : oData.events.event[i].title,
          venue_name : oData.events.event[i].venue_name,
          venue_address : oData.events.event[i].venue_address,
          city_name : oData.events.event[i].city_name,
          region_abbr : oData.events.event[i].region_abbr,
          start_time : oData.events.event[i].start_time,
          latitude : oData.events.event[i].latitude,
          longitude : oData.events.event[i].longitude
        }
      }
    });
    return event;
    console.log(event);
  }

// });
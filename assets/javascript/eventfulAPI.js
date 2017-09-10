$(document).ready(function() {

  function findEvents(query) {
    var event = [];
    var app_key;
    var query   = query;
    var oArgs = {
      app_key: "9zCDHrBz5GtqXSLv" ,
      q: query,
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

    $("#c1EventTitle").text(oData.events.event[i].title);
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

});
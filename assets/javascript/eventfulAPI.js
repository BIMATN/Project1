// $(document).ready(function() {
  var latitude;
  var longitude;
  var latlong = [{},{},{},{},{}];

  function eventPrint(event) {
    for(var i = 0; i < 5; i++) {
      $("#c"+(i+1)+"EventTitle").text(event[i].title);
      if(event[i].description === null) {
        $("#c"+(i+1)+"Text").html('<ul class="list-group"><li class="list-group-item">Where: <p>'+ event[i].city_name + ", " + event[i].region_abbr +
                        '</p><li class="list-group-item">When: <p>'+ moment(event[i].start_time, "YYYYMMDD, hh:mm:ss").format('MMMM Do YYYY') + '</p></ul>');
      }
      else {
        $("#c"+(i+1)+"Text").html('<ul class="list-group"><li class="list-group-item">Where: <p>'+ event[i].city_name + ", " + event[i].region_abbr +
                        '</p><li class="list-group-item">When: <p>'+ moment(event[i].start_time, "YYYYMMDD, hh:mm:ss").format('MMMM Do YYYY') + '</p></ul>');
      }
    }
  }

  function populateModal(selectedEvent) {
    $("#modalLabelInfo").text(selectedEvent.title);
    // if(selectedEvent.description === null) {
      $("#what").html("What: " + "<a href=" + selectedEvent.url + ">" + selectedEvent.title + "</a>");
      $("#when").text("When: " + moment(selectedEvent.start_time, "YYYYMMDD, hh:mm:ss").format("LLL"));
      $("#where").text("Where: " + selectedEvent.city_name + ", " + selectedEvent.region_abbr);

      //Ensures the proper width for the envent info card inside of the modal
      // document.querySelector("#eventSubHead.list-group-item.disabled.bg-secondary.modalSubHeaders").style.width = '100%';
      // document.querySelector("#what.list-group-item").style.width = '100%';
      // document.querySelector("#when.list-group-item").style.width = '100%';
      // document.querySelector("#where.list-group-item").style.width = '100%';
    // }
    // else {
    //   $("#what").html("<a href=" + selectedEvent.url + "> Desciption: </a>" + selectedEvent.description);
    //   $("#when").text("When: " + moment(selectedEvent.start_time, "YYYYMMDD, hh:mm:ss").format("LLL"));
    //   $("#where").text("Where: " + selectedEvent.city_name + ", " + selectedEvent.region_abbr)

    //   console.log(selectedEvent.description.length);
    //   if(selectedEvent.description.length > 100) {
    //     //Add CSS styling to keep description box from pushing outside of modal boundaries
    //     document.querySelector("#eventSubHead.list-group-item.disabled.bg-secondary.modalSubHeaders").style.width = '8%';
    //     document.querySelector("#what.list-group-item").style.width = '8%';
    //     document.querySelector("#when.list-group-item").style.width = '8%';
    //     document.querySelector("#where.list-group-item").style.width = '8%';
    //   }
      // else {
      //   //Otherwise we reset the width of those items back to 100%
      //   document.querySelector("#eventSubHead.list-group-item.disabled.bg-secondary.modalSubHeaders").style.width = '100%';
      //   document.querySelector("#what.list-group-item").style.width = '100%';
      //   document.querySelector("#when.list-group-item").style.width = '100%';
      //   document.querySelector("#where.list-group-item").style.width = '100%';
      // }
    // }

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
    var eventfulURL = "http://api.eventful.com/json/events/search/rss?...&keywords=" + search +"&app_key=9zCDHrBz5GtqXSLv&sort_order=popularity&date=This Week&scheme=https";
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
          event[i].longitude = oData.events.event[i].longitude,
          event[i].url = oData.events.event[i].url
          latlong[i].latitude = event.map(function(a) {return a.latitude;});
          latlong[i].longitude = event.map(function(a) {return a.longitude;});
        }
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

    // Other method for the API call
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
  }

// });
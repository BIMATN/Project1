function findEvents(query, where) {
  var event = [];
  var app_key;
  var where   = this.where;
  var query   = this.query;
  var oArgs = {
    app_key: "9zCDHrBz5GtqXSLv" ,
    q: query.value,
    where: where.value,
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
        image : oData.events.event[i].image.medium.url,
        latitude : oData.events.event[i].latitude,
        longitude : oData.events.event[i].longitude
      }
    }
  });
  return event;
  console.log(event);
}
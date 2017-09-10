$(document).ready(function() {

var userSearch;
var latVar; //save lat from eventful api to this var and use it for open weather and google
var lngVar; //save long from eventful api to this var and use it for open weather and google
var cardBuild = '<div class="col-1"></div><div class="col-2"><div class="card" id="card1"><div class="card-body"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-2"><div class="card" id="card2"><div class="card-body"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-2"><div class="card" id="card3"><div class="card-body"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-2"><div class="card" id="card4"><div class="card-body"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-2"><div class="card"><div class="card-body" id="card5"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-1"></div>';
var mapBuild = '<div id="pac-card"class="pac-card"><div><div id="title">Autocomplete search</div><div id="type-selector"class="pac-controls"><input id="changetype-all"type="radio"name="type"checked><label for="changetype-all">All</label><input id="changetype-establishment"type="radio"name="type"><label for="changetype-establishment">Establishments</label><input id="changetype-address"type="radio"name="type"><label for="changetype-address">Addresses</label><input id="changetype-geocode"type="radio"name="type"><label for="changetype-geocode">Geocodes</label></div><div id="strict-bounds-selector"class="pac-controls"><input id="use-strict-bounds"type="checkbox"><label for="use-strict-bounds">Strict Bounds</label></div></div><div id="pac-container"><input id="pac-input"placeholder="Enter a location"></div></div><div id="map"></div><div id="infowindow-content"><img height="16"id="place-icon"src=""width="16"> <span id="place-name"class="title"></span><br><span id="place-address"></span></div>'
$("#searchGo").on("click", function(){

userSearch = $("#searchBar").val().trim();
console.log(userSearch);

if (userSearch === "") {
	console.log("user search was empty");
	return;
} else {
	$("#searchBar").val("");//clears search bar
	console.log("user search was not an empty string");
	//$("#cardSection").html(cardBuild);
	weatherNow(33.44,-112.04);//testing weatherNow function which should spit data out to the page
}

});

});
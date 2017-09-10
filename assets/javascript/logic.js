$(document).ready(function() {

var userSearch;
var j;
var cardBuild = '<div class="col-1"></div><div class="col-2"><div class="card" id="card1"><div class="card-body"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-2"><div class="card" id="card2"><div class="card-body"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-2"><div class="card" id="card3"><div class="card-body"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-2"><div class="card" id="card4"><div class="card-body"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-2"><div class="card"><div class="card-body" id="card5"><h4 class="card-title">Event</h4><p class="card-text"><ul><li>Description<li>Date<li>Time<li>Location</ul></p><a href="#"><img alt="Weather"class="img-thumbnail"height="50px"src="assets/images/weather.png"width="50px"></a></div></div></div><div class="col-1"></div>';
$("#searchGo").on("click", function(){

userSearch = $("#searchBar").val().trim();
console.log(userSearch);

if (userSearch === "") {
	return;
} else {
	console.log("user search was a string");
	$("#cardSection").html(cardBuild);
}

});

});
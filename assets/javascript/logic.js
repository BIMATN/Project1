$(document).ready(function() {

var userSearch;
var latVar; //save lat from eventful api to this var and use it for open weather and google
var lngVar; //save long from eventful api to this var and use it for open weather and google
var cardBuild = '<div class="col-sm-1"></div><div class="col-sm-2"><div class="card"><div class="card-body"><h4 class="card-title"id="c1EventTitle"></h4><p class="card-text"id="c1Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button">Know Before You Go?</button></div></div></div><div class="col-sm-2"><div class="card"id="card2"><div class="card-body"><h4 class="card-title"id="c2EventTitle"></h4><p class="card-text"id="c2Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button">Know Before You Go?</button></div></div></div><div class="col-2"><div class="card"id="card3"><div class="card-body"><h4 class="card-title"id="c3EventTitle"></h4><p class="card-text"id="c3Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button">Know Before You Go?</button></div></div></div><div class="col-2"><div class="card"id="card4"><div class="card-body"><h4 class="card-title"id="c4EventTitle"></h4><p class="card-text"id="c4Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button">Know Before You Go?</button></div></div></div><div class="col-sm-2"><div class="card"><div class="card-body"id="card5"><h4 class="card-title"id="c5EventTitle"></h4><p class="card-text"id="c5Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button">Know Before You Go?</button></div></div></div><div class="col-sm-1"></div>';
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
	var searchResults = findEvents(userSearch);
	
	console.log("LatLong: ");
	console.log(returnEventLatLong());
}

});

});
$(document).ready(function() {

var userSearch;
var latVar; //save lat from eventful api to this var and use it for open weather and google
var lngVar; //save long from eventful api to this var and use it for open weather and google
var cardBuild = '<div class="col-sm-1"></div><div class="col-sm-2"><div class="card"><div class="card-body"><h4 class="card-title"id="c1EventTitle"></h4><p class="card-text"id="c1Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c1Modal">Know Before You Go?</button></div></div></div><div class="col-sm-2"><div class="card"id="card2"><div class="card-body"><h4 class="card-title"id="c2EventTitle"></h4><p class="card-text"id="c2Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c2Modal">Know Before You Go?</button></div></div></div><div class="col-2"><div class="card"id="card3"><div class="card-body"><h4 class="card-title"id="c3EventTitle"></h4><p class="card-text"id="c3Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c3Modal">Know Before You Go?</button></div></div></div><div class="col-2"><div class="card"id="card4"><div class="card-body"><h4 class="card-title"id="c4EventTitle"></h4><p class="card-text"id="c4Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c4Modal">Know Before You Go?</button></div></div></div><div class="col-sm-2"><div class="card"><div class="card-body"id="card5"><h4 class="card-title"id="c5EventTitle"></h4><p class="card-text"id="c5Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c5Modal">Know Before You Go?</button></div></div></div><div class="col-sm-1"></div>';
$("#searchGo").on("click", function(){

userSearch = $("#searchBar").val().trim();
console.log(userSearch);

if (userSearch === "") {
	console.log("user search was empty");
	return;
} else {
	$("#searchBar").val("");//clears search bar
	console.log("user search was not an empty string");
	$("#cardSection").html(cardBuild);
	var searchResults = findEvents(userSearch);
	$(".btn-light").on("click", function(){
		if($(this).data("value")==='c1Modal'){
			console.log("this is card 1 modal info");
		}
		else if($(this).data("value")==='c2Modal'){
			console.log("this is card 2 modal info");

		}
		else if($(this).data("value")==='c3Modal'){
			console.log("this is card 3 modal info");

		}
		else if($(this).data("value")==='c4Modal'){
			console.log("this is card 4 modal info");

		}
		else if($(this).data("value")==='c5Modal'){
			console.log("this is card 5 modal info");

		}
		else{
			console.log("not a modal launch button");
			return;
		}
	})
}
});
});
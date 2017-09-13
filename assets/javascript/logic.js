$(document).ready(function() {

	/*--------------------------------------------------------Variables-----------------------------------------------------------------*/
	var clickOrEnter=false;
	var userSearch;
	var latVar; //save lat from eventful api to this var and use it for open weather and google
	var lngVar; //save long from eventful api to this var and use it for open weather and google
	var latlngReturn;
	var cardBuild = '<div class="col-sm-1"></div><div class="col-sm-2"><div class="card"><div class="card-body"><h5 class="card-title"id="c1EventTitle"></h5><p class="card-text"id="c1Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c1Modal">Know Before You Go?</button></div></div></div><div class="col-sm-2"><div class="card"id="card2"><div class="card-body"><h5 class="card-title"id="c2EventTitle"></h5><p class="card-text"id="c2Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c2Modal">Know Before You Go?</button></div></div></div><div class="col-2"><div class="card"id="card3"><div class="card-body"><h5 class="card-title"id="c3EventTitle"></h5><p class="card-text"id="c3Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c3Modal">Know Before You Go?</button></div></div></div><div class="col-2"><div class="card"id="card4"><div class="card-body"><h5 class="card-title"id="c4EventTitle"></h5><p class="card-text"id="c4Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c4Modal">Know Before You Go?</button></div></div></div><div class="col-sm-2"><div class="card"><div class="card-body"id="card5"><h5 class="card-title"id="c5EventTitle"></h5><p class="card-text"id="c5Text"></div><div class="m-auto"><button class="btn-light"data-target="#myModal"data-toggle="modal"type="button" data-value="c5Modal">Know Before You Go?</button></div></div></div><div class="col-sm-1"></div>';


	/*--------------------------------------------------------Functions-----------------------------------------------------------------*/

	function run(){
		userSearch = $("#searchBar").val().trim();
		//console.log(userSearch);

		if (userSearch === "") {
			console.log("user search was empty");
			clickOrEnter=true;
			return;
		} 
		else {
			clickOrEnter=true;
			$("#searchBar").val("");//clears search bar
			//console.log("user search was not an empty string");
			$("#cardSection").html(cardBuild);
			var searchResults = findEvents(userSearch);
			$(".btn-light").on("click", function(){
				if($(this).data("value")==='c1Modal'){
					console.log("this is card 1 modal info");
					latlngReturn=returnEventLatLong();
					latVar = latlngReturn.latitude[0];
					lngVar = latlngReturn.longitude[0];
					weatherNow(latVar,lngVar);
					placeHotelData(latVar,lngVar);
					placeRestaurantData(latVar,lngVar);
				}
				else if($(this).data("value")==='c2Modal'){
					console.log("this is card 2 modal info");
					latlngReturn=returnEventLatLong();
					latVar = latlngReturn.latitude[1];
					lngVar = latlngReturn.longitude[1];
					weatherNow(latVar,lngVar);
					placeHotelData(latVar,lngVar);
					placeRestaurantData(latVar,lngVar);
				}
				else if($(this).data("value")==='c3Modal'){
					console.log("this is card 3 modal info");
					latlngReturn=returnEventLatLong();
					latVar = latlngReturn.latitude[2];
					lngVar = latlngReturn.longitude[2];
					weatherNow(latVar,lngVar);
					placeHotelData(latVar,lngVar);
					placeRestaurantData(latVar,lngVar);
				}
				else if($(this).data("value")==='c4Modal'){
					console.log("this is card 4 modal info");
					latlngReturn=returnEventLatLong();
					latVar = latlngReturn.latitude[3];
					lngVar = latlngReturn.longitude[3];
					weatherNow(latVar,lngVar);
					placeHotelData(latVar,lngVar);
					placeRestaurantData(latVar,lngVar);
				}
				else if($(this).data("value")==='c5Modal'){
					console.log("this is card 5 modal info");
					latlngReturn=returnEventLatLong();
					latVar = latlngReturn.latitude[4];
					lngVar = latlngReturn.longitude[4];
					weatherNow(latVar,lngVar);
					placeHotelData(latVar,lngVar);
					placeRestaurantData(latVar,lngVar);
				}
				else{
					console.log("not a modal launch button");
					return;
				}
			})
		}
	}

	/*--------------------------------------------------------Activate all Logic Processes-----------------------------------------------------------------*/
	if(clickOrEnter===false){
		$("#searchGo").on("click", function(){
			cickOrEnter=true;
			run();
		});
		$("#searchBar").on("keyup", function(e){
			if(e.which===13){
				cickOrEnter=true;
				run();
			}
		});
	}
});
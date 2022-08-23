var map;
var service;
var infowindow;
// let myPlace = $reference input zipcode, error if not 5-digit number
// function toLatLong (myPlace) {
//     let myLatLong = some operation on myPlace
// }
function initMap() {
  var chicago = new google.maps.LatLng(41.881832, -87.623177);

  map = new google.maps.Map(document.getElementById('map'), {
      center: chicago,
      zoom: 15
    });

  var request = {
    location: chicago,
    radius: '500',
    type: ['cafe']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
    }
    } else {
        console.log("Bad request");}

}


// JS CODE TO ACTIVATE MODALS ON IMG CLICK!!!
let drinksImgEl = $("#drinksImg");
let diffDrinksModalEl = $("#diffDrinksModal");
drinksImgEl.on( "click", function () {
     diffDrinksModalEl.addClass( "is-active" );
})

let localImgEl = $("#localImg");
let mapEl = $("#map");
localImgEl.on( "click", function () {
     mapEl.addClass( "is-active" );
})

let quizImgEl = $("#quizImg");
let caffeineQuizModalEl = $("#caffeineQuizModal");
quizImgEl.on( "click", function () {
     caffeineQuizModalEl.addClass( "is-active" );
})


let modalCloseBtnEl = $(".modal-close");
modalCloseBtnEl.on ( "click", function () {
    diffDrinksModalEl.removeClass( "is-active" );
    mapEl.removeClass( "is-active" );
    caffeineQuizModalEl.removeClass( "is-active" );
})
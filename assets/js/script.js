var map;
var service;
var infowindow;
var localCafe = document.getElementById('local-cafe')
let locationSrc = document.getElementById('location-search')
let clearSrc = document.getElementById('clear-search')
var APIKey = "AIzaSyB3VMeBFz-DJaBsgblYF9eYo8WE1Ezjk2o"
// var cafeName = document.getElementById('cafe-name')
// var cafeAddress = document.getElementById('cafe-address')
// var cafePic = document.getElementById('cafe-pic')


let parseZip = function () {

  let myPlace = $("#userZip").val();
  localCafe.innerHTML = "";
  // let myPlace = "60208";


  let localUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + myPlace + "&key=" + APIKey;
  fetch(localUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          let myLat = data.results[0].geometry.location.lat;
          let myLon = data.results[0].geometry.location.lng;
          // localStorage.setItem("myLat", JSON.stringify(myLat));
          // localStorage.setItem("myLon", JSON.stringify(myLon));
          console.log(data);
          console.log(myLat);
          console.log(myLon);
          initMap(myLat, myLon);
        });
      }
    })

  // let myLat = JSON.parse(localStorage.getItem("myLat"));
  // let myLon = JSON.parse(localStorage.getItem("myLon"));
};



let initMap = function (myLat, myLon) {

  var myPlace = new google.maps.LatLng(myLat, myLon);
  console.log(myPlace);


  map = new google.maps.Map(document.getElementById('localModal'), {
    center: myPlace,
    zoom: 15,
  });

  var request = {
    location: myPlace,
    radius: "2500",
    type: ["cafe"],
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
};

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < 5; i++) {
      console.log(results[i]);



      var cafeLink = results[i].place_id;
      var cafeDetails = document.createElement("a")
      var cafeName = document.createElement("div")
      var cafeAddress = document.createElement("div")
      var cafeRating = document.createElement("div")
      cafeDetails.classList.add("card-header")
      cafeDetails.classList.add("level")
      cafeDetails.classList.add("box")
      cafeDetails.classList.add("has-background-grey")
      cafeDetails.classList.add("has-text-white")
      cafeDetails.classList.add("is-one-third")

      

      console.log(cafeLink);
     
      cafeDetails.setAttribute("href", "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=" + cafeLink)

      localCafe.appendChild(cafeDetails);
      cafeDetails.appendChild(cafeName);
      cafeDetails.appendChild(cafeAddress);
      cafeDetails.appendChild(cafeRating);
      cafeName.innerHTML = results[i].name;
      cafeAddress.innerHTML = results[i].vicinity;
      cafeRating.innerHTML = "Rating: " + results[i].rating;

    }
  } else {
    console.log("Bad request");
  }
}

locationSrc.addEventListener("click", function () {
  console.log("CLICK");
  parseZip();
});

clearSrc.addEventListener('click', function () {
localCafe.innerHTML = "";

})

// JS CODE TO ACTIVATE MODALS ON IMG CLICK!!!
let drinksImgEl = $("#drinksImg");
let diffDrinksModalEl = $("#diffDrinksModal");
drinksImgEl.on("click", function () {
  console.log("click!!!!");
  diffDrinksModalEl.addClass('is-active');
})

let localImgEl = $("#localImg");
let localModalEl = $("#localModal");
localImgEl.on("click", function () {
  console.log("click!!!!");
  localModalEl.addClass('is-active');
})

let quizImgEl = $("#quizImg");
let caffeineQuizModalEl = $("#caffeineQuizModal");
quizImgEl.on("click", function () {
  console.log("click!!!!");
  caffeineQuizModalEl.addClass('is-active');
})

let modalCloseBtnEl = $(".modal-close");
modalCloseBtnEl.on("click", function () {
  diffDrinksModalEl.removeClass("is-active");
  localModalEl.removeClass("is-active");
  caffeineQuizModalEl.removeClass("is-active");
});

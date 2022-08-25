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
let drinksImgEl = $('#drinksImg');
let diffDrinksModalEl = $('#diffDrinksModal');
drinksImgEl.on( 'click', function () {
     console.log("click!!!!"); 
     diffDrinksModalEl.addClass( 'is-active' );
})
let localImgEl = $('#localImg');
let localModalEl = $('#localModal');
localImgEl.on( 'click', function () {
     console.log("click!!!!"); 
     localModalEl.addClass( 'is-active' );
})
let quizImgEl = $("#quizImg");
let caffeineQuizModalEl = $("#caffeineQuizModal");
quizImgEl.on( "click", function () {
     console.log("click!!!!"); 
     caffeineQuizModalEl.addClass( "is-active" );
})

let modalCloseBtnEl = $(".modal-close");
modalCloseBtnEl.on ( "click", function () {
    diffDrinksModalEl.removeClass( "is-active" );
    localModalEl.removeClass( "is-active" );
    caffeineQuizModalEl.removeClass( "is-active" );
})


















// SCRIPT FOR CAFFEINE INTAKE
var start = document.querySelector("#start-button")
start.addEventListener("click", nextQuestion);
let questionIndex = 0;
let caffeineScore = 0;

function nextQuestion() {
  const questionArr = [
    "How many cans of cola (Coke, Pepsi, etc.- diet or otherwise) have you had today?",
    "How many shots of espresso have you had today, including those in lattes, cappucinos, and the like?",
    "How many cups of regular coffee have you had today?",
    "How many energy drinks have you had today?",
    "If there's any other caffeine you've taken in today, then please estimate the amount in milligrams (mg):"
  ]
  
  const answersArr = [
    ["Zero", "One", "Two", "Three or more"],
    ["Zero", "One", "Two", "Three or more"],
    ["Zero", "One", "Two", "Three or more"],
    ["Zero", "One", "Two", "Three or more"],
    ["None", "50mg", "100mg", "200mg or more"]
  ]
  
    let questionEl = $('#question');
    questionEl.text(questionArr[questionIndex]);

    for (let i = 0; i < questionArr.length; i++) {
        let answersEl = $('#answers');
        answersEl.children().children().eq(i).children().text( answersArr[questionIndex][i] );
    }


    var answer1 = document.querySelector("#answer1");
    var answer2 = document.querySelector("#answer2");
    var answer3 = document.querySelector("#answer3");
    var answer4 = document.querySelector("#answer4");

    answer1.addEventListener("click", saveAnswer);
    answer2.addEventListener("click", saveAnswer);
    answer3.addEventListener("click", saveAnswer);
    answer4.addEventListener("click", saveAnswer);

}

function saveAnswer(event) {
    console.log(event.target.value);
    let answerVal = event.target.value ;
    if (answerVal = "b") {
      caffeineScore = caffeineScore++
    } else if (answerVal = "c") {
      caffeineScore = caffeineScore + 2 ;
    } else if (answerVal = "d") {
      caffeineScore = caffeineScore + 3
    }

    questionIndex++;
    if (questionIndex < 5) {
    nextQuestion();
    } else {
    quizOver(caffeineScore);
    }
}

function quizOver(caffeineScore) {
  console.log(caffeineScore);
}








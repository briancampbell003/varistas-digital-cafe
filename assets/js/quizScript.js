// SCRIPT FOR QUIZ
var start = document.querySelector("#start-button")
start.addEventListener("click", nextQuestion);

let quizMain = $('#caffeineQuizMain');
let questionEl = $('#question');
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

    let startBtnEl = $('#startBtnDiv');
    startBtnEl.addClass( 'hide' );
    quizMain.removeClass( 'hide' );
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

    if (answerVal === "b") {
      caffeineScore++
    } else if (answerVal === "c") {
      caffeineScore +=2
    } else if (answerVal === "d") {
      caffeineScore +=3
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
  quizMain.addClass( "hide" );
  $('#caffeineQuizStart').children(1).eq(1).addClass( "hide" );

  let quizResultsEl = $('#caffeineQuizOver');
  quizResultsEl.removeClass( "hide" );
  if (caffeineScore < 2) {
    quizResultsEl.text ("Doctor, doctor, get us a coffee, stat! Return to our main page to find coffee recipes or local cafes!")
  } else if ( (2 <= caffeineScore) & (caffeineScore <= 5) ) {
    quizResultsEl.text ("You've had a fair amount of caffeine today, but feel free to return to our main page for drink ideas or to find a local cafe!")
  } else {
    quizResultsEl.text ("Woah!!! Slow down partner. Maybe some water instead of a coffee?")
  }
}
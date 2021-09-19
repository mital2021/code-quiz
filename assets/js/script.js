//Variables
var startButton = document.getElementById("start");
var timerContent=document.getElementById("timer");
var timeLeft=75;

var startpageContent=document.getElementById("startpage")

var quizContent = document.getElementById("quiz");
var quizQuestion= document.getElementById("questions");
var questionCount = 0;
var messageContent=document.getElementById("message")
var correctwrongContent = document.querySelector("#corretWrong");

var gameContent= document.getElementById("gameover");
var scoreContent=document.getElementById("score");
var scoreSubmit=document.getElementById("submitScore")

var highscoreContent= document.getElementById("highscore");
var initialsInput = document.getElementById("initials");
var scorePage1=document.getElementById("scorePage");
var scoreList=[];


var answersBtn = document.querySelectorAll("button.answerBtn")

var button1 = document.querySelector("#answer1");
var button2 = document.querySelector("#answer2");
var button3 = document.querySelector("#answer3");
var button4 = document.querySelector("#answer4");


var goBackBtn = document.getElementById("goBack");
var clearScrBtn = document.getElementById("highScorebtn");
var viewScore = document.getElementById("view-scores");


//Questions and Answers
 
var myQuestions =[
         {
         question: "Commonly used data types Do Not Include:",
         answers:[
             "1. string",
             "2. booleans",
             "3. alerts",
             "4. numbers"],
             correctAnswer: "3"
         },

      { 
         question: "The condition in an if/else statement is enclosed with ______.",
         answers:[
             "1.quotes",
             "2. curly brackets",
             "3. parenthesis",
             "4. square brackets"],
           correctAnswer: "2"
        },

      {
         question: "Arrays in JavaScript can be used to store _______.",
         answers:[
             "1. numbers and strings",
             "2. other Arrays",
             "3. booleans",
             "4. all of the above"],
         correctAnswer:"4"
      },

      {
         question:"String values must be enclosed within ___,  when being assigned to varibales.",
         answers:[
             "1 commas",
             "2 curly brackets",
             "3 quotes",
             "4 parenthesis"],
            correctAnswer:"3"
      },

      {
         question:"A very useful tool used during development and debugging for printing content to the debugger is:",
         answers:[
             "1 JavaScript",
             "2 terminal/bash",
             "3 for loops",
             "4 console.log"],
             correctAnswer:"4"
      },

   ];

   //variables
   
   var questionCount=0;
    var timerInterval;

    function startQuiz() {
        startpageContent.style.display = "none";
        quizContent.style.display = "block";
        questionCount = 0;
    
        setTime();  
        generateQuestion(questionCount);
    }
    
//function to start timer
function setTime() {
    timerInterval = setInterval(function () {
      timeLeft--;
      timerContent.textContent = `Time:${timeLeft}s`;

      if (timeLeft === 0 || questionCount === myQuestions.length) {
          clearInterval(timerInterval);
          quizContent.style.display = "none";
          gameContent.style.display = "block";
          scoreContent.textContent = timeLeft;
      }
  }, 1000);
}


    function generateQuestion(id) {
        if (id < myQuestions.length) {
            quizQuestion.textContent = myQuestions[id].question;
            button1.textContent = myQuestions[id].answers[0];
            button2.textContent = myQuestions[id].answers[1];
            button3.textContent = myQuestions[id].answers[2];
            button4.textContent = myQuestions[id].answers[3];
        }
    }
    






//function to check answer 
function checkAnswer(event) {
    event.preventDefault();

    correctwrongContent.style.display = "block";
    var p = document.createElement("p");
    correctwrongContent.appendChild(p);


setTimeout(function () {
   p.style.display = 'none';
}, 1000);

    if (myQuestions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (myQuestions[questionCount].correctAnswer !== event.target.value) {
        timeLeft = timeLeft - 10;
        p.textContent = "Wrong!";
    }

   
    if (questionCount < myQuestions.length) {
        questionCount++;
    }
   
    generateQuestion(questionCount);
}


//from here the code stopped working

function addScore(event) {
    event.preventDefault();

    gameContent.style.display = "none";
    highscoreContent.style.display = "block";

    var init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: timeLeft });


    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });



      scorePage1.innerHTML="";
      for (var i = 0; i < scoreList.length; i++) {
          var li = document.createElement("li");
          li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
          scorePage1.append(li);
      }

  // Add to local storage
  storeScores();
  displayScores();
}

function storeScores() {
  localStorage.setItem("scoreList", JSON.stringify(scoreList));
}


function displayScores() {
    // Get stored scores from localStorage
    // Parsing the JSON string to an object
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // If scores were retrieved from localStorage, update the scorelist array to it
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}


function clearScores() {
    localStorage.clear();
    scorePage1.innerHTML="";
}
  
  //  Button starts the quiz!
  startButton.addEventListener("click",startQuiz);


// Check answers loop
answersBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});

scoreSubmit.addEventListener("click", addScore);


// Go Back Button
goBackBtn.addEventListener("click",function() {
    highscoreContent.style.display = "none";
    startpageContent.style.display = "block";
    timeLeft = 75;
    timerContent.textContent = `Time:${timeLeft}s`;
});


// Clear the scores
clearScrBtn.addEventListener("click", clearScores);


// View/Hide High Scores Button
viewScore.addEventListener("click", function () {
    if (highscoreContent.style.display === "none") {
        highscoreContent.style.display = "block";
    } else if (highscoreContent.style.display === "block") {
        highscoreContent.style.display = "none";
    } else {
        return alert("No scores to show.");
    }
});







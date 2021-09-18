//Variables
var startButton = document.getElementById("start");
var timerContent=document.getElementById("timer");
var timeLeft=75;

var quizContent = document.getElementById("quiz");
var quizQuestion= document.getElementById("questions");
var questionCount = 0;

var gameContent= document.getElementById("gameover");
var gameScore=document.getElementById("finalScore");
var scoreContent=document.getElementById("score");

var highscoreContent= document.getElementById("highscore");
var scorecontent=document.getElementById("scorePage");

var endgameContent=document.getElementById("endGame");

var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");




//Questions and Answers
 
var myQustions =[
         {
         question: "Commonly used data types Do Not Include:",
         answers: [

             "1. string",
             "2. booleans",
             "3. alerts",
             "4. numbers"],
         
            correctAnswer: "3"
         },

      { 
         question: "The condition in an if/else statement is enclosed with ______.",
         answers: [

            "1.quotes",
            "2.curly brackets",
            "3.parenthesis",
            "4.square brackets"],
      
            correctAnswer: "2"
        },

      {
         question: "Arrays in JavaScript can be used to store _______.",
         answers: [

         "1.numbers and strings",
         "2.other Arrays",
         "3.booleans",
         "4.all of the above"],
         
            correctAnswer:"4"
      },

      {
         question:"String values must be enclosed within ___,  when being assigned to varibales.",
         answers: [

            "1.commas",
            "2.curly brackets",
            "3.quotes",
            "4.parenthesis"],
         
            correctAnswer:"3"
      },

      {
         question:"A very useful tool used during development and debugging for printing content to the debugger is:",
         answers: [

            "1.JavaScript",
            "2.terminal/bash",
            "3.for loops",
            "4.console.log"],
         
            correctAnswer:"4"
      },

   ];

//fuction to start timer

function setTime() {
    let timerInterval = setInterval(function () {
        timeLeft--;
        timerContent.textContent = `Time:${timeLeft}s`;

        if (timeLeft === 0 || questionCount === myQustions.length) {
            clearInterval(timerInterval);
            quizContent.style.display = "none";
            gameScore.style.display = "block";
            scoreContent.textContent = timeLeft;
        }
    }, 1000);
}


// start timer questions
function startQuiz() {
    quizContent.style.display = "none";
    gameContent.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}








  // This button starts the quiz!
startButton.addEventListener("click",startQuiz);
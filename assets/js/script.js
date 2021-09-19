//Variables
var startButton = document.getElementById("start");
var timerContent=document.getElementById("timer");
var timeLeft=75;

var startpageContent=document.getElementById("startpage")

var quizContent = document.getElementById("quiz");
var quizQuestion= document.getElementById("questions");
var questionCount = 0;
var messageContent=document.getElementById("message")

var gameContent= document.getElementById("gameover");
var gameScore=document.getElementById("finalScore");
var scoreContent=document.getElementById("score");

var highscoreContent= document.getElementById("highscore");
var scorecontent=document.getElementById("scorePage");

var lastPageContent=document.getElementById("lastPage");

var button=document.getElementsByClassName("button.answerBtn")
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");



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
          "1. quotes",
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

   var finalQuestionIndex = myQuestions.length;
   var currentQuestionIndex = 0;
   var questionCount=0;

// start timer questions
function startQuiz() {
    startpageContent.style.display = "none";
    gameContent.style.display = "block";
    questionCount = 0;

    setTime();  
    generateQuestion(questionCount);
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

//fuction to start timer

function setTime() {
     timerInterval = setInterval(function () {
        timeLeft--;
        timerContent.textContent = `Time:${timeLeft}s`;

        if (timeLeft === 0 || questionCount === myQuestions.length) {
            clearInterval(timerInterval);
            quizContent.style.display = "none";
            gameScore.style.display = "block";
            scoreContent.textContent = timeLeft;
        }
    }, 1000);
}

//function to check answer 
function checkAnswer(event) {
    event.preventDefault();

  

    if (myQuestions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (myQuestions[questionCount].correctAnswer !== event.target.value) {
        timeLeft = timeLeft - 10;
        p.textContent = "Wrong!";
    }


    if (questionCount < myQuestions.length) {
        questionCount++;
    }
    
    setQuestion(questionCount);
}

  //  Button starts the quiz!
startButton.addEventListener("click",startQuiz);
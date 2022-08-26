/*
Step 1: quiz display
- start by showing only start page ✅
- click start button ✅
- start timer ✅
- show first question ✅
- user selects answer (nextQuestion) ❌
- show second question ❌
- continue until score saver page is shown ❌
- timer stops automatically when last question is answered 
- user is pushed to score page automatically when timer reaches 0 
*/

/*
Step 2: correct and incorrect answers ❌
- user selects answer to question ❌
- if user selects the correct answer, page displays Correct!
- if user selects the incorrect answer, page displays Incorrect.
- if user selects the incorrect answer, timer is 
- connect if statement to "click" event ❌

if(user clicks on correct answer) {
    var p = document.createElement("p")
    p.textContent = "Correct!"
    quiz.append(p)
} else {
    var p = document.createElement("p")
    p.textContent = "Incorrect."
    quiz.append(p)
    timeLeft -= 10;
}

*/

/*
Step 3: scoring
- each question answered correctly increases user score by 1
- final score is displayed on score page at end of quiz
- user
*/

var highScores = document.getElementById("scoreList");
var timer = document.getElementById("countDown");
var startPage = document.querySelector(".main");
var startBtn = document.getElementById("startButton");
var quiz = document.querySelector(".quizQuestions");
var scorePage = document.querySelector(".scoreSaver");
var userInitials = document.querySelector("initials");
var submitButton = document.querySelector("submit-btn");
var savedScore = document.querySelector(".scoresHere");
var timeLeft = 60;
var count = 0;

var questions = [
    {
        questionText: 'Commonly used data types do NOT include:',
        answers: ['A. Strings', 'B. Booleans', 'C. Alerts', 'D. Numbers'],
        correctAnswer: 'C. Alerts',
    },

    {
        questionText: 'The condition in an if/else statement is enclosed within _____.',
        answers: ['A. Quotes', 'B. Curly Brackets', 'C. Parentheses', 'D. Square Brackets'],
        correctAnswer: 'B. Curly Brackets',
    },

    {
        questionText: 'Arrays in JavaScript can be used to store _____.',
        answers: ['A. Numbers and Strings', 'B. Other Arrays', 'C. Booleans', 'D. All of the Above'],
        correctAnswer: 'D. All of the Above',
    },

    {
        questionText: 'String values must be enclosed within _____ when being assigned to variables.',
        answers: ['A. Commas', 'B.  Curly Brackets', 'C. Quotes', 'D. Parentheses'],
        correctAnswer: 'C. Quotes',
    },

    {
        questionText: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ['A. JavaScript', 'B. Terminal/Bash', 'C. For Loops', 'D. Console.Log'],
        correctAnswer: 'D. Console.Log',
    },
];

function setTimer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Seconds Remaining: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}


startBtn.addEventListener("click", function () {
    startPage.style.display = "none";
    setTimer();
    nextQuestion();

});

function nextQuestion(event) {
    console.log(count)
    //var answerClicked = event.target;
    //go to next question
    //register whether or not they clicked on correct answer
    var h1 = document.createElement("h1");
    h1.textContent = questions[count].questionText;
    quiz.append(h1);
    for (var j = 0; j < questions[count].answers.length; j++) {
        var button = document.createElement("button");
        button.textContent = questions[count].answers[j];
        quiz.append(button);
        button.onclick = function (event) {
            //add class hide to h1 and previous answers
            //grab all buttons on screen
            //for loop to add class hide to all answer buttons
            h1.classList.add("hide");
            
            document.getElementsByTagName("button").classList.add("hide");
            
            console.log(answers)
            console.log(questions[count].correctAnswer)
            console.log(event.target.innerText);
            if (event.target.innerText === questions[count].correctAnswer) {
                console.log("correct")
                count++
            } else {
                console.log("incorrect")
                count++
            }
            nextQuestion();
        }
    };
}

function scoring() {
    var h1 = document.createElement("h1");
    h1.textContent = "You received a score of " /*+ score + "."*/;
    scorePage.append(h1);

    var p = document.createElement("p");
    p.textContent = "Please enter your initials below to save your score to the High Scores.";
    scorePage.append(p);

    var input = document.createElement("input");
    scorePage.append(input);
    input.classList.add("initials")

    var button = document.createElement("button");
    button.textContent = "Submit";
    scorePage.append(button);
    button.classList.add("submit-btn")
}
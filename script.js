/*
Tutoring Help:
- rotating quiz questions and answers
- answered question moves to new question automatically
*/

//Need each quesiton to display one at a time
//question text, all answers, not the correct answer
//answers diaplay as buttons
//for loop to rotate through questions one by one
//quiz.textContent to display questions and answers in html div
//add element to html for answers
//if/else statements for if user clicks correct answer or not; including time penalty for wrong answers (in "else" part of function)

/*
Object for questions 
Include question and array of answers 
key with only correct answer 
loop through questions array
loop through answers array
dont move on until answer is selected
new html for high scores
clearscreen set text content to blank
end the game
pseudocoding specifics

answers
for loop
text content 
create element
listen for click
target?
event.target.text.content
end game at timer end
end game leads to scoring

*/


var timer = document.getElementById("countDown");
var startPage = document.querySelector(".main");
var quiz = document.querySelector(".quizQuestions");
var scores = document.querySelector(".scoreSaver");
/*var a1 = document.querySelector(".answers1");
var a2 = document.querySelector(".answers2");
var a3 = document.querySelector(".answers3");
var a4 = document.querySelector(".answers4");
var a5 = document.querySelector(".answers5");*/

//timer will start at 60 seconds
var timeLeft = 60;

//timer count down from 60 seconds and stops when it reaches 0
function setTimer() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timer.textContent = "Seconds Remaining: " + timeLeft;

      if(timeLeft === 0) {
        clearInterval(timerInterval);
      }

    }, 1000);
}


var question1 = {
        questionText: 'Commonly used data types do NOT include:',
        answers: ['A. Strings', 'B. Booleans', 'C. Alerts', 'D. Numbers'],
        correctAnswer: 'C. Alerts',
    };

var question2 = {
        questionText: 'The condition in an if/else statement is enclosed within _____.',
        answers: ['A. Quotes', 'B. Curly Brackets', 'C. Parentheses', 'D. Square Brackets'],
        correctAnswer: 'B. Curly Brackets',
    };

var question3 = {
        questionText: 'Arrays in JavaScript can be used to store _____.',
        answers: ['A. Numbers and Strings', 'B. Other Arrays', 'C. Booleans', 'D. All of the Above'],
        correctAnswer: 'D. All of the Above',
    };

var question4 = {
        questionText: 'String values must be enclosed within _____ when being assigned to variables.',
        answers: ['A. Commas', 'B.  Curly Brackets', 'C. Quotes', 'D. Parentheses'],
        correctAnswer: 'C. Quotes',
    };

var question5 = {
        questionText: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ['A. JavaScript', 'B. Terminal/Bash', 'C. For Loops', 'D. Console.Log'],
        correctAnswer: 'D. Console.Log',
    };

/*function firstQuestion() {
    var h1 = document.createElement("h1");
    h1.textContent = question1.questionText;
    quiz.append(h1);
    button.className = 'answers1';
    
    
    for(var i=0; i < question1.answers.length; i++){
        var button = document.createElement("button");
        button.textContent = question1.answers[i];
        quiz.append(button);
    }
};
    
function secondQuestion() {
    var h1 = document.createElement("h1");
    h1.textContent = question2.questionText;
    quiz.append(h1);
    
    
    for(var i=0; i < question2.answers.length; i++){
        var button = document.createElement("button");
        button.textContent = question2.answers[i];
        quiz.append(button);
        button.className = 'answers2';
    }
};
    
function thirdQuestion() {
    var h1 = document.createElement("h1");
    h1.textContent = question3.questionText;
    quiz.append(h1);
    
    
    for(var i=0; i < question3.answers.length; i++){
        var button = document.createElement("button");
        button.textContent = question3.answers[i];
        quiz.append(button);
        button.className = 'answers3';
    }
};
    
function fourthQuestion() {
    var h1 = document.createElement("h1");
    h1.textContent = question4.questionText;
    quiz.append(h1);
    
    
    for(var i=0; i < question4.answers.length; i++){
        var button = document.createElement("button");
        button.textContent = question4.answers[i];
        quiz.append(button);
        button.className = 'answers4';
    }
};
    
function fifthQuestion() {
    var h1 = document.createElement("h1");
    h1.textContent = question5.questionText;
    quiz.append(h1);
    
    
    for(var i=0; i < question5.answers.length; i++){
        var button = document.createElement("button");
        button.textContent = question5.answers[i];
        quiz.append(button);
        button.className = 'answers5';
    }
};*/

//for(var i=0; i < questions.length; i++);
//console.log(questions[i]);

//when start button is clicked, timer will start
startButton.addEventListener("click", function() {
    setTimer();

    startPage.style.display = "none";

    var h1 = document.createElement("h1");
    h1.textContent = question1.questionText;
    quiz.append(h1);
    
    
    for(var i=0; i < question1.answers.length; i++){
        var button = document.createElement("button");
        button.textContent = question1.answers[i];
        quiz.append(button);
    }

    quiz.addEventListener("click", function() {
        
        h1.textContent = question2.questionText;
        
        
        for(var i=0; i < question2.answers.length; i++){
            button.textContent = question2.answers[i];
        }
        if (question1.correctAnswer) {
            var p = document.createElement("p");
            p.textContent = ("Correct!");
            quiz.append(p);
        } else {
            var p = document.createElement("p");
            h1.textContent = ("Inorrect.");
            quiz.append(p);
        }
    })
});





//append and loop through answers
//questions[0].answers
//event listener for click on each answer loop
//pseudocode and analyze

//event target


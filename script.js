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
var startPage = document.querySelector(".main")
var quiz = document.querySelector(".quizQuestions");
var scores = document.querySelector(".scoreSaver")


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
    }
]

//for(var i=0; i < questions.length; i++);
//console.log(questions[i]);

//when start button is clicked, timer will start
startButton.addEventListener("click", function() {
    
    setTimer();
    startPage.style.display = "none";

    var h1 = document.createElement("h1");
    h1.textContent = questions[0].questionText;
    quiz.append(h1);


    for(var i=0; i < questions[0].answers.length; i++){
        var button = document.createElement("button");
        button.textContent = questions[0].answers[i];
        quiz.append(button);
    }

});






//append and loop through answers
//questions[0].answers
//event listener for click on each answer loop
//pseudocode and analyze

//event target


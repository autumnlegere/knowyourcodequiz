/*
things this page needs
- working timer
- rotating quiz questions and answers
- functioning start quiz button
- time penalty for wrong answer
- answered question moves to new question automatically
*/

var timer = document.getElementById("countDown");
var timeLeft = 60;

function setTimer() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timer.textContent = "Seconds Remaining: " + timeLeft;

      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }

  
    }, 1000);
}

startButton.addEventListener("click", function() {
    setTimer();
})

var start = document.getElementById("start-quiz");
var timerEl = document.getElementById("timer");

function countdown() {
    var timeLeft = 100;

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        //
        // YOUR CODE HERE
        //
        timeLeft--;
        timerEl.textContent = timeLeft

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Time's Up!"
        }

    }, 1000);
}

start.addEventListener("click", countdown);
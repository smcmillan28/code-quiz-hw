// Setting variables needed for quiz using DOM
var start = document.getElementById("start-quiz");
var timerEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz-content");

// Write function that will manipulate DOM and push quiz to the page
function quizStart() {
    var timeLeft = 100;

    // Clear button from the page
    quizEl.textContent = "";

    // Primary timer function
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft

        // Write quiz questions to the DOM

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "0"
            var endGame = document.getElementById("quiz-content");
            endGame.textContent = "Time's Up!! Try again.";
            endGame.setAttribute("style", "font-size: 30px; text-align: center;");
        }

    }, 1000);
}

// Initiating quiz and timer with click
start.addEventListener("click", quizStart);

// Creating questions through series of variables/objects
var myQuestions = [
    new Question("Arrays in Javascript can be used to store _____.", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above"),
    new Question("Commonly used data types DO NOT include _____.", ["strings", "booleans", "alerts", "numbers"], "alerts"),
    new Question("String values must be enclosed within _____ when being assigned to variables.", ["quotation marks", "curly brackets", "parentheses", "commas"], "quotation marks"),
    new Question("The condition in an if/else statement is enclosed within _____.", ["curly brackets", "parentheses", "commas", "quotation marks"], "parentheses"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is _____.", ["Javascript", "the terminal/bash", "console log", "for loops"], "console log")
];
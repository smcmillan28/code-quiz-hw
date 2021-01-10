// Setting variables needed for quiz using DOM
var start = document.getElementById("start-quiz");
var timerEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz-content");

// Creating questions through a set of objects/variables
var myQuestions = [
    {
        question: "Arrays in Javascript can be used to store _____.", 
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer = "d"
    }, 
    {
        question: "Commonly used data types DO NOT include _____.",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        }, 
        correctAnswer = "c"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: "quotation marks",
            b: "curly brackets",
            c: "parentheses",
            d: "commas"
        },
        correctAnswer = "a"
    }
]


// Write function that will manipulate DOM and create quiz
function quizStart() {
    var timeLeft = 100;
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

start.addEventListener("click", quizStart);
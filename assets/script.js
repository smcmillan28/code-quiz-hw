// Setting variables needed for quiz using DOM
var start = document.getElementById("start-quiz");
var timerEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz-content");
var scorePage = document.getElementById("score-list");

// Questions and answers in object form
var myQuestions = [
    {
        question: "Arrays in Javascript can be used to store _____.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAns: "all of the above"
    },
    {
        question: "Commonly used data types DO NOT include _____.",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAns: "alerts"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: "quotation marks",
            b: "curly brackets",
            c: "parentheses",
            d: "commas"
        },
        correctAns: "quotation marks"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: {
            a: "curly brackets",
            b: "parentheses",
            c: "commas",
            d: "quotation marks"
        },
        correctAns: "parentheses"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is _____.",
        answers: {
            a: "JavaScript",
            b: "the terminal/bash",
            c: "console log",
            d: "for loops"
        },
        correctAns: "console log"
    }
];

// Writing variable to store scores and render to highscore page
var scores = [];

// Quiz function
function quiz() {

    // Clear instructions and set timer to 60
    document.getElementById("instructions").textContent = "";
    var timeLeft = 60;

    // Primary timer function
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft

        // When time runs out, clear page and provide option to return to try quiz again
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "60"
            quizEl.setAttribute("style", "font-size: 20px; text-align: center; margin-top: 50px;");
            quizEl.textContent = "Time's Up!! Try again.";
            var restart = document.createElement("button");
            restart = start;
            restart.textContent = "Restart Quiz";
            quizEl.appendChild(restart);
        }
    }, 1000);

    // Creating portion of function that will write quiz to DOM
    quizEl.textContent = "";

    // Creating section in the DOM for quiz and answers to go in
    var quizQuestion = document.createElement("div");
    quizQuestion.setAttribute("style", "font-size: 20px; margin: 50px;");
    quizEl.appendChild(quizQuestion);

    // Creating buttons to hold potential answers
    var option1 = document.createElement("button");
    option1.setAttribute("style", "width: 60%; height: 40px; font-size: 20px; margin: 10px;");
    quizEl.appendChild(option1);
    var option2 = document.createElement("button");
    option2.setAttribute("style", "width: 60%; height: 40px; font-size: 20px; margin: 10px;");
    quizEl.appendChild(option2);
    var option3 = document.createElement("button");
    option3.setAttribute("style", "width: 60%; height: 40px; font-size: 20px; margin: 10px;");
    quizEl.appendChild(option3);
    var option4 = document.createElement("button");
    option4.setAttribute("style", "width: 60%; height: 40px; font-size: 20px; margin: 10px;");
    quizEl.appendChild(option4);

    // Creating retry button for quiz once complete
    var retry = document.createElement("button");
    retry = start;
    retry.textContent = "Retry Quiz";

    // Creating button and form to use once quiz is over to submit score to local storage
    var scoreSubmit = document.createElement("button");
    scoreSubmit.textContent = "Submit Score";
    scoreSubmit.setAttribute("style", "margin: 10px; margin-left: auto; margin-right: auto; width: 100%; height: 60px; font-size: 20px; color: black; background-color: rgb(185, 201, 247); border: 1px solid black; border-radius: .25rem;");

    // Creating form for user to write score
    var scoreInput = document.createElement("input");
    scoreInput.type = "text";
    scoreInput.setAttribute("id", "score-input");
    scoreInput.setAttribute("style", "width: 100%; margin-bottom: 20px; margin-top: 40px;");

    // Setting variable for question iterations
    var i = 0

    // Setting variable for # questions answered correctly
    var numRight = 0

    // Write questions and answers to the page
    quizQuestion.textContent = myQuestions[i].question;
    option1.textContent = myQuestions[i].answers.a;
    option2.textContent = myQuestions[i].answers.b;
    option3.textContent = myQuestions[i].answers.c;
    option4.textContent = myQuestions[i].answers.d;
    console.log(myQuestions[i].correctAns);

    // Click events for each option that will progress through the quiz
    option1.addEventListener("click", function () {

        // Setting variable and conditional to tell if click value is correct answer
        var userPick = myQuestions[i].answers.a.valueOf();
        console.log(userPick);

        // Subtracting 5 seconds from timer if wrong
        if (userPick !== myQuestions[i].correctAns) {
            timeLeft -= 5;

            // Adding 1 to numRight if they answer correctly
        } else {
            numRight++;
            console.log(numRight);
        }
        i++;
        if (i < 5) {
            quizQuestion.textContent = myQuestions[i].question;
            option1.textContent = myQuestions[i].answers.a;
            option2.textContent = myQuestions[i].answers.b;
            option3.textContent = myQuestions[i].answers.c;
            option4.textContent = myQuestions[i].answers.d;
            console.log(myQuestions[i].correctAns);
        } else {
            quizEl.setAttribute("style", "font-size: 20px; text-align: center; margin-top: 50px;");
            var userScore = Math.ceil(timeLeft * (numRight / 5));
            quizEl.textContent = "You answered " + numRight + " questions correctly. Your score is " + userScore + ".";
            var scoreIns = document.createElement("p");
            quizEl.appendChild(scoreIns);
            scoreIns.setAttribute("style", "font-size: 16px;")
            scoreIns.textContent = "Please enter your score followed by your initials using this format: 48 JD.";
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
            quizEl.appendChild(scoreInput);
            quizEl.appendChild(scoreSubmit);
            quizEl.appendChild(retry);
            // The following function renders scores in a highscore list as <p> elements
            function renderScores() {
                scorePage.innerHTML = "";
                // Render a new p for each new score
                for (var i = 0; i < scores.length; i++) {
                    var quizScore = scores[i];
                    var li = document.createElement("li");
                    li.textContent = quizScore;
                    scorePage.appendChild(li);
                }
            }
            function init() {
                var storedScores = JSON.parse(localStorage.getItem("scores"));
                if (storedScores !== null) {
                    scores = storedScores;
                }
                renderScores();
            }
            function storeScores() {
                // Stringify and store scores in localStorage in form of array under var scores
                localStorage.setItem("scores", JSON.stringify(scores));
            }
            scoreSubmit.addEventListener("click", function (e) {
                e.preventDefault();
                var highScore = document.querySelector("#score-input").value.trim();
                // Return from function early if submitted score is empty
                if (highScore === "") {
                    return;
                }
                scores.push(highScore);
                document.querySelector("#score-input").value = "";
                // Store the scores and render them to highscore page
                storeScores();
                renderScores();
            });
            init();
        }
    });

    option2.addEventListener("click", function () {
        var userPick = myQuestions[i].answers.b.valueOf();
        console.log(userPick);
        if (userPick !== myQuestions[i].correctAns) {
            timeLeft -= 5;
        } else {
            numRight++;
            console.log(numRight);
        }
        i++;
        if (i < 5) {
            quizQuestion.textContent = myQuestions[i].question;
            option1.textContent = myQuestions[i].answers.a;
            option2.textContent = myQuestions[i].answers.b;
            option3.textContent = myQuestions[i].answers.c;
            option4.textContent = myQuestions[i].answers.d;
            console.log(myQuestions[i].correctAns);
        } else {
            quizEl.setAttribute("style", "font-size: 20px; text-align: center; margin-top: 50px;");
            var userScore = Math.ceil(timeLeft * (numRight / 5));
            quizEl.textContent = "You answered " + numRight + " questions correctly. Your score is " + userScore + ".";
            var scoreIns = document.createElement("p");
            quizEl.appendChild(scoreIns);
            scoreIns.setAttribute("style", "font-size: 16px;")
            scoreIns.textContent = "Please enter your score followed by your initials using this format: 48 JD.";
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
            quizEl.appendChild(scoreInput);
            quizEl.appendChild(scoreSubmit);
            quizEl.appendChild(retry);
            function renderScores() {
                scorePage.innerHTML = "";
                for (var i = 0; i < scores.length; i++) {
                    var quizScore = scores[i];
                    var li = document.createElement("li");
                    li.textContent = quizScore;
                    scorePage.appendChild(li);
                }
            }
            function init() {
                var storedScores = JSON.parse(localStorage.getItem("scores"));
                if (storedScores !== null) {
                    scores = storedScores;
                }
                renderScores();
            }
            function storeScores() {
                localStorage.setItem("scores", JSON.stringify(scores));
            }
            scoreSubmit.addEventListener("click", function (e) {
                e.preventDefault();
                var highScore = document.querySelector("#score-input").value.trim();
                if (highScore === "") {
                    return;
                }
                scores.push(highScore);
                document.querySelector("#score-input").value = "";
                storeScores();
                renderScores();
            });
            init();
        }
    });

    option3.addEventListener("click", function () {
        var userPick = myQuestions[i].answers.c.valueOf();
        console.log(userPick);
        if (userPick !== myQuestions[i].correctAns) {
            timeLeft -= 5;
        } else {
            numRight++;
            console.log(numRight);
        }
        i++;
        if (i < 5) {
            quizQuestion.textContent = myQuestions[i].question;
            option1.textContent = myQuestions[i].answers.a;
            option2.textContent = myQuestions[i].answers.b;
            option3.textContent = myQuestions[i].answers.c;
            option4.textContent = myQuestions[i].answers.d;
            console.log(myQuestions[i].correctAns);
        } else {
            quizEl.setAttribute("style", "font-size: 20px; text-align: center; margin-top: 50px;");
            var userScore = Math.ceil(timeLeft * (numRight / 5));
            quizEl.textContent = "You answered " + numRight + " questions correctly. Your score is " + userScore + ".";
            var scoreIns = document.createElement("p");
            quizEl.appendChild(scoreIns);
            scoreIns.setAttribute("style", "font-size: 16px;")
            scoreIns.textContent = "Please enter your score followed by your initials using this format: 48 JD.";
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
            quizEl.appendChild(scoreInput);
            quizEl.appendChild(scoreSubmit);
            quizEl.appendChild(retry);
            function renderScores() {
                scorePage.innerHTML = "";
                for (var i = 0; i < scores.length; i++) {
                    var quizScore = scores[i];
                    var li = document.createElement("li");
                    li.textContent = quizScore;
                    scorePage.appendChild(li);
                }
            }
            function init() {
                var storedScores = JSON.parse(localStorage.getItem("scores"));
                if (storedScores !== null) {
                    scores = storedScores;
                }
                renderScores();
            }
            function storeScores() {
                localStorage.setItem("scores", JSON.stringify(scores));
            }
            scoreSubmit.addEventListener("click", function (e) {
                e.preventDefault();
                var highScore = document.querySelector("#score-input").value.trim();
                if (highScore === "") {
                    return;
                }
                scores.push(highScore);
                document.querySelector("#score-input").value = "";
                storeScores();
                renderScores();
            });
            init();
        }
    });

    option4.addEventListener("click", function () {
        var userPick = myQuestions[i].answers.d.valueOf();
        console.log(userPick);
        if (userPick !== myQuestions[i].correctAns) {
            timeLeft -= 5;
        } else {
            numRight++;
            console.log(numRight);
        }
        i++;
        if (i < 5) {
            quizQuestion.textContent = myQuestions[i].question;
            option1.textContent = myQuestions[i].answers.a;
            option2.textContent = myQuestions[i].answers.b;
            option3.textContent = myQuestions[i].answers.c;
            option4.textContent = myQuestions[i].answers.d;
            console.log(myQuestions[i].correctAns);
        } else {
            quizEl.setAttribute("style", "font-size: 20px; text-align: center; margin-top: 50px;");
            var userScore = Math.ceil(timeLeft * (numRight / 5));
            quizEl.textContent = "You answered " + numRight + " questions correctly. Your score is " + userScore + ".";
            var scoreIns = document.createElement("p");
            quizEl.appendChild(scoreIns);
            scoreIns.setAttribute("style", "font-size: 16px;")
            scoreIns.textContent = "Please enter your score followed by your initials using this format: 48 JD.";
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
            quizEl.appendChild(scoreInput);
            quizEl.appendChild(scoreSubmit);
            quizEl.appendChild(retry);
            function renderScores() {
                scorePage.innerHTML = "";
                for (var i = 0; i < scores.length; i++) {
                    var quizScore = scores[i];
                    var li = document.createElement("li");
                    li.textContent = quizScore;
                    scorePage.appendChild(li);
                }
            }
            function init() {
                var storedScores = JSON.parse(localStorage.getItem("scores"));
                if (storedScores !== null) {
                    scores = storedScores;
                }
                renderScores();
            }
            function storeScores() {
                localStorage.setItem("scores", JSON.stringify(scores));
            }
            scoreSubmit.addEventListener("click", function (e) {
                e.preventDefault();
                var highScore = document.querySelector("#score-input").value.trim();
                if (highScore === "") {
                    return;
                }
                scores.push(highScore);
                document.querySelector("#score-input").value = "";
                storeScores();
                renderScores();
            });
            init();
        }
    });
}

// Initiating quiz and timer with click
start.addEventListener("click", quiz);

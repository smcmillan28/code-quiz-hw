// Setting variables needed for quiz using DOM
var start = document.getElementById("start-quiz");
var timerEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz-content");

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

    // Creating one more element to display correct/incorrect answer
    var ansDisplay = document.createElement("p");
    ansDisplay.setAttribute("style", "font-size: 18px; font-style: italic; margin-top: 20px;");
    quizEl.append(ansDisplay);

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
    option1.addEventListener("click", function(event) {

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
            var userScore = Math.ceil(timeLeft * (numRight/5));
            quizEl.textContent = "You're done, congratulations!  You answered " + numRight + " questions correctly. Your score is " + userScore + ".";
            var scoreIns = document.createElement("p");
            quizEl.appendChild(scoreIns);
            scoreIns.setAttribute("style", "font-size: 16px;")
            scoreIns.textContent = "Please enter your score followed by your initials using this format - 48 JD.";
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
        }
    });

    option2.addEventListener("click", function(event) {
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
            var userScore = Math.ceil(timeLeft * (numRight/5));
            quizEl.textContent = "You're done, congratulations!  You answered " + numRight + " questions correctly. Your score is " + userScore + ".";
            var scoreIns = document.createElement("p");
            quizEl.appendChild(scoreIns);
            scoreIns.setAttribute("style", "font-size: 16px;")
            scoreIns.textContent = "Please enter your score followed by your initials using this format - 48 JD.";
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
        }    
    });

    option3.addEventListener("click", function(event) {
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
            var userScore = Math.ceil(timeLeft * (numRight/5));
            quizEl.textContent = "You're done, congratulations!  You answered " + numRight + " questions correctly. Your score is " + userScore + ".";
            var scoreIns = document.createElement("p");
            quizEl.appendChild(scoreIns);
            scoreIns.setAttribute("style", "font-size: 16px;")
            scoreIns.textContent = "Please enter your score followed by your initials using this format - 48 JD.";
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
        }
    });

    option4.addEventListener("click", function(event) {
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
            var userScore = Math.ceil(timeLeft * (numRight/5));
            quizEl.textContent = "You're done, congratulations!  You answered " + numRight + " questions correctly. Your score is " + userScore + ".";
            var scoreIns = document.createElement("p");
            quizEl.appendChild(scoreIns);
            scoreIns.setAttribute("style", "font-size: 16px;")
            scoreIns.textContent = "Please enter your score followed by your initials using this format - 48 JD.";
            timerEl.textContent = timeLeft;
            clearInterval(timeInterval);
        }
    });
}

// Initiating quiz and timer with click
start.addEventListener("click", quiz);

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
        correctAns: "d"
    },
    {
        question: "Commonly used data types DO NOT include _____.", 
        answers: {
            a: "strings", 
            b: "booleans", 
            c: "alerts", 
            d: "numbers"
        },
        correctAns: "c"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: "quotation marks",
            b: "curly brackets",
            c: "parentheses",
            d: "commas"
        },
        correctAns: "a"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: {
            a: "curly brackets",
            b: "parentheses",
            c: "commas",
            d: "quotation marks"
        },
        correctAns: "b"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is _____.",
        answers: {
            a: "JavaScript",
            b: "the terminal/bash",
            c: "console log", 
            d: "for loops"
        },
        correctAns: "c"
    }
];

// Quiz function
function quiz() {
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

    // Write questions and answers to the page
    quizQuestion.textContent = myQuestions[0].question; 
    option1.textContent = myQuestions[0].answers.a;
    option2.textContent = myQuestions[0].answers.b;
    option3.textContent = myQuestions[0].answers.c;
    option4.textContent = myQuestions[0].answers.d;

    // // Adding click events for each question
    // option1.addEventListener("click", () => { 
    //     quizQuestion.textContent = myQuestions[1].question; 
    //     option1.textContent = myQuestions[1].answers.a;
    //     option2.textContent = myQuestions[1].answers.b;
    //     option3.textContent = myQuestions[1].answers.c;
    //     option4.textContent = myQuestions[1].answers.d;
    //     ansDisplay.textContent = "Oops! Wrong Answer!";
    //     timeLeft -= 5;
    // });

    // option2.addEventListener("click", () => { 
    //     quizQuestion.textContent = myQuestions[1].question; 
    //     option1.textContent = myQuestions[1].answers.a;
    //     option2.textContent = myQuestions[1].answers.b;
    //     option3.textContent = myQuestions[1].answers.c;
    //     option4.textContent = myQuestions[1].answers.d;
    //     ansDisplay.textContent = "Oops! Wrong Answer!";
    //     timeLeft -= 5;
    // });

    // option3.addEventListener("click", () => { 
    //     quizQuestion.textContent = myQuestions[1].question; 
    //     option1.textContent = myQuestions[1].answers.a;
    //     option2.textContent = myQuestions[1].answers.b;
    //     option3.textContent = myQuestions[1].answers.c;
    //     option4.textContent = myQuestions[1].answers.d;
    //     ansDisplay.textContent = "Oops! Wrong Answer!";
    //     timeLeft -= 5;
    // });

    // option4.addEventListener("click", () => { 
    //     quizQuestion.textContent = myQuestions[1].question; 
    //     option1.textContent = myQuestions[1].answers.a;
    //     option2.textContent = myQuestions[1].answers.b;
    //     option3.textContent = myQuestions[1].answers.c;
    //     option4.textContent = myQuestions[1].answers.d;
    //     ansDisplay.textContent = "Very nice!";
    //     timeLeft += 5;
    // });

    // option1.addEventListener("click", () => { 
    //     quizQuestion.textContent = myQuestions[2].question; 
    //     option1.textContent = myQuestions[2].answers.a;
    //     option2.textContent = myQuestions[2].answers.b;
    //     option3.textContent = myQuestions[2].answers.c;
    //     option4.textContent = myQuestions[2].answers.d;
    //     ansDisplay.textContent = "Oops! Wrong Answer!";
    //     timeLeft -= 5;
    // });

    // option2.addEventListener("click", () => { 
    //     quizQuestion.textContent = myQuestions[2].question; 
    //     option1.textContent = myQuestions[2].answers.a;
    //     option2.textContent = myQuestions[2].answers.b;
    //     option3.textContent = myQuestions[2].answers.c;
    //     option4.textContent = myQuestions[2].answers.d;
    //     ansDisplay.textContent = "Oops! Wrong Answer!";
    //     timeLeft -= 5;
    // });

    // option3.addEventListener("click", () => { 
    //     quizQuestion.textContent = myQuestions[2].question; 
    //     option1.textContent = myQuestions[2].answers.a;
    //     option2.textContent = myQuestions[2].answers.b;
    //     option3.textContent = myQuestions[2].answers.c;
    //     option4.textContent = myQuestions[2].answers.d;
    //     ansDisplay.textContent = "Very nice!";
    //     timeLeft += 5;
    // });

    // option4.addEventListener("click", () => { 
    //     quizQuestion.textContent = myQuestions[2].question; 
    //     option1.textContent = myQuestions[2].answers.a;
    //     option2.textContent = myQuestions[2].answers.b;
    //     option3.textContent = myQuestions[2].answers.c;
    //     option4.textContent = myQuestions[2].answers.d;
    //     ansDisplay.textContent = "Oops! Wrong Answer!";
    //     timeLeft -= 5;
    // });
}

// Initiating quiz and timer with click
start.addEventListener("click", quiz);

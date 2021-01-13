var quizEl = document.getElementById("quiz-content");

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

function runQuiz(myQuestions, quizEl) {
    var output = [];
    var answers; 

    for (var i = 0; i < myQuestions.length; i++) {
        answers = [];
        for (letter in myQuestions[i].answers){
            // Pushing answers and assigning a radio selector/button to each option
            answers.push(
                "<label>" 
                    + "<input type='radio' name='question" +i+ "' value='" +letter+ "'>"
                    + letter + ": "
                    + myQuestions[i].answers[letter]
                + "</label>"
            );
        }

        output.push(
            "<div class='question'>" + myQuestions[i].question + "</div"
            + "<div class='answers'>" + answers.join("") + "</div"
        );
    }

    quizEl.innerHTML = output.join("");
}

// var scoreForm = document.createElement("form");
// var scoreDiv = document.createElement("div");
// scoreDiv.append("<input type='text' name='userScore' id='score-sub' placeholder='Enter Your Score' />");
// scoreForm.appendChild(scoreDiv);
// quizEl.appendChild(scoreForm);

runQuiz(myQuestions, quizEl);

var input = document.createElement("input");
input.type = "text";
quizEl.appendChild(input);
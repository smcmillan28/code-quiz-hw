var header = document.querySelector("#highscore-header");
var scorePage = document.querySelector("#score-list");
var clearScore = document.querySelector("#clear-score");

// Writing variable to store scores and render to highscore page
var scores = [];

// The following function renders scores in a highscore list as <li> elements
function renderScores() {
    // scorePage.innerHTML = "";
    // Render a new li for each new score
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
// function storeScores() {
//     // Stringify and store scores in localStorage in form of array under var scores
//     localStorage.setItem("scores", JSON.stringify(scores));
// }
// scoreSubmit.addEventListener("click", function (e) {
//     e.preventDefault();
//     var highScore = document.querySelector("#score-input").value.trim();
//     // Return from function early if submitted score is empty
//     if (highScore === "") {
//         return;
//     }
//     scores.push(highScore);
//     document.querySelector("#score-input").value = "";
//     // Store the scores and render them to highscore page
//     storeScores();
//     renderScores();
// });

// Writing function to clear highscores from page when button is clicked
function clearPage() {
    localStorage.removeItem("scores");
    scorePage.textContent = "";
}

clearScore.addEventListener("click", function() {
    clearPage();
})

init();

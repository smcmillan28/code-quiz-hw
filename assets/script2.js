var header = document.querySelector("#highscore-header");
var scorePage = document.querySelector("#score-list");
var clearScore = document.querySelector("#clear-score");

// Writing variable to store scores and render to highscore page
var scores = [];

// The following function renders scores in a highscore list as <li> elements
function renderScores() {
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

// Writing function to clear highscores from page when button is clicked
function clearPage() {
    localStorage.removeItem("scores");
    scorePage.textContent = "";
}

clearScore.addEventListener("click", function() {
    clearPage();
})

init();

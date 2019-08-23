var targetScore;
var wins = 0;
var losses = 0;
var currentScore = 0;
var crystalValues = [];


function resetGame() {
    resetScore();
    resetStones();
    updateDisplay();
}

function resetScore() {
    targetScore = Math.floor(Math.random() * (120 - 19) + 19);
    currentScore = 0;
}

function updateDisplay() {
    $(".targetScore").text(targetScore);
    $(".currentScore").text(currentScore);
    $(".wins").text(wins);
    $(".losses").text(losses);
}

function resetStones() {
    crystalValues[0] = Math.floor(Math.random() * 12 + 1);
    crystalValues[1] = Math.floor(Math.random() * 12 + 1);
    crystalValues[2] = Math.floor(Math.random() * 12 + 1);
    crystalValues[3] = Math.floor(Math.random() * 12 + 1);
}

function handleClick(crystalIndex) {
    currentScore += crystalValues[crystalIndex];
    if (currentScore == targetScore) {
        wins++;
        resetScore();
        resetStones();

    } else if (currentScore > targetScore) {
        losses++;
        resetScore();
        resetStones();
    }
    updateDisplay();
}

function main() {
    resetGame();
    for (let i = 0; i < 4; i++) {
        $("#chrystal" + (i+1)).on("click", function () {
            handleClick(i);
        }); 
    }
}

main();


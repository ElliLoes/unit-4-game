var targetScore;
var wins = 0;
var losses = 0;
var currentScore = 0;
var crystalValues = [];


function resetGame () {
    resetScore ();
    currentScore = 0;
    resetStones ();
    updateDisplay ();
}

function resetScore () {
    targetScore = Math.floor(Math.random()*(120-19) + 19);
}

function updateDisplay () {
    $(".targetScore").text(targetScore);
    $(".currentScore").text(currentScore);
    $(".wins").text(wins);
    $(".losses").text(losses);
}

function resetStones () {
    crystalValues[0] = Math.floor(Math.random()*12+1);
    crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
}


function main () {
    $("#chrystal1").on("click", function() {
       currentScore+=crystalValues[0];
       updateDisplay ();
    });

   // win loose reset




    resetGame ();
}

main ();

 
// $("#crystal2").on("click", function() {
//     currentScore+=crystalValues;

// $("#crystal3").on("click", function() {
//     currentScore+=crystalValues;

// $("#crystal4").on("click", function() {
//     currentScore+=crystalValues;


//   $("#randomNumber").text(randomNumber);

//   var counter = 

//   $(".crystals").on("click", function() {
 
 


//     alert("New score: " + counter);

//     if (counter === randomNumber) {
//       alert("You win!");
//     }

//     else if (counter >= randomNumber) {
//       alert("You lose!!");
//     }

//   });



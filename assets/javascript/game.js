// Array to hold the list of available bands bands
var bands = ["soundgarden", "foo fighters", "alice in chains", "pearl jam", "nirvana", "rage against the machine", "candlebox", "filter", "green day", "temple of the dog", "everclear", "mad season"];

// Holds the number of wins, losses and the guesses the user has made
var wins = 0;
var losses = 0;
var guessesRemaining = 12;
var guesses = [];
var randomBand


// Holds the references to place the text in the HTML
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var guessText = document.getElementById("guesses-text");
var randomBandText = document.getElementById("random-band-text");

// Function to pick a random band and displays it in the console
var picBand = function () {
    randomBand = bands[Math.floor(Math.random() * bands.length)];
    console.log(randomBand);
    randomBandText.textContent = randomBand.replace(/[a-z]/g, " _ ");
};

// Function to start/reset the game
var startGame = function() {
    guessesRemaining = 12;
    guesses = [];
    guessText.textContent = " ";
    picBand();
}

picBand();

document.onkeyup = function (event) {
    
    // User picks a letter and sets it to lowercase
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);

    if (guesses.includes(userGuess) === false) {

        guesses.push(userGuess);

        guessText.textContent +=userGuess + " ";

        if (userGuess.indexOf(randomBand) > -1) {


        }

        
    }





    // Display the values on the page
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesRemainingText.textContent = guessesRemaining;
}
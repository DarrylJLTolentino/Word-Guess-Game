var wins = 0;
var losses = 0;
var guess = 9;
var lettersGuessed = [];
var wordList = ["goku", "vegeta", "frieza", "cell", "krillin"];
var word;

function createBlankWord() {
    var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    var blankWord = "-";
    for(var i = 0; i < chosenWord.length - 1; i++){
        blankWord = blankWord + "-";
    };
    return chosenWord, blankWord;
}

document.onkeyup = function (event) {
    var userInput = event.key;
    var chosenWord, blankWord = createBlankWord();

    document.getElementById("getStarted").textContent = "";
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses " + losses;
    document.getElementById("spacing").textContent = "-----------------";
    document.getElementById("word").textContent = "Word: " + blankWord; //Need to make a function that replaces all the letters with dashes.
    document.getElementById("numberOfGuesses").textContent = "# of Guesses: " + guess;
    document.getElementById("lettersGuessed").textContent = "Letters Guessed: "; // Need to make a function that adds all the current letters in lettersGuessed array and print them


}
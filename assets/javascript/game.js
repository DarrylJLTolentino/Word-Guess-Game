var wins = 0;
var losses = 0;
var guess = 9;
var lettersGuessed = [];
var wordList = ["goku", "vegeta", "frieza", "cell", "krillin"];
var joinedLettersGuessed;

function createBlankWord() {
    var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    var blankWord = "-";
    for (var i = 0; i < chosenWord.length - 1; i++) {
        blankWord = blankWord + "-";
    };
    return chosenWord, blankWord;
}

function startUp() {
    var chosenWord, blankWord = createBlankWord();
    document.getElementById("getStarted").textContent = "";
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses " + losses;
    document.getElementById("spacing").textContent = "-----------------";
    document.getElementById("word").textContent = "Word: " + blankWord;
    document.getElementById("numberOfGuesses").textContent = "# of Guesses: " + guess;
    document.getElementById("lettersGuessed").textContent = "Letters Guessed: ";
}

function reWrite() {
    document.getElementById("getStarted").textContent = "";
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses " + losses;
    document.getElementById("spacing").textContent = "-----------------";
    document.getElementById("word").textContent = "Word: " + blankWord;
    document.getElementById("numberOfGuesses").textContent = "# of Guesses: " + guess;
    document.getElementById("lettersGuessed").textContent = "Letters Guessed: " + joinedLettersGuessed;
}

startUp();

document.onkeyup = function (event) {
    var userInput = event.key;
    lettersGuessed.push(userInput);
    joinedLettersGuessed = lettersGuessed.join(",");
    var counter = 0;
    for (var i = 0; i < chosenWord.length; i++) {
        if (userInput === chosenWord[i]) {
            blankword[i] = chosenWord[i];
        }
        else {
            counter++;
        }
    }
    if (counter === chosenWord.length) {
        guess--;
    }
    

}
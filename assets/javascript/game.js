var wins = 0;
var losses = 0;
var guess = 9;
var lettersGuessed = [];
var wordList = ["goku", "vegeta", "frieza", "cell", "krillin"];
var joinedLettersGuessed;

function createBlankWord(chosenWord) {
    var blankWord = "-";
    for (var i = 0; i < chosenWord.length - 1; i++) {
        blankWord = blankWord + "-";
    };
    return blankWord;
}

function startUp(blankWord) {
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

var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
var blankWord = createBlankWord(chosenWord);
startUp(blankWord);


document.onkeyup = function (event) {
    var userInput = event.key;
    var thatCharAgain = false;
    for (var i = 0; i < lettersGuessed.length; i++) {
        if (userInput === lettersGuessed[i]) {
            thatCharAgain = true;
        }
    }

    if (thatCharAgain !== true && event.keyCode >= 65 && event.keyCode <= 90) {
        lettersGuessed.push(userInput);
        joinedLettersGuessed = lettersGuessed.join(",");
        var counter = 0;
        for (var i = 0; i < chosenWord.length; i++) {
            if (userInput === chosenWord[i]) {
                var newBlank = blankWord.split('');
                newBlank[i] = chosenWord[i];
                blankWord = newBlank.join('');
            }
            else {
                counter++;
            }
        }
        if (counter === chosenWord.length) {
            guess--;
        }
        if (blankWord === chosenWord) {
            wins++;
            chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
            blankWord = createBlankWord(chosenWord);
            startUp(blankWord);
            lettersGuessed = [];
            joinedLettersGuessed = "";
            guess = 9;
        }
        if (guess === 0 && blankWord !== chosenWord) {
            losses++;
            chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
            blankWord = createBlankWord(chosenWord);
            startUp(blankWord);
            lettersGuessed = [];
            joinedLettersGuessed = "";
            guess = 9;
        }
        reWrite();
        thatCharAgain = false;
    }
    else {
        thatCharAgain = false;
    }
}
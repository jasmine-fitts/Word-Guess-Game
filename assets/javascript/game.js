//Create an array of words that lists out all the words for HangMan//

var wordBank = ["meredith", "richard", "miranda", "cristina", "shonda rhimes", "seattle", "ABC", "jackson", "mcsteamy", "mcdreamy", "plane crash", "surgery", "scalpel", "scrub", "OR", "hospital"];

//Creating variables to hold the number of words guessed correctly, wrong letters, letters guessed, and random words//
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 7;
var underScores = []
var userGuess = [];
var randomWord;


document.onkeyup = function(event) {
    var userGuess = event.key;

    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    
    
    console.log(wordBank.length);

}




//Randomly choose a word from the array wordBank







//Choose word randomly//

//Create underscores based on length of word//


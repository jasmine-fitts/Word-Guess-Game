//Create an array of words that lists out all the words for HangMan//

var wordBank = ["meredith", "richard", "miranda", "cristina", "shonda rhimes", "seattle", "ABC", "jackson", "mcsteamy", "mcdreamy", "plane crash", "surgery", "scalpel", "scrub", "OR", "hospital"];

//Creating variables to hold the number of words guessed correctly, wrong letters, letters guessed, and random words//
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = []
var userGuess = [];
var randomWord = ""


document.onkeyup = function(event) {
    
    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (var i = 0; i < wordBank.length; i++);

    console.log(wordBank.length)

    if (userGuess === randomWord); 


    








//Randomly choose a word from the array wordBank and store it in a variable

//Display the length of the word to the user

//If the user guesses the correct word, wins are increased by 1

//If the user guesses the incorrect letter, guesses left is decreased by 1

//If 

//Choose word randomly//

//Create underscores based on length of word//


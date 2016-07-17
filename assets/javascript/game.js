
var word = ['charizard', 'mewtwo', 'lugia', 'blastoise', 'dragonite', 'pikachu', 'gengar'];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var wrongLetters = [];
var correctLetters = [];

var randomWord = word[Math.floor(Math.random() * word.length)];
console.log('The answer is ' + randomWord);

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (randomWord.indexOf(userGuess) >= 0) {
		console.log('You guessed: ' + userGuess);
		correctLetters.push(userGuess);
		console.log('Correct');

	} else {
		wrongLetters.push(userGuess);
		console.log('Nah dawg, you guessed ' + userGuess);
		console.log(guessesLeft--);

	}

console.log(correctLetters);

	score = "**SCORE**" + "<div id = 'wins'>" + 'WINS: ' + wins +
	"<div id = 'losses'>" + 'LOSSES: ' + losses;
	document.querySelector('#game').innerHTML = score;

	letters = "<div id = 'guessedLetters'>" + wrongLetters + ' ';
	document.querySelector('#guessedLetterBox').innerHTML = letters;

	guesses = "<div id = 'guessCount'>" + 'GUESSES REMAINING: ' + guessesLeft;
	document.querySelector('#guessCountBox').innerHTML = guesses;


}

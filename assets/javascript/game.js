// var wins =0;
// var losses = 0;

var words = [
	"horseshoe",
	"pitch",
	"court",
	"flip",
	"turn",
	"dead",
	"ringer",
	"double"
	];



<!-- //list of words and chosing a random word -->

var word = words[Math.floor(Math.random() * words.length)];

// document.onkeyup = function() {
// 	var userguess = String.fromCharCode(event.keyCode).	toLowerCase();
// 	// console.log(userguess);


//make an answer array

var answerArray = [];

// make a loop to put in spaces for number of letters
		
for (var i = 0; i < word.length; i++); {
	answerArray[i] = "_";
	console.log(word);
}

//variable to track which letters still need to be guessed
var remaining = word.length;


// the game 

while (remaining > 0) {
	alert(answerArray.join(" "));

	var guess = prompt("Pick a letter or Cancel to stop playing");
	if( guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Please pick one letter");
	} else {
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remaining--;
			}
		}
	}
}



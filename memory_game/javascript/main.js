
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2]	;

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " );

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	}
	else {
		alert("sorry, keep trying");
	}
}
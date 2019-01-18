
//var cards = ["queen", "queen", "king", "king"];

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},

{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
}
];


var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard() {
	var cardId;
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cardImage);
	console.log(suit);

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You've found a match!");
		} else {
			alert("Sorry, try again.");
		}
	};
};

flipCard(checkForMatch);

/*/////Old Code//////
var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log('User flipped ' + cardsInPlay);

	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log('User flipped ' + cardsInPlay);
*/
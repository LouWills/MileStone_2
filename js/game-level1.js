//Memory Game based of off https://github.com/taniarascia/memory

// playing card data
// Loading playing card data into an array
const cardsArray = [{
    name: 'joker',
    img: 'png/black_joker.png',
},
{
    name: 'aceSpades',
    img: 'png/ace_of_spades.png',
},
{
    name: '10Diamonds',
    img: 'png/10_of_diamonds.png',
},
{
    name: 'queenHearts',
    img: 'png/queen_of_hearts.png',
},
{
    name: 'kingSpades',
    img: 'png/king_of_spades.png',
},
{
    name: '7Hearts',
    img: 'png/7_of_hearts.png',
},

]

//concatenating card array to create pairs
//Randomly sorting the array using math.random so cards dont appear in the same location each round you play
const gameGrid = cardsArray
.concat(cardsArray)
.sort(() => 0.5 - Math.random());

//declaring variables
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
var gameParent = '';

//Turn counter variable doesn't work...yet!!
let turnCounter = 0;

//creating a html section in the div with id 'game' to be used for the game grid.
//setting the section the class 'lvl1 grid'
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('id', 'lvl1-grid');
game.appendChild(grid);

//
gameGrid.forEach(item => {
const { name, img } = item;

//creating the cards for the game. a div with the class of 'card' 
const card = document.createElement('div');
card.classList.add('card');
card.dataset.name = name;

//the front of the card (the back of the playing card) 
const front = document.createElement('div');
front.classList.add('front');

//using template literal to make the back of the game card an image in the array
const back = document.createElement('div');
back.classList.add('back');
back.style.backgroundImage = `url(${img})`;

//appending to the grid a card
//appending to each card a front element and a back element
grid.appendChild(card);
card.appendChild(front);
card.appendChild(back);
});

//
const match = () => {
const selected = document.querySelectorAll('.selected');
selected.forEach(card => {
card.classList.add('match');
});
};

//resetting the variables if the two selected cards are not a match
const resetGuesses = () => {
firstGuess = '';
secondGuess = '';
count = 0;
previousTarget = null;

var selected = document.querySelectorAll('.selected');
selected.forEach(card => {
card.classList.remove('selected');
});
};

grid.addEventListener('click', event => {

const clicked = event.target;

if (
clicked.nodeName === 'SECTION' ||
clicked === previousTarget ||
clicked.parentNode.classList.contains('selected') ||
clicked.parentNode.classList.contains('match')
) {
return;
}

if (count < 2) {
count++;
if (count === 1) {
  firstGuess = clicked.parentNode.dataset.name;
  console.log(firstGuess);
  clicked.parentNode.classList.add('selected');
} else {
  secondGuess = clicked.parentNode.dataset.name;
  console.log(secondGuess);
  clicked.parentNode.classList.add('selected');
  turnCounter++;
  console.log(turnCounter);
  document.getElementById("turns").innerHTML = `<h2>Turns: ${turnCounter}</h2>`;
}

if (firstGuess && secondGuess) {
  if (firstGuess === secondGuess) {
    setTimeout(match, delay);
  }
  setTimeout(resetGuesses, delay);
}
previousTarget = clicked;
}

});

//Trying to check if all the child element of the game grid have the class of match
//(Check if all game cards have been matched)
//Then show a victory bootstrap modal
var gameParent = document.getElementById("lvl1.grid");

if (gameParent.children.length == gameParent.querySelectorAll(".match").length) {
  console.log("All children have the class “match”.");
}
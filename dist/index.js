const randomNumber1 = Math.ceil(Math.random() * 6); 
const randomNumber2 = Math.ceil(Math.random() * 6);
const randomDiceImage = "dice" + randomNumber1 + ".png"; 
const randomImageSource = "images/" + randomDiceImage; 
const image = document.querySelectorAll("img")[0];
const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

image.src = randomImageSource;
document.querySelectorAll("img")[1].src = randomImageSource2;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

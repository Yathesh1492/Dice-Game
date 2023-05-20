var randomPlayer1 = Math.floor(Math.random() * 6) + 1; 
var randomImage = "images/dice-face-" + randomPlayer1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);
var randomPlayer2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice-face-" + randomPlayer2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
if (randomPlayer1 > randomPlayer2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins the game";
}
else if (randomPlayer1 < randomPlayer2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins the game";
}
else {
  document.querySelector("h1").innerHTML = "Game is Tie!";
}

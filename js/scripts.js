//Business End Logic
function Players (totalScore, turnScore) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
}

Players.prototype.rollDice = function (diceValue) {
  var dicePlayer1 = Math.floor(Math.random() * 6) + 1;
  var dicePlayer2 = Math.floor(Math.random() * 6) + 1;
}



//User Interface Logic
$(document).ready(function() {
  

});

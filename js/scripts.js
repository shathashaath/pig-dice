// Business End Logic
function Player () {
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.rollDice = function () {
  var diceRoll = document.getElementById("die1"); //getting the id to write into box
  var diceOutput = Math.floor(Math.random() * 6) + 1;
  diceRoll.innerHTML = diceOutput;
  if (diceOutput === 1) {
    alert("You lost this turn, switch players!");
    this.turnScore = 0;
  } else {
    this.turnScore += diceOutput;
  }
}


//User Interface Logic
$(document).ready(function() {
  event.preventDefault();

  var newPlayer1 = new Player ();

  $("#p1-roll").click(function(event) {
    event.preventDefault();
    newPlayer1.rollDice();
    $("#p1-turnscore").text(newPlayer1.turnScore);
  });
  $("#p1-hold").click(function(event) {
    event.preventDefault();
  });
  $("#p2-roll").click(function(event) {
    event.preventDefault();
  });
  $("#p2-hold").click(function(event) {
    event.preventDefault();
  });

});

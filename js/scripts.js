// Business End Logic
function Player () {
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.rollDice = function () {
  var diceOutput = Math.floor(Math.random() * 6) + 1;
  var diceBox = document.getElementById("dieBox"); //getting the id to write into box
  diceBox.innerHTML = diceOutput;
  if (diceOutput === 1) {
    alert("You lost this turn, switch players!");
    this.turnScore = 0;
    diceBox.innerHTML = 0;
  } else {
    this.turnScore += diceOutput;
  }
}

Player.prototype.hold = function () {
  this.totalScore += this.turnScore;
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
    newPlayer1.hold();
    $("#p1-score").text(newPlayer1.totalScore);
    $("#p1-turnscore").hide();
  });
  $("#p2-roll").click(function(event) {
    event.preventDefault();
  });
  $("#p2-hold").click(function(event) {
    event.preventDefault();
  });

});

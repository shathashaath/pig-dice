// Business End Logic
function Players (totalScore, turnScore) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
}

Players.prototype.totalScore = function (score) {

}
// var numbers=[1,2,3,4,5,6]

function rollDice() {
  var p1Roll = document.getElementById("die1");
  var dicePlayer1 = Math.floor(Math.random() * 6) + 1;
  p1Roll.innerHTML = dicePlayer1;
}



// // User Interface Logic
$(document).ready(function() {
  event.preventDefault();

  $("#p1-roll").click(function(event) {
    event.preventDefault();
    $("#dice1").show();
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

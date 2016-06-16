// Business End Logic
function Player() {
    this.totalScore = 0;
    this.turnScore = 0;
}

Player.prototype.rollDice = function() {
    var diceOutput = Math.floor(Math.random() * 6) + 1;
    var diceBox = document.getElementById("dieBox");
    diceBox.innerHTML = diceOutput;
    if (diceOutput === 1) {
        alert("You lost this turn, switch players!");
        this.turnScore = 0;
        diceBox.innerHTML = 0;
    } else {
        this.turnScore += diceOutput;
    }
    if (diceOutput === 1) {
        document.getElementById("dieBox").innerHTML = '<img src="images/dice_1.png" />'
    }
    if (diceOutput === 2) {
        document.getElementById("dieBox").innerHTML = '<img src="images/dice_2.png" />'
    }
    if (diceOutput === 3) {
        document.getElementById("dieBox").innerHTML = '<img src="images/dice_3.png" />'
    }
    if (diceOutput === 4) {
        document.getElementById("dieBox").innerHTML = '<img src="images/dice_4.png" />'
    }
    if (diceOutput === 5) {
        document.getElementById("dieBox").innerHTML = '<img src="images/dice_5.png" />'
    }
    if (diceOutput === 6) {
        document.getElementById("dieBox").innerHTML = '<img src="images/dice_6.png" />'
    }

}

Player.prototype.hold = function() {
        this.totalScore += this.turnScore;
        // diceBox.innerHTML = 0;
    }
    // Player.prototype.showImages=function() {
    //   $("div#images").empty();
    //   if (this.turnScore===1){
    //     $('div#images').append(
    //     "<img class="dice-image" src="img/dice.png" />"
    //     );
    //   }
    // }

//User Interface Logic
$(document).ready(function() {
    event.preventDefault();

    var newPlayer1 = new Player();
    var newPlayer2 = new Player();

    $("#p1-roll").click(function(event) {
        event.preventDefault();
        newPlayer1.rollDice();
        $("#p1-turnscore").text(newPlayer1.turnScore);
    });

    $("#p1-hold").click(function(event) {
        event.preventDefault();
        newPlayer1.hold();
        $("#p1-score").text(newPlayer1.totalScore);
        $("#p1-turnscore").text(0);
    });

    $("#p2-roll").click(function(event) {
        event.preventDefault();
        newPlayer2.rollDice();
        $("#p2-turnscore").text(newPlayer2.turnScore);
    });
    $("#p2-hold").click(function(event) {
        event.preventDefault();
        newPlayer2.hold();
        $("#p2-score").text(newPlayer2.totalScore);
        $("#p2-turnscore").text(0);
    });
});

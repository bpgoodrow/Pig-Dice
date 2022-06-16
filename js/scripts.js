let roundScoreArray = [];
let totalScore = 0;
//object to make players and a way to track score
function Players(name, roundScore, totalScore) {
  this.playerName = name;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
}
//random number generator
let rollDice = function () {
  diceRoll = 1 + Math.floor(Math.random() * 6);
  return diceRoll;
};
//if 1 sets array length to zero
Players.prototype.createRoundScore = function (diceRoll) {
  if (diceRoll === 1) {
    this.roundScore = 0;
  } else {
    this.roundScore.push(diceRoll)
  }
  return rollDice;
};

// prototype to set total score value
Players.prototype.createTotalScore = function (total) {
  return this.totalScore = this.totalScore + total;
}

//creates player to send score into array inside player
// let player1 = new Players("Ben", roundScoreArray, totalScore)
// player1.createRoundScore(6);
// player1.createTotalScore(5);

// UI Logic
let players = new Players();

function displayPlayersDetail(playersToDisplay) {
  let playerOne = $("#player1");
  let playerTwo = $("#player2");
  let htmlForPlayersScore = "";
  Object.keys(playersToDisplay.players).forEach(function (key) {
    const human = playersToDisplay.findPlayers(key);
    htmlForPlayer1RoundScore += "<p>" + human.roundScore + "</p>";
  });
  playerOne.html(htmlForPlayersScore);
  playerTwo.html(htmlForPlayersScore);
}

$(document).ready(function () {

  $("form#player1").submit(function (event) {
    event.preventDeafault();
    const roundScore = $("#round-score").val();
    const totalScore = $("#total-score").val();
    let player1 = new Players(roundScore, totalScore);
    players.addPlayers(player1);
    displayPlayersDetail(players);
  });
});


    // const roundScore = $("#round-score2").val();
    // const totalScore = $("#total-score2").val();
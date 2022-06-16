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
let player1 = new Players("Ben", roundScoreArray, totalScore)
player1.createRoundScore(6);
player1.createTotalScore(5);
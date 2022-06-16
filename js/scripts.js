let roundScoreArray = [];

function Players(name, roundScore, totalScore) {
  this.playerName = name;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
}

let rollDice = function () {
  diceRoll = 1 + Math.floor(Math.random() * 6);
  return diceRoll;
};

Players.prototype.createRoundScore = function (diceRoll) {
  if (diceRoll === 1) {
    this.roundScore = 0;
  } else {
    this.roundScore.push(diceRoll)
  } 
  return rollDice;
};

let player1 = new Players("Ben", roundScoreArray, "totalScore")
player1.createRoundScore(6);
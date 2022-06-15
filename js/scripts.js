let roundScore = [];

function Players(name, roundScore, totalScore) {
  this.playerName = name;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
}

let rollDice = function () {
  diceRoll = 1 + Math.floor(Math.random() * 6);
  return diceRoll;
};

Players.prototype.roundScore = function (bust) {
  let rollDice = rollDice;
  if (diceRoll === 1) {
    roundScore = 0;
  } else {
    roundScore.push(diceRoll)
  } 
  return rollDice;
};
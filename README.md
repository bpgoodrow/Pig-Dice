Describe: let potentialScore[]

Test: "Create blank array to push number into"
Code: potentialScore.push(3);
Expected Output: potentialScore = [3]

Describe: function rollDice() { return Math.random();}

Test: "Return a random number"
Code: return math.random
      rollDice();
Expected Output: "random number";

Test: "Return a random number between 1 - 6 that is a whole integer"
Code: function rollDice() {return 1 + Math.floor(Math.random() * 6);
};
Expected Output: A random whole number between 1 - 6.

Test: "Push returned random number from rollDice into potentialScore[]"
Code: potentialScore.push(rollDice())

Test: "If a 1 is logged it should delete the indexes of the potentialScore array"
Code:

Describe: function Players(name, roundScore, totalScore)
Test: "Create object called Players() to contain properites name, rounScore, and totalScore.
Code: function Players(name, roundScore, totalScore)
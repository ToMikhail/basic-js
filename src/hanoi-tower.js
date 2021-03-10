const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns;
  let seconds;
  turns = Math.pow(2, disksNumber) -1;
  seconds = Math.floor(3600 / turnsSpeed * turns);

  let hanoi =
            { turns: turns, 
              seconds: seconds
            }

  return hanoi;
};

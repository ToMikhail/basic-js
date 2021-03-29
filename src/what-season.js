const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return `Unable to determine the time of year!`;
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Error");
  } else if (date) {
    let now = date.getMonth();

    if (now === 0 || now === 1 || now === 11) {
      return "winter";
    } else if (now === 2 || now === 3 || now === 4) {
      return "spring";
    } else if (now === 5 || now === 6 || now === 7) {
      return "summer";
    } else if (now === 8 || now === 9 || now === 10) {
      return "fall";
    }
  }
};

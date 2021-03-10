const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  let now = date.getMonth();

  if(date.getMonth() === true) {
    if (now === 0 || now === 1 || now === 11) {
      return 'winter';
    } else if(now === 2 || now === 3 || now === 4) {
      return 'spring';
    } else if(now === 5 || now === 6 || now === 7){ 
      return 'summer';
    } else if (now === 8 || now === 9 || now === 10) {
      return 'fall';
    }
  }

  
};

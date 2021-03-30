const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  // let arr = [
  //             'A', 'B', 'C', 'D', 'E', 'F', 'G',
  //              'H', 'I', 'J', 'K', 'L', 'M', 'N',
  //               'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  //                'V', 'W', 'X', 'Y', 'Z'
  //           ];
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("error");
    }
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("error");
    }
  }
}

module.exports = VigenereCipheringMachine;

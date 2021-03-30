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
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = key.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length));
    let encryptMess = "";

    let j = 0;
    for (let i = 0; i < message.length; i++) {
      let charCodeMess = message.charCodeAt(i);

      if (65 <= charCodeMess && charCodeMess <= 90) {
        charCodeMess -= 65;
        let charCodeKey = key.charCodeAt(j);
        charCodeKey -= 65;
        let charCodeRes = ((charCodeMess + charCodeKey) % 26) + 65;
        encryptMess += String.fromCharCode(charCodeRes);
        j++;
      } else {
        encryptMess += message[i];
      }
    }
    return encryptMess;
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("error");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = key.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length));
    let decryptMess = "";

    let j = 0;
    for (let i = 0; i < message.length; i++) {
      let charCodeMess = message.charCodeAt(i);

      if (65 <= charCodeMess && charCodeMess <= 90) {
        charCodeMess -= 65;
        let charCodeKey = key.charCodeAt(j);
        charCodeKey -= 65;
        let charCodeRes = ((charCodeMess + 26 - charCodeKey) % 26) + 65;
        decryptMess += String.fromCharCode(charCodeRes);
        j++;
      } else {
        decryptMess += message[i];
      }
    }
    return decryptMess;
  }
}

module.exports = VigenereCipheringMachine;

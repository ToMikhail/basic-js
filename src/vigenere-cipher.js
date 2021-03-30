const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(arg = true){
    this.arg = arg;
  }

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

      if (65 <= charCodeMess && charCodeMess <= 91) {
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

    if(this.arg === false) {
      return encryptMess.split("").reverse().join("")
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
    if(this.arg === false) {
      return decryptMess.split("").reverse().join("")
    }
    return decryptMess;
  }
}

module.exports = VigenereCipheringMachine;

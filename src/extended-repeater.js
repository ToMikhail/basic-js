const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.addition === false) {
    options.addition = 'false';
  }
  else if (options.addition === null) {
    options.addition = 'null';
  }
  else {
    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|';
    options.repeatTimes = options.repeatTimes || 1;
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
    options.addition = options.addition || '';
  }
  
  
  let newStr = '';

  for (let i = 1; i <= options.repeatTimes; i++) {
    newStr = newStr + str;

    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      newStr = newStr + options.addition + options.additionSeparator ;
    };
    newStr = newStr.slice(0,-(options.additionSeparator.length)) + options.separator;
  };
  newStr = newStr.slice(0, -(options.separator.length))
  return newStr;
};
  
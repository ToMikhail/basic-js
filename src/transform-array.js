const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  if (Array.isArray(arr) === true) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i = i + 1;
      }
      else if (arr[i] === '--discard-prev') {
        if(arr[i - 2] === '--discard-next') {
          continue
        }
        else{
          res.pop();
        }
      }
      else if (arr[i] === '--double-next') {

        if (i === arr.length - 1) {

          continue
        }
        else {
          res.push(arr[i + 1]);
        }
      }
      else if (arr[i] === '--double-prev'){
        if(res.length === 0){
          continue
        } 
        else if(arr[i - 2] === '--discard-next') {
          continue;
        }
        else{
          res.push(arr[i - 1]);
        }
      }
      else {
        res.push(arr[i]);
      }
    }
    return res;
  }
  else {
    throw new Error('THROWN');
  }
};

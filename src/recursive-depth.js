const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let res = 0;

    if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
        count = this.calculateDepth(arr[i]);
        if (count > res) {
          res = count;
        }
      }
      res++;
    }
    
    return res;
  }
};

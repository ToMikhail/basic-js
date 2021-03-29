const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let res = 1;

    for (let i = 0; i < arr.length; i++) {
      
      if (Array.isArray(arr)) {
        count = this.calculateDepth(arr[i]);
        if (count > res) {
          res = count;
        }
      }
    }
    res++;
    return res;
  }
};

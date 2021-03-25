const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 0;
    if(Array.isArray(arr)){
  
      for (let i = 0; i < arr.length; i++) {
        res = Math.max(res, this.calculateDepth(arr[i]));
      }
      res++;
    }
    return res; 
  }
};
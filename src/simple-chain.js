const CustomError = require("../extensions/custom-error");

const chainMaker = {
  "chain": [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined) {
      this.chain.push(" ");

    }
    else {
      this.chain.push(value);
    }
    return chainMaker;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || 1 > position || position > this.chain.length){
      this.chain = [];
      throw new Error;
    }
    else {
      this.chain.splice(position-1, 1);
      return chainMaker;
    } 
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let res = "";

    for(let i = 0; i < this.chain.length; i++){
      res = res + "( " + this.chain[i] + " )~~";
    };
    res = res.slice(0, -2)
    this.chain = [];
    return res;
  }
};


module.exports = chainMaker;

const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  let str = new String;

  if(Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
    

    if (typeof members[i] === 'string') {
      members[i] = members[i].trim();
      members[i] = members[i].toUpperCase();
      arr.push(members[i]);
    }
  }

    let arrSort = arr.sort();

    for (let i = 0; i < arrSort.length; i++) {
      str += arrSort[i].charAt(0);
    }

    return str.toUpperCase();
  }
  
  else {
    return false;
  }
}
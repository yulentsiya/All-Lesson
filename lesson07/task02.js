'use strict'
let sum = 0;
const getAverageValue = (arrReceipt) => {

  for(let i = 0; i < arrReceipt.length; i++) {
    
     sum = sum + arrReceipt[i];
     
  }

  return Math.floor(sum /  arrReceipt.length);
}

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(getAverageValue(allСashbox));
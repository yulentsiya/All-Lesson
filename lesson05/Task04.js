'use strict';
let sileOne;
let sileTwo;
let sileThree;
let sileFour;
let Sum;

const calculate = (totalSum, numberProduct, promocode) => {
  if(numberProduct > 10) {
    Sum = totalSum * 0.03;
  }

  if(totalSum > 30_000) {
    Sum = totalSum * 0.15;
  }

  if(promocode === "METHED") {
    Sum = totalSum * 0.10;
  }

  if(promocode === "G3H2Z1" && totalSum > 2000) {
  Sum = totalSum - 500;
  }
 return Sum;
}

console.log(calculate(20_000, 11, 'METHED'));
console.log(calculate(16_000, 2, 'G3H2Z1'));
console.log(calculate(40_000, 11));


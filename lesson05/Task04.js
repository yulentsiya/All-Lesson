'use strict';

const calculate = (totalSum, numberProduct, promocode) => {
  if(numberProduct > 10) {
    totalSum = totalSum - (totalSum * 0.03);
  }

  if(totalSum > 30_000) {
    totalSum = totalSum - (totalSum * 0.15);
  }

  if(promocode === "METHED") {
    totalSum = totalSum - (totalSum * 0.10);
  }

  if(promocode === "G3H2Z1" && totalSum > 2000) {
    totalSum = totalSum - 500;
  }
 return totalSum;
}

console.log(calculate(20_000, 11, 'METHED'));
console.log(calculate(16_000, 2, 'G3H2Z1'));
console.log(calculate(40_000, 11));
console.log(calculate( 10, 11, 'METHED'));

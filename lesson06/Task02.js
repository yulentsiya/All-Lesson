'use strict';

const isPrime = (number) => {
  let flag = true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      flag = false;
      break; // выйдем из цикла
    }
  } return flag;
  
}

console.log(isPrime());
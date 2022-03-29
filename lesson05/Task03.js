'use strict';
const getReverseString = (text) => {
  const reverseStr = text.split("").reverse().join("");
  return reverseStr;
}

console.log(getReverseString('Привет мир'));
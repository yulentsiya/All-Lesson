'use strict';

const getUpString = (text) => {
  const UpLetter = text.charAt(0).toUpperCase() + text.slice(1);
  return UpLetter
}

console.log(getUpString('привет мир'));
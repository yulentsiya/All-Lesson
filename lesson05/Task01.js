'use strict';


const dollarCourse = 73;
const euroCourse= dollarCourse * 1.2;


const calcRubInEuro = (rub) => {
  const getEuro = rub*euroCourse;
  return getEuro;
};

const calcRubInDollar = (rub) => {
  const getDollar = rub*dollarCourse;
  return getDollar;
};

console.log(`Конвертер из руб в евро ${calcRubInEuro(155)}`);
console.log(`Конвертер из руб в доллар ${calcRubInDollar(30000)}`);
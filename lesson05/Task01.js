'use strict';


const dollarCourse = 73;
const euroCourse= dollarCourse * 1.2;


const calcRubInEuro = (euro) => {
  const getEuroInRub = euro*euroCourse;
  return getEuroInRub;
};

const calcRubInDollar = (dollar) => {
  const getDollarInRub = dollar*dollarCourse;
  return getDollarInRub;
};

console.log(`Конвертер из руб в евро ${calcRubInEuro(155)}`);
console.log(`Конвертер из руб в доллар ${calcRubInDollar(30000)}`);
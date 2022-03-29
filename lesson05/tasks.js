'use strict'

//Задание №2
const rain = Math.round(Math.random()*1) 
console.log(rain);
const message = (rain === 1) ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!';
console.log(message);


//Задание №2
let mathematic = prompt('Напишите, пожалуйста, Ваше ко-во баллов по математике:');
let informatic = prompt('Напишите, пожалуйста, Ваше ко-во баллов по информатике:');
let russianLang = prompt('Напишите, пожалуйста, Ваше ко-во баллов по русскому языку:');

mathematic = Number(mathematic);
informatic = Number(informatic);
russianLang = Number(russianLang);

let summGrade = mathematic + informatic + russianLang;
console.log(summGrade);

if(summGrade >= 265) {
  alert('Поздравляю, вы поступили на бюджет!');
} else {
  alert('Вам не хватило баллов для поступления');
}

//Задание №3
const minNumberBanknotes = 100;
let numbersBannotesUser = prompt('Сколько денег Вы хотите снять в банкомате?');
numbersBannotesUser = Number(numbersBannotesUser);

if (numbersBannotesUser < numbersBannotesUser) {
  alert('На карте недостаточно средств для снятия денег');
}

if (numbersBannotesUser % 100 == 0) {
  alert('Успешная операция');
} else if (numbersBannotesUser < minNumberBanknotes) {
  alert('На карте недостаточно средств для снятия денег');
} else {
  alert('В банкомате нет подходящих купюр :(');
}
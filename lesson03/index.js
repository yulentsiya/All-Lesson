'use strict';

// const nameProduct = 'Яблоки';
// const quantityProduct = 6;
// const categoryProduct = 'C';
// const priceProduct = 9;

// const totalAmount = quantityProduct * priceProduct;

// console.log(`${nameProduct} ${quantityProduct} ${categoryProduct} ${priceProduct}`) ;
// console.log(`Общая сумма: ${totalAmount} руб`);  


// const nameProductTwo = 'Помидоры';
// const quantityProductTwo = 12;
// const categoryProductTwo = 'Вкусные';
// const priceProductTwo = 15;

// const totalAmountTwo = quantityProductTwo * priceProductTwo;

// console.log(`${nameProductTwo} ${quantityProductTwo} ${categoryProductTwo} ${priceProductTwo}`) ;
// console.log(`Общая сумма: ${totalAmountTwo} руб`);  



// Новый блок инструкций, ввод пользователя 
let nameProduct = prompt('Какое название товара?');
let quantityProduct = prompt('Какое количество товаров?');
let categoryProduct = prompt('Какое категория товара?');
let priceProduct = prompt('Какая стоимость товара?');

// проверка
console.log('Проверка на введенный тип');
console.log(`Наименование товара, тип строки: ${typeof nameProduct}`);
console.log(`Кол-во товара, тип строки: ${typeof quantityProduct}`);
console.log(`Категория товара, тип строки: ${typeof categoryProduct} `);
console.log(`Стоимость товара, тип строки: ${typeof priceProduct}`);

//преобразование
nameProduct = String(nameProduct);
quantityProduct = Number(quantityProduct);
// любой тип преобразования categoryProduct
priceProduct = Number(priceProduct);
const totalAmount = quantityProduct * priceProduct;

// проверка 2
console.log('Проверка после преобразования в корректный тип:');
console.log(`Наименование товара, тип строки: ${typeof nameProduct}`);
console.log(`Кол-во товара, тип строки: ${typeof quantityProduct}`);
console.log(`Категория товара, тип строки: ${typeof categoryProduct} `);
console.log(`Стоимость товара, тип строки: ${typeof priceProduct}`);


console.log(`Наименование товара: ${nameProduct} Кол-во товара: ${quantityProduct} Категория товара: ${categoryProduct} Стоимость товара: ${priceProduct}`) ;
console.log(`"На складе ${quantityProduct} единицы товара ${nameProduct} на сумму ${totalAmount} деревянных"`);




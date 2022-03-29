'use strict';



let totalAmount;
// Новый блок инструкций, ввод пользователя 
let nameProduct = prompt('Какое название товара?');
let quantityProduct = prompt('Какое количество товаров?');
let categoryProduct = prompt('Какое категория товара?');
let priceProduct = prompt('Какая стоимость товара?');

if(quantityProduct > 0 && priceProduct > 0) {
   totalAmount = quantityProduct * priceProduct;  
  console.log(`Наименование товара: ${nameProduct} Кол-во товара: ${quantityProduct} Категория товара: ${categoryProduct} Стоимость товара: ${priceProduct}`) ;
  console.log(`"На складе ${quantityProduct} единицы товара ${nameProduct} на сумму ${totalAmount} деревянных"`);


} else {
  alert('Вы ввели некорректные данные');
}




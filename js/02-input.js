/*
 * - Ввод пользовователя
 * - Методы window.confirm() и window.prompt()
 */

const user = confirm('Хотите продлить подписку?');
console.log(user);

const product = prompt('Введите кол-во товаров');
const numberTipeOf = Number(product)
console.log(numberTipeOf);
console.log(typeof numberTipeOf);
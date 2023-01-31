/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

let balance = 10000;
const payment = 25000;

const verification = confirm(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`)
console.log(verification);

if (payment < balance) {
    const newBalance = balance - payment;
    console.log(newBalance);
    confirm(`На счету осталось ${newBalance} кредитов`);
} else {
    confirm('На счету недостаточно средств для проведения операции!')
}
confirm('Операция завершена');


// 'Все хорошо, снимаем деньги... Спасибо за покупку!'
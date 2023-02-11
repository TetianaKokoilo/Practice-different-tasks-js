
/*
 * Цикл for
 */

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log('qweqwe');

/*
 * Pre-increment и Post-increment
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
// const min = 500;
// const max = 5000
// const employees = 5;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     console.log(i);
//     const salery = Math.round(Math.random() * (max - min) + min);
//     console.log(salery);
//     totalSalary += salery;
//     // console.log('Total',totalSalary)
// }

//     console.log('Total',totalSalary)



/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {

  if (i % 2 !== 0) {
    // console.log('Не чётное: ', i);
    continue;
  }

  // пишем в сумму
  console.log('чётное: ', i);
  total += i;

  // аналог +=
  // total = total + i;
}

console.log('total: ', total);
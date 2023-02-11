// Виведіть на екран загальну кількість яблук і винограду.
// Різницю яблук та винограда.
const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = grapes - apples;
console.log(diff);

// // Заміни вираз перевизначення комбінованим оператором +=.

let students = 100;
// students = students + 50;
students += 50;
console.log(students);

// // Розбери пріоритет операторів в інструкції надання
//  значення змінної result.
const result = 108 + 223 - 2 * 5;
// Спочатку множеення, потім робима математичні дії зліва на право
console.log(result);

// // Напиши скрипт, який виводить у консоль заокруглені
//  вгору/вниз і т.д. Значення змінної value.
// //  Використовуй методи Math.floor(), Math.ceil()
// та Math.round(). Перевірте, що буде в консолі при
// значеннях 27.3 і 27.9.

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
const value = 27.3;
const value1 = Math.floor(value);
const value2 = Math.ceil(value);
const value3 = Math.round(value);

console.log(value1);
console.log(value2);
console.log(value3);

// Склади речення за допомогою шаблонних рядків A has B bots in stock,
//  де A, B - змінні вставлені в рядок.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`; // Новий синтаксис
const message1 =
  companyName +
  ' has ' +
  (repairBots + defenceBots) +
  ' bots ' +
  'in ' +
  'stock'; //Старий синтаксис
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
console.log(message1);

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат
// висоти людини за метри.

// Вага та висота зберігаються в змінних weight і height, але не як числа,
//  а у вигляді рядків (спеціально для завдання).
// Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.

// Індекс масії тіла необхідно округлити до однієї цифри після коми;

let weight = '88,30';
// Замінюємо кому на крапку
// Приводимо Стрінгу до числа
let height = '1.75';
weight = Number(weight.replace(',', '.'));
console.log(weight);
height = Number(height);
console.log(height);
const bmi = (weight/ Math.pow(height,2)).toFixed(1);
console.log(bmi);
// const bmi = // 28.8

// Яким буде результат виразів?
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0_%E2%80%94_A

console.log(10 >= '7'); //true

console.log('2' > '12'); //true

console.log('2' < '12'); //false

console.log('4' == 4); //true

console.log('6' === 6); //false

console.log('false' === false); //false

console.log(1 == true); //true

console.log(1 === true); //false

console.log('0' == false); //true

console.log('0' === false); //false

console.log('Papaya' < 'papaya'); //true

console.log('Papaya' === 'papaya'); //false

console.log(undefined == null); //true

console.log(undefined === null); //false

// Використовуючи конструкцію if..else та prompt, напиши код, який запитуватиме:
// "Яка офіційна назва JavaScript?".Якщо користувач вводить ECMAScript, то показуй alert з рядком "Вірно!", інакше - "Не знаєте? ECMAScript!"

// const call = prompt("Яка офіційна назва JavaScript").toLowerCase();
// const callName = 'ECMAScript'.toLowerCase();

// if (call === callName) {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }


// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль. Якщо було введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".

// const ask = Number(prompt('Please, write nubmer!'));
// if (ask > 0) {
//   console.log('Це позитивне число');
// } else if (ask === 0) {
//   console.log('Це нуль');
// } else if (ask < 0) {
//   console.log("Це від'ємне число");
// } else {
//   console.log('Це не число.')
// }


// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ
// let link = 'https://somesite.com/about';
// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);


// Напиши скрипт для відображення часу дедлайн здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"

const deadline = 0;
let messageDeadline = '';
if (deadline === 0) {
  messageDeadline = 'Сьогодні';
} else if (deadline === 1) {
  messageDeadline = 'Завтра';
} else if (deadline === 2) {
  messageDeadline = 'Післязавтра';
} else if (deadline >= 3) {
  messageDeadline = 'Дата в майбутньому';
} 

console.log(messageDeadline);



// Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але якщо число кратне 5.
const max = 100;
const min = 20;
for (let i = min; i <= max; i += 1) {

  if (i % 5 === 0)
    console.log(i);
}


// Створи світлофор

// const color = prompt('Enter color')
// console.log(color);

// // const test = color || 'DONT WORK!'
// // console.log(test);
// const a = new Date().getMilliseconds()
// console.log();
// switch (color) {
//     case 'red':
//         console.log('STOP!!!')
//         break;
//     case 'yellow':
//         console.log('READY !!!')
//         break;
//     case 'green':
//         console.log('GO !!! || RUN !!!')
//         break;
//     default:
//         console.log('BE CAREFULL !!!')
// }
// const b = new Date().getMilliseconds();

// console.log(b - a);

/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

let elementWidth = '50px';
const resultW = parseInt(elementWidth);
console.log(resultW)


let elementHeight = '200.74px';
const resultX = parseFloat(elementHeight);
console.log(resultX);


/*
 * - Метод число.toFixed(digits)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.16472;
const numberSalary = Number(salary.toFixed(3));
console.log(numberSalary);
console.log(salary);

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
let quantity = '30';
let value = 'Эту строку невозможно привести к числу';
// const newValue = Number(value.length);
// const newValue1 = Number(value[0]);
// console.log(newValue);
// console.log(newValue1);
// console.log(quantity);
// console.log(value);


/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const base = 2;
// const power = 5;

// const newRes = Math.pow(base, power);
// console.log(newRes);

// console.log(base ** power);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
// const writeNumber = prompt('ввести число');
// const numberTypeOf = Number(writeNumber);
// console.log(numberTypeOf);

//  2. попросить ввести степень и сохранить в переменную
// const writePower = prompt('ввести степень');
// const powerTypeOf = Number(writePower);
// console.log(powerTypeOf);

//  3. Возвести введенные данные в степень и вывести
// const resultAll = numberTypeOf ** powerTypeOf;
// console.log('Total',resultAll);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
// Math.random() * (max - min) + min
// const max = 80;
// const min = 10;

// const resultRandom = Math.round(Math.random() * (max - min) + min);

// console.log(resultRandom);
const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
console.log(colors);

const colorMax = colors.length - 1;
console.log(colorMax);
const colorMin = 0;
console.log(colorMin);

const resultColor = Math.round(Math.random() * (colorMax - colorMin) + colorMin);
// console.log(resultColor);
const color = colors[resultColor];
console.log(color);

document.body.style.backgroundColor = color;

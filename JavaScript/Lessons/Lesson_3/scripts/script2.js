//ФУНКЦИИ

//Функция - это всегда какое-то действие

// ОБЪЯВЛЕНИЕ ФУНКЦИИ (Function declaration)

//===========================================
// function sum() {    <= шаблон
//     //Тело функции
//   }

//   sum();
//===========================================

// Функция всегда должна что-то возвращать (return)

function getSum() {
  // функция с ограниченными возможностями
  // let a = 4 + 4;
  // return a;
  return 4 + 4; // короткая запись
}

console.log(getSum());

// функция с расширенными возможностями
function getSum1(num1, num2 = 3) {
  // => значение по умолчанию
  let b = num1 + num2;
  return b;
  // return num1 + num2;   => короткая запись
}

console.log(getSum1(2, 3)); // 5
console.log(getSum1(5, 7)); // 12
console.log(getSum1(10)); // 13    => не указано второе значение и используентся значение по умолчанию (см. выше)

//NaN - not a number
// 5 + undefined = NaN
// 5 + '5' = 55
// 5 + true = NaN

function getGreeting(firstName = "Elena") {
  // => значение по умолчанию
  return `Hello,  ${firstName}`;
}

console.log(getGreeting("Samanta"));
console.log(getGreeting("Vanessa"));
console.log(getGreeting("Sabrina"));
console.log(getGreeting()); //   => не указано второе значение и используентся значение по умолчанию (см. выше)

//==============================================================
//   Правила наименования функций
//   1. использовать настоящие английские слова
//   2. использовать snake_case или camalCase
//   3. первое слово глагол (get, show, sum, divide и т.д.)

//==============================================================

//Напишите функцию, принимающую 3 аргумента и возвращающую результат умножения чисел друг на друга. Значение последнего аргумента по умолчанию должно быть равно 1.
//Выведите в консоль результат вызова функции

function getMultiplication(num1, num2, num3 = 1) {
  return num1 * num2 * num3;
}

console.log(getMultiplication(1, 2, 3)); // 6
console.log(getMultiplication(1, 2)); // 2

//Напишите функцию, принимающую 2 аргумента firstname и age и возвращающую сообщение в формате "Hello, FIRSTNAME. Your age is AGE". По умолчанию указать значения 'Elena' для firstname и 18 для age

function getGreeting1(firstName = "xxxxx", age = 0) {
  return `Hello, ${firstName}. Your age is ${age}`;
}

console.log(getGreeting1("Olga", 20));
console.log(getGreeting1("Anton", 41));
console.log(getGreeting1("Artem"));
console.log(getGreeting1(undefined, 54)); //  => пропустить первое значение
console.log(getGreeting1());

//Напишите функцию, которая принимается в себя 2 аргумента и возвращает результат деления большего числа на меньшее.


function divideNum(num1, num2) {
  if (num1 > num2) {
    return num1 / num2;
  } else {
    return num2 / num1;
  }
}

console.log(divideNum(10, 5));
console.log(divideNum(5, 9));



function pow0(value, p) {
  const result = value ** p;
  console.log(result);
}

pow0(4, 2);
pow0(2, 2);

function pow(value, p) {
  const result1 = value ** p;
  return result1;
}

// const result1 = pow (2, 6);
// const result2 = pow (2, 6);
// const result3 = pow (2, 6);

// console.log(result1);
// console.log(result2);
// console.log(result3);

// //console.log(result1 + result2 + result3);'

// с этими значениями можно работать дальше

// const cat_sum = pow(3, 2) + pow(4, 2);
//const hip = pow(cat_sum, 0.5);

const hip = pow(pow(3, 2) + pow(4, 2), 0.5);
console.log(hip); // 5

// ((5*6+4) / 2 + 10) ** 2
// (34 / 2 + 10) ** 2
// (27) ** 2

// pow(pow(3, 2) + pow(4, 2), 0.5)
// pow(9 + pow(4, 2), 0.5)
// pow(9 + 16, 0.5)
// pow(25, 0.5)

// Опишите функцию, которая в качестве аргументов получает два числа
// и возвращает наибольшее

function getMaxNum(a, b) {
  return Math.max(a, b);
}
console.log(getMaxNum(5, 20));

function getMaxNum1(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(getMaxNum(5, 20));
console.log(getMaxNum1(40, 23));

// описать функцию, которая получает в качестве аргумента число и
// возрващает true, если оно больше или равно нулю и false в ином случае

function check(a) {
  if (a >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check(5));
console.log(check(-3));

// короткая запись

function check2(a) {
  return a >= 0;
}

console.log(check(3));
console.log(check(-6));

// написать функцию, которая принимает 3 числовых аргумента и проверяет возможность
// построения треугольника с указанными сторонами

// Если построить можно, функция возвращает true, а в ином случае false

function triangle(a, b, c) {
  if (a + b > c && c + b > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}

console.log(triangle(5, 7, 18));
console.log(triangle(6, 5, 3));
console.log(triangle(5, 12, 1));

// c использованием Math.random() и Math.round() реализуйте функцию, которая возвращает
// случайное число от 1 до 6

function random_value() {
  return Math.round(Math.random() * 5 + 1);
}
console.log(random_value());

//  СТРЕЛОЧНЫЕ ФУНКЦИИ

const pow3 = (value, p) => {
  return value ** p;
};

// ======> короткая запись
const pow4 = (value, p) => value ** p;

console.log(pow3(3, 2));
console.log(pow4(4, 2));

// необходимо написать стрелочную функцию, которая получает в качестве аргумента число
// и возвращает true, если оно больше 0 и false в ином случае

const check3 = (a) => a > 0; // ===> если имеем один аргумент то скобки можно не ставить  ===> const check3 = a => a > 0;
console.log(check3(2));
console.log(check3(-3));

// написать стрелочную функцию, которая в качестве аргумента получает число (год)
// и возвращает true если год високосный и false в ином случае

// ==  - пытается привести к одному типу данных
// ===  - не приводит к одному типу

const check_years = (year) =>
  (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
// год делится на 4 без остатка И не делется 100 ИЛИ год делется на 100 без остатка

console.log("2022 ", check_years(2022)); // false
console.log("2023 " + check_years(2023)); //false
console.log("2024 " + check_years(2024)); // true
console.log("2025" + check_years(2025)); //false
console.log("2026" + check_years(2026));
console.log("2027" + check_years(2027));
console.log("2028 " + check_years(2028));
console.log("2029 " + check_years(2029));

// написать функцию, которая получает в качестве аргумента число и возвращает true,
// если оно четное
// и false если нечетное

const number_check = (num) => num % 2 === 0; // число делится на 2 без остатка
console.log(number_check(2));
console.log(number_check(4));
console.log(number_check(5));
console.log(number_check(7));

const a = number_check;
console.log(a(100));

const compare = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const runInputData = (func) => {
  const value1 = +prompt("Укажите число ");
  const value2 = +prompt("Укажите число ");
  return func(value1, value2);
};

const result = runInputData(compare);
console.log(result);

// console.log('Hello, world!');

/*
alert('Hello, world!');     ----> инструкции/ команды
alert('2 Hello, world!');
*/

// let a = 10;
// console.log(a);

// a = 110;
// console.log(a);

// const b = 12;
// console.log(b);

// let number_of_workers = 5; --> переменные
// number_of_workers - snake_case
// numberOfWorkes - camalCase
// number-of-workers - kebab-case
// numberofworkers - очень плохой способ

// let number = 5;  // число
// let string = 'abc' // строка

// 'a' , "a"  -  можно использовать для переменных

// `` - можно включать переменные соблюдаем все пробелы

// let c = 5;
// let d= 10;

// console.log (с + d);

let greeting = 'Hello';
let firstname = "Maria";

console.log('Приветствие через конкатенацию: ' + greeting + ' ' + firstname); //конкатенация
console.log(`Приветствие через интерполяцию: ${greeting} ${firstname}`); //интерполяция


let a = 10;
let b = 'Hello';

//проверка типа данных (typeof a)
console.log(typeof a); // number *оператор 
console.log (typeof b); // string 
//console.log(typeof a);     *оператор 
//console.log (typeof (b));  *функция 


let c = (7+'7'); // --> '7' + '7' = '77'
let d= (7-7); // --> 7 - 7 = 0

console.log(c);
console.log(d);


let i = +'100h';

console.log(i);  // NaN - not a number
console.log(typeof i); // number




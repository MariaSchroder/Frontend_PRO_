
// /MATH/

let a = Math.pow(10, 3);
let b= Math.abs(5); // возврвщает 5
let с= Math.abs(-5); // возврвщает 5

let d= Math.ceil(4.33); // 5 - округлит до верхнего значения 
let e= Math.floor(4.33); // 4 - округлит до нижнего значения 
let f= Math.round(4.33); // 4 - округлит по математическим правилам 

console.log(d);
console.log(e);
console.log(f);

// 5 - Math.ceil()
// 4.33
// 4 - Math.floor()
// 3
// 2
// 1
// 0
// -1
// -2
// -3
// -4 - Math.ceil()
// -4.33
// -5 - Math.floor()
  
let min = Math.min(3, 45, 91, -42, 520, -428); // возврвщает минимум из чисел
let max = Math.max(3, 45, 91, -42, 520, -428); // возврвщает максимум из чисел

let random = Math.random(); // генерирует рандомное число от 0 до 1

console.log(min);
console.log(max);
console.log(random);


// Напишите программу, которая выводит случайное число от 8 до 10.

let step_1 = Math.random(); // выводит случайное число от 0 до 1
let step_2 = step_1 * 10; // случайное число из step_1 умножаем на 10
// let step_2 = step_1 * 10 + 1; // если прибавить 1 то мы исключаем попадание 0
let step_3 = Math.round(step_2); // округляет число из step_2


console.log(step_1);
console.log(step_2);
console.log(step_3);


// пример как записать в одну строчку

let random_num = Math.random(Math.random() * 10); // 0 - 10
let random_num2 = Math.random(Math.random() * 10 + 1); // 1 - 11
let random_num3 = Math.random(Math.random() * 10 + 2); // 2 - 12

let random_num4 = Math.random(Math.random() * 9); // 0 - 9

let random_num5 = Math.random(Math.random() * 9 + 1); // 1 - 10

// сначало определяем диапазон, а потом смотрим куда его сместить




Напишите программу, которая выводит случайное число от 15 до 25

let random_step1 = Math.random ();
let random_step2 = random_step1 * 10 + 15 ;
let random_step3 = Math.round(random_step2);


console.log(random_step3);

let random_num6 = Math.round(Math.random() * 10 + 15); // => 0 -10 => 15 - 25
console.log(random_num6);

// варианты
let random_num7 = 15 + Math.round(Math.random() * 10); // => 0 -10 => 15 - 25
let random_num8 = Math.floor(Math.random()* 11);  // 0 - 10





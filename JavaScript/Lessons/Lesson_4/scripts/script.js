// ОБЪЯВЛЕНИЕ ФУНКЦИИ (Function declaration)

// функцию можно вызвать в любом месте

function getGreeting1(firstName = "xxxxx", age = 0) {
  return `Hello, ${firstName}. Your age is ${age}`;
}

console.log(getGreeting1("Olga", 20));
console.log(getGreeting1("Anton", 41));
console.log(getGreeting1("Artem"));
console.log(getGreeting1(undefined, 54)); //  => пропустить первое значение
console.log(getGreeting1());

//ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
// сначало обьявляем потом вызываем

let gretting = function getHello(name, lastname) {
  return `Hello ${name} ${lastname}!`;
};

console.log(gretting("Olga", "Petrova"));

//СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)
// современое написание кода
// сначало обьявляем потом вызываем

// длинная запись

let gretting_arrow = (name, lastname) => {
  return `Hello ${name} ${lastname}!`;
};

console.log(gretting_arrow("Anton", "Sidarov"));

// короткая запись

let gretting_arrow2 = (name, lastname) => `Hello ${name} ${lastname}!`;

console.log(gretting_arrow2("Anna", "Kozlova"));

// Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль.

// 1 - ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ пример

function getLength(string) {
  // => устаревший способ
  return string.length;
}

console.log(getLength("Hello!!!"));

// 2 - СТРЕЛОЧНЫЕ ФУНКЦИИ пример

let getLength1 = (string1) => string1.length; // => новый способ

console.log(getLength1("Hello"));

// Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// 1
function getExp(num1, num2 = 2) {
  return num1 ** num2; // return.Math.pow(num1, num2);
}

console.log(getExp(2, 3)); //8
console.log(getExp(2)); //4

// 2
let getExp2 = (num1, num2 = 2) => num1 ** num2; // Math.pow(num1, num2);

console.log(getExp2(2, 5));
console.log(getExp(3));

// Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. Выведите результат в консоль. Предложите два варианта решения (через условный оператор и Math.max()).

// 1
function getMaxNum(num1, num2) {
  return Math.max(num1, num2);
}

console.log(getMaxNum(10, 7));

// 2
function getMaxNum1(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(getMaxNum1(3, 7));

// 3
let getMaxNum2 = (num1, num2) => Math.max(num1, num2);

console.log(getMaxNum2(15, 7));

// 4

let getMaxNum3 = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(getMaxNum3(15, 26));





// Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные числа по убыванию. Используйте условный оператор.




function sortNums(num1, num2, num3) {
  
  if(num1 > num2 && num1 > num3){
    if(num2 > num3){
      console.log(num1, num2, num3)
    } else {
      console.log(num1, num3, num2)
    }


  } else if (num2 > num1 && num2 > num3) {
    if(num1 > num3) {
      console.log(num2, num1, num3)
    } else {
      console.log(num2, num3, num1)
    }


  } else {
    if(num1 > num2) {
      console.log(num3, num1, num2)
    } else {
      console.log(num3, num2, num1)
    }
  }
}


sortNums(3, 8, 2); // 8, 3, 2
sortNums(-3, 88, 12); // 88, 12, -3





// Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них. Используйте условный оператор.

function sortNums1(a, b, c, d, e){
  
  let max = a;
  
  if (b > a){
      max = b;
  }

  if (c > b) {
    max = c;
  }

  if (d > c) {
    max = d;
  }

  if (e > d) {
    max = e;
  }

  return max;
}

console.log(sortNums1(10, 8, 3, 82, -25));




let getsortNums2 = (a, b, c, d, e) => Math.max(a, b, c, d, e);
console.log(getsortNums2(4, 6, 55, -52, 99));



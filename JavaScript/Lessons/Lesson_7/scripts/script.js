// // Напишите функцию, которая принимает два числовых аргумента a и b (a > b), и выводит в консоль числа от a до b кратные 3.
// // Пример 10, 3 => 9, 6, 3


// const getNums = (a, b) => {
//     for(i = a; i >= b; i--){
//         if(i % 3 === 0){
//             console.log(i)
//         }
//     }
// }

// getNums(10, 1);


// // Напишите функцию, которая суммирует числа от 0 до 100 кратные 3 или 5. Выведите сумму в консоль.


// const getNums_1 = () => {
//     let sum = 0;
//     for(i = 0; i <= 100; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             sum += i    //sum = sum + i
//         }
//     } 
//     return sum
// }

// console.log(getNums_1());   // 2418


// //Напишите функцию, формирующую массив из чисел от 0 до 50 кратных 5.
// // => [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]


// const getArray = () => {
//     let result = [];
//     for(let i = 0; i <= 50; i++){
//         if(i % 5 === 0 && i !== 0){     // пропускаем 0
//             result.push (i)
//         }
//     }
//     return result
// }

// console.log(getArray());


// // Вариант 2
// let isDivided = (a, b) => {
//     let arr = [];
//     let index = 0;
//     for (let i = a; i <= b; i++) 
//     {
//     if (i % 5 == 0 && i !== 0) {
//         arr[index] = i;
//         index++;
//     }
//     }
//     return arr;
// }

// console.log(isDivided(0, 50));


// // Напишите функцию, формирующую массив из чисел от a до b (b > a) кратных 2.


// const getArray_1 = (a, b) => {
//     let arr = [];
//     for(let i = a; i <= b; i++){
//         if(i % 2 === 0){
//             arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(getArray_1(5, 30));



// // Напишите функцию, которая переворачивает строку. Входная строка задается как массив символов s.


// const reverseStr = (arr) => {
//     let revArr = [];
//     for(let i = arr.length - 1; i >= 0; i--){
//         revArr.push(arr[i])
//     }
//     return revArr
// }

// console.log(reverseStr(["h","e","l","l","o"]));


// // короткая запись
// // МЕТОД REVERSE 
// const reverseStr_1 = (arr) => arr.reverse();

// console.log(reverseStr_1(["h","e","l","l","o"]));





// CALLBACK
// Коллбэк (callback) - änj финкция, переданая в другую функцию в качестве aргумента


let numsArray = [1, 2, 3, 4, 5];

const divideNums = (arr) => {
    let array = [];
    for(let i = 0; i < arr.length; i++){
        array.push(arr[i] / 2)
    }
    return array
}

const multNums = (arr) => {
    let array =[];
    for(let i = 0; i < arr.length; i++){
        array.push(arr[i] * 2)
    }
    return array
}


console.log(divideNums(numsArray));
console.log(multNums(numsArray));


// запись с CALLBECK 



let numsA = [1, 2, 3, 4, 5, 6, 7];


const changeNums = (arr, callback) => { // Функция высшего порядка - higher-order-function
    let array = [];
    for(let i = 0; i < arr.length; i++){
        array.push(callback(arr[i]))    // передаём инструкцию и работаем по инструкции с каждым элементом массива
    }
    return array
}


const div = (num) => num / 2;   // => Callback - инструкции (функции)
const mul = (num) => num * 2;
const sub = (num) => num + 2;
const add = (num) => num - 2;

console.log(changeNums(numsA, div));
console.log(changeNums(numsA, mul));
console.log(changeNums(numsA, sub));
console.log(changeNums(numsA, add));




// МЕТОДЫ МАССИВОВ

// .forEach() - выполяняет переданную функцию один раз для каждого элемента массива, ничего не возвращает (undefined)  принемает в себя какуюто callback функцию 



let age = [40, 45, 53, 23, 12, 7];

for(let i = 0; i > age.length; i++){
    if(age[i] >= 18){
        console.log(age[i])
    }
}


age.forEach(el => {
    if(el >= 18){
        console.log(el)
    }
})  // age.forEach(el => {})


let age_arr = [];
age.forEach(el => age_arr.push(el * 2));

console.log(age_arr);



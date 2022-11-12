// // // Homework

// // // Дан массив
// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];



// // // Сформируйте новый массив с числами меньше 100. Предложите два способа решения (цикл for и метод .forEach).


//     let newArr_0 = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] < 100) {
//             newArr_0.push(array[i]);
//         }
//     }

// console.log(newArr_0);




// let newArr_1 = []
// array.forEach(el => {
//     if(el < 100) {
//         newArr_1.push(el)}
// })


// console.log(newArr_1);



// let new_array_f1 = array.filter( el => el < 100);

// console.log(new_array_f1);




// // Сформируйте новый массив с числами, которые кратны 2. Предложите два способа решения (цикл for и метод .forEach).


//         let newArr_2 = [];
//         for(let i = 0; i < array.length; i++){
//             if(array[i] % 2 === 0 && array[i] !== 0){
//                 newArr_2.push(array[i]);
//             }
//         } 
    
//         console.log(newArr_2);
    
    

//     let newArr_3 = [];
//     array.forEach(el => {
//         if(el % 2 === 0 && el !== 0) {
//             newArr_3.push(el)
//         }
//     })

//     console.log(newArr_3);


// let new_array_f2 = array.filter( el => el % 2 === 0 && el !== 0);

// console.log(new_array_f2);




// //     // Сформируйте новый массив с числами, которые заканчиваются на 5. Предложите два способа решения (цикл for и метод .forEach).


//     let new_array_5 = [];
//     for(let i = 0; i < array.length; i++){
//     if(array[i] % 10 === 5){
//         new_array_5.push(array[i])
//     }
//     }
    
//     let new_array_6 = [];
//     array.forEach(el => {
//     if(el % 10 === 5){
//         new_array_6.push(el)
//     }
//     })
    

// let new_array_f3 = array.filter(el => el % 10 === 5);

// console.log(new_array_f3);




// // Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'. Предложите два способа решения (цикл for и метод .forEach).
    
//     let new_array_7 = [];
//     for(let i = 0; i < array.length; i++) {
//     if(array[i] >= 100){
//         new_array_7.push('>100')
//     } else {
//         new_array_7.push('<100')
//     }
//     }
    
//     let new_array_8 = [];
//     array.forEach(el => {
//     if(el >= 100){
//         new_array_8.push('>100')
//     } else {
//         new_array_8.push('<100')
//     }
//     })
    

// let new_array_f4 = array.filter(el = el >= 100)


// console.log(new_array_f4);



// let new_array_m = array.map(el => el >= 100 ? ">100" : "<100");

// console.log(new_array_m);




// //==================================================================================
// // МЕТОДЫ МАСИВОВ


// // .forEach() - выполяняет переданную функцию один раз для каждого элемента массива, ничего не возвращает (undefined)  принемает в себя какуюто callback функцию 

// // .filter() - возвращает новый массив со всеми элементами, прошедшие проверку, он не изменяет данный массив только фильтрует

// // .map() - возвращает новый массив с результатом вызова указанной функции для каждого элемента (изменяет каждый элемент) берёт каждый элемент и изменяет его

// // .reduce() - служит для того что мы получили какое-то финальное значение, совершив итерацию по массиву. Возвращает финальное значениеб число  (найти сумму чегото)



// // сформируйте массив с числами > 100
// let array2 = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// //==================================================================================

// // .forEach()

// let newArr1 = []
// array.forEach(el => {
//     if(el > 100) {
//         newArr_1.push(el)}
// })

// console.log(newArr1);


// //==================================================================================

// // .filter()

// let newArr2 = array.filter(el => {
//     return el > 100                  // короткая запись
// })                                  // let newArr_2 = array.filter(el => el > 100);

// console.log(newArr2);


// // сформируйте массив с символами >= 5

// let users = ['Ivan', 'Victoria', 'olga', 'Elena', 'Anton'];

// let new_users = users.filter(el => el.length >= 5);

// console.log(new_users);



// // Дан массив из строк. Вывести только слова, длиннее 10 символов

// let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];

// let new_arr = arr.filter (el => el. length > 10);
// console.log(new_arr);

// //==================================================================================

// // .map()


// // вернуть новый массив с каждым элементом * на 2

// let mult = array2.map(el => el * 2);
// console.log(mult);



// let age = [23, 15, 18, 56, 43, 28];

// // Сформировать новый массив с совершеннолетними

// let age_adult = age.filter(el => el >= 18);

// console.log(age_adult);

// // Сформировать новый массив, где возраст всех совершеннолетних заменен на 100

// let age_changed = age.map(el => el = 100);

// console.log(age_changed);


// // Короткая запись

// // let age_adult1 = age.filter(el => el >= 18).map(el => el = 100);

// // console.log(age_adult1)




// // Сформировать массив, где несовершеннолетние заменены на 'child', а совершеннолетние на 'adult'


// let adults = age.map(el =>{
//     if(el < 18){
//         return el = 'child'
//     }else {
//         return el = 'Adult'
//     }
// });

// console.log(adults);


// // тернарный оператор (условие ? true : false)

// let adults2 = age.map(el => el < 18 ? "child" : "adult");

// console.log(adults2);





// // Сформировать массив из последних цифр элементов => [3, 5, 8, 6, 3, 8]


// let age_arr = age.map (el => el % 10);          // .map
// console.log(age_arr);


// let newAge = [];                                // .forEach
// age.forEach(el => newAge.push(el % 10));

// console.log(newAge);






// .reduce()

// let numbers = [1, 2, 3, 4, 5]; // 15            // с циклом for 
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// };
// console.log(sum);




// let result = numbers.reduce((total,el) => {     // с .reduce 
//     return total + el
// }, 0);      // => 0 (initialValue)  указывает с кокого элемена будем считать

// // let result = numbers.reduce((total,el) => total + el, 0);   // короткая запись

// //console.log(result);        // 15



// // Дан массив
// let nums = [3, 6, 7, 1]; // 
// // (3 + 6 + 7 + 1) / 4 = 4.25

// //Найти среднеарифмитическое всех элементов массиов



// let res = nums.reduce((total, el) => total + el) / nums.length;
// console.log(res);




// Задан массив:
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];
console.log(arr)

// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.

arr.unshift(67);        // добавить в начало
arr.push(56);           // добавить в конец

console.log(arr);


// 2. Сформируйте массив из чисел меньше 100. Выведите в консоль результат.

let arr_less_100 = arr.filter(el => el < 100);
console.log(arr_less_100);

// 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7.

let arr_end_7 = arr.filter(el => el % 10 === 7);

console.log(arr_end_7);



// 4. Найдите сумму чисел, которые меньше 100.

let sum = arr.filter(el => el < 100).reduce ((total, el) => total + el);
//  let sum1 = arr_less_100.reduce ((total, el) => total + el); такая же запись но с готовой переменной

console.log(sum);



// 5. Найдите сумму чисел, которые заканчиваются на 7.

let sum_of_7 = arr.filter(el => el % 10 === 7).reduce((total, el) => total + el);

// let sum_of_7 = arr_end_7.reduce ((total, el) => total + el);

console.log(sum_of_7);







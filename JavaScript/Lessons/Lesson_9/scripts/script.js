// ЗАДАЧА 1
// Дан массив с числами.
let arr = [1, -6, 4, 0, 9, -5, 16];
// Создайте новый массив, состоящий только из отрицательных чисел.

let arr_negative = arr.filter(el => el < 0);
console.log(arr_negative);


// Создайте новый массив, состоящий только из четных чисел.

let arr_even = arr.filter(el => el % 2 === 0 && el !== 0);
console.log(arr_even);


// Напишите программу, высчитывающую количество отрицательных чисел в этом массиве.

let negativ_count = arr_negative.length;



// ЗАДАЧА 2

// Дан массив с числами.
let arr2 = [1, -6, 4, 0, 9, -5, 16];


// Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.

let numbers = arr2.filter(el => el > 0).map(el => Math.sqrt(el));
console.log(numbers);


// ЗАДАЧА 3
// Дан массив из разных типов данных.
let arr3 = [8, 'hello', true, false, 'bye', 122, undefined, 15];
// Необходимо сформировать массив из чисел (если значение не число, то подставить -1)

let arr_numbers = arr3.map(el => typeof el === 'number' ? el : -1);
console.log(arr_numbers);




// ЗАДАЧА 4
// Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность).

let arr4 = [
    ['Максим', 'Грибов', true],
    ['Антон', 'Куликов', true],
    ['Светлана', 'Иванова', false],
    ['Ольга', 'Петрова', true],
    ['Сидр', 'Сидоров', false]
];


// Напишите filter, который оставляет только активных пользователей (true).

let arr_activ = arr4.filter(el => el[2] === true);  // проверка фильтром (если знаем где находится true и false)
console.log(arr_activ);

// let trueArray = arr4.filter((el) => {              // прерка циклом (если НЕ знаем где находится true и false)
//     for (let i = 0; i < el.length; i++) {
//         if (el[i] === true) {
//             return true;
//         }
//     }
// });



// Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки.


let arr_activ_users = arr4.filter(el => el[2] === true).map(el => `${el[0]} ${el[1]}`);  // проверка фильтром (если знаем где находится true и false)
console.log(arr_activ_users);   //  ['Максим Грибов', 'Антон Куликов', 'Ольга Петрова']







//=====================================================================================

let array = [1, -6, 4, 0, 9, -5, 16];

// Создайте новый массив, состоящий только из отрицательных чисел

//ИМПЕРАТИВНЫЙ СПОСОБ - говорим программе КАК выполнить задачу

let new_array = [];
for (let i = 0; i < array.length; i++){
    if(array[i] < 0) {
    new_array.push(array[i])
    }
}


//ДЕКЛАРАТИВНОЕ СПОСОБ - говорим программе ЧТО надо сделать

let new_array2 = array.filter(el => el < 0);



//=========================

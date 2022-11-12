// Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.
// hello => 
// h
// e
// l 
// l 
// o 


const get_letter = (str) => {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
    }
}

get_letter('Java Script');

// i < str.length           одинаковые записи
// i <= str.length - 1



// МАССИВ (ARRAY) []

// Массив это - структура данных, которая может хранить в себе разные типы данных.

// Данные помещаются в квадратные скобки [] и разделяются запитой

// свойство .length применяетка к массивам тоже, оно будет считать индекс массива(отчет начинается с 0) => console.log(array.length - 1)


let str = 'Maria';

let array = ['hello', 5, true, false, 23, 'bye', str];
//             0     1    2     3     4     5      6     =>  счет массива начинается с 0 


console.log(array);             //выведит все содержимое массива

console.log(array.length - 1); // => считает кол-во индекса (сколько в строке) => 6

console.log(array.length);      // => 7

console.log(array[3]);          // => прочитывает внутри индекса ( содержимое) => false

console.log(array[0].length);   // => 5  считываем длину строки

console.log(array[0][1]);       // => e считаем длину строки и выводим букву из строки 

// array[0] --- обращение к индексу элемента внутри массива
// [1] --- у этого элемента мы цепляем букву под индексом 1




// Найти длину последнего элемента массива. Заранее не известна длина массива.


let str_1 = 'hello, word';
let elements = ['hello', 5, true, false, 23, 'bye', 76, true, undefined, null, str_1];

console.log(elements[elements.length -1].length); // 11 => индекс последнего элемента

let tmp = elements[elements.length - 1];    // d => последняя буква в элементе
console.log(tmp[tmp.length - 1]);


// console.log(elements.length);       // 11 => считает количество элементов внутри массива / длина массива
// console.log(elements.length - 1);   // 10 => индекс последнего элемента

// console.log(elements[elements.length - 1]); // = elements[10] - str_1 = 'hello, world'
// console.log(elements[elements.length - 1].length); // длина str_1


let text = 'good morning';
// console.log(text[0]); // 

let arr = [1, 2, 3, 4, 5, 'hello'];
// console.log(arr[0]); // 1
// console.log(arr.length -1)         =>  5  --- выводит индекс последнего элемента
// console.log(arr[arr.length - 1]);  => 'hello'--- выведит что внутри

// длина массива - 1 = индекс последнего элемента



// Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
// Если входной массив пуст, функция возвращает null.
// Если есть несколько одинаковых по длине элементов (самый длинный) - функция возвращает первый из этих элементов.
// Для начала пропишите аргументы функции.  
// Пример: [ 'one', 'two', 'three' ] => 'three'


const get_long_string = (array) => {
    
    if(array.length === 0){
        return null
    }

    let result = array[0];

    for (let i = 1; i < array.length; i++){
        if (array[i].length > result.length){
            result = array[i]
        }
    }
    return result
}

console.log(get_long_string(['one', 'two', 'three']));  // three
console.log(get_long_string([]));                       // null






// МЕТОДЫ 

// Методы это встроеные функции в JS написаные за нас

let arr_1 = [1, 2, 3, 4, 5];

console.log(arr_1);

arr_1.push(6);          // => добавляет элемент в конец массива
arr_1.unshift(0);       // => добавляет элемент в начало массива

arr_1.pop();            // => извлекает/ удаляет  элемент из конца массива 
arr_1.shift();          // => извлекает/ удаляет  элемент из начала массива 

console.log(arr_1);


// Напишите цикл for, который создает массив из чисел от 1 до 10.


let arr_2 = [];
for (let i = 1; i <= 10; i++){
    arr_2.push(i)
}

console.log(arr_2);


// forEach - перебирает элементы массива и выполняет с ними callback функцию

// map - перебирает элементы массива и выполняет с ними callback функци то, что callback функция возвращает попадает в новый массив

// filter - перебирает элементы массива и выполняет с ними callback функцию те элементы, в которыми функция вернула true остаются в итоговом массиве, а иные отбрасываются


// find - возвращает первое значение в массиве, которое при вызове callback возвращает true

// reduce - получает callback функцию, которая получает результат предидущего вызова callback и следующий элемент из массива


const arr = [12, 4, 32, 45, 6, 43, 23]


//вывести эти числа в консоль (по одному)

// arr.forEach((elem) => console.log(elem));



// // вывести в консоль только четные числа

// arr.forEach((elem) => {
//     if(elem % 2 === 0){
//         console.log(elem)
//     }
// });

// // альтернативная запись

// const result = arr.filter(elem => elem % 2 ===0)
//                     .forEach(elem => console.log(elem));



// написать программуб которая формирует новый массив из квадратов чисел массива arr

//console.log(arr.map(elem => elem ** 2));


// написать программу, которая формирует новый массив из квадратов только 
// четных чисел массива arr (нечетные числа мы отбрасываем)





const result = arr.filter(elem => elem % 2 ===0)
                    .map(elem => elem **2);
console.log(result);



console.log(arr.filter(elem => elem % 2 ===0)
                    .map(elem => elem **2));


const arr2 = ['велосипед', 'самокат', 'ролики', 'лыжи'];

// [9, 7, 6, 4]

// написать программу, которая формирует из массива со строками массив с их длинами



const result2 = arr2.map(elem => elem.length);
console.log(result2);




// написать программу, которая формирует из массива со строками массив с объектами
// каждый объект состоит из свойства word (само слово) и length (длинна слова)


const result3 = arr2.map(elem => ({
    word: elem,
    length: elem.length
})
);
console.log(result3)




const arr3 = [
    {
        word: 'велосипед', 
        length: 9
    },
    {
        word: 'самокат', 
        length: 7
    },
    {
        word: 'ролики', 
        length: 6
    },
    {
        word: 'лыжи', 
        length: 4
    }
];


// необходимо сформировать массив из названий (word)

console.log(arr3.map(elem => elem.word));
































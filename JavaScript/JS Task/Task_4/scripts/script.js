// const lst = [14, 4, 32, 45, 43, 23];
// const lst1 = [-14, -4, -32, -45, -43, -23];


// //lst.forEach(elem => console.log(elem));

// function forEach(lst, callback){            // как работает по капотом
//     for (let i = 0; i < lst.length; i++){
//         callback(lst[i], i, lst)
//     }
// }

//forEach(lst, elem => console.log(elem));



// написать forEach, который выводит только четные числа в консоль



// lst.forEach(elem => {
//     if(elem % 2 ===0){
//        //console.log(elem)
//    }
// });



// // написать forEach который выводит в консоль наибольше значения из массива


// let tmp = 0;

// lst.forEach(elem => {
//     if(elem > tmp){     // = сравнение
//         tmp = elem      // = перезапись
//     }
// }) 
// //console.log(tmp);


// let tmp1 = lst1[0];         // возвратит то что ближе к нулю

// lst1.forEach(elem => {
//     if(elem > tmp1){     // = сравнение
//         tmp1 = elem      // = перезапись
//     }
// }) 
// console.log(tmp1);


// const result = lst.map(elem => elem ** 2)
// console.log(result);


// function map(lst, callback){                // как работает под капотом
//     const new_array = [];
//     for (let i = 0; i < lst.length; i++){
//         const new_elem = callback(lst[i], i, lst);
//         new_array.push(new_elem);
//     }
//     return new_array
// }
// console.log(map(lst, elem => elem ** 2));

const list = [-14, 4, -32, 45, 43, -23];

// написать метод map, который возвращает массив, в котором все отрицательные значения преобразованы в положительные
 // lst.map(...) // [12, 4, 32, 45, 43, 23]





// 1) написать функцию, которая получает число и возвращает положительное число

// func(12) -> 12
// func(-12) -> 12


// function plus2(a){
//     if(a < 0){
//         a *= -1
//     //  a = -a
//     } return a
// }
// console.log(plus2(12))
// console.log(plus2(-12))

// const res = list.map(a => a < 0 ? - a : a);
// console.log(res);


// const result = list.map(plus2);
// console.log(result);



// написать map, который преобразовывает нечетные числа в четные
// (прибавляет единицу)

// 1) написать функцию, которая преобразовывает нечетное в четное
// 2) встаивть функцию в map



// function getNum(value){
//     if (value % 2 !== 0){       // value % 2 === 0 ? value : value + 1 => тернарный оператор
//         value += 1
//     } return value
// }
// console.log(getNum(list));

// const resGetNum = list.map(value => value  % 2 === 0 ? value : value + 1);
// console.log(resGetNum);

// console.log(list.filter(elem => elem > 0))


let words = ['велосипед', 'самокат', 'ролики', 'телефон', 'стол', 'люстра'];

// // сформировать массив, который состоит из слов, не длиннее 6 символов

// console.log(words.filter(words => words.length <= 6));


// const add = word =>{            // создаём масив и добавляем в него новый элемент
//     words = [...words, word];
// }



// const add = word => words = [...words, word];   // создаём 
// const del = word => words = words.filter(elem => elem !== word);// удаляем 
// const read = () => words.forEach(elem => console.log('Слово: ' + elem));     // читаем
// const search = (substr) => words.filter(word => word.startsWith(substr));   // поиск




const add = word => words = [...words, word]; // создаём масив и добавляем в него новый элемент

add('стул'); 

console.log(words);


const del = word => words = words.filter(elem => elem !== word);// удаляем элемент из массива 
del('самокат');      
del('шкаф');
console.log(words);

const read = () => words.forEach(elem => console.log('Слово: ' + elem));
                // выводим весь массив на экран
read();                 

const search = (substr) => words.filter(word => word.startsWith(substr));
console.log(search('с'));           // поиск по массивам по первым символам




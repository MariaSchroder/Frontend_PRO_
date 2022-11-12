// arr [1, 2, 3, 4, 5];
// arr.pop ();     =>    удалить последнее значение в массиве
// arr.length = arr.lenght - 2; => альтернативная запись



// ОБЬЕКТЫ 


//  это все примитивный тип данных
// =====================================
let x = 'hello';    // string
let y = 7;          // number
let z = true;        //boolean

// undefined, null

// =====================================



let object = {
    firstname: 'Maria',
    lastname: 'Schroeder',
    age: 34,
    active: true
}


console.log(`Hello, ${object.firstname}! You are ${object.age} years old.`);

//let user = { let ag = 32} ;

// console.log(`Hello, ${object['firstname']} You are ${user[ag]} years old.!`);  

// второй способ записи (не используется)
// 1. если ключ состоит из двух и более слов
// 2. если ключ - это переменная





let arr = [ 'Hello', 4, true];

//   это такойже массив как и обычный но с обьектами 
const users = [
    {
        first_name: 'Ivan',
        last_name: 'Ivanov',
        age: 20,
        salary: 500
    },
    
    {
        first_name: 'Olga',
        last_name: 'Petrova',
        age: 12,
        salary: 250
    },

    {
        first_name: 'Irina',
        last_name: 'Alexandrova',
        age: 46,
        salary: 1500
    },

    {
        first_name: 'Denis',
        last_name: 'Sokolov',
        age: 30,
        salary: 760
    }
];


// console.log(arr[1]);        // выводим в консоль с простого массива

// console.log(`Hello ${users[3].first_name}!`);


// console.log(`Hello ${users[3].first_name}!`);

// console.log(`Hello ${users[0].first_name} your salary ${users[0].salary}!`);



// // 1. пройдите по массиву с обьектами циклом foreach и выведите каждый элемент в консоль

// users.forEach(el => console.log(el));


// //2. Пройдитесь по массиву с объектами циклом forEach и выведите в консоль значения first_name из каждого объекта
// users.forEach(el => console.log(`${el.first_name}`));



// //3. Добавить в конец массива объект со следующими значениями:

users.push({
    first_name: 'Anton',            // добаить данные в конец массива
    last_name: 'Gribov',
    age: 36,
    salary: 1760
});
console.log(users);


// // 4. Сформируйте массив из совершеннолетних пользователей


// let new_arr = users.filter(el => el.age >= 18);
// console.log(new_arr);



// // 5. Получите из всех объектов значения last_name и сформируйте из этих фамилий массив.
// // => ['Ivanov', 'Petrova', 'Alexandrova', 'Sokolov', 'Gribov']

// let name_arr = users.map( el => el.last_name);

// console.log(name_arr);

// // 6. Сформируйте массив, состоящий только из имен и фамилий пользователей. Выведите результат в консоль.
// // => ['Ivan Ivanov', 'Olga Petrova', 'Irina Alexandrova', 'Denis Sokolov', 'Anton Gribov']

// let new_name_array = users.map(el => `${el.first_name} ${el.last_name}`);
// console.log(new_name_array);




// // .find()  => возвращает элемент массива (не повторяет одинаковые элементы), когда нужно найти внутри обьекта


// // 7. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной => .find()


// const user_olga_find = users.find(el => el.first_name === 'Olga');
// const user_olga_filter = users.filter(el => el.first_name === 'Olga');

// console.log(user_olga_find); // {...} - возвращается элемент
// console.log(user_olga_filter); // [ {...} ] - возвращается массив



// const user_olga_find_salary = users.find(el => el.first_name === 'Olga' && el.salary === 250);

// console.log(user_olga_find_salary);




// // 8. Сформировать массив со всеми пользователями, чьи first_name начинаются с буквы I/i



let find_name = users.filter(el => el.first_name[0] === 'i' || el.first_name[0] === 'I');
console.log(find_name);

const find_name2 = users.filter(el => el.first_name[0].toLowerCase() === 'i');
console.log(find_name2);        // аналог 




// 9. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760', 'Anton Grobov (36)'];


let new_arr = users.filter(el => el.age >= 18);

let new_users =  new_arr.map(el => `${el.first_name} ${el.last_name} (${el.age}): ${el.salary},`);

console.log(new_users);

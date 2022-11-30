// localStorage - хранилище/ память браузера

localStorage.setItem('number_15', +15);

// .setItem(ключ, зачение) -> кладём информацию в localStorage

// .getItem() -> вытаскиваем информацию из localStorage

const a = localStorage.getItem('number_15');
// console.log(+a + 15); // 30
// console.log(a + 15); // 1515
// console.log(typeof a);


const numbers = [1, 2, 3, 4, 5];
localStorage.setItem('numbers_array', numbers);
const b = localStorage.getItem('numbers_array');
// console.log(b);
// console.log(typeof b);


// localStorage всегда даёт строку вне зависимости, что с него положено !!!


// Чтобы получить то , что мы положили в localeStrorage нужно использовать следующие методы

// JSON.stringify(3) - превращает формат JSON в строку 

// -> когда что-то нужно положить мы заворачиваем в JSON.stringify(3))

// Когда вытаскиваем значения, делаем обратный процес и заворачиваем в JSON.parse(localStorage.getItem('number_15'))(parse - разобрать)


localStorage.setItem('number_20', JSON.stringify(20));
const c = JSON.parse(localStorage.getItem('number_20'));
console.log(c);



const array = [1, 2, 3, 4, 5];
localStorage.setItem('numbers_array', JSON.stringify(array));
const d = JSON.parse(localStorage.getItem('numbers_array'));
console.log(d);


// const e = '1,2,3,4,5';   => без JSON.stringifi()
// const e = '[1,2,3,4,5]'; => c JSON.stringifi()

// массив без JSON.stringifi() запишится как строка , НО её нельзя будет потом разобрать с JSON.parse() -> выйдет строка , а не массив
//alert('Hello'); - модальное окно

// const firstName = prompt('Введите ваше имя');  // модальное окно считывает с клавиатуры
// const lastName = prompt('Введите вашу фамилию');
// const age = prompt('Введите ваш возраст: ');

// if (age < 18){
//     console.log(`Hi, ${firstName} ${lastName}. Your age is ${age}`);
// }else if (age> 18){
//     console.log(`Dear, ${firstName} ${lastName}. Your age is ${age}`);
// }else {
//     console.log(`Hello, ${firstName} ${lastName}. Your age is ${age}`);

// }


// Math.random(): 
// Math - объект
// .random() - метод

// let text = 'Nelli';
// text.length: length - свойство


// Сгенерируйте случайное число от 0 до 1. Округлите его до одного знака после точки, тип выводимых данных должен быть number. 
// Напишите условный оператор. Если случаное число больше 0.5, то выводить в консоль сообщение "Победа". Если случаное число меньше 0.5, то выводить в консоль сообщение "Поражение". Если случаное число равно 0.5, то выводить в консоль сообщение "Ничья".


// let number = Math.random();
// let number2 = +number.toFixed(1);
let number2 = +Math.random().toFixed(1); // => запись одной строкой


//console.log(number);
console.log(number2);

if (number2 > 0.5){
        console.log(`Победа ${number2}`);
    } else if (number2 < 0.5){
        console.log(`Поражение ${number2}`);
    } else {
        console.log(`Ничья ${number2}`);
    }

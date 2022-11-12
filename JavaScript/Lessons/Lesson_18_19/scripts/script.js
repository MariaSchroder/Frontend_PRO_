// // Создайте форму сбора данных работников с четырьмя полями: Имя, Фамилия, ставка и количество дней. Поля ввода должны включать "текст-подсказку". 

// // Зарплата = ставка * кол-во дней;

// // Форма должна собирать полученные данные, добавлять их в пустой массив, а затем формировать карточки работников с полученной информацией из массива.

// // После отправки необходимо очистить инпуты.



// const form = document.querySelector('.form');
// const container = document.querySelector('.container');

// let workerInfo = [];

// const render = () => {
//     container.innerText = '';

//     workerInfo.forEach(({ firstname, lastname, rate, days }) => {

//         const cardElem = document.createElement('div');
//         const nameElem = document.createElement('p');
//         const salaryElem = document.createElement('p');

//         nameElem.innerText = `Name: ${firstname} ${lastname}`;
//         salaryElem.innerText = `Salary: ${rate * days} ` ;


//         cardElem.classList.add('card');

//         cardElem.append(nameElem, salaryElem);
//         container.append(cardElem);
//     })
// }



// form.addEventListener('submit', event => {
//     event.preventDefault();

//     const {firstname, lastname, rate, days} = event.target;

//     workerInfo.push({
//         firstname: firstname.value,
//         lastname: lastname.value,
//         rate: rate.value,
//         days: days.value,
//     })
//         firstname.value = '';
//         lastname.value = '';
//         rate.value = '';
//         days.value = '';

//         render();
// }); 

// console.log(workerInfo);



// Деструктуризация

/* const user = {
    firstname: 'Anton',
    lastname: 'Ivanov',
    age: 38
}

const showMessage = obj => {
    console.log(`Hello ${obj.firstname}. You are ${obj.age} years old!`)
}

const showMessage_1 = ({ firstname, age }) => {
    console.log(`Hello ${firstname}. You are ${age} years old!`)
}

showMessage(user);
showMessage_1(user); */





// Вывести текст, введенный в инпут, в консоль

const show_text_btn = document.querySelector('.show_text_btn');
const schow_text_input = document.querySelector('.schow_text_input');


show_text_btn.addEventListener('click', () => console.log(schow_text_input.value));




// Поменять текст в инпуте с ??? на !!!


const change_text_btn = document.querySelector('.change_text_btn');
const change_text_input = document.querySelector('.change_text_input');


change_text_btn.addEventListener('click', () => change_text_input.value = '!!!');



//Поменять цвет фона на серый


const gray_mode_btn = document.querySelector('.gray_mode_btn');
gray_mode_btn.addEventListener('click', () => document.body.style.backgroundColor = 'gray');


//Поменять цвет фона на серый / белый
const change_mode_btn = document.querySelector('.change_mode_btn');
change_mode_btn.addEventListener('click', () => document.body.classList.toggle('gray_mode'));


// classList.add('class') // добавляет класс
// classList.remove('class') // удаляет класс
// classList.toggle('class') // удаляет класс, если он есть. добавляет класс, если его нет


// альтернативная запись

// change_mode_btn.addEventListener('click', () => {
//     const backgroundColor = document.body.style.backgroundColor === 'gray' ? 'white' : 'gray';
//     document.body.style.backgroundColor = backgroundColor;
// });




// Менять цвет кнопки на случайный

const random_color_btn = document.querySelector('.random_color_btn');

const getRandomNum = () => Math.round(Math.random() * 255);

random_color_btn.addEventListener('click', (event) => event.target.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`);




//Менять цвет фон на случайный


const random_color_body = document.querySelector('.random_color_body');

const getRandomNum2 = () => Math.round(Math.random() * 255);

random_color_body.addEventListener('click', () => document.body.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`);



//Менять содержимое инпута на значение из массива

const change_btn = document.querySelector('.change_btn');
const change_input = document.querySelector('.change_input');

const symbols = ['...', '+++', '***', '///', '---'];
let symbols_index = 0;

change_btn.addEventListener('click', () => change_input.value = symbols[symbols_index++ % symbols.length]);

//symbols_index++ % symbols.length
// 0 % 4 = 0
// 1 % 4 = 1
// 2 % 4 = 2
// 3 % 4 = 3
// 4 % 4 = 0
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0


// 2 яйца
// 0 пачек по 4
// 2 без упаковки

// 2 % 4 = 2


// 3 яйца
// 0 пачек по 4
// 3 без упаковки

// 3 % 4 = 3



//Создать слайдер с фотографиями из массива


const photos = [
    'https://icdn.lenta.ru/images/2022/06/13/19/20220613193918938/square_320_606658bb7374481a05a664f151a8d888.jpg',

    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',

    'https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg',

    'https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg'
];


const img_slider = document.querySelector('.img_slider');

let img_index = 0;

img_slider.addEventListener('click', event => event.target.src = photos[img_index++ % photos.length]);



// Cоздать слайдер картинок с кнопками

const img_slider_1 = document.querySelector('.img_slider_1');
const [left_btn, right_btn ] = document.querySelectorAll('.triggers button');

let photoIndex_1 = 0;

right_btn.addEventListener('click', () => img_slider_1.src = photos[++photoIndex_1 % photos.length]);



// LESSON_19


// a++ - сначала возвращает значение, а потом увеличивает его на единицу
// ++a - сначала увеличивает на единицу, а потом возвращает

left_btn.addEventListener('click', ()  => {
    
    if(photoIndex_1 === 0){
        photoIndex_1 = photos.length
    }

    img_slider_1.src = photos[--photoIndex_1 % photos.length]
});


// Создать кнопку с размерами 30 x 30 пикселей, при каждом нажатии увеличить её на 10 px

const incr_btn = document.querySelector('.incr_btn');
let btn_params = 30;

const incr_btn_render = (params) => {
    incr_btn.style.width = params + 'px';
    incr_btn.style.height = params + 'px';
}

incr_btn_render(btn_params);

incr_btn.addEventListener('click', () => {
    btn_params += 10;
    incr_btn_render(btn_params);
});




// //Создать генератор бросаемых костей/ сгенерировать числа от 1-6 (бросить кости)


const game_btn = document.querySelector('.game_btn');

const game_result = document.querySelector('.game_result');

const getNum = () => Math.round(Math.random() * 5 + 1); //  1-6

game_btn.addEventListener('click', () => game_result.innerText = `${getNum()} x ${getNum()}`);



// Создать описанный в форме элемент
const add_form = document.querySelector('.add_form');
const form_result = document.querySelector('.form_result');

add_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { type, content, color } = event.target

    form_result.innerText = '';

    const elem = document.createElement(type.value);
    elem.innerText = content.value;
    elem.style.color = color.value;

    form_result.append(elem);

    type.value = '';
    content.value = '';
    color.value = '';
})





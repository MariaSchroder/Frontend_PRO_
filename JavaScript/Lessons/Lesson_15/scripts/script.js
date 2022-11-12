// //Задан массив объектов workers. Выведите на экран карточки со следующей информацией по всем работникам: ID, Имя, Фамилия, Возраст, Зарплата, фото. Зарплата рассчитывается через умножение ставки на количество дней. Карточки должны включать отображение фотографии. Примените стили к карточкам: width, padding, border, background-color.

// const workers = [
//     {
//         id: 1,
//         first_name: "Olga",
//         last_name: "Petrova",
//         age: 18,
//         rate: 100,
//         days: 15,
//         photo: "https://reqres.in/img/faces/12-image.jpg",
//         progress: 50
//     },

//     {
//         id: 2,
//         first_name: "Petr",
//         last_name: "Ivanov",
//         age: 46,
//         rate: 70,
//         days: 22,
//         photo: "https://reqres.in/img/faces/4-image.jpg",
//         progress: 10
//     },

//     {
//         id: 3,
//         first_name: "Oleg",
//         last_name: "Orlov",
//         age: 32,
//         rate: 34,
//         days: 10,
//         photo: "https://reqres.in/img/faces/10-image.jpg",
//         progress: 75
//     },

//     {
//         id: 4,
//         first_name: "Irina",
//         last_name: "Medvedeva",
//         age: 22,
//         rate: 85,
//         days: 17,
//         photo: "https://reqres.in/img/faces/2-image.jpg",
//         progress: 30
//     },
// ];

// const rootElem = document.querySelector('#root');

// workers.forEach(({id, first_name, last_name, age, rate, days, photo, progress}) => {
//     const card = document.createElement('div');
//     const idElem = document.createElement('p');
//     const nameElem = document.createElement('p');
//     const ageElem = document.createElement('p');
//     const salaryElem = document.createElement('p');
//     const photoElem = document.createElement('img');
//     const progressContainer = document.createElement('div');
//     const progressLine = document.createElement('div');
//     const progressValue = document.createElement('p');


//     idElem.innerText = `ID: ${id}`;
//     nameElem.innerText = `Name: ${first_name} ${last_name}`;
//     ageElem.innerText = `Age: ${age}`;
//     salaryElem.innerText = `Salary: ${rate * days}`;
//     progressValue.innerText = progress + '%';

//     photoElem.setAttribute('src', photo);
//     photoElem.setAttribute('alt', 'photo');


//     card.classList.add('card');
//     progressContainer.classList.add('progress-container');
//     progressLine.classList.add('progress-line');
//     progressValue.classList.add('progress-value');


//     progressLine.style.width = progress + '%';      //   динамичное решение не превязанное к css 
//     progressLine.style.backgroundColor = progress >= 50 ? 'green' : 'red';

//     // progressLine.style.backgroundColor = progress < 50 ? 'red' : 'green';

//     // progress >= 50 ? progressLine.style.backgroundColor = 'green' : progressLine.style.backgroundColor = 'red';

//     // if (progress <= 20) {   //   указываем 3 цвета
//     //     progressLine.style.backgroundColor = 'red'
//     // } else if (progress <= 50){
//     //     progressLine.style.backgroundColor = 'orange'
//     // } else {
//     //     progressLine.style.backgroundColor = 'green'
//     // }


//     progressContainer.append(progressLine, progressValue)
//     card.append(idElem, nameElem, ageElem, salaryElem, photoElem, progressContainer);
//     rootElem.append(card);
// });



// HTML
// <div id="root"></div>


// CSS
// * { padding: 0;  margin: 0;  box-sizing:  border-box; }

// .card { border: 2px solid black;
//     border-radius: 5px;
//     background-color: bisque;
//     width: 200px;
//     padding: 10px; }

// #root { display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 10px; }

// .progress-container{ border: 1px solid black;
//     height: 20px;
//     position: relative; }


// .progress-line { background-color: green;
//     height: 100%;
//     position: absolute; }

// .progress-value { position: absolute;
//     text-align: center;
//     width: 100%; }




// Слушатель события (.addEventListener)



// const btn = document.querySelector('.btn');
// const container = document.querySelector('#container');

// btn.addEventListener('click', () => {   
//     const text = document.createElement('p');   //   при клике добавляется текст (p)
//     text.innerText = 'Hello';
//     container.append(text);
// });





// ЗАДАЧА 1
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
// При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета (текст взять произвольный)

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

// btn.addEventListener('click', () => {
//   const par = document.createElement('p');
//   par.innerText = 'Text';
//   par.style.color = 'green';
//   container.append(par);
// });


// ЗАДАЧА 2
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
// При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px. К контейнеру применить свойство grid.

btn.addEventListener('click', () => {
  const yellow_square = document.createElement('div');
  yellow_square.classList.add('square');
  container.append(yellow_square);
})




















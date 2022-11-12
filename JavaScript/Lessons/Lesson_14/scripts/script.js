// // В файле html в тэге body есть один элемент div с классом root.
// // Используя JS (DOM), создать карточку товара (div), которая должна включать в себя следующие данные: Артикул, наименование товара, цена. Данные взять произвольные.
// // Применить стили к карточке: width, background-color, border, border-radius, padding, margin.
// //  <div class = "root"></div>  =>  создали в html


// const rootElem = document.querySelector('.root');   //   => подключаемся к html через класс root

// const card = document.createElement('div');         //   => создаём карту/ контейнер в которой будут содержаться все следующие элементы

// const art = document.createElement('p');            //   => создаём элементы
// const title = document.createElement('p');
// const price = document.createElement('p');

// art.innerText = 'Art.Nr: 123';          //   => побавляем описание/ данные
// title.innerText = 'iPhone 13 Pro';
// price.innerText = '1300$';

// card.classList.add('card');      => присваиваем класс к div (card)

// //  => задаем в css

// // .card {                      
// //     border: 1px solid black;
// //     border-radius: 10px;
// //     width: 200px;
// //     background-color: bisque;
// //     padding: 10px;
// //     margin: 10px;
// // }


// card.append(art, title, price);         // =>   добавляем элементы в card (в div)
// rootElem.append(card);          // =>   помещаем card в документ подключенный к html (rootElem) 



// const rootEl = document.querySelector('.root');
// // создаём элементы

// const card = document.createElement('div');
// const fistNameEl = document.createElement('p');
// const lastNameEl = document.createElement('p');
// const imgEl = document.createElement('img');
// const emailEl = document.createElement('a');
// const emailText = document.createElement('span');
// const idEl = document.createElement('p');
// const ageEl = document.createElement('p');
// const salaryEl = document.createElement('p');



// // innerText - это то что наполняется между жвумя тегами <p>...</p>
// idEl.innerText = 'ID: 1';
// fistNameEl.innerText = ' Firstname: Olga';
// lastNameEl.innerText = ' Lasttname: Petrova';
// ageEl.innerText = 'Age: 35';
// salaryEl.innerText = 'Salary: 1850';
// emailText.innerText = 'Email:  ';
// emailEl.innerText = 'olga_petrova@gmail.com';


// card.classList.add('card'); // => добавляем класс элементу card
// imgEl.classList.add('photo');


// imgEl.setAttribute('src', 'Foto/Screenshot_19.png') // подключаем картинкучерез атрибут src
// imgEl.setAttribute('alt', 'photo'); // добавляем атрибут alt с описанием

// //=>   Альтернативная запись добавления атрибутов к img

// // imgEl.src = 'Foto/Screenshot_19.png'; 
// // imgEl.alt = 'photo
// emailEl.setAttribute('href', 'mailto:olga_petrova@gmail.com');

// //=>   Альтернативная запись для href 
// // emailEl.href = 'mailto:example@gmail.com';

// card.append(idEl, fistNameEl, lastNameEl, ageEl, salaryEl, imgEl, emailText, emailEl,);
// rootEl.append(card);


// Прописываем в css  
// .card {
//     border: 1px solid black;
//     border-radius: 10px;
//     width: 250px;
//     background-color: bisque;
//     padding: 10px;
//     margin: 10px; }

// .card p { margin: 10px 0; }

// .photo { display: block; }


// <a href = 'mailto:example@gmail.com'> example@gmail.com</a>  => ссылка на почту (при нажатии открывается приложение по умолчанию чтобы написаить и отослать письмо)

// <a href = 'google.com'/Ссылка</a>    =>   ссылка на страницу/ вебсайт






const data = [
    {
        id: 1,
        title: 'Велосипед',
        price: 100,
    },

    {
        id: 2,
        title: 'Самокат',
        price: 500,
    },

    {
        id: 3,
        title: 'Скейт',
        price: 200,
    },

    {
        id: 4,
        title: 'Лыжи',
        price: 300,
    }
];


const rootElem = document.querySelector('.root');

// data.forEach((product) => {    // создаем метод и автоматически подставляем данные из массива data

//     const cardElem = document.createElement('div'); //  макет 
//     const idElem = document.createElement('p');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');


//     idElem.innerText = `ID: ${product.id}`;
//     titleElem.innerText = `Title: ${product.title}`;
//     priceElem.innerText = `Price: ${product.price}`;

//     cardElem.classList.add('card');

//     cardElem.append(idElem, titleElem, priceElem);
//     rootElem.append(cardElem);
// });



// более оптимальный вариант

// const {id, title, price} = product; // деструктуризация и обращаемся на прямую 

  // const id = product.id
  // const title = product.title
  // const price = product.price


data.forEach(({id, title, price}) => {  // {id, title, price} = product => мы его сразу разобрали на элементы


    const cardElem = document.createElement('div'); //  макет 
    const idElem = document.createElement('p');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');


    idElem.innerText = `ID: ${id}`;
    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;

    cardElem.classList.add('card');

    cardElem.append(idElem, titleElem, priceElem);
    rootElem.append(cardElem);
});










































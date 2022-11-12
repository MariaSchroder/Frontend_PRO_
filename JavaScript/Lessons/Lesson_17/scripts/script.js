// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку". 

// Email должен быть кликабельным.
// Фото должно отображаться.

// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

// После отправки необходимо очистить инпуты.

// const form = document.querySelector('.form');
// const cardsContainer = document.querySelector('.cards_container');

// let cardsInfo = [];


// form.addEventListener('submit', event => {
//     event.preventDefault();
//     const cardElem = document.createElement('div');
//     const nameElem = document.createElement('p');
//     const emailContainer = document.createElement('div');
//     const emailElem = document.createElement('a');
//     const emailTextElem = document.createElement('span');
//     const photoElem = document.createElement('img');



//     const { firstname,  lastname, email, photo } = event.target;


//     nameElem.innerText = `Name: ${firstname.value} ${lastname.value}`;
//     emailElem.innerText = email.value;
//     emailTextElem.innerText = 'Email: ';

//     //emailElem.setAttribute('href', `mailto:${email.value}`)
//     emailElem.href = `mailto:${email.value}`;
//     photoElem.src = photo.value;
//     photoElem.alt = 'photo';


//     cardElem.classList.add('card');
//     photoElem.classList.add('photo');


//     emailContainer.append(emailTextElem, emailElem,)
//     cardElem.append(nameElem, emailContainer, photoElem,);
//     cardsContainer.append(cardElem);

//     firstname.value = '';   // очищаем поля
//     lastname.value = '';
//     email.value = '';
//     photo.value = '';
// })






const form = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards_container');

let cardsInfo = [];

// Данные карточки добавляются сразу в массив (потом мы можем сортировать и удалять данные)

//Что мы делаем:
//1. при отправке формы данные записываются в массив cardsInfo в виде объектов
//2. из массива cardsInfo с {} достаем данные и рендерим из них карточки



// const render = () => {
//     cardsContainer.innerText = ''; // очищаем контейнер перед новым созданием карточки - рендером (очищаются дубли)
    
//     cardsInfo.forEach((el) => {
//         const cardElem = document.createElement('div');
//         const nameElem = document.createElement('p');
//         const emailContainer = document.createElement('div');
//         const emailElem = document.createElement('a');
//         const emailTextElem = document.createElement('span');
//         const photoElem = document.createElement('img');
    
//         nameElem.innerText = `Name: ${el.firstname} ${el.lastname}`;
//         emailElem.innerText = el.email;
//         emailTextElem.innerText = 'Email: ';

//         emailElem.href = `mailto:${el.email}`;
//         photoElem.src = el.photo;
//         photoElem.alt = 'photo';


//         cardElem.classList.add('card');
//         photoElem.classList.add('photo');


//         emailContainer.append(emailTextElem, emailElem,)
//         cardElem.append(nameElem, emailContainer, photoElem,);
//         cardsContainer.append(cardElem);
//     })
// }



//   Обращение через деструкторизацию {firstname,  lastname, email, photo }

//1. при отправке формы данные записываются в массив cardsInfo в виде объектов

const render = () => {
    cardsContainer.innerText = ''; // очищаем контейнер перед новым созданием карточки - рендером (очищаются дубли)
    
    cardsInfo.forEach(({firstname,  lastname, email, photo }) => { // указываем поля в {} скобках
        
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const emailContainer = document.createElement('div');
        const emailElem = document.createElement('a');
        const emailTextElem = document.createElement('span');
        const photoElem = document.createElement('img');
    
        nameElem.innerText = `Name: ${firstname} ${lastname}`;  // обращаемся напрямую без ключа
        emailElem.innerText = email;
        emailTextElem.innerText = 'Email: ';

        emailElem.href = `mailto:${email}`;
        photoElem.src = photo;
        photoElem.alt = 'photo';


        cardElem.classList.add('card');
        photoElem.classList.add('photo');


        emailContainer.append(emailTextElem, emailElem,)
        cardElem.append(nameElem, emailContainer, photoElem,);
        cardsContainer.append(cardElem);
    })
}



//2. из массива cardsInfo с {} достаем данные и рендерим из них карточки


form.addEventListener('submit', event => {
    event.preventDefault();
    
    const { firstname,  lastname, email, photo } = event.target;

    cardsInfo.push({            // собераем данные, создаём обьект, и пушаем в массив
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        photo: photo.value
    })

    firstname.value = '';  
    lastname.value = '';
    email.value = '';
    photo.value = '';

    console.log(cardsInfo);

    render(); 

})















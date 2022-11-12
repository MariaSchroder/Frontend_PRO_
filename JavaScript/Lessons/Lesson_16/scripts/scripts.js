
// const formElem = document.querySelector('.form');
// const cards_container = document.querySelector('.cards_container')



// formElem.addEventListener('submit', (event) => {
//     event.preventDefault(); // запрещает обновлять страницу после отправки формы

//     // console.log(event); // событие
//   // console.log(event.target); // элемент с которым происходит событие
//   // console.log(event.target.city); // конкретный инпут по атрибуту name
//   // console.log(event.target.city.value); // данные из инпута


//     // console.log(event.target.name.value);
//     // console.log(event.target.city.value);
//     // console.log(event.target.age.value);
// })




// formElem.addEventListener('submit', (event) => {
//     event.preventDefault(); 

//     const card = document.createElement('div');
//     const nameElem = document.createElement('p');
//     const ageElem = document.createElement('p');
//     const cityElem = document.createElement('p');

//     //  заполняем данные для карточки
//     // nameElem.innerText = `Name: ${event.target.name.value}`;
//     // ageElem.innerText = `Age: ${event.target.age.value}`;
//     // cityElem.innerText = `City: ${event.target.city.value}`;
    
    
//     // =>   короткая запись 
//     // теперь не нужно указывать event.target (он указан выше)
    
//     const { name, age, city } = event.target;
    
//     nameElem.innerText = `Name: ${name.value}`; 
//     ageElem.innerText = `Age: ${age.value}`;
//     cityElem.innerText = `City: ${city.value}`;
    
    
//     card.classList.add('card');


//     card.append(nameElem, ageElem, cityElem);
//     cards_container.append(card);

//     //  очищение полей inpult 
//     event.target.name.value = '';
//     event.target.age.value = '';
//     event.target.city.value = '';
// });



//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.



/* <form class="workers_form">
    <input type="text" placeholder="Your firstname" name="firstname">
    <input type="text" placeholder="Your lastname" name="lastname">
    <input type="text" placeholder="Your age" name="age">
    <input type="text" placeholder="Rate" name="rate">
    <input type="text" placeholder="Days" name="days">
    <input type="text" placeholder="Photo link" name="photo">

    <button>Send</button>   
</form>

<div class="cards_container"></div> */

// *{ margin: 0; padding: 0; box-sizing: border-box; }

// .workers_form{
//     display: flex;
//     flex-direction: column;
//     width: 200px; }

// .workers_form input,
// .workers_form button {
//     padding: 10px;
//     margin: 10px; }

// .workers_form button {
//     background-color: rgb(35, 154, 35);
//     color: white;
//     border: 1px solid  rgb(35, 154, 35);
//     border-radius: 15px; }


// .card {
// border: 1px solid gray;
// border-radius: 15px;
// background-color: bisque;
// padding: 10px;
// margin: 10px;
// width: 200px; }

const workers_form = document.querySelector('.workers_form');
const cards_container = document.querySelector('.cards_container');


workers_form.addEventListener('submit', (event) => {
    event. preventDefault();

    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const salary = document.createElement('p');
    const photoElem = document.createElement('img');



    const {firstname, lastname, age, rate, days, photo} = event.target;

    nameElem.innerText = `Name: ${firstname.value} ${lastname.value}`;
    ageElem.innerText = `Age: ${age.value}`;
    salary.innerText = `Salary: ${rate.value * days.value}`;


    photoElem.setAttribute('src', photo.value);
    photoElem.setAttribute('alt', 'photo');



    card.classList.add('card');

    card.append(nameElem, ageElem, salary, photoElem);
    cards_container.append(card);

    firstname.value = '';
    lastname.value = '';
    age.value = '';
    rate.value = '';
    days.value = '';
    photo.value = '';

})

















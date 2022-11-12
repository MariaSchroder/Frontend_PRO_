// const cards_container = document.querySelector('.cards_container');

/*fetch('https://reqres.in/api/users')        // отправляем запрос
    .then(resp => resp.json())              //  получаем ответ, преобразовываем в json
    .then(json => render(json.data))   // получаем json и чтото делаем с json
*/

// в финкцию (render) передаются данные json.data (json.data = jsonData)
/*const render = (jsonData) => {
    jsonData.forEach(el => {
        
        const card = document.createElement('div');
        const avatarEl = document.createElement('img');
        const firstname = document.createElement('p');
        const emailEl = document.createElement('a');


        firstname.innerText = el.first_name;
        emailEl.innerText = el.email;
        
        emailEl.classList.add('emal_el');
        avatarEl.src = el.avatar;
        avatarEl.alt = 'Avatar';
        emailEl.href = `mailto: ${el.email}`;


        card.append(avatarEl, firstname, emailEl);
        cards_container.append(card);
    })
}*/


//  такая же запись, но с деструктуризацией 

/* const render = (jsonData) => {
    jsonData.forEach(({ first_name, email, avatar }) => {
        
        const card = document.createElement('div');
        const avatarEl = document.createElement('img');
        const firstname = document.createElement('p');
        const emailEl = document.createElement('a');


        firstname.innerText = first_name;
        emailEl.innerText = email;
        
        emailEl.classList.add('emal_el');
        card.classList.add('card');

        avatarEl.src = avatar;
        avatarEl.alt = 'Avatar';
        emailEl.href = `mailto: ${email}`;


        card.append(avatarEl, firstname, emailEl);
        cards_container.append(card);
    })
}*/

// Переключение страниц

// foreach => подходит для вывода инцормации
// map => подходит для реализации расширеного функционала (дабавлять, удалять, отсортировать и тд)
// методы которые чтото возврвщают (map, filter, reduce), должны иметь return

const cards_container2 = document.querySelector('.cards_container2');

const render = (json_data) => {
    
    cards_container2.innerText = '';

    const cards = json_data.map(({ avatar, first_name }) => {
        const card = document.createElement('div');
        const avatarEl = document.createElement('img');
        const nameEl = document.createElement('p');

        avatarEl.src = avatar;
        avatarEl.alt = 'avatar';

        nameEl.innerText = first_name;

        card.append(avatarEl, nameEl);
        return card
    })

    cards_container2.append(...cards); // ... Спред-оператор(spread syntax), разберает массив на элементы и добавляет их контейнер
}

/*
...  
Спред-оператор(spread syntax) - разберает массив на карточки 

const array = [5, 'hello', true, 6.8];

console.log(array);     // =>  (4) [5, 'hello', true, 6.8] - вывел массив

console.log(...array);  // =>  5 'hello' true 6.8 - разбил на элементы
*/


const request = (num) => {
    fetch(`https://reqres.in/api/users?page=${num}`)
        .then(resp => resp.json())
        .then(json => render(json.data))
}

request(1);


const [ first_btn, second_btn ] = document.querySelectorAll('.triggers button');

first_btn.addEventListener('click', () => request(1));
second_btn.addEventListener('click', () => request(2));











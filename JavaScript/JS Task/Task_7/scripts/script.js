//const root = document.querySelector('#root');


// const div_elem = document.createElement('div');
// const img_elem = document.createElement('img');
// const text_elem = document.createElement('p');

// img_elem.src = 'https://www2.skillsoft.com/wp-content/uploads/2018/01/Javascript_badge.png';
// text_elem.innerText = 'Java Script - язык программирования';

// div_elem.append(img_elem, text_elem);
// div_elem.classList.add('card');


// добавить div и 4 параграфа внутри него с каким-либо текстом
// созданный div должен быть помещен в #root

// const div_elem = document.createElement('div');
// const p_elem1 = document.createElement('p');
// const p_elem2 = document.createElement('p');
// const p_elem3 = document.createElement('p');
// const p_elem4 = document.createElement('p');

// p_elem1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
// p_elem2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
// p_elem3.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
// p_elem4.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

// div_elem.append(p_elem1, p_elem2, p_elem3, p_elem4);
// root.append(div_elem);



// альтернативная запись



// const container = document.createElement('div');
// const texts = ['Текст 1', 'Текст 2', 'Текст 3', 'Текст 4'];

// texts.forEach(text => {
//     const p_elem = document.createElement('p');
//     p_elem.innerText = text;
//     container.append(p_elem);
// });
// root.append(container);



// модерная запись 



// const container = document.createElement('div');
// const texts = ['Текст 1', 'Текст 2', 'Текст 3', 'Текст 4'];

// const p_list = texts.map(text => {
//     const p_elem = document.createElement('p');
//     p_elem.innerText = text;
//     return p_elem;
// });

// container.append(...p_list); //   спред апператор
// root.append(container);



// <div id="root"></div>

const data = [
    {
        id: 1,
        name: 'Stepan',
        email: 'stepan@mail.ru',
        avatar: 'Photo/Screenshot_19.png'
    },
    {
        id: 2,
        name: 'Olga',
        email: 'olga@mail.ru',
        avatar: 'Photo/Screenshot_20.png'
    }, 
    {
        id: 3,
        name: 'Ivan',
        email: 'ivan@mail.ru',
        avatar: 'Photo/Screenshot_22.png'
    }, 
    {
        id: 1,
        name: 'Inna',
        email: 'inna@mail.ru',
        avatar: 'Photo/Screenshot_21.png'
    }
];

const root = document.querySelector('#root');


data.forEach(user => {
    const card = document.createElement('div');
    const name = document.createElement('p');
    const email = document.createElement('a');
    const avatar = document.createElement('img');
    
    card.classList.add('card');
    
    name.innerText = user.name;
    email.innerText = user.email;
    email.href = 'mailto: ' + user.email;
    avatar.src = user.avatar;
    
    card.append(avatar, name, email);
    root.append(card);

});















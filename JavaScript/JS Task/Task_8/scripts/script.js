// const root = document.querySelector('#root');

// const parag = document.createElement('p');
// parag.innerText = 'Hello';


// // создать массив из текстов (минимум 3 элемента)
// // для каждого элемента создать параграф и записать в него текст
// // параграфы необходимо добавить в root элемент

// // повесить обработчик события клика на параграфы 
// // при клике на параграф в консоль должно выводиться слово

// const arrayText = ['Машина', 'Мяч', 'Кукла', 'Велосипед', 'Кубики'];

// // const text1 = document.createElement('p');
// // const text2 = document.createElement('p');
// // const text3 = document.createElement('p');

// // text1.innerText = arrayText[0];
// // text2.innerText = arrayText[1];
// // text3.innerText = arrayText[2];


// arrayText.forEach(word => {     //  => создаём тоже самое что и сверху только с помощью метода цикла 
//     const text = document.createElement('p');
//     text.innerText = word;
//     text.classList.add('card');
//     root.append(text);


// // повесить обработчик события клика на параграфы 
// // при клике на параграф в консоль должно выводиться слово

//     text.addEventListener('click', () => {   
//         //console.log(word);
//     })

// // по нажатию на параграф ему должен присваиваться 
// // класс active

//     text.addEventListener('click', event => {
//         //event.target.classList.add('active')// TaRGET это ссылка на элемент с которым произошло событие
//         //console.log(event)
//     })

// // преобразовать процесс таким образом, чтобы по нажатию на 
// // p_elem active добавлялся, если его нет и удалялся, если он есть

//     text.addEventListener('click', event => {
//         event.target.classList.toggle('active')
    
//     })

// });





const form = document.querySelector('#add_product_form');
const product = document.querySelector('#product');

// создать функцию getCard, которая в качестве aргументов получает title и price 
// и возвращает div с указанными внутри title и price


function getCard(title, price){
    const card = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');

    title_p.innerText = title;
    price_p.innerText = price;

    card.append(title_p, price_p);
    return card   
};



form.addEventListener('submit', event => {
    event.preventDefault();
    const {title, price} = event.target; // Деструктурирующее присваивание
    const card = getCard(title.value, price.value);
    product.append(card);
});









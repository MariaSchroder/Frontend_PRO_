// querySelector метод, возвращающий элемент по селектору
//const main_p = document.querySelector('.main'); // => возвращает только один элемент
// console.log(main_p);


// querySelectorAll метод, возвращающий итерируемый объект (NodeList) по селектору

const p_list = document.querySelectorAll('p'); //  => возвращает сразу несколько элементов
// console.log(p_list);    //   NodeList(3) [p, p.main, p] - NodeList - это обьект, но не массив (это результат работы querySelectorAll)

// getElementsByClassName метод, возвращающий итерируемый объект 
// (HTMLCollection) по селектору => устаревший вариант

//const main_p2 = document.getElementsByClassName('main')[0];



/*  <section class="main"> <p>Главная страница</p> </section>

    <section class="products"> <p>Продукты</p> </section>

    <section class="contacts"> <p>Контакты</p> </section> */



// const prod_p = document.getElementsByClassName('products')[0].getElementsByTagName('p')[0];
//console.log(prod_p); // =>   старый вариант


// const prod_p2 = document.querySelector('.products p');
// console.log(prod_p2); // => новый вариант

// const prod_p2 = document.querySelector('.products *'); => * когда нужно сослаться на все элементы класса

//prod_p2.innerText = 'Товары';

// addEventListener позволяет повесить событие (в данном случае click) на параграф prod_p и при этом в событии выполнится callback функция
// prod_p2.addEventListener('click', () => {
//     prod_p2.innerText = 'Товары';
// });



// <div class="main"> <p>Важный текст</p> </div>
//     
// <div class="menu">
//         <ul>
//             <li class="point_1">***</li>
//             <li class="point_2">***</li>
//             <li class="point_3">***</li>
//         </ul>
//  </div>

//  <div class="media">
//         <p class="fb"> <a href="">fb</a> </p>
//         
//          <p class="inst"> <a href="">inst</a> </p>
//         
//          <p class="ln"> <a href="">ln</a></p>
//  </div>


// 1)   найти параграф с тектом "Важный текст" и заменить его на "Не такой уж и важный текст"

// const main_p = document.querySelector('.main p');
//     main_p.innerText = 'Не такой уж и важный текст';


// // 2)    заменить fb на facebook

// const media_fb = document.querySelector('.media .fb a');
//     media_fb.innerText = 'Facebook';



// const point1 = document.querySelector('.menu .point_1');


// point1.addEventListener('click', () => {
//     point1.innerText = 'Point_1';
// });




// 
// <div class="main">
//     Привет
// </div>''



const text_color = document.querySelector('.main');

//===================================================================
// // реализовать функцию random_color, которая возвращает случайный цвет в формате rgb => 'rgb(124, 23, 45)'

// const randomColor = () => {
//     const r = Math.round(Math.random() * 255);
//     const g = Math.round(Math.random() * 255);
//     const b = Math.round(Math.random() * 255);
//     return `rgb(${r} ${g} ${b})`
// }


// text_color.addEventListener('click', () => {
//     text_color.style.color = randomColor();
//     text_color.style.backgroundColor = randomColor();
//     text_color.style.padding = '20px';
// });

//===================================================================

//const text = text_color.innerText;
//console.log(text); //   => выводим содержимое тега в конзоль => Привет


/* <div class="main">
    1
</div> */

text_color.addEventListener('click', () => {
    const value = text_color.innerText;
    text_color.innerText = +value + 1;
})




// //   Ассинхронность - последовательность действий

// let a = 10;

// // setTimeout(() => {      // ждет 2 секунды и выводит новое значение а
// //     a = 35;
// //     console.log(a);
// // }, 2000);

// // console.log(a);

// // // Promise - промисы

// // let example = new Promise((resolve, reject) =>{ // (resolve - разрешить,reject - отклонить (по умолчанию пишут эти слова))
// //     setTimeout(() => {
// //         resolve(a = 34);
// //     }, 2000)
// // })

// // example.then(() => console.log(a)); // then - обработчик промиса
// // // сначало выполняется exampel, только потом включается .then

// const random_num = new Promise((resolve, reject) => {
//     if(Math.random() >= 0.5) {
//         resolve()
//     } else {
//         reject()
//     }
// })

// random_num.then(
//     () => console.log('>= 0,5'),
//     () => console.log('< 0,5')
// )

// const random_num2 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if(a >= 0.5) {
//         resolve(a)
//     } else {
//         reject(a)
//     }
// })
// // если нужно передать какие-то данные

// random_num2.then(
//     (value) => console.log(`${value}  =>  >= 0,5`),
//     (value) => console.log(`${value}  =>  <  0,5`)
// )






// // Фетчьзапросы - Fetch - достаём массив с обьектами

// результат фичьзапросов всегда возращается промис
// json() - формат хранение данных (ключ-значение), метод

// fetch("https://jsonplaceholder.typicode.com/users") // Отправляем запрос
//     .then((response) => response.json()) // => получили response - ответ и преобразовали его в json *ответ является всегда promise
//     .then(data_json => console.log(data_json))  // получили json и вывели данные в консоль (обработчик для promise)



// fetch('https://reqres.in/api/users?page=1')
//     .then(res => res.json())
//     .then(json => console.log(json.data[1].email)) // выводим email из [1] массива



    const cards_container = document.querySelector('.cards_container');

    fetch('https://jsonplaceholder.typicode.com/users/10')
    .then(res => res.json())
    .then(json => render(json));


    const render = (json) => {
        const card = document.createElement('div');
        const nameEl = document.createElement('p');
        const user_nameEl = document.createElement('p');
        const phoneEl = document.createElement('p');

        nameEl.innerText = `Name: ${json.name}`;
        user_nameEl.innerText = `Username: ${json.username}`;
        phoneEl.innerText = `Phone: ${json.phone}`;


        card.append(nameEl, user_nameEl, phoneEl);
        cards_container.append(card);

    }

    https://jsonplaceholder.typicode.com/todos






























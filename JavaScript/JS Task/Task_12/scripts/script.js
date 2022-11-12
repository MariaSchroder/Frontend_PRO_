/*
// написать функцию, которая делает fetch запрос и выводит весь список продуктов в консоль

const root = document.querySelector('.root');

// напишите функцию, которая используя getProductCard проходится по всем объектам массива с продуктами и для каждого формирует карточку в интерфейсе

function renderProductCards(product_list){
    product_list.forEach(product => {
        const product_card = getProductCard(product);
        root.append(product_card)
    })
}

function getAllProducts(){
fetch('https://fakestoreapi.com/products')
    .then(resp  =>resp.json())
    .then(json => renderProductCards(json));
}
getAllProducts();


// реализовать функцию, которая получает на вход данные продукта и возвращает div элемент с отображением продукта


const product = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}

function getProductCard(card_data){
    const {title, price, image} = card_data;

    const container = document.createElement('div');
    const img_elem = document.createElement('img');
    const header_elem = document.createElement('p');
    const price_elem = document.createElement('p');
    container.append(img_elem, header_elem, price_elem);

    container.classList.add('item');

    img_elem.src = image;
    header_elem.innerText = title;
    price_elem.innerText = price;

    return container
};

root.append(getProductCard(product));

*/



// создать функцию, которая делает запрос на сервер и получает все категории их необходимо вывести в консоль






function getAllCategories(){
    fetch('https://fakestoreapi.com/products/categories')
        .then(resp  =>resp.json())
        .then(json => console.log(json));
    }
    getAllCategories();
















































































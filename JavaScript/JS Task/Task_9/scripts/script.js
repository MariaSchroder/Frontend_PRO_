let products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000
    },
    {
        id: 2,
        title: 'ролики',
        price: 15000
    },
    {
        id: 3,
        title: 'самокат',
        price: 12000
    },
    {
        id: 4,
        title: 'лыжи',
        price: 23000
    },
    {
        id: 5,
        title: 'сноуборд',
        price: 20000
    }
];

// создать функцию, которая на вход получает title и price и возвращает
/*
    <div>
        <p>сноуборд</p>
        <p>20000</p>
    </div>
*/
const root = document.querySelector('#root');
const prodContainer = document.createElement('div');
prodContainer.classList.add('product-container');
root.append(prodContainer);



function createDeleteButton(){
    const x_btn = document.createElement('button');
    x_btn.innerText = 'X';
    x_btn.classList.add('x_btn');
    return x_btn
}



function getInfo(id, title, price){
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    const delete_btn = createDeleteButton();


    // повесить обработчик удаления на кнопку удаления
    delete_btn.addEventListener('click', () => deleteProd(id));
    
    title_p.innerText = title;
    price_p.innerText = price;
    
    
    container.append(title_p, price_p, delete_btn);
    container.classList.add('product-item');
    
    return container
}



// создать еще один div и залить в него карточки с продуктами
// этот div добавить в #root


// внешнему div элементу добавьте класс product-container
// div элементу, который является карточкой, присвойте класс product-item

// внешнему div элементу добавьте класс product-container
// div элементу, который является карточкой, присвойте класс product-item


// написать функцию, которая получает id товара и удаляет его из массива

// создать функцию, которая возвращает элемент (button) удаления





// products.forEach(product => {
//     const productElement = getInfo(product.title, product.price);
    
//     prodContainer.append(productElement);
// })

function render(){
    prodContainer.innerText = '';

    if(products.length === 0){
        prodContainer.append(emptyList());
    }else{
        products.forEach(product => {
        const productElement = getInfo(product.id, product.title, product.price);
        prodContainer.append(productElement);
        })
    }

    
}



function deleteProd(id) {
    products = products.filter(product => product.id !== id);
    render();
}

deleteProd();
console.log(products)


// повесить обработчик удаления на кнопку удаления

// createDeleteButton.addEventListener('click', event => {
//     createDeleteButton = deleteProd();
// })



// создать функцию emptyList которая возвращает параграф с текстом "Товаров нет."

function emptyList(){
    
    const pElem = document.createElement('p');
    pElem.innerText = 'Товаров нет.';


}

render();
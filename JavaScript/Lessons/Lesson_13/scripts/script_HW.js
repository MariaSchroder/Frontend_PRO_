

    // В файле html в тэге body есть один элемент div с классом root.
    // Используя JS (DOM), создать карточку товара (div), которая должна включать в себя следующие данные: Артикул, наименование товара, цена. Данные взять произвольные.
    // Применить стили к карточке: width, background-color, border, border-radius, padding, margin.



const container = document.querySelector('.root');


container.style.width = '500px';
container.style.height = '300px';

container.style.backgroundColor = 'rgb(191, 241, 210)';
container.style.border = '1px solid gray';
container.style.borderRadius = '50px'

container.style.margin = '250px'


const card = document.createElement('div');


const product= document.createElement('h3');
container.append(product);

product.innerText = 'Pencil';
product.style.color = 'gray';
product.style.textAlign = 'center',
product.style.padding = '40px';
product.style.fontSize = '70px';
product.style.fontWeight = 'bold';




const price = document.createElement('p');
container.append(price);

price.innerText = '1.50 €';
price.style.color = 'gray';
price.style.textAlign = 'center';
price.style.fontSize = '35px';
price.style.fontWeight = 'bold';



const article = document.createElement('p');
container.append(article);

article.innerText = 'Art.Nr.: 12345';
article.style.color = 'gray';
article.style.textAlign = 'center';
article.style.padding = '40px';
article.style.fontSize = '20px';








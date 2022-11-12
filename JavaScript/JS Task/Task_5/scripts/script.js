// const lst = [12, -4, 32, 3, -45, 43];

// // используя метод forEach выведите квадраты этих чисел в консоль


// // lst.forEach(el => console.log(el ** 2));


// // // используя forEach выведите в консоль только четные числа

// // lst.forEach(el => {
// //     if(el % 2 === 0){
// //         console.log(el);
// //     }
// // });


// // пользуясь методом map реализуйте новый массив, в котором все отрицательные значения были преобразованы в положительные


// // let new_arr = lst.map(el => {
// //     if(el < 0){
// //         return -el
// //     } else{
// //         return el
// //     }
// // });
// // console.log(new_arr);


// let new_lst = lst.map(el => el < 0 ? -el : el);
// console.log(new_lst);

// let arr_new = lst.map(el => el > 0 ? el : el * -1)
// console.log(arr_new);

// // с использование метода map реализуйте процесс, который формирует новый массив
// // состоящий из булевых значений
// // если число в изначальном массиве четное, то в результирующий добавляется true, в ином случае false


// let bool = lst.map(el => {
//     if(el > 0) {
//         return true
//     }else{
//         return false
//     }
// });
// console.log(bool);


// let bool2 = lst.map(el => el % 2 === 0);
// console.log(bool2);


// const lst1 = [12, 4, 32, 3, 45, 43];

// // используя метод filter сформировать массив, который состоит только их чисел, меньше 10
// let filter = lst.filter(el => el < 10);
// console.log(filter);


// const res = lst1.reduce((prev, value) => prev + value);
// console.log(res);



// // используя метод reduce найдите произведение всех чисел массива

// let reduce = lst1.reduce((prev, value) => prev * value);
// console.log(reduce);
// // доработать процесс reduce, чтобы он выводил сумму четных чисел

// let  res_red = reduce.reduce((prev, value) => prev % 2 === 0 ? prev + value);
// console.log(res_red);



// // используя метод reduce найдите максимальное значение в массиве



// let reduce1 = lst1.reduce((prev, value) => {
//     if(prev > value){     // = сравнение
//         return prev  // = перезапись
//     }else{
//         return value
//     }
// }) 
// console.log(reduce1);


// let reduce3 = lst1.reduce((prev, value) => prev > value ? prev : value);
// console.log(reduce3);



let user = {
    name: 'Stepan',
    last_name: 'Petrov',
    age: 38,
    salary: 5200,
};

// console.log(user['last_name']);
// console.log(user.last_name);

user.last_name = 'Kulikov';     // => перезаписать данные в обьекте
user.id = 1;                    // => дозаписать данные в обьект
//console.log(user); //   {name: 'Stepan', last_name: 'Kulikov', age: 38, salary: 5200, id: 1}
delete user.salary;             // удалить запись в обьекте
//console.log(user);



// создать объект product со свойствами id, title и price

// увеличить стоимость на 20 процентов
// добавить свойство description с каким-то описанием
// вывести объект

let product = {             //   -  переменная с обьектом
    id: 1,
    title: 'Apple',
    price: 40,
};

product.price *= 1.2;
product.decription = 'Sehr lecker!';

//console.log(product);

let prod = [                //   -  массив с обьектами
    {
        id: 1,
        title: 'Apple',
        price: 40,
    },

    {
        id: 2,
        title: 'Banana',
        price: 30,
    },
    
    {
        id: 3,
        title: 'Pearch',
        price: 25,
    }
];
//console.log(prod);


// используя forEach вывести каждый объект отдельно

//prod.forEach(el => console.log(el));


// вывести при помощи forEach только названия товаров 

//prod.forEach(el => console.log(el.title));


// сформировать новый массив, который состоит только из тех товаров, цена на которые больше 30
// выести получившийся массив


let price = prod.filter(el => el.price >= 30)
                .map(el => el.title);
//console.log(price);


// найти общую сумму стоимостей товаров

let priceReduce = prod.reduce((total, el) => total + el.price, 0);
//console.log(priceReduce);

// (0, obj_1) => 0 + 55000
// (55000, obj_2) => 55000 + 15000
// (70000, obj_3) => 70000 + 10000
// 80000






const customers = [
    {
        id: 1,
        name: 'Максим',
        orders: [10000, 23000, 19000]
    },
    {
        id: 2,
        name: 'Олег',
        orders: [12000, 43000, 9000]
    },
    {
        id: 3,
        name: 'Ольга',
        orders: [22000, 44000, 6000]
    },
    {
        id: 4,
        name: 'Семен',
        orders: [32000, 65000, 11000]
    }
];

// реализомать новый массив, в котором будут поля
// id, name, order_total
                
let  new_arr = customers.map(el => {
    return{
        id: el.id, 
        Name: el.name, 
        orders_total: el.orders.reduce((total, el) => total + el)
    }
});


console.log(customers);
console.log(new_arr);

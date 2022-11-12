

// ФУНКЦИЯ

function getNameAndAge(firstname, age) {
    if (age >= 18) {
        return `Dear ${firstname}, you are adult.`
    } else {
        return `Dear ${firstname}, you are younger than 18.`
    }
}
console.log(getNameAndAge('Katrin', 14));
console.log(getNameAndAge('Artem', 34));




// СТРЕЛОЧНАЯ ФУНКЦИЯ
let getNameAndAge_2 = (firstname, age) => {
    if (age >= 18){
        return `Dear ${firstname}, you are adult.`
    } else{
        return `Dear ${firstname}, you are younger than 18.`
    }
}
console.log(getNameAndAge_2('Peter', 52));
console.log(getNameAndAge_2('Ivan', 10));




// ТЕРНАРНЫЙ ОПЕРАТОР
let getNameAndAge_3 = (firstname, age) => age >= 18 ? `Dear ${firstname}, you are adult.` : `Dear ${firstname}, you are younger than 18.`;

// ФОРМУЛА =>   У1 ? У1 верно : У1 неверно
console.log(getNameAndAge_3('Leon', 5));
console.log(getNameAndAge_3('Maria', 25));






// ЦИКЛЫ  ==> когда нужно выполнить какоето действие оределёное количество раз.



// Напишите цикл for, который выводить в консоль числа от 1 до 10


for(let i = 1; i <= 10; i++) {
    console.log(i)
}


// выражение 1 - начальное значение счетчика    (let i = 1;)
// выражение 2 - условие повторения цикла       (i <= 10;)
// выражение 3 - изменение счетчика             (i++)

// i = i + 1
// i += 1
// i++



for(let i = 15; i <= 65; i += 5){
    console.log(i);
}


for (let i = 65; i >= 15; i -= 5){
    console.log(i)
}

// В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n.


function getNums(n, m) {
    for(let i = m; i <= n; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }
}

getNums(20, 9);



const getNums_2 = (n, m) => {
    for(let i = m; i <= n; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }
}

getNums_2(15, 1);




// == не строгое равенство  7 + '7' >>> это числа 
// === строгое равенство    7 + '7' >>> это разные символы


// В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большего числа до меньшего. Если числа равны, то вывести сообщение "The numbers are equal"




const getNumber = (n, m) => {
    if (n > m) {
        for (let i = n; i >= m; i--){
            console.log(i)
        }
    } else if (m > n) {
        for (let i = m; i >= n; i--){
            console.log(i)
        }
    } else {
        console.log('The numbers are equal')
    }
}

getNumber(2, 10);


const getNumber_1 = (n, m) => {
    if(n === m){
        console.log('The numbers are equal')
        return
    }

    for(let i = Math.max(n, m); i >= Math.min(n, m); i--){
        console.log(i)
    }
}

getNumber_1(1, 5);
getNumber_1(5, 1);
getNumber_1(5, 5);


// Напишите программу, которая с помощью цикла считает сумму чисел от 1 до 10 и выводит в консоль.



const getSum = () => {
    let sum = 0;
    for(let i = 1; i <= 10; i++){
        sum += i
    }
    return sum
}

console.log(getSum());


const getMult = () => {
    let sum = 1;
    for(let i = 1; i <= 10; i++){
        sum *= i
    }
    return sum
}

console.log(getMult());




// Складываем сумму четных чисел.

const getSum1 = () => {
    let sum = 0;
    for(let i = 1; i <= 10; i++){
        if(i % 2 === 0) {
            sum += i
            }
        }  
            return sum
}
        
    console.log(getSum1());
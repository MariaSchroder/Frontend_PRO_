const age = 34;
const name = 'Maria';
const lastname = 'Schroeder';

const is_student = true;

const fullname = name + ' ' + lastname;

console.log(fullname);
console.log(name + ' ' + lastname);


console.log(age);
console.log(name);
console.log(is_student);

console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(is_student));


const red = 134;
const green = 124;
const blue = 56;

// rgb(134, 124, 56);

console.log ('rgb(' + red + ', ' + green + ', ' + blue + ');'); // конкатенация
console.log (`rgb(${red}, ${green}, ${blue});`);


const name1 = 'Maria';
const lastname1 = 'Scroeder';
const age1 = 34;

const min = 34 * 365 * 24 * 60;

console.log (`Добрый день, ${name1}, ${lastname1}. Вам ${min} минут.`)

console.log (`Добрый день, ${name1}, ${lastname1}. Вам ${age1 * 365 * 24 * 60} минут.`)

const value_1 = 112;
const value_2 = 25;

console.log(value_1 + value_2);
console.log(value_1 - value_2);
console.log(value_1 * value_2);
console.log(value_1 / value_2);
console.log(value_1 % value_2);



const value_3 = 12;
console.log(value_3);  // число
console.log('' + value_3);  // строка
console.log(typeof('' + value_3)); // тип

const value_4 = '12'; // => строка
console.log(+value_4); // преабразовывает строку в число (+value_4)


let result = ('b' +  'a' + +'c').toLowerCase();
console.log(result); // => bannan 


const a = prompt('Укажите первое число: '); // prompt - функция которая возвращает нам строку считывает с конзоли
const b = prompt('Укажите второе число: ');


console.log(+a + +b);

const c = +prompt('Укажите первое число: ');
const d = +prompt('Укажите второе число: ');


console.log(`${c} + ${d} = ${c + d}`);
console.log(`${c} - ${d} = ${c - d}`);
console.log(`${c} * ${d} = ${c * d}`);
console.log(`${c} / ${d} = ${c / d}`);

const e = prompt('Укажите число:');

if (e > 0){
    console.log(`число ${e} положительное`);
}else {
    console.log(`число ${e} отрицательное`);
}




// получить два числа через prompt и сравнив их друг с другом вывести сообщение 
// <a> больше <b> на <разница между a и b>


const f = prompt('Укажите первое число:');
const g = prompt('Укажите второе число:');


if (f > g){
    console.log(`${f} больше ${g} на ${f - g}`);
}else if (f < g){
    console.log(`${f} меньше ${g} на ${g - f}`);
}else {
    console.log(f + ' = ' + g);
}




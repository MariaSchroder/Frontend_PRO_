

// СВОЙСТВА


let string = 'Maria Schroeder!';

console.log (string.length); // считает длину строки / элементы 

console.log (string[6]); //  => S  возвращает указанный символ из строки



let array = [1, 2, 3, 4, 'hello']; // 5


console.log(array.length); // считает длину массива
console.log (array[3]); // 4



// Есть строка, мы не знаем сколько в ней символов. Вывести в конзоль последний символ. 

let long_string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"



let index = long_string.length - 1; //индекс последнего элемента в строке
console.log (long_string[index]);



console.log (long_string[long_string.length - 1]);
// сразу высчитывает сколько символов и какой последний символ
// нумерация индекса начинается с 0 поэтому высчитываем еденицу -1



// МЕТОДЫ
//в конце методов нужны круглые скобки



let str = 'Hello world!';

console.log(str.toLowerCase()); // приводит все символы к нижнему регистру
console.log(str.toUpperCase()); // приводит все символы к верхнему регистру


str.length; // свойство (без скобок)
str.toLowerCase(); // метод (скобки) - функция




let str1 = '   Hello   '
console.log(str1.trim()); // trim => обрезает лишние пробелы по бокам



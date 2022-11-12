// //ЗАДАЧА 1
// // Реализуйте класс Language (Язык), который будет иметь следующие свойства:
// // name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
// //Создайте экземпляр этого класса
// //Выведете в консоль все свойства созданного экземпляра класса
// // Реализуйте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)


// class Language {
//     constructor(name, alphabet, country){
//         this.name = name;
//         this.alphabet = alphabet;
//         this.country = country;
//     }

//     get_info(){
//         console.log(`'Язык: ${this.name}, Алфавит: ${this.alphabet}, Страна, в которой говорят на этом языке ${this.country}`);
//     }
// }

// const language_1 = new Language('German', 'latin', 'Germany');
// const language_2 = new Language('Russian', 'cyrillic', 'Russia');

//   // console.log(language_1.name);
//   // console.log(language_1.alphabet);
//   // console.log(language_1.country);

//   // language_1.get_info();
//   // language_2.get_info();




//   //========================================================================

//   //ЗАДАЧА 2 (*посложнее)
//   // Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//   //rate (ставка за день работы), days (количество отработанных дней).
//   //Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//   //Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//   //С помощью класса создайте двух рабочих и найдите сумму их зарплат.
//   // Реализуйте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней на amount)

//   class Worker {
//     constructor(name, surname, rate, days){
//       this.name = name;
//       this.surname = surname;
//       this.rate = rate;
//       this.days = days;
//     }

//     getSalary(){
//       return this.rate * this.days
//     }

//     add_days(amount){
//       this.days += amount;
//     }

//     delete_days(amount){
//       this.days -= amount;
//     }
//   }

//   const worker_1 = new Worker('Ivan', 'Ivanov', 50, 10);
//   const worker_2 = new Worker('Petr', 'Petrov', 60, 14);

//   const salary_1 = worker_1.getSalary();
//   const salary_2 = worker_2.getSalary();
//   const salary_all = salary_1 + salary_2;

//   console.log(worker_1);

//   worker_1.delete_days(7);
//   worker_1.add_days(5);
//   worker_1.add_days(10);

//   console.log(worker_1);




// // Реализуйте класс Group (групп), который будет иметь следующие свойства: 
// // name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// // Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// // Создайте экземпляр этого класса
// // Проверьте как работают методы


// class Group{ 
//     constructor(name, major, number = 15){
//         this.name = name;
//         this.major = major;
//         this.number = number;
//     }

//     add_student(){
//         this.number++;  //  => this.number += 1;

//     }
    
//     delete_student(){
//         this.number--;  // => -1
//     }
// }


// const group1 = new Group('31/32', 'JavaScript', 19);
// const group2 = new Group('33/34', 'Python');

// // console.log(group1);
// // console.log(group2);

// // group1.add_student();
// // console.log(group1);

// // group1.delete_student();
// // console.log(group1);

// // group2.delete_student();
// // console.log(group2);





// // Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив


// let all_groups = [];

// const create_group = (name, major, num) => { 
//     const group = new Group(name, major, num)   //   создали экземпляр класса/ обьект
//     all_groups.push(group);     //   добавляем обьект в массив
// }

// // короткая запись

// // const create_group = (name, major, num) => all_groups.push(new Group(name, major, num));

// create_group('31/32', 'JavaScript', 19);
// create_group('33/34', 'Python');

// // console.log(all_groups);





//   DOM   ///


//   DOM - Document Object Model



const header = document.querySelector('.header'); //  подключаемся к html документу
const paragraph = document.querySelector('#par');
const container = document.querySelector('.container');

// console.log(paragraph);


header.style.color = 'green';   //   меняем цвет заголовку
paragraph.style.backgroundColor = 'yellow'; // меняем задний фон параграфу

header.classList.add('class_added');        // =>   добавляем класс через JS
//header.classList.remove('class_remove')  // =>   удаляем класс через JS

console.log(header);



const text = document.createElement('p'); //   => создаём новый элемент (<p></p>)

text.innerText = 'Какой-то текст';  //   добавляем текст в <p></p>

container.append(text);  //  добавить (<p></p>) внутрь container




const divElem = document.createElement('div');
divElem.innerText = 'текст внутри div';
container.append(divElem);




























































































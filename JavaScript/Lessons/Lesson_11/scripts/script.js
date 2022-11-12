// Дан массив с данными
const people = [
    {
        first_name: 'Ivan',
        last_name: 'Ivanov',
        age: 20,
        city: 'Moscow',
        country: 'Russia',
        active: true
    },
    {
        first_name: 'dmitry',
        last_name: 'Petrov',
        age: 7,
        city: 'Berlin',
        country: 'Germany',
        active: true
    },
    {
        first_name: 'Irina',
        last_name: 'Alexandrova',
        age: 46,
        city: 'Paris',
        country: 'France',
        active: false
    },
    {
        first_name: 'Denis',
        last_name: 'Sokolov',
        age: 10,
        city: 'Rome',
        country: 'Italy',
        active: false
    }
];

  //1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', {...}, {...}, ...]

const info = people.map(person => `${person.first_name} ${person.last_name} (${person.city}, ${person.country})`);

  // 2. Сформируйте массив из активных людей

  // const active = people.filter(person => person.active === true);

const active = people.filter(person => person.active);

  //3. Сформируйте массив из людей, чьи имена начинаются на 'D' (регистр буквы может быть и нижним)

const people_d = people.filter(person => person.first_name[0].toUpperCase() === 'D');

  //4. Получите из массива объект, где страной проживания человека является 'Germany'

  const person_from_germany = people.find(person => person.country === 'Germany'); // {...}
  const person_from_germany1 = people.filter(person => person.country === 'Germany'); // [ {...} ]

  // 5. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: [ {<Имя> <Фамилия> (<возраст>), <Страна> (<Город>)}, {...}, {...}, ...]

const adults = people.filter(pers => pers.age >= 18).map(pers => `${pers.first_name} ${pers.last_name} (${pers.age}), ${pers.country} (${pers.city})`);

  // 6. Измените у первого элемента значение first_name на "Petr" и age на 99;

people[0].first_name = 'Petr';
people[0].age = 99;



const user = {
    first_name: 'Nelli',
    last_name: 'Efremyan',
    age: 27
};

  // user = [1, 2, 3]; => ошибка

  // user.age = 50; => можно

  // user = {
  //   city: 'Yerevan'
  // } => ошибка




//Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan' }, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27

const user1 = {
    first_name: 'Ivan',
    last_name: 'Sidorov'
};

const get_value = (obj, key) => obj[key]; // => динамическая функция, key как переменная (ключ)

console.log(get_value(user1, 'first_name')); // => передаём обьект и ключ (что хотим вывести)
console.log(get_value(user1, 'last_name'));




// 2. Проверьте, что массив не пустой - в нем есть хотя бы один объект с ключом age.

const people2 = [
    {
        first_name: 'Ivan',
        last_name: 'Ivanov',
        age: 20,
        city: 'Moscow',
        country: 'Russia',
        active: true
    },
    {
        first_name: 'dmitry',
        last_name: 'Petrov',
        age: 7,
        city: 'Berlin',
        country: 'Germany',
        active: true
    },
    {
        first_name: 'Irina',
        last_name: 'Alexandrova',
        age: 46,
        city: 'Paris',
        country: 'France',
        active: false
    },
    {
        first_name: 'Denis',
        last_name: 'Sokolov',
        age: 10,
        city: 'Rome',
        country: 'Italy',
        active: false
    }
];

// 3 способа чтобы проверить пустой ли массив или нет

console.log(people2[0].age); // 20
console.log(people2.hasOwnProperty('age')); // true / false => проверяет пустой или нет массив
console.log('age' in people2[0]); // true / false




// КЛАССЫ //



class Users {
    constructor(first_name, last_name, country, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.country = country;
        this.age = age;
    }

    get_info(){
        console.log(`Пользователь: ${this.first_name}, ${this.age} (${this.country})`)      //  создаем метод внутри класса
    }


}


// создаём экземпляры класса


const person_1 = new Users('Anna', 'Boiko', 'USA', 25);
// this.first_name = Users;

const person_2 = new Users('Semen', 'Petrov', 'Russian', 35);
const person_3 = new Users('Ivan', 'Ivanov', 'Germany', 42);

console.log(person_1);      //  экземпляр класса 
console.log(person_1.age);      //  вывести по ключу



const person_object = {     // Литеральная нотация
    first_name: 'Ivan',
    last_name: 'Ivanov',
    country: 'Germany', 
    age: 42
}
console.log(person_object);     //   обьект


//   Вызываем метод get_info()

person_1.get_info();        // Пользователь: Anna, 25 (USA)
person_2.get_info();
person_3.get_info();


// ЗАДАЧА
// Реализуйте класс Country (Страна), который будет иметь следующие свойства: 
// name (имя), capital (столица), population (численность населения), climat (климат)
//Создайте 3 экземпляра этого класса с разными свойствами
//Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса
//Реализйуте метод get_capital, который выводит в консоль сообщение 'The capital of <COUNTRY> is <CAPITAL>'

class Country{
    constructor(name, capital, population, climat){
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.climat = climat;
    }

    get_capital(){
        console.log(`The capital of ${this.name} ${this.capital}`)
    }
}


const country1 = new Country('Germany', 'Berlin', 100000, 'neutral');
const country2 = new Country('Italien', 'Rom', 50000, 'tropic');
const country3 = new Country('France', 'Paris', 305000, 'neutral');


console.log(country1.capital);
console.log(country2.name);
console.log(country3.climat);


country1.get_capital();
country2.get_capital();
country3.get_capital();

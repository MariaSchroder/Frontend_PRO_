class Panda{

    constructor(name, age){
        this.name = name;
        this.age = age;
        this.energy = 100;
    }


    eat(){
        if(this.energy === 100){
            console.log('Пожалуй, достаточно! Пойду спать!')
        }else{this.energy += 20;        
            console.log(`nyam-nyam!!! Energy  ${this.energy} %`);}
    }

    fall(){
        if(this.energy === 0){
            console.log('Пожалуй, достаточно! Пойду поем!')
        }else{this.energy -= 20;
            console.log('booo-booch !!!', `Energy: => ${this.energy} %`);
        }
        
    }
}

// доработайте метод eat таким образом, чтобы при каждом вызове добавлялось 20 процентов энергии. Если энергии уже 100 процентов выведите какое-нибудь сообщение и не прибавляйте энергию



const carl = new Panda('Carl', 18);
const bobo = new Panda('Bobo', 12);
const joky = new Panda('Joky', 15);

// console.log(carl);
// console.log(bobo);
// console.log(joky);


// tom.eat();

// carl.fall();
// tom.fall();


// Создать класс User со свойствами name и age
// и метод sayHi который выводит в конзоль фразу 'Hello'


// добавить метод b_day который увеличивает возраст на еденицу и выводит поздравления в конзоль


// добавить роли => root, admin, manager, user

// проверить указываемую роль и если она входит в список допустимых указать её пользователю. В ином случае в свойство role указать undefindet 


// добавить метод изменения роли, который получает в качестве аргумента новую роль и изменяет свойство role в случае, если роль указана верно. Если роль неверна, то в свойство role указать underfined.


class User{

    static roles = ['root', 'admin', 'manager', 'user'];    //   статическое свойство считываем массив из самого класса

    constructor(name, age, role){
        this.name = name;
        this.age = age;
        
        if(User.roles.includes(role)){
            this.role = role;
        }else{
            this.role = undefined;
        }
    }   // Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

    sayHi(){
        console.log(`Hello, ${this.name}!`)
    }

    chage_name(newName){
        this.name = newName;
    }

    b_day(){
                        //   примеры как можно вывести
        // this.age++
        // console.log(' Happy Birday!')
        
        // console.log(this.age++ + ' Happy Birday!');
        
        // console.log(`${this.age++} ' Happy Birday!`);
    }

new_role(newRole){
    if (User.roles.includes(newRole)){
        this.role = newRole;
    }else{
        this.role = undefined;
    }
}


}

const person1 = new User('Anton', 32, 'root');
const person2 = new User('Anna', 31, 'student');





//console.log(person1.new_role('manager'));
// console.log(person);

// person.sayHi();


// console.log(person);

// person.b_day();

console.log(User.roles);

User.roles.push('student');     //   добавляем еще один обьект в массив (rolles)

console.log(User.roles);

//console.log(person1);





































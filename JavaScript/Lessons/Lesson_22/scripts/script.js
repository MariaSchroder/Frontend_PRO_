/*
const tasks_container = document.querySelector('#tasks_container');

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp => resp.json())
    .then(json => render(json))

const render = (json) => { 
    const tasks = json.map(({ title, completed }) => {
        const task = document.createElement('div');
        const taskTitle = document.createElement('p');
        const taskStatus = document.createElement('p');

        const status = completed ? 'done' : 'not done';
        const background = completed ? 'lightgreen' : 'lightgray';

        taskTitle.innerText = `Task: ${title}`;
        taskStatus.innerText = `Status: ${status}`;

        task.classList.add('task_card');
        task.style.backgroundColor = background;

        task.append(taskTitle, taskStatus);
        return task
    })
}

<div id="tasks_container"></div>


#tasks_container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
}

.task_card {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
}*/

/*
const tasks_container = document.querySelector('#tasks_container');

let id_num = 1;

const request = num => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(resp => resp.json())
        .then(json => render(json))
}


const render = ({ title, completed }) => { 

        tasks_container.innerText = '';

        const task = document.createElement('div');
        const taskTitle = document.createElement('p');
        const taskStatus = document.createElement('p');

        const status = completed ? 'done' : 'not done';
        const background = completed ? 'lightgreen' : 'lightgray';

        taskTitle.innerText = `Task: ${title}`;
        taskStatus.innerText = `Status: ${status}`;

        task.classList.add('task_card');
        task.style.backgroundColor = background;

        task.append(taskTitle, taskStatus);
        tasks_container.append(task);
}


// переключатели

<div class="triggers">
        <button><</button>
        <button>></button>


        .triggers button {
    background-color: green;
    color: white;
    border: 1px solid black;
    border-radius: 3px;
    width: 30px;
    padding: 10px;
    margin: 5px;
}


const [ left_btn, right_btn ] = document.querySelectorAll('.triggers button');

left_btn.addEventListener('click', () => {
    if(id_num === 1) {          // зацикленность 
        id_num = 201
    }  
        
    request(--id_num)
});

right_btn.addEventListener('click', () => {
    if(id_num === 200) {
    id_num = 0
}  
    request(++id_num)
});


request(id_num);
*/

/*
// Имя фамилия, возраст, пол. В зависимости от пола цвет заднего фона


<form class="user_form">
        <input type="text" placeholder="ID number" name="id_number">
        <button>Get user</button>
    </form>
    
    <div class="users_container"></div>


.user_card {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
}


const userForm = document.querySelector('.user_form');
const usersContainer = document.querySelector('.users_container');

const request = num => {
fetch(`https://dummyjson.com/users/${num}`)
    .then(resp => resp.json())
    .then(json => render(json))
}

const render = ({ firstName, lastName, age, gender }) => {
    usersContainer.innerText = '';
    const userCard = document.createElement('div');
    const nameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const genderElem = document.createElement('p');

    nameElem.innerText = `Name: ${firstName} ${lastName}`;
    ageElem.innerText = `Age: ${age}`;
    genderElem.innerText = `Gender: ${gender}`;

    const card_background = gender === 'male' ? 'lightgreen' : 'lightpink';
    userCard.style.backgroundColor = card_background;
    userCard.classList.add('user_card');

    userCard.append(nameElem, ageElem, genderElem);
    usersContainer.append(userCard);
};

userForm.addEventListener('submit', event => {
    event.preventDefault();
    const id = event.target.id_number.value;
    request(id);

    event.target.id_number.value = '';
});

*/









































import React, { useState } from "react";

// с помощью хука - useState мы указывает реакту где произошло какоето изменение

// Хуки (Hook) — нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов.

export default function Counter() {
 
const [ likes, setLikes ] = useState(0); // передаём число, пустой массив  с кокого будет отчет

// likes -> переменная, которая хранит состояние (аналог const likes = 0)

// setLikes -> функция, которая отслеживает изменение состояния и указывает реакту где произошло изменение 

const incr = () => {
    setLikes(likes + 1);
}

const decr = () => {
    setLikes(likes - 1);
}


// onClick -> слушатель события

return (
    <div>
        <p>{likes}</p>
        <button onClick={decr}>-</button>   
        <button onClick={incr}>+</button>

    </div>
  );
}

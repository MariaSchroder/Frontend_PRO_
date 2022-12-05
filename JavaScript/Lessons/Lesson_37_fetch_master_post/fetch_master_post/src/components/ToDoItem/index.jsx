import React from "react";
import s from './index.module.css'



export default function ToDoItem({ todo, completed }) {
  
  const todo_style = {
    border: completed ? '2px solid green' : '2px solid red'
  }

  
  return (
    <div className={s.todo_card} style={todo_style}>
         <p>Task: { todo }</p>
         <p>Status: { completed ? 'done' : 'not done'} </p>

    </div>
);
}

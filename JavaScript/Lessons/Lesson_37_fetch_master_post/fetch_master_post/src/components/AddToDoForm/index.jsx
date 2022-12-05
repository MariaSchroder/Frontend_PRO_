import React, { useContext } from "react";
import s from './index.module.css'
import { Context } from "../../context";
import { addTodo } from '../../request/todos'


export default function AddToDoForm() {

    const { createNewTodo } = useContext(Context);

    const submit = event => {
        event.preventDefault();
        const { todo } = event.target;
        addTodo({
          todo: todo.value,
          completed: false,
          userId: 26
        }, createNewTodo);
        todo.value = '';
      }
    

    return (
    <form onSubmit={submit} className={s.add_todo_form}>
        <input type="text" name="todo" placeholder="Task" />
        
        <button>Add to do</button>
    </form>
    );
}



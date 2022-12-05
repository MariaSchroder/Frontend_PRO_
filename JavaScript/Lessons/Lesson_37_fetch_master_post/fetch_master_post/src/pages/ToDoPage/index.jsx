import React from "react";
import s from './index.module.css'
import { Link } from 'react-router-dom'
import ToDoContainer from "../../components/ToDoContainer";
import AddToDoForm from "../../components/AddToDoForm";


export default function ToDoPage() {
  return (
    <div className={s.btn_style}>
          <Link to='/'>
            <button>Home Page</button>
        </Link>
        
        <AddToDoForm />
        <ToDoContainer />

      </div>
  );
}

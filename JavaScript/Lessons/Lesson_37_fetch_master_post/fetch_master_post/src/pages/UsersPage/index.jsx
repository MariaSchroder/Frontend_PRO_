import React from "react";
import { Link } from 'react-router-dom'
import AddUserForm from "../../components/AddUserForm";
import UsersContainer from "../../components/UsersContainer";
import s from './index.module.css'


export default function UsersPage() {
  return (
    <div className={s.btn_style}>
        <Link to='/'>
            <button>Home Page</button>
        </Link> 
        
        <AddUserForm />
        <UsersContainer />  

      </div>
  );
}

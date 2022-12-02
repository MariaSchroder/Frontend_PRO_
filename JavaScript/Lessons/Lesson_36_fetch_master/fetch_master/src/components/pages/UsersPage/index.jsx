import React from "react";
import UsersContainer from "../../UsersContainer";
import { Link } from 'react-router-dom'
import s from './index.module.css'


export default function UsersPage() {
  return (
    <div className={s.btn_style}>
        <Link to='/'>
          <button>Home page</button>
        </Link>
        <UsersContainer />
    </div>
  );
}

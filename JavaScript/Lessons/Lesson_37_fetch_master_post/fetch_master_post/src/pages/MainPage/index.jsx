import React from "react";
import { Link } from 'react-router-dom'
import s from './index.module.css'



export default function MainPage() {
  return (
    <div className={s.btn_style}>
        
        <Link to='/products'>
            <button>Products Page</button>
        </Link>

        <Link to='/users'>
            <button>Users Page</button>
        </Link>
    </div>
  );
}

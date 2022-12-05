import React from "react";
import { Link } from 'react-router-dom'
import s from './index.module.css'



export default function MainPage() {
  return (
    <div className={s.btn_style}>
        
        <Link to='/products'>
            <button>Products</button>
        </Link>

        <Link to='/users'>
            <button>Users</button>
        </Link>

        <Link to='/todos'>
            <button>To do list</button>
          </Link>
    </div>
  );
}

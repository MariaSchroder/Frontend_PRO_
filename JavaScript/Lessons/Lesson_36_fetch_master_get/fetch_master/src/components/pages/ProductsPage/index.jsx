import React from "react";
import ProductsContainer from "../../ProductsContainer";
import { Link } from 'react-router-dom'
import s from './index.module.css'



export default function ProductsPage() {
  return (
    <div className={s.btn_style}>
        <Link to='/'>
          <button>Home page</button>
        </Link>
        <ProductsContainer />
    </div>
  );
}

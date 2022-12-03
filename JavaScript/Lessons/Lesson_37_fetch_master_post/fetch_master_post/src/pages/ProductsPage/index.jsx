import React from "react";
import { Link } from 'react-router-dom'
import ProductsContainer from "../../components/ProductsContainer";
import s from './index.module.css'

        
export default function ProductsPage() {
  return (
    <div className={s.btn_style}>
        <Link to='/'>
            <button>Home Page</button>
        </Link>

        <ProductsContainer />
    </div>
  );
}

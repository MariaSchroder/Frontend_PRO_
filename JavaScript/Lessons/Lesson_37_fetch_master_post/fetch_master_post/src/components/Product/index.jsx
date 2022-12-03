import React from "react";
import s from './index.module.css'


export default function Product({ title, price, description }) {
  return (
    <div className={s.product_card}>
        <p>Title: { title }</p>
        <p>Price: { price }</p>
        <p>Description: { description }</p>
    
    </div>
  );
}

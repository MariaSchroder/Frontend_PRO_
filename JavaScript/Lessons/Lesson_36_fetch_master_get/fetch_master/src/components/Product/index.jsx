import React from "react";
import s from './index.module.css'

export default function Product({ title, description }) {
  return (
    
    <div className={s.productsCard}>
      <p>Title: { title }</p>
      <p>Description: </p>
      <p>{ description }</p>
    </div>
  );
}

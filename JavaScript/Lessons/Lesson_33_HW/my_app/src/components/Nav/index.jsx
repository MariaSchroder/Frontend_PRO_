import React from "react";
import s from './index.module.css'
import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <div className={s.nav_menu}>
        <Link to='/fruits_page'>Fruits</Link>
        <Link to='/vegetables_page'>Vegetables</Link>
    </div>
  );
}
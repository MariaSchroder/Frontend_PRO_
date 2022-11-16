import React from "react";
import s from './index.module.css'
import { Link, link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={s.nav_menu}>
        <Link to= '/configurations_page'>Configuration</Link>
        <Link to='/teams_page'>Teams</Link>
    </nav>
  );
}

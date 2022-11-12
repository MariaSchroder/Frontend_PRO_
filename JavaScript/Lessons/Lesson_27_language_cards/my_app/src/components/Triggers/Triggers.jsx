import React from "react";
import s from './triggers.module.css'


export default function Triggers({ change_to_eng, change_to_ger }) {
  return (
  
    <div className={s.triggers}>
        <button onClick={change_to_eng}>English</button>
        <button onClick= {change_to_ger}>German</button>
    </div>
  );
}

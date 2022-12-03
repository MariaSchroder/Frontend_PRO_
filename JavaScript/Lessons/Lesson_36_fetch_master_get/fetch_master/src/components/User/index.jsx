import React from "react";
import s from './index.module.css'



export default function User({ firstName, lastName, age }) {
  return (
    <div className={s.usersCard}>
      <p>Firstname: { firstName }</p>
      <p>Lastname: { lastName }</p>
      <p>Age: { age }</p>

      

    </div>
  );
}

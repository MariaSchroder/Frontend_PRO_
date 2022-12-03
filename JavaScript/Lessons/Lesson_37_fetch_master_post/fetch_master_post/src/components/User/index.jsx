import React from "react";
import s from './index.module.css'

export default function User({ name, email, role, avatar }) {
  return (
    <div className={s.users_card}>
      <p>Name: { name }</p>
      <p>Email: { email }</p>
      <p>Role: { role }</p>
      <img src={ avatar } alt="avatar" />

    </div>
  );
}

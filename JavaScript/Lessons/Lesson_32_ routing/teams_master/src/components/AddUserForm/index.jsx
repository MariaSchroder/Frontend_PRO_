import React, { useContext } from "react";
import s from './index.module.css'
import Select from 'react-select'
import { Context } from "../../context";

export default function AddUserForm() {

  const { teams } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { name, team } = event.target;
    console.log(name.value, team.value);
    name.value = '';
  }

  
  return (
    <form className={s.add_user_form} onSubmit={submit}>
        
        <p>Add user</p>
        <input type="text" name="name" placeholder="Name" />
        <Select options={teams} name="team"/>
        <button>Add user</button>

    </form>
  );
}

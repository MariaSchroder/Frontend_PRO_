import React from "react";
import s from './postForm.module.css'

export default function PostForm({ add_card }) {
  
    const form_submit = (event) => {
      event.preventDefault();
      const { ger, eng } = event.target;
      add_card( ger.value, eng.value);
      ger.value = '';
      eng.value = '';
    }
  
  
    return (

      <form onSubmit={form_submit} className={s.add_form}>
        <input type="text" name="ger" placeholder="German" />
        <input type="text" name="eng" placeholder="English" />
        <button>Add</button>

      
      </form>
      
  );
}

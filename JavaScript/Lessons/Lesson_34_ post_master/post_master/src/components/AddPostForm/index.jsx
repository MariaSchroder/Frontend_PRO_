import React from "react";
import s from './index.module.css'

export default function AddPostForm() {
  
  const submit = event => {
    event.preventDefault();
    const { title, text } = event.target;
    add_post(title.value, text.value);
    title.value = '';
    text.value = '';
  }
  return (
    <form className={s.addPostForm} onSubmit={submit}>
        
        <input type="text" name="title" placeholder="Your title" />
        <input type="text" name="text" placeholder="Your text" />
        <button>Add form</button>


    </form>
  );
}

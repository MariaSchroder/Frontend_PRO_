import React, { useContext } from "react";
import s from './index.module.css'
import { Context } from "../../context";

export default function Post({ id, title, text, like}) {
  
const { change_like } = useContext(Context); // достаём функцию  change_like из контекста

  const like_text = like ? 'Liked' : 'Like?';
  
  const like_style = [s.like_btn, like ? s.like_btn_active : ''].join(' '); // переключает цвет лайка
  
  return (
    <div className={s.post_item}>
        <p>{ title }</p>
        <p>{ text }</p>
        {/* <p>{ like ? 'Liked' : 'Like?' }</p>  
        => запись без переменной  like_text*/}
        <p 
          className={like_style}
          onClick={() => change_like(id)}
          >
          { like_text }
          </p>
        


    </div>
  );
}

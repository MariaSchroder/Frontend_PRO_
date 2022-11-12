import React from "react";
import s from './card.module.css'


export default function Card({ id, eng, ger, lang, change_lang }) {
   
  const text = lang === 'eng' ? eng : ger;
  
  const style = {
    color: lang === 'eng' ? 'white' : '#38ada9',
    backgroundColor: lang === 'eng' ? '#38ada9' : 'white'
  }

  return (
    
    <div className={s.cardStyle} style={style} onClick={() => change_lang(id)}>
        { text }
        
    </div>
  );
}

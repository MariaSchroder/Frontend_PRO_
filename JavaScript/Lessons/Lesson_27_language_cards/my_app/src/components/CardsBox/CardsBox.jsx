import React from "react";
import Card from "../Card/Card";
import s from './cardsBox.module.css'

export default function CardsBox({ words_array, change_lang }) {
  
  
  return (
    <div className={s.cards_container}>
        {
            words_array.map(el => <Card {...el} key={el.id} change_lang={change_lang}/>)
        }
    </div>
  );
}

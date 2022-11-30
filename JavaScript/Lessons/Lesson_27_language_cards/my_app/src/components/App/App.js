import CardsBox from "../CardsBox/CardsBox";
import { words } from '../../data/words'
import { useState, useEffect } from 'react'
import Triggers from "../Triggers/Triggers";
import PostForm from "../PostForm/PostForm";

function App() {

  const [ cards, setCards ] = useState(words);


  // программа выполнится только 1 раз при перезагрузки страницы (useEffect)
  // программа будет обращаться к localStorage и будет вытаскивать последнее изменённое состояние
  
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('cards'));
    
    setCards(res)
  }, []); 
  // [] - следить за состоянием не нужно, функция запускается 1 раз при перезагрузке страницы

  
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]);

  // [cards] - функция выполняется каждый раз при изменении состояния cards

  // [cards] - второй аргумент - указание на то, за каким состоянием надо следить

  


  const change_to_eng = () => {
    setCards(cards.map(el => {
      el.lang = 'eng';
      return el
    }))
  }

  const change_to_ger = () => {
    setCards(cards.map(el => {
      el.lang = 'ger'; 
      return el
    }))
  }

  const change_lang = (id) => {
    setCards(cards.map(el => {
      if(el.id === id){
        el.lang = el.lang === 'ger' ? 'eng' : 'ger'
      }
      return el
    }))
  }

  const add_card = (ger_value, eng_value) => setCards([
    ...cards,
    {
      id: cards.length + 1,
   // id: Date.now() -> генерирует уникальное число
      eng: eng_value,
      ger: ger_value,
      lang: 'ger'
    }

  ]);

  return (
    <div>
      <PostForm add_card={add_card}/>
      
      <CardsBox words_array={cards} change_lang={change_lang}/>
      
      <Triggers change_to_eng={change_to_eng} change_to_ger={change_to_ger} />
      

    </div>
  );
}

export default App;

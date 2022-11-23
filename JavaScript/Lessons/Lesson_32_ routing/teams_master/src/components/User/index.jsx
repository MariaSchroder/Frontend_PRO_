import React, { useContext } from "react";
import s from './index.module.css'
import { Context } from "../../context";

export default function User({ id, name, team }) {
  
  const { deleteUser } = useContext(Context);

  return (
   <div className={s.user_card} onClick={()=> deleteUser(id)}>  
  {/* onClick/ onDoubleClick={()=> deleteUser(id)} -> при клике запускается функция которая меняет состояние (в данном случае удаление карточки) */}
       
        <p>{ name }</p>
        <p>{ team }</p>

    </div>
  );
}
 
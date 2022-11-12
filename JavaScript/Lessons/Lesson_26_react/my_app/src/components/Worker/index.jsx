import React from "react";
import s from './index.module.css'
import TaskContainer from "../TaskContainer/taskContainer";


export default function Worker({ id, firstname, lastname, position, avatar, in_office, tasks }) {
  
  const card_style = {
    backgroundColor: in_office ? 'lightgreen' : 'lightgray',
    
    color: in_office  ? '' : 'blue'
  }

  // оператор нулевого слияния  (??) (для null и  underfined )

  // -> будет отрабатывать только когда нет ключа или когда ключ есть а значение null 
    
  const img_url = avatar ?? './media/no_face.png'
    
    //const img_url = avatar ? avatar : './media/no_face.png'

    //const img_url = avatar || './media/no_face.png'

  
    
  return (
    <div className={s.worker_card} style={card_style} >
       <p>ID: { id }</p>
       <p>Firstname: { firstname }</p>
       <p>Lastname { lastname }</p>
       <p>Position: { position }</p>
       <img src={img_url} alt="foto"/>
       <TaskContainer tasks={tasks}/>
      
    </div>
    );
}

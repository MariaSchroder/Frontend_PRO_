import React from 'react'
import s from './index.module.css'
import TasksContainer from '../TaskContainer';
export default function Worker({ id, firstname, lastname, position, in_office, avatar, tasks }) {

  const card_style = {
    backgroundColor: in_office ? 'lightgreen' : 'lightgray',
    color: in_office ? '' : 'blue'  
  }

  const img_url = avatar ?? './media/no_face.png'; // оператор нулевого слияния
  // const img_url = avatar === '' ? './media/no_face.png' : avatar;

  return (
    <div className={s.worker_card} style={card_style}>
      <p>ID: {id}</p>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Position: {position}</p>
      <img alt='worker' src={img_url} />
      <TasksContainer tasks={tasks} />
    </div>
  )
}

// У работников с in_office false поменять цвет текста на синий
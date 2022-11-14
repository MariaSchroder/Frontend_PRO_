import React from 'react'
import Task from '../Task'

export default function TasksContainer({ tasks }) {
  return (
    <div>
      Tasks: 
      {
        tasks.length !== 0
        ? tasks
            .sort((a, b) => a.done - b.done)
            .map(el => <Task key={el.id} {...el} />)
        : <span> No tasks</span>
      }
    </div>
  )
}
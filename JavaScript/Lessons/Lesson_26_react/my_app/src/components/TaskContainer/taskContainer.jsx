import React from "react";
import Task from "../Task/task";

export default function TaskContainer({ tasks }) {
  return (
  
    <div>
      Tasks:
         {
          tasks[0]  // tasks.length !== 0
          ? tasks
          .sort((a, b) => a.done - b.done)
          .map(el => <Task {...el} key={el.id}/>)
          : <span>  No tasks</span>
         }
         
    </div>
    
    );
}

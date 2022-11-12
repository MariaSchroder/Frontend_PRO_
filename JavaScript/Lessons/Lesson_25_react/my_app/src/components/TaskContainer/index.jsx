import React from "react";
import Task from "../Task";

export default function TaskContainer({ tasks }) {
  return (
  
    <div>
      Aufgaben:
        {
          tasks.map(el => <Task {...el} key={el.id} />)
        }
    </div>
    );
}

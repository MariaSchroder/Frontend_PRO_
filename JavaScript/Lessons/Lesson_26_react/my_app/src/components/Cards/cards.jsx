import React from "react";
import Worker from "../Worker";

export default function Cards({ workers }) {
  

  return (
    <div> 
        
      {
        workers
          //.filter(el => el.in_office)
           .map(el => <Worker {...el} key={el.id}/>)
      } 

    </div>
  );
}

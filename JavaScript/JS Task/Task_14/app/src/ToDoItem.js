import React from "react";

export default function ToDoItem(props) {
    const title = props.title;
    const descr = props.descr;
    
    return ( 
    <p>{title}</p>
    )
}

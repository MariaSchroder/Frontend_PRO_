import React, { useContext } from "react";
import { Context } from "../../context";
import s from './index.module.css'

export default function Comment({ id, comment, post_id }) {
   
  const { delete_comment } = useContext(Context)
  
  return (
    <div className={s.commit_item} onClick={() => delete_comment(post_id, id)}>
        
        { comment }
    </div>
  );
}

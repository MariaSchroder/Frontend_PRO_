import React from "react";
import s from './index.module.css'

export default function Comment({ id, comment }) {
  return (
    <div className={s.commit_item}>
        { comment }
    </div>
  );
}

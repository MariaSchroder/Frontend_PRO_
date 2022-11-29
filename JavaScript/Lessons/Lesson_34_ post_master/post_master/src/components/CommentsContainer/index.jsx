import React from "react";
import AddCommentForm from "../AddCommentForm";
import Comment from '../Comment'



export default function CommentsContainer({ comments }) {
  return (
    <div>
        {
        comments.map(el => <Comment key={el.id} {...el} />)
        }
        <AddCommentForm />
    </div>
  );
}

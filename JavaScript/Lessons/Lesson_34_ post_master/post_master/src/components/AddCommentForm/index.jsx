import React from "react";

export default function AddCommentForm() {
  
  const submit = event => {
    event.preventDefault();
    const { comment } = event.target;
    console.log(comment.value);
    comment.value = ''
  }
  
  return (
    <form onSubmit={submit}>
        <input type="text" name="comment" placeholder="Type your comment"/>
        <button>Add comment</button>
    </form>
  );
}

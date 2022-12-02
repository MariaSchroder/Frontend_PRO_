import React from "react";

export default function User({ firstName, lastName, age }) {
  return (
    <div>
      <p>Firstname: { firstName }</p>
      <p>Lastname: { lastName }</p>
      <p>Age: { age }</p>

      

    </div>
  );
}

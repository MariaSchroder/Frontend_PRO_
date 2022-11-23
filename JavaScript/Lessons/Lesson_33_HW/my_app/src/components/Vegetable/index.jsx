import React from "react";

export default function Vegetable({ title, price, country }) {
    return (
      <div>
          <div>
              <p>Title: { title }</p>
              <p>Price: { price }</p>
              <p>Country: { country }</p>
  
          </div>
      </div>
    );
  }
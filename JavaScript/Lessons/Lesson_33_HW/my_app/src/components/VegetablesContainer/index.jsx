import React from "react";
import { vegetables } from "../../data/vegetables";
import Vegetable from "../Vegetable";

export default function VegetablesContainer() {
  return (
    <div>
        {
          vegetables
            .sort((a,b) => a.price - b.price)
            .map(el => <Vegetable key={el.id} {...el}/>)
        }
    </div>
  );
}
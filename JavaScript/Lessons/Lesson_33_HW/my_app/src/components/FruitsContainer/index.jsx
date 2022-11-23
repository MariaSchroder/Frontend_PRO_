import React from "react";
import { fruits } from "../../data/fruits";
import Fruit from "../Fruit";

export default function FruitsContainer() {
  return (
    <div>
        {
          fruits
            .sort((a,b) => a.price - b.price)
            .map(el => <Fruit key={el.id} {...el} />)
        }
    </div>
  );
}
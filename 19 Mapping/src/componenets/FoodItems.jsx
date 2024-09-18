/* eslint-disable react/prop-types */
import Item from "./Item";
import { useState } from "react";

function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);

  function onBuyButtonClicked(foods, event) {
    let newItems = [...activeItems, foods];
    setActiveItems(newItems);
  }

  return (
    <ul className="list-group">
      {items.map((foods) => (
        <Item
          key={foods}
          foodList={foods}
          bought={activeItems.includes(foods)}
          handleBuyButton={(event) => onBuyButtonClicked(foods, event)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;

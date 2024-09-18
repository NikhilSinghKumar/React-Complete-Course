import Item from "./Item";

function FoodItems({ items }) {
  return (
    <ul className="list-group">
      {items.map((foods) => (
        <Item
          key={foods}
          foodList={foods}
          handleByButton={() => console.log(`${foods} is ordered.`)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;

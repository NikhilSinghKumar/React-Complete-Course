import Container from "./componenets/Container";
import ErrorMessage from "./componenets/ErrorMessage";
import FoodItems from "./componenets/FoodItems";
import "./App.css";
import FoodInput from "./componenets/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  function onKeyDown(event) {
    if (event.key === "Enter") {
      let newFoodToAdd = event.target.value;
      let newFoodAdded = [...foodItems, newFoodToAdd];
      setFoodItems(newFoodAdded);
    }
  }

  return (
    <Container>
      <h1 className="food-heading">Daily Healthy Food</h1>
      <FoodInput handleOnKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;

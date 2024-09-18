import Container from "./componenets/Container";
import ErrorMessage from "./componenets/ErrorMessage";
import FoodItems from "./componenets/FoodItems";
import "./App.css";
import FoodInput from "./componenets/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = ["Dal", "Roti", "Chawal", "Papad", "Sabji"];

  let [textState, setTextState] = useState("Please enter food");

  function handleOnChange(event) {
    setTextState(event.target.value);
  }

  return (
    <Container>
      <h1 className="food-heading">Daily Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodInput handleOnChange={handleOnChange} />
      <p>{textState}</p>
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;

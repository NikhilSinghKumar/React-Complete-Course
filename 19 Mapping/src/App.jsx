import Container from "./componenets/Container";
import ErrorMessage from "./componenets/ErrorMessage";
import FoodItems from "./componenets/FoodItems";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Roti", "Chawal", "Papad", "Sabji"];
  return (
    <Container>
      <h1 className="food-heading">Daily Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;

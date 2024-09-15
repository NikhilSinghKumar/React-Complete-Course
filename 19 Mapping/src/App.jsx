import ErrorMessage from "./componenets/ErrorMessage";
import FoodItems from "./componenets/FoodItems";

function App() {
  let foodItems = ["Dal", "Roti", "Chawal", "Papad", "Sabji"];
  return (
    <>
      <h1>Daily Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;https://github.com/NikhilSinghKumar/React-Complete-Course

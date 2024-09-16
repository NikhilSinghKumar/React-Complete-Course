import styles from "./FoodInput.module.css";
function FoodInput() {
  function handleOnChange(event) {
    console.log(event.target.value);
  }

  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Search Food"
      onChange={handleOnChange}
    />
  );
}

export default FoodInput;

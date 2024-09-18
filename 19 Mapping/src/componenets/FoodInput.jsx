import styles from "./FoodInput.module.css";
function FoodInput({ handleOnChange }) {
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

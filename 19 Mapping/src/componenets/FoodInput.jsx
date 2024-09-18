import styles from "./FoodInput.module.css";
// eslint-disable-next-line react/prop-types
function FoodInput({ handleOnKeyDown }) {
  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Search Food"
      onKeyDown={handleOnKeyDown}
    />
  );
}

export default FoodInput;

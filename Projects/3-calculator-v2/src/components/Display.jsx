import styles from "./Display.module.css";

// eslint-disable-next-line react/prop-types
function Display({ displayValue }) {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
}

export default Display;

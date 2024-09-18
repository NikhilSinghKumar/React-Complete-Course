import styles from "./Item.module.css";

// eslint-disable-next-line react/prop-types
function Item({ foodList, bought, handleBuyButton }) {
  return (
    <li className={`${styles.hfdItems} list-group-item ${bought && "active"}`}>
      <span className={styles.hfdSpan}>{foodList}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;

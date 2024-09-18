import styles from "./Item.module.css";

function Item({ foodList, handleByButton }) {
  // function handleBuyButtonOnClick(event) {
  //   console.log(event);
  //   console.log(`${props.foodList} ordered`);
  // }

  return (
    <li className={`${styles.hfdItems} list-group-item`}>
      <span className={styles.hfdSpan}>{foodList}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={handleByButton}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;

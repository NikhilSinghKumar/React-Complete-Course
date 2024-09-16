import styles from "./Item.module.css";

function Item(props) {
  function handleBuyButtonOnClick(event) {
    console.log(event);
    console.log(`${props.foodList} ordered`);
  }

  return (
    <li className={`${styles.hfdItems} list-group-item`}>
      <span className={styles.hfdSpan}>{props.foodList}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={(event) => handleBuyButtonOnClick(event)}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;

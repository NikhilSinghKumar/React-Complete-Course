import styles from "./ButtonContainer.module.css";

function ButtonContainer() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "x",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonContainer}>
        {buttonNames.map((items) => (
          <button key={items} className={styles.button}>
            {items}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;

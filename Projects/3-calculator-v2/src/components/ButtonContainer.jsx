import styles from "./ButtonContainer.module.css";

// eslint-disable-next-line react/prop-types
function ButtonContainer({ onButtonClick }) {
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
          <button
            key={items}
            className={styles.button}
            onClick={() => onButtonClick(items)}
          >
            {items}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;

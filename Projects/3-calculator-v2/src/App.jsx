import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  let [calculatorInput, setCalculatorInput] = useState("");

  function getOnButtonClick(buttonText) {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalculatorInput("");
    } else if (buttonText === "=") {
      const result = eval(calculatorInput);
      setCalculatorInput(result);
    } else {
      const newDisplayValue = calculatorInput + buttonText;
      setCalculatorInput(newDisplayValue);
    }
  }

  return (
    <>
      <h1>Calculator-React</h1>
      <div className={styles.calculator}>
        <Display displayValue={calculatorInput} />
        <ButtonContainer onButtonClick={getOnButtonClick} />
      </div>
    </>
  );
}

export default App;

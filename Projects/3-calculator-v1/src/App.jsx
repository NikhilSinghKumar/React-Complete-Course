import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  return (
    <>
      <h1>Calculator-React</h1>
      <div className={styles.calculator}>
        <Display />
        <ButtonContainer />
      </div>
    </>
  );
}

export default App;

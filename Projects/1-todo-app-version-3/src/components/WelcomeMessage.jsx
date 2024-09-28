/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css";

function WelcomeMessage() {
  const { todoList } = useContext(TodoItemsContext);
  return (
    todoList.length === 0 && (
      <p className={styles.welcome}>Welcome, enjoy your day.</p>
    )
  );
}

export default WelcomeMessage;

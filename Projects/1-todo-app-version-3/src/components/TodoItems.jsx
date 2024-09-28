/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems() {
  const { todoList } = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoList.map((item) => (
          <TodoItem
            key={item.name}
            TodoName={item.name}
            TodoDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;

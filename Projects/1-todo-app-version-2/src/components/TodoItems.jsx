/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems }) {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem key={item} TodoName={item.name} TodoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
}

export default TodoItems;

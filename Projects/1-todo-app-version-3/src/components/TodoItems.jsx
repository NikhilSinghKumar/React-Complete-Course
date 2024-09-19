/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item}
            TodoName={item.name}
            TodoDate={item.dueDate}
            onDeleteButtonClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;

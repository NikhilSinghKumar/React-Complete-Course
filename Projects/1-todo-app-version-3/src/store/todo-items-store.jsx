/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoList: [],
  handleNewItem: () => {},
  handleDeleteItem: () => {},
});

function todoListReducer(currentTodoItems, action) {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
}

function TodoItemsContextProvider({ children }) {
  const [todoList, dispatchTodoList] = useReducer(todoListReducer, []);

  function handleNewItem(itemName, itemDate) {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoList(newItemAction);
  }

  function handleDeleteItem(todoListItemName) {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoListItemName,
      },
    };
    dispatchTodoList(deleteItemAction);
  }

  return (
    <TodoItemsContext.Provider
      value={{
        todoList,
        handleNewItem,
        handleDeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
}

export default TodoItemsContextProvider;

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let [todoList, setTodoList] = useState([]);

  function handleNewItem(itemName, itemDate) {
    let newTodoItems = [...todoList, { name: itemName, dueDate: itemDate }];
    setTodoList(newTodoItems);
  }

  function handleDeleteItem(todoListItemName) {
    let newTodoListItemName = todoList.filter(
      (item) => item.name !== todoListItemName
    );
    setTodoList(newTodoListItemName);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoList.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoList} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoList = [
    {
      name: "Buy milk",
      dueDate: "17/09/2024",
    },
    {
      name: "Go to school",
      dueDate: "20/09/2024",
    },
    {
      name: "Take flight",
      dueDate: "22/09/2024",
    },
    {
      name: "Like this video",
      dueDate: "Right now",
    },
  ];
  return (
    <center className="todo-conatiner">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoList} />
    </center>
  );
}

export default App;

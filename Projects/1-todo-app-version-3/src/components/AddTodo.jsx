import { useState } from "react";
import { BiMessageAltAdd } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function AddTodo({ onNewItem }) {
  let [todoItemName, setTodoItemName] = useState("");
  let [todoDueDate, setTodoDueDate] = useState("");

  function handleNameChange(event) {
    setTodoItemName(event.target.value);
  }

  function handleDateChange(event) {
    setTodoDueDate(event.target.value);
  }

  function handleAddButtonClicked(event) {
    event.preventDefault();
    onNewItem(todoItemName, todoDueDate);
    setTodoItemName("");
    setTodoDueDate("");
  }

  return (
    <div className="container items-container">
      <form className="row todo-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoItemName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={todoDueDate} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success todo-btn">
            <BiMessageAltAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

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

  function handleAddButtonClicked() {
    onNewItem(todoItemName, todoDueDate);
    setTodoItemName("");
    setTodoDueDate("");
  }

  return (
    <div className="container items-container">
      <div className="row todo-row">
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
          <button
            type="button"
            className="btn btn-success todo-btn"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAltAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

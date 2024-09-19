import { useRef } from "react";
import { BiMessageAltAdd } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function AddTodo({ onNewItem }) {
  let todoNameElement = useRef();
  let todoDueDateElement = useRef();

  function handleAddButtonClicked(event) {
    event.preventDefault();
    let todoItemName = todoNameElement.current.value;
    let todoDueDate = todoDueDateElement.current.value;
    onNewItem(todoItemName, todoDueDate);
  }

  return (
    <div className="container items-container">
      <form className="row todo-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDueDateElement} />
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

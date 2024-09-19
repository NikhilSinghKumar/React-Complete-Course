import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function TodoItem({ TodoName, TodoDate, onDeleteButtonClick }) {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-btn"
            onClick={() => onDeleteButtonClick(TodoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

function TodoItem1() {
  let TodoName = "Buy milk";
  let TodoDate = "13/09/2024";
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;

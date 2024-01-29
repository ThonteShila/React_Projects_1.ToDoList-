import { useState } from "react";
import { HiMiniDocumentPlus } from "react-icons/hi2";
function AddTodo({ onNewItem }) {
  const [todoname, settodoname] = useState();
  const [todoDate, settodoDate] = useState();
  const handleTodoname = (event) => {
    settodoname(event.target.value);
  };
  function handleTodoDate(event) {
    settodoDate(event.target.value);
  }
  const handleAddItemClicked = (event) => {
    event.preventDefault();
    onNewItem(todoname, todoDate);
    settodoDate("");
    settodoname("");
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddItemClicked}>
        <div className="col-sm-4">
          <input
            type="text"
            placeholder="Enter todo"
            onChange={handleTodoname}
          ></input>
        </div>
        <div className="col-sm-4">
          <input type="date" onChange={handleTodoDate}></input>
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-success kg-button">
            <HiMiniDocumentPlus />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

import { useRef } from "react";
import { HiMiniDocumentPlus } from "react-icons/hi2";
function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddItemClicked = (event) => {
    event.preventDefault();
    const todoname = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    onNewItem(todoname, todoDate);
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddItemClicked}>
        <div className="col-sm-4">
          <input
            type="text"
            placeholder="Enter todo"
            ref={todoNameElement}
          ></input>
        </div>
        <div className="col-sm-4">
          <input type="date" ref={todoDateElement}></input>
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

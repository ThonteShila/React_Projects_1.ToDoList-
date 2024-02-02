import { useRef, useContext, useState } from "react";
import { HiMiniDocumentPlus } from "react-icons/hi2";
import { TodoItemContext } from "../store/todoItemStore";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemContext);
  const [todoname, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const handleNamechange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddItemClicked = (event) => {
    event.preventDefault();
    addNewItem(todoname, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddItemClicked}>
        <div className="col-sm-4">
          <input
            type="text"
            placeholder="Enter todo"
            value={todoname}
            onChange={handleNamechange}
          ></input>
        </div>
        <div className="col-sm-4">
          <input
            type="date"
            value={todoDate}
            onChange={handleDateChange}
          ></input>
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

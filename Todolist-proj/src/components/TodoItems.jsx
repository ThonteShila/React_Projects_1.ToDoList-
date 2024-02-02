import { useContext } from "react";
import styles from "./TodoItems.module.css";
import { TodoItemContext } from "../store/todoItemStore";
import { HiArchiveBoxXMark } from "react-icons/hi2";
function TodoItems({ todoDate, todoName }) {
  const { deleteItem } = useContext(TodoItemContext);
  return (
    <div className="container">
      <div className={"row kg-row"}>
        <div className="col-sm-4">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <HiArchiveBoxXMark />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItems;

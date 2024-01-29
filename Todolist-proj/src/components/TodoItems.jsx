import styles from "./TodoItems.module.css";
import { HiArchiveBoxXMark } from "react-icons/hi2";
function TodoItems({ todoDate, todoName, onDeleteClick }) {
  return (
    <div className="container">
      <div className={"row kg-row"}>
        <div className="col-sm-4">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <HiArchiveBoxXMark />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItems;

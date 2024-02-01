import { useContext } from "react";
import TodoItems from "./TodoItems";
import { TodoItemContext } from "../store/todoItemStore";
const TodoItemList = ({ onDeleteClick }) => {
  const todoItemList = useContext(TodoItemContext);
  return (
    <div className="items-container">
      {todoItemList.map((item) => (
        <TodoItems
          todoDate={item.doDate}
          todoName={item.Name}
          onDeleteClick={onDeleteClick}
        ></TodoItems>
      ))}
    </div>
  );
};
export default TodoItemList;

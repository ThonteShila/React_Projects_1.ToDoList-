import TodoItems from "./TodoItems";
const TodoItemList = ({ todoItemList, onDeleteClick }) => {
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

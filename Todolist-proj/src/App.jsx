import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import TodoItemList from "./components/TodoItemsList";
import { useState } from "react";
import Message from "./components/Message";
function App() {
  const [todoItemList, setToDoItems] = useState([]);
  const handleOnNewItem = (itemName, itemDoDate) => {
    console.log(`new item added ${itemName} Date${itemDoDate}`);
    const newTodoItem = [
      ...todoItemList,
      { Name: itemName, doDate: itemDoDate },
    ];
    setToDoItems(newTodoItem);
  };
  const handleOnDelete = (todoitemName) => {
    console.log(`you deteted ${todoitemName}`);
    const newItems = todoItemList.filter((item) => item.Name != todoitemName);
    setToDoItems(newItems);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleOnNewItem} />
      <TodoItemList
        todoItemList={todoItemList}
        onDeleteClick={handleOnDelete}
      ></TodoItemList>
      {todoItemList.length === 0 && <Message></Message>}
    </center>
  );
}

export default App;

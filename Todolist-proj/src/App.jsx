import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import TodoItemList from "./components/TodoItemsList";
import { useState } from "react";
import Message from "./components/Message";
import { TodoItemContext } from "./store/todoItemStore";
function App() {
  const [todoItemList, setToDoItems] = useState([]);
  const handleOnNewItem = (itemName, itemDoDate) => {
    setToDoItems((currval) => [
      ...currval,
      { Name: itemName, doDate: itemDoDate },
    ]);
  };
  const handleOnDelete = (todoitemName) => {
    console.log(`you deteted ${todoitemName}`);
    const newItems = todoItemList.filter((item) => item.Name != todoitemName);
    setToDoItems(newItems);
  };
  const todoitemConntextval = [
    /*{ Name: "buy ghee", doDate: "today" }*/
  ];
  return (
    <TodoItemContext.Provider value={todoItemList}>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleOnNewItem} />
        <TodoItemList onDeleteClick={handleOnDelete}></TodoItemList>
        <Message></Message>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import TodoItemList from "./components/TodoItemsList";
import { useReducer } from "react";
import Message from "./components/Message";
import { TodoItemContext } from "./store/todoItemStore";
import TodoItemsContextProvider from "./store/todoItemStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo />
        <TodoItemList></TodoItemList>
        <Message></Message>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

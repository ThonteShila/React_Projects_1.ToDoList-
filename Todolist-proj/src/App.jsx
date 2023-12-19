import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo />
      <div className="items-container">
        <TodoItem />
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;

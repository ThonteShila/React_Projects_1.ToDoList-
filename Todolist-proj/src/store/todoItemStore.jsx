import { createContext } from "react";

export const TodoItemContext = createContext({
  todoItemList: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

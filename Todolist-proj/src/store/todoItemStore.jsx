import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemContext = createContext({
  todoItemList: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currTodoItem, action) => {
  let newTodoItem = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItem,
      { Name: action.payload.itemName, doDate: action.payload.itemDoDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currTodoItem.filter(
      (item) => item.Name !== action.payload.itemName
    );
  }
  return newTodoItem;
};
const TodoItemsContextProvider = ({ children }) => {
  const [todoItemList, dispatchTodoItems] = useReducer(todoItemReducer, []);
  const addNewItem = (itemName, itemDoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDoDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (todoitemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoitemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  const todoitemConntextval = [];
  return (
    <TodoItemContext.Provider
      value={{
        todoItemList: todoItemList,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};
export default TodoItemsContextProvider;

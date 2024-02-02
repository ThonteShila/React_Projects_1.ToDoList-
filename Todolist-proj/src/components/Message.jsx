import { useContext } from "react";
import styles from "./Message.module.css";
import { TodoItemContext } from "../store/todoItemStore";
const Message = () => {
  const { todoItemList } = useContext(TodoItemContext);
  return (
    todoItemList.length === 0 && (
      <h3 className={styles.msg}>You have successfully done todolist</h3>
    )
  );
};
export default Message;

import styles from "./Content.module.scss";

import { v4 as uuidv4 } from "uuid";
import ToDoList from "../ToDoList/ToDoList";
import { useState } from "react";

const Content = () => {
  const [todoList, setTodoList] = useState([
    {
      id: uuidv4(),
      title: "first",
      ready: true,
    },
    {
      id: uuidv4(),
      title: "second",
      ready: false,
    },
    {
      id: uuidv4(),
      title: "third",
      ready: true,
    },
  ]);

  const addNewTags = () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header_block}>
          <input
            type="text"
            className={styles.input}
            placeholder={"add new tag"}
          />
          <button onClick={addNewTags} className={styles.add_btn}>
            add
          </button>
        </div>
        <ToDoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
};

export default Content;

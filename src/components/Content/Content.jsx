import styles from "./Content.module.scss";

import { v4 as uuidv4 } from "uuid";
import ToDoList from "../ToDoList/ToDoList";
import { useEffect, useState } from "react";

const Content = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) ||
      [
        // {
        //   id: uuidv4(),
        //   title: "I wanna go to #shop",
        //   ready: true,
        // },
        // {
        //   id: uuidv4(),
        //   title: "Hallo world! #js",
        //   ready: false,
        // },
        // {
        //   id: uuidv4(),
        //   title: "Hi everybody! #hello",
        //   ready: true,
        // },
      ]
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList), [todoList]);
  });

  const [value, setValue] = useState("");

  const addNewTags = () => {
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        title: value,
        ready: false,
      },
    ]);
    setValue("");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header_block}>
          <input
            type="text"
            className={styles.input}
            placeholder={"add new tag"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {!value ? (
            <button disabled={true}>add</button>
          ) : (
            <button onClick={addNewTags} className={styles.add_btn}>
              add
            </button>
          )}
        </div>
        <ToDoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
};

export default Content;

// @ts-ignore
import styles from "./Content.module.scss";
import { v4 as uuidv4 } from "uuid";
// @ts-ignore
import ToDoList from "../ToDoList/ToDoList.tsx";
import { useEffect, useState } from "react";
// @ts-ignore
import Filter from "../Filter/Filter.tsx";

const Content = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const [value, setValue] = useState("");
  const [filtered, SetFilter] = useState(todoList);
  const [listOfTheTags, setlistOfTheTags] = useState([]);

  useEffect(() => {
    const newList = [];
    todoList.map((item) => {
      newList.push(
        ...item.title.split(" ").filter((item) => item.startsWith("#"))
      );
    });
    setlistOfTheTags(Array.from(new Set(newList)));
  }, [todoList]);

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

  const filterByName = (status) => {
    if (status === "all") {
      SetFilter(todoList);
    } else {
      const newList = [...todoList].filter((item) =>
        item.title.includes(status)
      );
      SetFilter(newList);
    }
  };

  useEffect(() => {
    SetFilter(todoList);
  }, [todoList]);

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
            <button onClick={addNewTags}>add</button>
          )}
        </div>
        <Filter filterByName={filterByName} listOfTheTags={listOfTheTags} />
        <ToDoList
          todoList={todoList}
          setTodoList={setTodoList}
          filtered={filtered}
        />
      </div>
    </div>
  );
};

export default Content;

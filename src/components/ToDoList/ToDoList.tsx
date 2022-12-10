// @ts-ignore
import styles from "./ToDoList.module.scss";
// @ts-ignore
import TodoItem from "./TodoItem.tsx";
// @ts-ignore
import React from "react";

type Props = { todoList: []; setTodoList: ([]) => []; filtered: [] };

const ToDoList: React.FC<Props> = ({ todoList, setTodoList, filtered }) => {
  return (
    <div className={styles.todoList}>
      {filtered.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;

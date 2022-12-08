import styles from "./ToDoList.module.scss";
import { useState } from "react";

const TodoItem = ({ item, todoList, setTodoList }) => {
  const [editMode, setEditMode] = useState(null);
  const [editValue, setEditValue] = useState("");

  const editTags = (id, title) => {
    setEditMode(id);
    setEditValue(title);
  };

  const saveTodo = (id) => {
    const newTodoList = [...todoList].map((item) => {
      if (item.id === id) {
        item.title = editValue;
      }
      return item;
    });
    setTodoList(newTodoList);
    setEditMode(null);
  };

  const deleteItem = (id) => {
    const newTodoList = [...todoList].filter((item) => item.id != id);
    setTodoList(newTodoList);
  };

  const setTodoReady = (id) => {
    const newTodoList = [...todoList].filter((item) => {
      if (id === item.id) {
        item.ready = !item.ready;
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className={styles.item}>
      {editMode === item.id ? (
        <input
          onChange={(e) => setEditValue(e.target.value)}
          value={editValue}
        />
      ) : (
        <p className={item.ready ? styles.ready : ""}>{item.title}</p>
      )}
      <div className={styles.btn_block}>
        {editMode === item.id ? (
          <button onClick={(e) => saveTodo(item.id)}>save</button>
        ) : (
          <>
            <button onClick={() => editTags(item.id, item.title)}>edit</button>
            <button onClick={() => setTodoReady(item.id)}>
              {item.ready ? "ready" : "no ready"}
            </button>
            <button onClick={() => deleteItem(item.id)}>del</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;

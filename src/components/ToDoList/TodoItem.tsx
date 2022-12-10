// @ts-ignore
import styles from "./ToDoList.module.scss";
// @ts-ignore
import React, { useState } from "react";

type Props = { item: any; todoList: []; setTodoList: (string) => [] };

const TodoItem: React.FC<Props> = ({ item, todoList, setTodoList }) => {
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
    const newTodoList = [...todoList].filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const markedHashtags = (text) => {
    let newTextArr = [];
    text.split(" ").forEach((item) => {
      if (item.startsWith("#")) {
        item = `<span>${item}</span>`;
        newTextArr.push(item);
      } else {
        newTextArr.push(item);
      }
    });
    text = newTextArr.join(" ");
    return text;
  };

  return (
    <div className={styles.item}>
      {editMode === item.id ? (
        <input
          onChange={(e) => setEditValue(e.target.value)}
          value={editValue}
        />
      ) : (
        // <p className={item.ready ? styles.ready : ''}>{markedHashtags(item.title)}</p>    // need to fix !
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: markedHashtags(item.title) }}
        />
      )}
      <div className={styles.btn_block}>
        {editMode === item.id ? (
          <button onClick={(e) => saveTodo(item.id)}>save</button>
        ) : (
          <>
            <button onClick={() => editTags(item.id, item.title)}>edit</button>
            <button onClick={() => deleteItem(item.id)}>del</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;

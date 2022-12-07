import styles from "./ToDoList.module.scss";

const TodoItem = ({ item, deleteItem, donItem }) => {
  return (
    <div className={styles.item}>
      {item.title}
      <div className={styles.btn_block}>
        <button>edit</button>
        <button onClick={() => donItem(item.id)}>
          {item.ready ? "ready" : "no ready"}
        </button>
        <button onClick={() => deleteItem(item.id)}>del</button>
      </div>
    </div>
  );
};

export default TodoItem;

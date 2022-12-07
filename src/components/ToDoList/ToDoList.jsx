import styles from "./ToDoList.module.scss";
import TodoItem from "./TodoItem";

const ToDoList = ({ todoList, setTodoList }) => {
  const deleteItem = (id) => {
    const newTodoList = [...todoList].filter((item) => item.id != id);
    setTodoList(newTodoList);
  };

  const donItem = (id) => {
    const newTodoList = [...todoList].filter((item) => {
      if (id == item.id) {
        item.ready = !item.ready;
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  return (
    <div className={styles.todoList}>
      {todoList.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            donItem={donItem}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;

import styles from './ToDoList.module.scss';
import TodoItem from './TodoItem';

const ToDoList = ({ todoList, setTodoList, filtered }) => {
  return (
    <div className={styles.todoList}>
      {/* {todoList.map((item) => { */}
      {filtered.map((item) => {
        return <TodoItem key={item.id} item={item} todoList={todoList} setTodoList={setTodoList} />;
      })}
    </div>
  );
};

export default ToDoList;

import DoneItem from './DoneItem';
import classes from './TodoList.module.css';

function DoneList(props) {
  return (
    <ul className={classes.list}>
      {props.todos.map((todo) => (
        <DoneItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
        />
      ))}
    </ul>
  );
}

export default DoneList;

import classes from './TodoItem.module.css';
import { useRouter } from 'next/router';

function TodoItem(props) {
  const router = useRouter()
  const detailsHandler=()=>{
    router.push(`/${props.id}`)
  }
  return (
    <li className={classes.item}>
        <div className={classes.content}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.actions}>
          <button>Done</button>
          <button onClick={detailsHandler}>Delete</button>
        </div>
    </li>
  );
}

export default TodoItem;

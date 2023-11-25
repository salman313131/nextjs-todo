import classes from './TodoItem.module.css';

function DoneItem(props) {
  return (
    <li className={classes.item}>
        <div className={classes.content}>
          <h3>{props.title}</h3>
        </div>
    </li>
  );
}

export default DoneItem;

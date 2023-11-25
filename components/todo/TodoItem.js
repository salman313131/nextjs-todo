import classes from './TodoItem.module.css';
import { useRouter } from 'next/router';

function TodoItem(props) {
  const router = useRouter()
  const deleteHandler=async()=>{
    const res = await fetch('/api/delete-todo',{
      method:'DELETE',
      body:JSON.stringify({id:props.id}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  }
  const doneHandler= async()=>{
    const res = await fetch('/api/update-todo',{
      method:'PATCH',
      body:JSON.stringify({id:props.id}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <li className={classes.item}>
        <div className={classes.content}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={doneHandler}>Done</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
    </li>
  );
}

export default TodoItem;

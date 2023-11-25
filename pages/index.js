import TodoForm from "../components/todo/TodoForm"
import TodoList from "../components/todo/TodoList"
import { MongoClient } from "mongodb"

export default function Home(props) {
  const todoHandler= async (todoData)=>{
    const res = await fetch('/api/todo-add',{
      method: 'POST',
      body: JSON.stringify(todoData),
      headers: {
        'Content-Type':'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <>
      <TodoList todos={props.todos} />
      <TodoForm onAddTodo={todoHandler}/>
    </>
  )
}

export async function getStaticProps(){
  const client = await MongoClient.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/Todos?retryWrites=true&w=majority')
  const db = client.db()
  const todoCollections = db.collection('todo')
  const data = await todoCollections.find({isDone:false}).toArray()
  client.close()
  return {
    props:{
      todos: data.map((todo)=>({id:todo._id.toString(),title:todo.title}))
    },
  }
}
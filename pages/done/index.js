import DoneList from "../../components/todo/DoneList"
import { MongoClient } from "mongodb"

export default function Done(props) {
  return (
    <>
      <DoneList todos={props.todos}/>
    </>
  )
}

export async function getStaticProps(){
  const client = await MongoClient.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/Todos?retryWrites=true&w=majority')
  const db = client.db()
  const todoCollections = db.collection('todo')
  const data = await todoCollections.find({isDone:true}).toArray()
  client.close()
  return {
    props:{
      todos: data.map((todo)=>({id:todo._id.toString(),title:todo.title}))
    },
  }
}
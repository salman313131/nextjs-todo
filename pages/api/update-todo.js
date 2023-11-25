import { MongoClient, ObjectId } from "mongodb"
const handler=async(req,res)=>{
    if(req.method === 'PATCH'){
        const id = req.body.id
        const client = await MongoClient.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/Todos?retryWrites=true&w=majority')
        const db = client.db()
        const todoCollections = db.collection('todo')
        const data = await todoCollections.updateOne({_id:new ObjectId(id)},{$set:{isDone:true}})
        client.close()
        res.status(200).json({message:'updated',count:data.modifiedCount})
    }
}
export default handler
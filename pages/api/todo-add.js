import { MongoClient } from "mongodb"
async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body
        const client = await MongoClient.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/Todos?retryWrites=true&w=majority')
        const db = client.db()
        const todoCollections = db.collection('todo')
        await todoCollections.insertOne(data)
        client.close()
        res.status(201).json({message:'Inserted successfully'})
    }
}
export default handler
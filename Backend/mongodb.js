
import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config';
const uri = process.env.MONGO_URI;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



const upload = client.db("upload");
const users = upload.collection("users");



export async function add_user(name , email , password){
    const moova = {
        name: name,
        email: email,
        password: password
    }
    const result = await users.insertOne(moova);
    console.log("inserted data");
    return result.insertedId;
}

import express from "express"
import {add_user} from "./mongodb.js"
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors());
app.get('/login',(_,res) => {
    res.send("Welcome !!");
});


app.post('/add_user',async (req,res) =>{
    const {name , email , password}=req.body;
    const result = await add_user(name , email , password);
    res.send(result);
});

app.listen(8000 ,()=> 
{
    console.log("started a server");
});


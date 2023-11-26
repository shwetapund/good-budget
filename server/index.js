import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const MongoDBConn = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if(conn){
        console.log("mongoDB is connected 💖")
    }
};
MongoDBConn();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{  
    console.log(`server is running on ${PORT}`)
});






import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import {getApiHealth} from "./../server/controllers/health.js";
import {postApiTransaction, getApiTransaction} from "./../server/controllers/transactions.js";
import {postApiSignup} from "./controllers/signup.js";

const app = express();
app.use(express.json());

const MongoDBConn = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if(conn){
        console.log("mongoDB is connected 💖")
    }
};
MongoDBConn();

app.get('/api/health', getApiHealth)

app.post('/api/transactions',postApiTransaction)

app.get('/api/transactions',getApiTransaction)

app.post('/api/signups',postApiSignup)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{  
    console.log(`server is running on ${PORT}`)
});






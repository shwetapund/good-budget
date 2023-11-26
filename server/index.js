import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Transaction from "./models/Transactions.js";

const app = express();
app.use(express.json());

const MongoDBConn = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if(conn){
        console.log("mongoDB is connected 💖")
    }
};
MongoDBConn();

app.get('/api/health', (req,res)=>{
    res.json({
        success:true,
        message:"server is running"
    })
})

app.post('/api/transactions',async (req,res)=>{
    const {amount, type, description,category} = req.body;

    const transactions = new Transaction({
        amount,
        type,
        description,
        category
    })

   try{
    const savedTransactions = await transactions.save();

   return res.json({
        success:true,
        transaction: savedTransactions,
        message:'transaction is create'
    });
   }
   catch(err){
    return res.json({
        success:false,
        message:err.message
    })
   }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{  
    console.log(`server is running on ${PORT}`)
});






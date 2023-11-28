import Transaction from "./../models/Transactions.js";
import { responder } from "./../util.js";

const postApiTransaction = async (req,res)=>{
    const {amount, type, description,category, userId} = req.body;

    const transactions = new Transaction({
        amount,
        type,
        description,
        category,
        userId
    })

   try{
    const savedTransactions = await transactions.save();

   return responder({
    res,
    success:true,
    data: savedTransactions,
    message: 'transaction saved',
   })
   }
   catch(err){
    return responder({
        res, 
        success: false,
        message: err.message
    })
   }
}

const getApiTransaction = async(req,res)=>{
    try{
        
            const allTransactions = await Transaction.find();
        
            return responder({
                res,
                success:true,
                data:allTransactions,
                message:'successfully fetch all transactions'
            })

    }catch(err){
        return responder({
            res,
            success:false,
            message:'Not fetch all transactions'
        })

    }
    }

export {postApiTransaction, getApiTransaction};
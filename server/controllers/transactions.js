import Transaction from "./../models/Transactions.js";

const postApiTransaction = async (req,res)=>{
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
        data: savedTransactions,
        message:'transaction saved'
    });
   }
   catch(err){
    return res.json({
        success:false,
        message:err.message
    })
   }
}

const getApiTransaction = async(req,res)=>{
    try{
        
            const allTransactions = await Transaction.find();
        
            res.json({
                success:true,
                data:allTransactions,
                message:'successfully fetch all transactions'
            })
    
    }catch(err){
        res.json({
            success:false,
            message:'Not fetch all transactions'
        })
    
    }
    }

export {postApiTransaction, getApiTransaction};
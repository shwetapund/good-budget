import Transaction from "./../models/Transactions.js";
import { responder } from "./../util.js";

const postApiTransaction = async (req, res) => {
    const { amount, type, description, category, user } = req.body;

    const transactions = new Transaction({
        amount,
        type,
        description,
        category,
        user
    })

    try {
        const savedTransactions = await transactions.save();

        return responder({
            res,
            success: true,
            data: savedTransactions,
            message: 'transaction saved',
        })
    }
    catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        })
    }
}

const getApiTransaction = async (req, res) => {
    try {

        const allTransactions = await Transaction.find();

        return responder({
            res,
            success: true,
            data: allTransactions,
            message: 'successfully fetch all transactions'
        })

    } catch (err) {
        return responder({
            res,
            success: false,
            message: 'Not fetch all transactions'
        })

    }
}

//   ------- get transactions by id -------
const getApitransactionbyId = async (req, res) => {
    const { id } = req.params;

    const showTransaction = await Transaction.findOne({ _id: id })

    res.json
        ({
            success: true,
            data: showTransaction,
            message: "successfully show Transactions"
        })
}

const getApitransactionbyUserId = async (req, res) => {
    try {
        const { id } = req.params;

        const finduserTrans = await Transaction.find({ user: id }).populate('user')

        finduserTrans.forEach((singleTransaction) => {
            singleTransaction.user.password = undefined;
        })
        res.json({
            success: true,
            data: finduserTrans,
            message: "fetch user transaction"
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
}

const updateUserTransaction = async (req, res) => {
    const { id } = req.params;
    const { amount, type, description, category} = req.body;

    await Transaction.updateOne({ _id: id }, {
        $set: {
            amount: amount,
            type: type,
            description: description,
            category: category,
        }
    });

     const updateTransaction = await Transaction.findOne({ _id: id });

    res.json({
        success: true,
        data: updateTransaction,
        message: 'successfully update Transaction'
    })
}

const deleteUserTransaction = async (req,res)=>{
    const {id} = req.params;
    const deleteTransaction = await Transaction.deleteOne({_id:id});

    res.json({
        success:true,
        data:deleteTransaction,
        message:'successfully delete Transaction'
    })
}

export { postApiTransaction, getApiTransaction, getApitransactionbyId, getApitransactionbyUserId, updateUserTransaction, deleteUserTransaction};
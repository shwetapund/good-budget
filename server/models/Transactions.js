import {Schema, model} from "mongoose";

const transactionalSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
    category: {
        type:String,
        enum: ['food','entertainement','shopping',"rent",'travel','education','other'],
        default:'other',
    },
    description: {
        type:String,
    },
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},
{
    timestamps:true,
})

const Transaction = model('Transaction',transactionalSchema);

export default Transaction 

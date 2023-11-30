import react, { useEffect, useState } from 'react';
import './MyTransactions.css';
import axios from 'axios';
import Navbar from './../../components/Navbar/Navbar';
import deleteimg from "./delete.gif";
import editicon from "./edit.gif";

export default function App() {
  const [transaction, setTransaction] = useState([])
  const [creditSum, setCreditSum] = useState(0);
  const [debitSum, setDebitSum] = useState(0);
  const [userId, setUserId] = useState({});

  const CATEGORY_EMOJI_MAP = {
    "food":"🍔",
    "entertainement":"📺",
    "shopping":"🛍",
    "rent":"🏡",
    "travel":"✈",
    "education":"🏫",
    "salary":"💰",
    "freelancing":"💻",
    "side-hussle":"👔",
    "other":"🤔"
  }

  const loadTransaction = async () => {
    const getUser = JSON.parse(localStorage.getItem('user') || {});
    const storageUser = getUser._id;
    console.log(storageUser)

    const response = await axios.get(`/api/transactions/users/${storageUser}`);
    const transactionsData = response?.data?.data;

    let totalCredit = 0;
    let totalDebit = 0;

    transactionsData.forEach((transaction)=>{
      if(transaction.type==="credit"){
        totalCredit += transaction.amount;
      }else{
        totalDebit += transaction.amount;
      }
    })
    setCreditSum(totalCredit);
    setDebitSum(totalDebit);

    setTransaction(transactionsData);

  }
 
  useEffect(() => {
    loadTransaction();
  }, [userId])

  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div className='App'>
        <h1 className='text-center'>All Expenses</h1>
        <h4>Credit: {creditSum}</h4>
        <h4>Debit: {debitSum}</h4>
        {
          transaction?.map((transactions, index) => {
            const { _id, amount, type, description, category, user, createdAt, updatedAt} = transactions;

            const date = new Date(createdAt).toLocaleDateString();
            const time = new Date(createdAt).toLocaleTimeString();
            return (
              <div key={index} className='transaction-card'>
                <span className={`transaction-amount ${type==='debit' ? "debit-amount" : "credit-amount"}`}>
                  {type==='debit' ? "-" : "+"}
                  {amount}</span>
                  { type==='debit' ? 'debited' : 'credited'} 
                  
                  <span className='transaction-category'>
                    {CATEGORY_EMOJI_MAP[category]}
                    {category}
                    <img src={editicon} className='edit-icon'/>
                    </span>
                  <hr/>
                  {description}
                 <span className='date-text'> On {date} at {time}</span>
                 <img src={deleteimg} className='delete-icon'/>
                   </div>
            )
    })
        }
      </div>
    </>
  )
}
import react, { useEffect, useState } from 'react';
import './MyTransactions.css';
import axios from 'axios';
import Navbar from './../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import deleteimg from "./delete.gif";
import editicon from "./edit.gif";
import showToast from 'crunchy-toast';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [transaction, setTransaction] = useState([])
  const [creditSum, setCreditSum] = useState(0);
  const [debitSum, setDebitSum] = useState(0);
  const [user, setUser] = useState({});


  
  const CATEGORY_EMOJI_MAP = {
    "food": "🍔",
    "entertainement": "📺",
    "shopping": "🛍",
    "rent": "🏡",
    "travel": "✈",
    "education": "🏫",
    "salary": "💰",
    "freelancing": "💻",
    "side-hussle": "👔",
    "other": "🤔"
  }

  const loadTransaction = async () => {
    const getUser = JSON.parse(localStorage.getItem('user') || '{}');
    const storageUser = getUser._id;
    console.log(storageUser)

    const response = await axios.get(`/api/transactions/users/${storageUser}`);
    const transactionsData = response?.data?.data;

    let totalCredit = 0;
    let totalDebit = 0;

    transactionsData?.forEach((transaction) => {
      if (transaction.type === "credit") {
        totalCredit += transaction.amount;
      } else {
        totalDebit += transaction.amount;
      }
    })
    setCreditSum(totalCredit);
    setDebitSum(totalDebit);

    setTransaction(transactionsData);

  }

  useEffect(() => {
    loadTransaction();
  }, [])
 
  const deleteUserTransaction = async(id)=>{
    const response = await axios.delete(`/api/transactions/${id}`);

    if(response?.data?.success){
      showToast(response?.data?.message,'success','3000');
      loadTransaction();
    }
  }
  const updateTransaction = async(id)=>{
    window.location.href=`/updateTransaction/${id}`
  }

  useEffect(()=>{
    const userstorageData = JSON.parse(localStorage.getItem('user') || '{}');
    
    if(userstorageData?.email){
      setUser(userstorageData);
    }
    else{
      showToast('you are not logged in!', 'danger',1000);
      window.location.href='/login'
    }

},[])

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='App'>
        <h1 className='text-center'>All Expenses</h1>
        <h4 className='credit-text'>Credit: {creditSum}</h4>
        <h4 >Debit: {debitSum}</h4>
        {
          transaction?.map((transactions, index) => {
            const { _id, amount, type, description, category, createdAt } = transactions;

            const date = new Date(createdAt).toLocaleDateString();
            const time = new Date(createdAt).toLocaleTimeString();
            return (
              <div key={index} className='transaction-card'>
                <span className={`transaction-amount ${type === 'debit' ? "debit-amount" : "credit-amount"}`}>
                  {type === 'debit' ? "-" : "+"}
                  {amount}</span>
                {type === 'debit' ? 'debited' : 'credited'}

                <span className='transaction-category'>
                  {CATEGORY_EMOJI_MAP[category]}
                  {category}

                 
                  <img src={editicon}
                   className='edit-icon'
                   onClick={()=>{
                    updateTransaction(_id)
                   }}
                   />

                </span>
                <hr />
                {description}
                <span className='date-text'> On {date} at {time}</span>

                <img src={deleteimg} className='delete-icon' onClick={()=>{deleteUserTransaction(_id)}} />
              </div>
            )
          })
        }
      </div>

      <Footer/>
    </>
  )
}
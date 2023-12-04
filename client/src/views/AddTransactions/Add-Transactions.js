import react, { useState } from 'react';
import './Add-Transactions.css';
import axios from "axios";
import Navbar from "./../../components/Navbar/Navbar";
import showToast from 'crunchy-toast';
import Footer from '../../components/Footer/Footer';

function AddTransactions() {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const addransactions = async () => {
        const userStorage = JSON.parse(localStorage.getItem('user'));

        const response = await axios.post('/api/transactions', {
            user: userStorage?._id,
            amount: amount,
            type: type,
            description: description,
            category: category
        })

        showToast(response?.data?.message, 'success', 3000);

        if (response?.data?.success) {
            window.location.href = '/my-transactions';
        }
    }
    return (
        <>
            <Navbar />
            <form>
                <div className='transaction-container'>
                    <h2 className='text-center mb-5 transaction-title'>Add Transactions</h2>
                    {/* amount, type, description,category,user */}
                    <div>
                        <input
                            type='number'
                            placeholder='enter Amount'
                            className='form-control-regi top-input-box'
                            value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value)
                            }}
                        />
                        <label className='ms-3 type-text'>Type:- </label>
                        <div className='type-container'>
                            <input
                                type='radio'
                                className='gender-type'
                                value="credit"
                                checked={type === "credit"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setType(e.target.value)
                                    }
                                }}
                            /> <label className='type-text'>Credit</label>

                            <input
                                type='radio'
                                className='gender-type'
                                name="amounttype"
                                value="debit"
                                checked={type === "debit"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setType(e.target.value)
                                    }
                                }}
                            /> <label className='type-text'>Debit</label>
                        </div>
                        <div className=''>
                            <label className='cetgory-text'>Category :-</label><br />
                            <select
                                className='form-control-regi'
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}>
                                <option >select category here</option>
                                <option value="food">Food</option>
                                <option value="entertainement">Entertainment</option>
                                <option value="shopping">Shopping</option>
                                <option value="rent">Rent</option>
                                <option value="travel">Travel</option>
                                <option value="education">Education</option>
                                <option value="salary">Salary</option>
                                <option value="freelancing">Freelancing</option>
                                <option value="side-hussle">Side-hussle</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <input
                            type='text'
                            placeholder='enter description'
                            className='form-control-regi'
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                        />

                        <button
                            type='button'
                            className='button btn-addTransaction'
                            onClick={addransactions}>Add Transaction</button>
                    </div>
                </div>

            </form>
            <Footer />
        </>
    )
}
export default AddTransactions;
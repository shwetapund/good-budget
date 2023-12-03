import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer-container'>
      <h2 className='text-center p-5'>💸Good Budget💲</h2>
      <div className='container'>
        <div>
          <p className='About-content'>
            💸Good Budget💲 helps to maintain the record of daily expenses.
             The Expense Tracker app tracks all the
              expenses and helps the user to manage his/her
              expenses</p>
        </div>
        <div>
          <h3>Click Me👇</h3>
          <p> <Link to="/" className='text-decoration'>Home</Link></p>
          <p><Link to="/my-transactions" className='text-decoration'>My Transaction</Link></p>
          <p><Link to="/add-transactions" className='text-decoration'>Add Transaction</Link></p>

        </div>
    
        <div>
          <h3>Starts Here😊</h3>
          <p><Link to="/login" className='text-decoration'><i class="bi bi-box-arrow-in-right"></i> Login</Link> </p>
          <p> <Link to="/signup" className='text-decoration'><i class="bi bi-unlock"></i> register</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
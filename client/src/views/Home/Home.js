import react, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='img-container'>
        <div className='home-page-container'>

          <div>
            <h1 className='title'>💰💸Good Budget</h1>
            <p className='home-text'>Expense
              Tracker helps to maintain the record of daily expenses
              and monthly income of an users from anywhere .
             The Expense Tracker app tracks all the
              expenses and helps the user to manage his/her
              expenses so that the user is the path of financial
              stability</p>
          </div>
        
        </div>
      </div>
      </>
      )
}


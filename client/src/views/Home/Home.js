import react, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import track from "./../../assets/history.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='main-home-page-container'>
        <h1 className='text-center title'>💸Good Budget💲</h1>
        <div className='main-container'>
          <div className='home-page-container'>

            <div className='app-information'>

              <p className='home-text'>Good Budget helps to maintain the record of daily expenses.
                The Expense Tracker app tracks all the
                expenses and helps the user to manage his/her
                expenses so that the user is the path of financial
                stability</p>
            </div>
            <div>
              <img src="https://img.freepik.com/premium-photo/woman-using-online-banking-when-checking-her-brokerage-account-tablet-compter_274689-18061.jpg?w=740" className='home-img' />
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-center mt-4'><img src="https://cdn-icons-png.flaticon.com/128/1304/1304126.png" className='feat-img'/> Features</h1>
      <div className='feat-container'>
        <div className='money-card-1'>
        <img src="https://as1.ftcdn.net/v2/jpg/01/07/99/30/1000_F_107993006_B9sFxS0N3IU6L4AnsPwG2AcgvtBtGzMH.jpg" className='money-img' />
        <div>
          <p className='feat-card'>Manage the Daily Expense</p>
        </div>

      </div>

      <div className='money-card-2'>
        <img src={track} className='money-img'/>
          <p className='feat-card'>Track All record</p>
      </div>

      </div>
      <Footer />
    </>
  )
}


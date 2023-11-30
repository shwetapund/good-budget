import react, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

export default function Home(){
  return(
    <>
    <Navbar/>
    <div>
      <div  className='home-img'>
        <img src='https://img.freepik.com/premium-photo/woman-using-online-banking-when-checking-her-brokerage-account-tablet-compter_274689-18061.jpg?w=740' className='home-img'/>
        
      </div>
    </div>
    </>
  )
}


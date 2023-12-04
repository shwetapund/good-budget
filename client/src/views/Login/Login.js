import react, { useEffect } from 'react';
import axios from 'axios';
import Navbar from "./../../components/Navbar/Navbar"
import { useState } from 'react'
import './Login.css';
import {Link} from 'react-router-dom';
import showToast from 'crunchy-toast';
import Footer from '../../components/Footer/Footer';

export default function Login(){

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const login = async()=>{
    const response = await axios.post('/api/logins',{
        email:email,
        password:password
    })

    showToast(response?.data?.message, 'success', 3000);

    if(response?.data?.success){
        localStorage.setItem('user',JSON.stringify(response?.data?.data))
        window.location.href="/"
    }
}
useEffect(()=>{
    const userstorageData = JSON.parse(localStorage.getItem('user') || '{}');
    
    if(userstorageData?.email){
    showToast('you are already logged in!', 'danger',3000);
        window.location.href= '/';
    }

},[])

    return(
        <>
        <Navbar/>
        <form>
            <div className='login-container'>
             <h2 className='text-center'>Good Budget</h2>
             <input 
             type='email'
             className='form-control-registration'
             placeholder='enter your email'
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value)
             }}
             />
              <input 
             type='password'
             className='form-control-registration'
             placeholder='enter your Password'
             value={password}
             onChange={(e)=>{
                setPassword(e.target.value)
             }}
             />

             <button 
             type='button'
             className='button btn-login'
             onClick={login}>
            Login
            </button>
             <p className='text-center'>You have no account?
                <Link to='/signup' className='link-text'> SignUp</Link>
             </p>
            </div>
        </form>
             
             <Footer/>

        </>
        
    )
}
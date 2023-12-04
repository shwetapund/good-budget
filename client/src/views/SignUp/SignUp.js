import react from 'react';
import "./SignUp.css";
import Navbar from "./../../components/Navbar/Navbar";
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import showToast from 'crunchy-toast';
import Footer from '../../components/Footer/Footer';

function SignUp (){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')

    const signup = async()=>{
        const response = await axios.post('/api/signups',{
            name:name,
            mobile:mobile,
            address:address,
            email:email,
            password:password,
            gender:gender
        })
        if(response?.data?.success){
            showToast(response?.data?.message, 'success', 5000);
        }else{
            showToast(response?.data?.message, 'danger', 5000);
        }
    }
    useEffect(()=>{
        const userstorageData = JSON.parse(localStorage.getItem('user') || '{}');
        
        if(userstorageData?.email){
            showToast('you are already logged in!', 'danger',5000);
            window.location.href= '/';
        }
    
    },[])
    return (

        <>
            <div>
                <Navbar />
            </div>
            <form>
            <div className="signup-container">

                <h2 className='text-center signup-text '>Good Budget</h2>
                <div>
                    <input
                        type='text'
                        className='form-control-registration'
                        placeholder='enter your name'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <input
                        type='email'
                        className='form-control-registration'
                        placeholder='enter your email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <input
                        type='password'
                        className='form-control-registration'
                        placeholder='enter your Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                     <input
                        type='text'
                        className='form-control-registration'
                        placeholder='enter your mobile'
                        value={mobile}
                        onChange={(e) => {
                            setMobile(e.target.value)
                        }}
                    />
                    <input
                        type='text'
                        className='form-control-registration'
                        placeholder='enter your address'
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                    />
                    <div>
                        <input
                            type='radio'
                            className='gender'
                            name='gender'
                            checked={gender === 'female'}
                            onClick={() => {
                                setGender('female')
                            }}
                        /> Female
                        <input
                            type='radio'
                            className='gender'
                            name='gender'
                            checked={gender === 'male'}
                            onChange={() => {
                                setGender('male')
                            }}
                        /> Male
                    </div>
                    <button 
                    type="button"
                     className='button signup-btn'
                     onClick={signup}>
                    SignUp</button>
                    <p className='text-center'>You have already account? 
                    <Link to='/login' className='link-text'> Login</Link>
                    </p>
                </div>
            </div>
            </form>
            <Footer/>
        </>
    )
}
export default SignUp


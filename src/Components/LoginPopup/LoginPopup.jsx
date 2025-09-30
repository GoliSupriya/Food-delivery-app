import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setLogin}) => {
    const[current,setCurrent]=useState('SignUp');

  return (
    <div class='login-popup'>
      <form className="loginpopup-container">
        <div className="loginpopup-title">
            <h2>{current}</h2>
            <img  onClick={()=>setLogin(false)} src={assets.cross_icon} alt=''/>
        </div>
        <div className="loginpopup-input">
            {current==='Login'?<></>: <input type='text' placeholder='Your Name'/>}
           
            <input type='email' placeholder='Your Email'/>
            <input type='password' placeholder='Enter password'/>
        </div>
        <button>{current==='SignUp'?'Create account':'Login'}</button>
        <div className='loginpopup-condition'>
            <input type='checkbox' required/>
            <p>By continuing ,i agree to the terms of use & privacy policy.</p>
        </div>
        {current==='Login'?<p>Create a new account?<span onClick={()=>setCurrent('SignUp')}> Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrent('Login')}> Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup

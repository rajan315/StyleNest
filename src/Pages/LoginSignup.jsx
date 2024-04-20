import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="password" name="" id="" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="login">Already have an account?<span>Login Here</span></p>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to terms and conditions</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup

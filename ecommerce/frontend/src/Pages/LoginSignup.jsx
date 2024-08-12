import React from 'react'
import './CSS/login.css'
const LoginSignup = () => {
  return (
   <div className="loginsignup">
      <div className="logincontainer">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text "placeholder='Jon Doe' />
          <input type="email "placeholder='Email' />
          <input type="password "placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="login-login">Already Have an Account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
   </div>
  )
}

export default LoginSignup
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../store/action/amazonAction';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [createdUser, setCreatedUser] = useState({
    email: '',
    password: '',
  })
  const createClick = () => {
    dispatch(createUser(createdUser))
    navigate('/')
  }

  return (

    <div className="login__container">
      <img alt="amazonLogo" className="login__logo" style={{}}
           src="https://www.makethunder.com/wp-content/uploads/2020/10/Amazon-logo-3.png" />
      <div className="login__block">
        <p className="login__title">Sign Up</p>
        <div className='login__input__block'>
          <label>Email address</label>
          <input className='login__input' onChange={(ev) => setCreatedUser({...createdUser, email: ev.target.value })}/>
        </div>
        <div className='login__input__block'>
          <label>Password</label>
          <input className='login__input' onChange={(ev) => setCreatedUser({...createdUser, password: ev.target.value })}/>
        </div>
        <button className='login__signIn' onClick={createClick}>Create Account</button>
        <div >
          <p className='login__text'>
            By continuing, you agree to Charles' Amazon Clone Conditions of Use and Privacy Notice.
          </p>
        </div>
      </div>
      <div className='create__account'>
        <p>Already on Amazon Clone?</p>
        <Link to={'/login'}>
        <button className='create__btn'>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;

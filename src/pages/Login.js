import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../store/action/amazonAction';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const singleUser = useSelector((state)=> state.amazon.activeUser)[0]
  const [signedUser, setSignedUser] = useState({
    email: '',
    password: '',
  })
  const signInClick = useCallback( () => {
    dispatch(signInUser(signedUser))
    if (signedUser.email === ''){
      setErrorMessage('wrong email')
    }
    else if (signedUser.password === ''){
      setErrorMessage('wrong password')
    }
    else if (signedUser.password === '' && signedUser.email === ''){
      setErrorMessage('wrong email or/and password')
    }
    else if (singleUser === undefined){
      setErrorMessage('User not found')
    }
    else if  (signedUser.email !== '' && signedUser.password !== '' && singleUser){
      navigate('/')
    }
  }, [singleUser, signedUser])
  return (
    <div className="login__container">
      <img alt="amazonLogo" className="login__logo" style={{}}
           src="https://www.makethunder.com/wp-content/uploads/2020/10/Amazon-logo-3.png" />
      <div className="login__block">
        <p className="login__title">Sign In</p>
        <p className='err__msg'>{errorMessage}</p>
        <div className='login__input__block'>
          <label>Email address</label>
          <input className='login__input' onChange={(ev) => setSignedUser({...signedUser, email: ev.target.value })}/>
        </div>
        <div className='login__input__block'>
          <label>Password</label>
          <input className='login__input' onChange={(ev) => setSignedUser({...signedUser, password: ev.target.value })}/>
        </div>
        <button className='login__signIn' onClick={signInClick}>Sign In</button>
        <div >
          <p className='login__text'>
            By continuing, you agree to Charles' Amazon Clone Conditions of Use and Privacy Notice.
          </p>
        </div>
      </div>
      <div className='create__account'>
        <p>New to Amazon Clone?</p>
        <Link to={'/signup'}>
          <button className='create__btn'>Create an account</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

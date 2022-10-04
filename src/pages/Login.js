import React from 'react';

const Login = () => {
  return (
    <div className="login__container">
      <img alt="amazonLogo" className="login__logo" style={{}}
           src="https://www.makethunder.com/wp-content/uploads/2020/10/Amazon-logo-3.png" />
      <div className="login__block">
        <p className="login__title">Sign In</p>
        <div className='login__input__block'>
          <label>Email address</label>
          <input className='login__input'/>
        </div>
        <div className='login__input__block'>
          <label>Password</label>
          <input className='login__input'/>
        </div>
        <button className='login__signIn'>Sign In</button>
        <div >
          <p className='login__text'>
            By continuing, you agree to Charles' Amazon Clone Conditions of Use and Privacy Notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

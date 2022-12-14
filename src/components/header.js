import React from 'react';
import {Link} from  'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { singleUserReset } from '../store/action/amazonAction';

const Header = () => {
  const dispatch = useDispatch()
  let basket  = useSelector((state)=> state.amazon.basket.length)
  const users = useSelector((state)=> state.amazon.activeUser)
  const resetSingleUser = () => {
    dispatch(singleUserReset())
  }
  console.log(users[users.length - 1]);
  return (
    <div>
      <header className="header">
        <Link to={'/amazon_clone'}>
          <div className='logoBtn' ><img className='logo' src={'https://stmarysecc.org/wp-content/uploads/2021/09/Amazon-Logo.png'} alt={'amazon'}/></div>
        </Link>
        <div className='search'>
          <input />
          <div className="header__searchIcon">
            <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 1024 1024" height="1em"
                 width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </div>
        </div>
        <div className='headerBtn' ><span>English</span> <div><img className='logoFlag' src={'https://img.freepik.com/premium-vector/jamusaaica-flag-with-waving-effect-official-proportion_292608-3088.jpg?w=2000'} alt={'amazon'}/></div></div>
        <Link to={'/login'} >
          <div className='headerBtn' onClick={resetSingleUser} ><span>Hello, {users.length && users[users.length - 1].email || 'guest'}</span><div><b>{users.length && users[users.length - 1].email ? 'Sign Out': 'Sign in'}</b></div></div>
        </Link>
        <Link to={''}>
          <div className='headerBtn' ><span>Returns</span><div><b>& orders</b></div>  </div>
        </Link>
        <Link to={'/checkout'}>
          <div className=' basket' >
            <div>
              <div className='basketCount'>{basket}</div>
              <img className='logoCart' src={'https://clone-f50ae.web.app/static/media/cart.fba1670343c78d0823d9.png'} alt={'amazon'}/>
            </div>
            <span>Cart</span>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;

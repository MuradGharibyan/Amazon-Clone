import React, { useCallback, useEffect, useState } from 'react';
import { Button, Input, Link } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'
import Header from '../components/header';
import { addToCart } from '../store/action/amazonAction';

const AmazonClone = () => {
  const [cartAddItem, setCartAddItem] = useState(null)
  const dispatch = useDispatch();
  let basic = useSelector((state)=> state.amazon)
  let amazon  = useSelector((state)=> state.amazon.products)
  let amazonSecond  = useSelector((state)=> state.amazon.productsSecond)
  let amazonThird  = useSelector((state)=> state.amazon.productsThird)
  let basket  = useSelector((state)=> state.amazon.basket.length)

  const handleClick = useCallback(
    (ev) => {
      Object.values(basic).forEach(values => {
        {
          values.find(p => p.id === ev.target.id)  &&
          setCartAddItem(values.find(p => p.id === ev.target.id))
        }}
      );

      console.log(ev.target.id);

    }, [])

  useEffect( () => {
    {
      cartAddItem &&
        dispatch(addToCart(cartAddItem))
    }

  }, [cartAddItem])
  console.log(cartAddItem);
  console.log(basic);
  console.log(basket);
  return (
    <div>
      <Header/>
      <main>
        <div>
          <img className={'main__top__Img img'} src={'https://clone-f50ae.web.app/static/media/home-bg.ad9585fcf0a142380736.jpg'} alt={'photo'}/>
        </div>
        <div className='productBlock1' >
          {amazon.map(p => (
            <div key={_.uniqueId()} className='productItem'>
              <img src={p.img} className='img' alt='product' style={{height: '50%', margin: '15px auto'}}/>
              <p style={{fontSize: '1.25em', marginLeft: '.5em', marginBottom: '.3em'}}>{p.name}</p>
              <div style={{color: '#ffa41c', marginLeft: '.5em' }} className="product__rating">
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                </svg>
              </div>
              <div style={{fontSize: '1.5em', marginLeft: '.5em'}}>
                <span >{p.priceType}</span>
                <span style={{fontSize: '1.5em' }}><b>{p.priceBig}</b></span>
                <span>{p.priceSmall}</span>
              </div>
              <div style={{textAlign: 'center'}}>
                <button id={p.id} onClick={(ev) => handleClick(ev)} className='addToCartBtn'>Add to cart</button>

              </div>

            </div>
          ))}
        </div>
        <div className='productBlock2' >
          {amazonSecond.map(p => (
            <div key={_.uniqueId()} className='productItemSecond'>
              <img src={p.img} className='img' alt='product' style={{height: '50%', margin: '15px auto'}}/>
              <p style={{fontSize: '1.15em', marginLeft: '.5em', marginBottom: '.3em'}}>{p.name}</p>
              <div style={{color: '#ffa41c', marginLeft: '.5em' }} className="product__rating">
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
              </div>

              <div style={{fontSize: '1.5em', marginLeft: '.5em'}}>
                <span >{p.priceType}</span>
                <span style={{fontSize: '1.5em' }}><b>{p.priceBig}</b></span>
                <span>{p.priceSmall}</span>
              </div>
              <div style={{textAlign: 'center'}}>
                <button id={p.id} onClick={(ev) => handleClick(ev)} className='addToCartBtn'>Add to cart</button>

              </div>

            </div>
          ))}
        </div>
        <div className='productBlock3' >
          {amazonThird.map(p => (
            <div key={_.uniqueId()} className='productItemThird'>
              <img src={p.img} className='img' alt='product' style={{height: '50%', margin: '15px auto'}}/>
              <p style={{fontSize: '1.15em', marginLeft: '.5em', marginBottom: '.3em'}}>{p.name}</p>
              <div style={{color: '#ffa41c', marginLeft: '.5em' }} className="product__rating">
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                </svg>
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                </svg>
              </div>

              <div style={{fontSize: '1.5em', marginLeft: '.5em'}}>
                <span >{p.priceType}</span>
                <span style={{fontSize: '1.5em' }}><b>{p.priceBig}</b></span>
                <span>{p.priceSmall}</span>
              </div>
              <div style={{textAlign: 'center'}}>
                <button id={p.id} onClick={(ev) => handleClick(ev)} className='addToCartBtn'>Add to cart</button>

              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AmazonClone;

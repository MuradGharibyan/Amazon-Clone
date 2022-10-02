import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllFromCart, deleteFromCart } from '../store/action/amazonAction';

const Cart = () => {
  const basket = useSelector((state) => state.amazon.basket);
  const total = useSelector((state) => state.amazon.totalPrice);
  const dispatch = useDispatch()
  const deleteClick = (ev) => {
    dispatch(deleteFromCart(ev.target.id))
  }

  console.log(basket);
  console.log(total);
  return (
    <div>
      <Header />
      <div className="cart__wrapper">
        <div className="container">
          <div className="cart__banner">
            <img className="img" src={'https://clone-f50ae.web.app/static/media/Developer-Ad.0bba0ea8cd547a7539fc.png'}
                 alt="banner" />
            <div>
              <h1 className="h1">Shopping Cart</h1>
              <button className="cart__deselect" onClick={() => dispatch(deleteAllFromCart())}>Deselect all items</button>
              <div className="cart__line">
              </div>
            </div>
          </div>
          {
            basket.length ? basket.map(p => (
              <div className="cart__item" key={p.id}>
                <div className="cart__img">
                  <img src={p.img} alt="product" className="item__img" />
                </div>
                <div className="cart__item__name">
                  <div className="cart__item__price">
                    <p style={{ fontSize: '1.25em', marginLeft: '.5em', marginBottom: '.3em' }}>{p.name}</p>
                    <span style={{ fontSize: '1.5em' }}>${p.fullPrice}</span>
                  </div>

                  <div className="item__gift">
                    <input type={'checkbox'} />
                    <p>This is a gift </p>
                    <button className="learn__btn">Learn More</button>
                  </div>
                  <div className='cart__btns'>
                    <button className='delete__save__btn' id={p.id} onClick={(ev) => deleteClick(ev)}>Delete</button>
                    <div className='vertical__line'>
                    </div>
                    <button className='delete__save__btn'>Save for later</button>
                  </div>

                </div>


              </div>
            )): null

          }
        </div>
        <div className="cart__info">
          <div>
            Subtotal ({!basket.length ? 'empty': `${basket.length} ${basket.length === 1 ? 'item' : 'items'}` }):  ${total}

          </div>
          <div className='info__checkbox'>
            <input type={'checkbox'} />
            <p>This order contains a gif</p>
          </div>
          <button className='proceed__btn'>Proceed to checkout</button>
        </div>
      </div>


    </div>
  );
};

export default Cart;

import React, { useCallback, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header';
import { addToCart } from '../store/action/amazonAction';
import Toast from '../assets/Toast';
import { toast } from 'react-toastify';
import Rating from 'react-rating-stars-component'

const AmazonClone = () => {
  const dispatch = useDispatch();
  const amazon = useSelector((state) => state.amazon.products);
  const handleClick = useCallback(
    (ev) => {
      toast.success('Item added to cart');
      dispatch(addToCart(ev.target.id));
    }, []);

  return (
    <div>
      <Header />
      <main>
        <div>
          <img className={'main__top__Img img'}
               src={'https://clone-f50ae.web.app/static/media/home-bg.ad9585fcf0a142380736.jpg'} alt={'photo'} />
        </div>
        <Toast />
        <div className="productBlock1">
          {amazon.map(p => (
            <div key={p.id} className="productItem">
              <img src={p.img} className="img" alt="product" />
              <p>{p.name}</p>
              <Rating
                classNames='ratingStar'
                        count={5}
                        value={p.rating}
                        size={24}
                        activeColor="#ffa41c"
                        isHalf={true}
              />
              <div className="product__item__price__block">
                <span>{p.priceType}</span>
                <span className="product__price__big"><b>{p.priceBig}</b></span>
                <span>{p.priceSmall}</span>
              </div>
              <div className="add__btn__block">
                <button id={p.id} onClick={(ev) => handleClick(ev)} className="addToCartBtn">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AmazonClone;

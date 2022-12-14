import {
  ADD_TO_CART,
  CREATE_USER,
  DELETE_ALL_FROM_CART,
  DELETE_FROM_CART,
  RESET_SINGLE_USER,
  SIGN_IN_USER
} from '../action/amazonAction';
import React from 'react';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Apple iPhone 13, 128GB, Blue - Unlocked (Renewed)',
      rating: 4.5,
      img: 'https://clone-f50ae.web.app/static/media/product-iphone13.b71ee67fcf51d4cc57cf.png',
      priceType: '$',
      priceBig: '814',
      priceSmall: '99',
      fullPrice: 814.99
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21 5G, 128GB, Phantom Gray',
      rating: 4.5,
      img: 'https://clone-f50ae.web.app/static/media/product-samsungs21.0293ac820f50ceedfc34.png',
      priceType: '$',
      priceBig: '599',
      priceSmall: '99',
      fullPrice: 599.99
    },
    {
      id: 3,
      name: 'Echo (4th generation) With Alexa',
      rating: 5,
      img: 'https://clone-f50ae.web.app/static/media/product-amazonecho.ad58cb429256f717e2ff.png',
      priceType: '$',
      priceBig: '1299',
      priceSmall: '99',
      fullPrice: 1299.99
    },
    {
      id: 4,
      name: '2021 Apple iPad Pro (Wi-Fi, 128GB) - Silver',
      rating: 5,
      img: 'https://clone-f50ae.web.app/static/media/product-ipadpro.3abc98e4badd7cacb252.png\n',
      priceType: '$',
      priceBig: '599',
      priceSmall: '99',
      fullPrice: 599.99
    },
    {
      id: 5,
      name: 'Apple Watch Series 3 - Silver Aluminum',
      rating: 4.5,
      img: 'https://clone-f50ae.web.app/static/media/product-applewatch.8e0df9c41184bd6d7822.png',
      priceType: '$',
      priceBig: '139',
      priceSmall: '00',
      fullPrice: 139.00
    },
    {
      id: 6,
      name: 'SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor',
      rating: 3.5,
      img: 'https://clone-f50ae.web.app/static/media/product-samsungtv.829149530804221f7703.png',
      priceType: '$',
      priceBig: '199',
      priceSmall: '99',
      fullPrice: 199.99
    },
    {
      id: 7,
      name: 'Apple iPhone 13, 128GB, Blue - Unlocked (Renewed)',
      rating: 4.5,
      img: 'https://clone-f50ae.web.app/static/media/product-iphone13.b71ee67fcf51d4cc57cf.png',
      priceType: '$',
      priceBig: '814',
      priceSmall: '99',
      fullPrice: 814.99
    },
    {
      id: 8,
      name: 'Samsung Galaxy S21 5G, 128GB, Phantom Gray',
      rating: 4.5,
      img: 'https://clone-f50ae.web.app/static/media/product-samsungs21.0293ac820f50ceedfc34.png',
      priceType: '$',
      priceBig: '599',
      priceSmall: '99',
      fullPrice: 599.99
    },
    {
      id: 9,
      name: 'Echo (4th generation) With Alexa',
      rating: 5,
      img: 'https://clone-f50ae.web.app/static/media/product-amazonecho.ad58cb429256f717e2ff.png',
      priceType: '$',
      priceBig: '1299',
      priceSmall: '99',
      fullPrice: 1299.99
    },
    {
      id: 10,
      name: '2021 Apple iPad Pro (Wi-Fi, 128GB) - Silver',
      rating: 5,
      img: 'https://clone-f50ae.web.app/static/media/product-ipadpro.3abc98e4badd7cacb252.png\n',
      priceType: '$',
      priceBig: '599',
      priceSmall: '99',
      fullPrice: 599.99
    },
    {
      id: 11,
      name: 'Apple Watch Series 3 - Silver Aluminum',
      rating: 4.5,
      img: 'https://clone-f50ae.web.app/static/media/product-applewatch.8e0df9c41184bd6d7822.png',
      priceType: '$',
      priceBig: '139',
      priceSmall: '00',
      fullPrice: 139.00
    },
    {
      id: 12,
      name: 'SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor',
      rating: 3.5,
      img: 'https://clone-f50ae.web.app/static/media/product-samsungtv.829149530804221f7703.png',
      priceType: '$',
      priceBig: '199',
      priceSmall: '99',
      fullPrice: 199.99
    },
  ],
  basket: [],
  totalPrice: 0,
  users: [],
  activeUser: [],
};

export default function amazonReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TO_CART: {
      const added = {
        product: state.products.filter(p => p.id === +action.payload)[0]
      };
      const addedPrice = +added.product.fullPrice;
      return {
        ...state,
        basket: [...state.basket, added.product],
        totalPrice: state.totalPrice + addedPrice
      };
    }
    case DELETE_FROM_CART: {
      const deletedItemPrice = state.basket.filter(p => (p.id === +action.payload));
      const deleted = state.basket.filter(p => p.id !== +action.payload);
      return {
        ...state,
        basket: deleted,
        totalPrice: state.totalPrice - deletedItemPrice[0].fullPrice
      };
    }
    case DELETE_ALL_FROM_CART: {
      return {
        ...state,
        basket: [],
        totalPrice: 0
      };
    }
    case CREATE_USER: {
      const created = action.payload;
      return {
        ...state,
        users: [...state.users, created],
        activeUser: [created]
      };

    }

    case SIGN_IN_USER: {
      const signed = state.users.filter(u => (u.email === action.payload.email && u.password === action.payload.password));
      return {
        ...state,
        activeUser: signed
      };

    }
    case RESET_SINGLE_USER: {
      const singleUser = action.payload
      return {
        ...state,
        activeUser: singleUser
      };
    }
    default:
      return state;
  }
}

import { ADD_TO_CART, DELETE_ALL_FROM_CART, DELETE_FROM_CART } from '../action/amazonAction';
import _ from 'lodash';

const initialState = {
  products: [
    {
      id: _.uniqueId(),
      name: 'Apple iPhone 13, 128GB, Blue - Unlocked (Renewed)',
      img: 'https://clone-f50ae.web.app/static/media/product-iphone13.b71ee67fcf51d4cc57cf.png',
      priceType: '$',
      priceBig: '814',
      priceSmall: '99',
      fullPrice: 814.99
    },
    {
      id: _.uniqueId(),
      name: 'Samsung Galaxy S21 5G, 128GB, Phantom Gray',
      img: 'https://clone-f50ae.web.app/static/media/product-samsungs21.0293ac820f50ceedfc34.png',
      priceType: '$',
      priceBig: '599',
      priceSmall: '99',
      fullPrice: 599.99
    }
  ],
  productsSecond: [
    {
      id: _.uniqueId(),
      name: 'Echo (4th generation) With Alexa',
      img: 'https://clone-f50ae.web.app/static/media/product-amazonecho.ad58cb429256f717e2ff.png',
      priceType: '$',
      priceBig: '1299',
      priceSmall: '99',
      fullPrice: 1299.99
    },
    {
      id: _.uniqueId(),
      name: '2021 Apple iPad Pro (Wi-Fi, 128GB) - Silver',
      img: 'https://clone-f50ae.web.app/static/media/product-ipadpro.3abc98e4badd7cacb252.png\n',
      priceType: '$',
      priceBig: '599',
      priceSmall: '99',
      fullPrice: 599.99
    },
    {
      id: _.uniqueId(),
      name: 'Apple Watch Series 3 - Silver Aluminum Case',
      img: 'https://clone-f50ae.web.app/static/media/product-applewatch.8e0df9c41184bd6d7822.png',
      priceType: '$',
      priceBig: '139',
      priceSmall: '00',
      fullPrice: 139.00
    }
  ],
  productsThird: [
    {
      id: _.uniqueId(),
      name: 'SAMSUNG Odyssey 32-Inch WQHD (2560x1440) Gaming Monitor',
      img: 'https://clone-f50ae.web.app/static/media/product-samsungtv.829149530804221f7703.png',
      priceType: '$',
      priceBig: '199',
      priceSmall: '99',
      fullPrice: 199.99
    }
  ],
  basket: [],
  totalPrice: 0
};

export default function amazonReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TO_CART: {
      console.log(action);
      const added = {
        product: action.payload,
      };
      let addedPrice = +added.product.fullPrice;
      console.log(added.product);
      return {
        ...state,
        basket: [...state.basket, added.product],
        totalPrice: state.totalPrice + addedPrice
      };
    }
    case DELETE_FROM_CART: {
      console.log(action.payload);
      const deletedItemPrice = state.basket.filter(p => (p.id === action.payload));
      const deleted = state.basket.filter(p => p.id !== action.payload);
      console.log(deleted);
      console.log(deletedItemPrice);
      return {
        ...state,
        basket: deleted,
        totalPrice: state.totalPrice - deletedItemPrice[0].fullPrice
      };
    }
    case DELETE_ALL_FROM_CART: {
      // console.log(action.payload);
      // const deletedItemPrice = state.basket.filter(p => (p.id === action.payload));
      // const deleted = state.basket.filter(p => p.id !== action.payload);
      // console.log(deleted);
      // console.log(deletedItemPrice);
      return {
        ...state,
        basket: [],
        totalPrice: 0
      };
    }

    default:
      return state;
  }
}

export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: id
  }
}

export const DELETE_ALL_FROM_CART = 'DELETE_ALL_FROM_CART';

export function deleteAllFromCart() {
  return {
    type: DELETE_ALL_FROM_CART,
    payload: ''
  }
}


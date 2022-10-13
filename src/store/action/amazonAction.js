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

export const CREATE_USER = 'CREATE_USER';

export function createUser(createdUser) {
  return {
    type: CREATE_USER,
    payload: createdUser
  }
}

export const SIGN_IN_USER = 'SIGN_IN_USER';

export function signInUser(signedUser) {
  return {
    type: SIGN_IN_USER,
    payload: signedUser
  }
}
export const RESET_SINGLE_USER = 'RESET_SINGLE_USER';

export function singleUserReset() {
  return {
    type: RESET_SINGLE_USER,
    payload: []
  }
}



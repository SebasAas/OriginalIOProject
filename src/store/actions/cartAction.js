import {
  SET_PRODUCT_CART,
  CHANGE_STATE_CART,
  INCREASE_PRODUCT_CART,
  DECREASE_PRODUCT_CART,
  DELETE_PRODUCT_CART
} from './actionTypes';


export const setProductCart = (product) => (dispatch) => {

  dispatch({
    type: SET_PRODUCT_CART,
    payload: product
  });

}

export const changeStateCart = (state) => (dispatch) => {

  dispatch({
    type: CHANGE_STATE_CART,
    payload: state
  });

}

export const increaseProductCart = (id) => (dispatch) => {

  dispatch({
    type: INCREASE_PRODUCT_CART,
    id
  });

}

export const decreaseProductCart = (id) => (dispatch) => {

  dispatch({
    type: DECREASE_PRODUCT_CART,
    id
  });

}

export const deleteProductCart = (id) => (dispatch) => {

  dispatch({
    type: DELETE_PRODUCT_CART,
    id
  });

}
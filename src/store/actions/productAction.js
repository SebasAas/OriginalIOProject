import {
  FETCH_PRODUCT,
  SET_CURRENT_PRODUCT
} from './actionTypes';

import axios from 'axios';

export const getProducts = () => async (dispatch) => {

  await axios.get(`${process.env.REACT_APP_FAKE_SERVER}/products`)
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: FETCH_PRODUCT,
          payload: res.data
        });
      } else {
        console.log(res);
      }
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const setCurrentProduct = (product) => (dispatch) => {

  dispatch({
    type: SET_CURRENT_PRODUCT,
    payload: product
  })

}
import {
  SET_PRODUCT_CART,
  CHANGE_STATE_CART,
  INCREASE_PRODUCT_CART,
  DECREASE_PRODUCT_CART,
  DELETE_PRODUCT_CART
} from '../actions/actionTypes';

const initialState = {
  cart: [],
  isOpen: false,
  items: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_CART:

      const checkProductExist = state.cart.find(product => product.id === action.payload.id);

      if (checkProductExist) {
        checkProductExist.count += 1;
        state.items += 1

        return {
          ...state,
        }

      } else {
        return {
          ...state,
          items: state.items + 1,
          cart: [...state.cart, action.payload]
        }
      }

    case CHANGE_STATE_CART:
      return {
        ...state,
        isOpen: action.payload
      }
    case INCREASE_PRODUCT_CART:

      const productCartToIncrement = state.cart.find(product => product.id === action.id);

      productCartToIncrement.count += 1;
      state.items += 1

      return {
        ...state,
      }
    case DECREASE_PRODUCT_CART:

      const productCartToDecrement = state.cart.find(product => product.id === action.id);


      productCartToDecrement.count -= 1;
      state.items -= 1

      return {
        ...state,
      }

    case DELETE_PRODUCT_CART:

      const productCount = (state.cart.find(product => product.id === action.id)).count;
      const productFiltered = state.cart.filter(product => product.id !== action.id);

      return {
        ...state,
        items: state.items - productCount,
        cart: productFiltered,
      }

    default:
      return state
  }
}
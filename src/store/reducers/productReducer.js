import {
  FETCH_PRODUCT,
  SET_CURRENT_PRODUCT,
} from '../actions/actionTypes';

const initialState = {
  products: [],
  currentProduct: {
    id: 1,
    title: "Rastreira Tira Dedo",
    code: "RT 0568 | 03.07.0653",
    price: "55.20",
    discount: "69.00",
    colors: {
      "Fucsia": "#A9095E",
      "Azul": "#2A5A75",
      "Marron": "#A14830",
      "Preto": "#000000"
    },
    sizes: [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42
    ],
    videos: [
      "prod01.png"
    ],
    images: [
      "prod01.png",
      "prod02.png",
      "prod03.png",
      "prod04.png"
    ]
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload
      }
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload
      }
    default:
      return state
  }
}
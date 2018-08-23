import { GET_DETAIL, DETAIL_ADD_TO_CART_ASYNC, DETAIL_ADD_TO_CART} from './actionTypes'
import { getDetail as detail, axiosDetailAddToCart } from '../api'

export const getDetail = (detail) => {
  return {
    type: GET_DETAIL,
    detail
  }
}

export const axiosGetDetail = (id=1) => {
  return dispatch => {
    detail(id).then(resp => {
      dispatch(getDetail(resp.data.data[0]))
    })
  }
}

export const detailAddToCart = (id) => {
  return {
    type: DETAIL_ADD_TO_CART,
    id
  }
}

export const detailAddToCartAsync = (id) => {
  return dispatch => {
    axiosDetailAddToCart(id).then(resp => {
      dispatch({
        type: DETAIL_ADD_TO_CART_ASYNC,
        cartmessages: Object.assign({}, resp.data, {
          count: 1,
          id: id
        })
      })
    })
  }
}

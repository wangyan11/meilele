import { CART_DELETE_PROD } from './actionTypes'

export const cartDeleteProd = (id) => {
    return{
        type: CART_DELETE_PROD,
        id
    }
}
import {
  GET_DETAIL,
  DETAIL_ADD_TO_CART,
  DETAIL_ADD_TO_CART_ASYNC,
  CART_DELETE_PROD
} from '../actions/actionTypes'

const initState = {
  detail: {},
  cartmessages:[]
}

export default (state = initState, action) => {
  switch (action.type){
      case GET_DETAIL:
          let { detail } = action;
          detail = detail ? detail : state.detail;           
          return Object.assign({}, state ,{
            detail
          });
      case DETAIL_ADD_TO_CART_ASYNC:
      console.log(action.cartmessages)
        return Object.assign({}, state, {
          cartmessages: state.cartmessages.concat(action.cartmessages)
        })
      case DETAIL_ADD_TO_CART:
        return Object.assign({}, state, {          
          cartmessages: state.cartmessages.map(cart => {
            if( cart.id === action.id){
              return Object.assign({}, cart, {
                count: cart.count+1
              })
            }
            return cart;
          })
        })
      // case DETAIL_ADD_TO_CART:
      //   return Object.assign({}, state, {
      //     cartmessages: state.cartmessages.map(cart => {
      //       if(cart.id === action.cartmessages.id)
      //     })
      //   }

        // }
      // )   
        
      case CART_DELETE_PROD:
        return Object.assign({}, state, {
          cartmessages: state.cartmessages.filter(prod => {
            return prod.id !== action.id
          })
        })  
      default: 
          return state;
  }
}

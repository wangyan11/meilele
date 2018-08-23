import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { gChangeTitle, gToggleFooter } from '../../actions/ui'
import CartItem from './CartItem'
import Empty from './Empty'




const mapStateToProps = (state) => {
  return {
    cartList: state.detail.cartmessages
  }
}

@withRouter
@connect(mapStateToProps, { gChangeTitle, gToggleFooter })
export default class Cart extends Component {
  componentDidMount(){
    this.props.gChangeTitle('购物车')
  }
  render() {  
    const { cartList } = this.props;
    return (    
      <Fragment>{     
      cartList.length > 0
      ?
      <Fragment>
        {
          cartList.map(prod => {
            return (    
              <CartItem key={prod.id} {...prod}/> 
            )
          })
        }
        <Button type='primary'>
          去结算
        </Button>
      </Fragment>  
      :
      <Empty />  
      }
      </Fragment>
    )
  }
}

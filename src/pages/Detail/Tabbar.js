import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { detailAddToCart, detailAddToCartAsync } from '../../actions/detail'

const mapStateToProps = (state) => {
  return {
    cart: state.detail.cartmessages
  }
}

@withRouter
@connect(mapStateToProps, { detailAddToCart, detailAddToCartAsync })
export default class Tabbar extends Component {
  constructor(){
    super()
    this.handleAddtoCart = this.handleAddtoCart.bind(this)
    this.handleBuyNow = this.handleBuyNow.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleAddtoCart(){   
    this.handleClick()
  }

  handleBuyNow(){
    this.handleClick()
    this.props.history.push('/cart')
  }

  handleClick(){
    const cartitem = this.props.cart.filter(item => {
      return this.props.match.params.id === item.id
    })
    
    if(cartitem.length > 0){
      
      this.props.detailAddToCart(this.props.match.params.id)
    }
    else{
      this.props.detailAddToCartAsync(this.props.match.params.id)
    }
  }

  render() {
    return (
      <div className='tabbar'>
        <Button 
          className='addtocart'   
          size='large' 
          onClick={ this.handleAddtoCart }>
          加入购物车
        </Button>
        <Button 
          className='buynow' 
          size='large'
          onClick={ this.handleBuyNow }
          >
          立即购买
        </Button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import './index.less'
import { cartDeleteProd } from '../../actions/cart'


@connect(null, { cartDeleteProd })
export default class CartItem extends Component {
  constructor(){
    super()
    this.state = {
      countValue: 0
    }
    this.handleDecreseClick = this.handleDecreseClick.bind(this);
    this.handleIncreseClick = this.handleIncreseClick.bind(this);
  }
  componentDidMount(){
    console.log(this.props)
    this.setState({
      countValue:this.props.count
    })
  }
  handleDecreseClick(){
    this.state.countValue > 1 
    &&
    this.setState({
      countValue: this.state.countValue - 1
    })
  }
  handleIncreseClick(){
    this.setState({
      countValue: this.state.countValue + 1
    })
  }
  handleDeletClick(id){
    this.props.cartDeleteProd(id)
  }
  render() {
    
      const {
          id,
          img,
          title,
          price
      } = this.props

    return (
        <dl className='cartlist'>
        <dt className='images'>
          <img src={img} alt=''/>
        </dt>
        <dd className='messages'>
          <div className='title'>
            {title}
          </div>
          <div className='price'>¥{price}</div>
          <div className='amount'>
            <div className='count'>
              <button className='decrese' onClick={this.handleDecreseClick}>-</button>
              <input type='text' 
                value={this.state.countValue}
                onChange={()=>{console.log('a')}}/>
              <button className='increse' onClick={this.handleIncreseClick}>+</button>
            </div>
            <div className='delete'>
              <Icon type='cross' onClick={this.handleDeletClick.bind(this,id)}/>
            </div>
          </div>
        </dd>
      </dl>
    )
  }
}

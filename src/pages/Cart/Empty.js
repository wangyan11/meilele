import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter
export default class Empty extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.history.push('/mall')
  }
  render() {
    return (
      <div className='empty'>
        <span className='text-empty'>您还没有加入任何商品</span>
        <Button 
          type='warning' 
          size='small'
          onClick={this.handleClick}
          >随便逛逛
        </Button>
      </div>
    )
  }
}

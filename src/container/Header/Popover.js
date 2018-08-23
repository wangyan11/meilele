import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Popover,
  Icon
} from 'antd-mobile'
import routes from '../../routes'
const Item = Popover.Item;

export default class HeaderPopover extends Component {
  constructor(){
    super()
    this.state = {
      visible: false,
      selected: '',
      list: []
    };
  }
  componentDidMount(){
    const list = routes.filter(route => {
      return route.isShowHeaderAndFooter === true;
    })
    this.setState({
      list
    })
  }
  onSelect = (opt) => {
    this.setState({
        visible: false,
        selected: opt.props.value,
    });
  };
  handleVisibleChange (visible) {
    this.setState({
        visible,
    });
  };
  
  render() {
    return (
      <Popover
          key='8'
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          overlay = {
            this.state.list.map(item => {
              return (
              <Item key={item.url} 
                value="scan" 
                data-seed="logId">
                <NavLink to={item.url}>
                {item.text}
                </NavLink>
              </Item>)
            })
          }
          
          align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
          }}
          visible={this.state.visible}
          onVisibleChange={
              this.handleVisibleChange.bind(this,this.state.visible)}
          onSelect={this.onSelect}
          >
          <div className='iconStyle'>
          <Icon type="ellipsis" key='7' />
          </div>
      </Popover>
    )
  }
}

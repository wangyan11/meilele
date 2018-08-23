import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gChangeTitle } from '../../actions/ui';
import Group from './Group/index';
import CenterRoom from './CenterRoom/index';


@connect(null, { gChangeTitle })
export default class Home extends Component {
  componentDidMount(){
    this.props.gChangeTitle('首页')
  }
  render() {
    return (
      <div>
      <Group/>
      <CenterRoom/>
      <CenterRoom/>
      <CenterRoom/>
      </div>
    )
  }
}



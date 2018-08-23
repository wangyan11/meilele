import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { 
  List, 
  InputItem, 
  WhiteSpace, 
  Picker,
  Toast,
  Button
} 
from 'antd-mobile';
import { createForm } from 'rc-form';
import { gChangeTitle, gToggleFooter} from '../../actions/ui'
import './index.less'

@withRouter
@createForm()
@connect(null, { gChangeTitle, gToggleFooter })
export default class Mine extends Component {
  constructor(){
    super()
    this.state = {
      sexValue:'',
      birthday: Date.now(),
      sex : [
        {
          label:'男',
          value: '男'
        },
        {
          label:'女',
          value: '女' 
        }  
      ],
      telhasError: false,
      telvalue: '',    
    }
    this.onLoginOut = this.onLoginOut.bind(this)
  }
  onTelErrorClick = () => {
    if (this.state.telhasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onTelChange = (telvalue) => {
    if (telvalue.replace(/\s/g, '').length < 11) {
      this.setState({
        telhasError: true,
      });
    } else {
      this.setState({
        telhasError: false,
      });
    }
    this.setState({
      telvalue,
    });
  }
  onSexChange = (sex) => {
    this.setState({
      sexValue: sex
    });
  };
  componentDidMount(){
    this.props.gChangeTitle("我的");
    this.props.gToggleFooter(false)
  }
  componentWillUnmount(){
    this.props.gToggleFooter();
  }
  onLoginOut(){
    window.localStorage.removeItem('username');
    this.props.history.push('/login')
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className='mine'>
        <WhiteSpace />
        <List className="picker-list">
          <InputItem>用户名</InputItem>
          
          <Picker
          data={this.state.sex}
          value={this.state.sexValue}
          cols={1}
          onChange={this.onSexChange}
        >
          <List.Item>性别</List.Item>
        </Picker>
        <InputItem
            type="phone"
            placeholder="input your phone"
            error={this.state.telhasError}
            onErrorClick={this.onTelErrorClick}
            onChange={this.onTelChange}
            value={this.state.telvalue}
          >手机号码</InputItem>
        
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="****"
          >密码</InputItem>
          <InputItem
            
            placeholder='email'
          >email</InputItem>
        </List>
        <Button 
          type='warning' 
          className='checkout'
          onClick={ this.onLoginOut }
          >退出登录</Button>
      </div>
    )
  }
}

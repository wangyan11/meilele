import React, { Component } from 'react'
import {InputItem,List,WingBlank,Button } from 'antd-mobile';
import {Toast} from 'antd-mobile';
import Icon from '../../components/Icon';
import {postLogin} from '../../api';
import {TOKEN} from '../../consts';
import Logo from '../../assets/logo.png'
import './login.less'


export default class Login extends Component {
  state={
    username:'',
    password:'',
    isUsernameError:false,
    isPasswordError:false
  }
  constructor(){
    super();
    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.onUsernameErrorClick=this.onUsernameErrorClick.bind(this);
    this.onPasswordErrorClick=this.onPasswordErrorClick.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleUsernameChange(username){
    this.setState({
      username
    })
  }
  handlePasswordChange(password){
    this.setState({
      password
    })
  }
  onUsernameErrorClick() {
    if (this.state.isUsernameError) {
      Toast.fail('用户名必须是6到16位的数字和字母', 2);
    }
  }
  onPasswordErrorClick() {
    if (this.state.isUsernameError) {
      Toast.fail('密码必须是6到16位的数字和字母', 2);
    }
  }
  onSubmit=(e)=>{
    this.validate(this.handleSubmit)
  }
  validate=(callback)=>{
    const reg = /^[0-9A-Za-z]{6,16}$/;
    let isUsernameError=false;
    let isPasswordError=false;
    if(!reg.test(this.state.username)){
      isUsernameError=true;
    }
    if(!reg.test(this.state.password)){
      isPasswordError=true;
    }
    this.setState({
      isUsernameError,
      isPasswordError
    },()=>{
      callback && callback()
    })
  }
  handleSubmit(){
    const {username,password,isUsernameError,isPasswordError} = this.state;
    if(!isUsernameError && !isPasswordError ){
      postLogin({
        username,
        password
      }).then(res=>{
        if(res.data.code===200 && res.data.data.token){
          window.localStorage.setItem(TOKEN, res.data.data.token);
          this.props.history.push('/home');
        }
      })
    }
  }
  render() {
    return (
      <div className="login">
          <img src={Logo} alt="美乐乐"/>
          <h2>用户登录</h2>
          <List>
          <InputItem 
            placeholder="请输入用户名"
            onChange={this.handleUsernameChange}
            error={this.state.isUsernameError}
            onErrorClick={this.onUsernameErrorClick}
          >
            <Icon type="username"/>
          </InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码" 
            onChange={this.handlePasswordChange}
            error={this.state.isPasswordError}
            onErrorClick={this.onPasswordErrorClick}
          >
            <Icon type="password"/>
          </InputItem>
          </List>
          <WingBlank>
            <Button onClick={this.onSubmit}>登录</Button>
            <p>注册</p>
          </WingBlank>
      </div>
    )
  }
}




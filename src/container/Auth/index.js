import React, { Component,Fragment } from 'react'
import {withRouter} from 'react-router-dom';
import {getCheckToken} from '../../api';
import {TOKEN} from '../../consts'


@withRouter
export default class Auth extends Component {
  componentDidMount(){
    if(this.props.location.pathname === "/login"){
      return;
    }
    let redirect = this.props.location.pathname === "/" ? "/home" : this.props.location.pathname;
    const token = window.localStorage.getItem(TOKEN);
    if(!token){
      redirect = "/login"
      this.props.history.push(redirect)
    }
    getCheckToken(TOKEN).then(res=>{
      if(res.data.code!==200){
        redirect = "/login";
      }
      this.props.history.push(redirect)
    })
  }
  render() {
    return (
      <Fragment/>
    )
  }
}

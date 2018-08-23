import React, { Component } from 'react'
import {NavLink,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';  
import {getMallListItems} from '../../../actions/mall';
import "./navlist.less";

const mapState=state=>{
  return {
    navLists:state.navlist.navLists
  }
}

@withRouter
@connect(mapState,{getMallListItems})
export default class NavList extends Component {
  handleChangeList(navid){
    this.props.getMallListItems(navid);
    this.props.history.push(`/mall/${navid}`);
  }
  
  render() {
    return (
      <ul className="navlists">
        {
          this.props.navLists.map(navlist=>{
            return (
              <li 
              key={navlist.id}
              onClick={this.handleChangeList.bind(this,navlist.id)}
              >
              <NavLink to={`/mall/${navlist.id}`}>{navlist.title}</NavLink>
              </li>
            )
          })
        }
      </ul>
    )
    
  }
}

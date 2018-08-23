import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import {Redirect,Switch} from 'react-router-dom';
import { gChangeTitle } from '../../actions/ui';
import NavList from './NavList';
import ListItem from './ListItem';

@connect(null, { gChangeTitle})
export default class Mall extends Component {
  componentDidMount(){
    this.props.gChangeTitle('商城');
  }
  render(){
    return (
      <Fragment>
        <Switch>
          <Redirect exact to="/mall/1" from="/mall"/>
        </Switch>
        <NavList/>
        <ListItem />
      </Fragment>
    )
  }
}
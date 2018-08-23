import React, { Component, Fragment } from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import routes from './routes'
import { AppHeader } from './container'
import { AppFooter } from './components'
import './App.less'

const mapStateToProps = (state) => {
  return {
    isToggleFooter: state.ui.isToggleFooter
  }
}

@connect(mapStateToProps)
class App extends Component {
  render() {
    return (
      <Fragment>
        <AppHeader />
        <div className='main'> 
          <Switch>
            {
              routes.map((route) => {
                return <Route key={ route.url } path={ route.url } component={ route.component } />
              })
            }
            <Redirect exact from='/' to='/home'/>
          </Switch>
        </div>
        {
          this.props.isToggleFooter 
          && 
          <AppFooter routes={
            routes.filter(item=>{
              return item.isShowHeaderAndFooter===true
            })
          } 
          />
        }
      </Fragment>
    );
  }
}

export default App;

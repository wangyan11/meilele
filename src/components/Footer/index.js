import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.less'

export default class AppFooter extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired
    }))
  }
  render() {
    return (
      <ul>
        {
          this.props.routes.map((route) => {
          return (
              <li key={ route.url }>
                <NavLink to={ route.url }>
                  { route.icon }
                  <span>{ route.text }</span>
                </NavLink>
              </li> 
            )
          })
        }
      </ul>
    )
  }
}

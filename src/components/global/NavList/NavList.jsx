import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navList.scss'

export default class NavList extends Component {
  
  render() {
    return (
      <div className='nav-list'>
        {
          this.props.navList.map(navItem =>
            <Link
              key={navItem.path}
              className="nav-list__item"
              to={navItem.path}
            >
              {navItem.title}
            </Link>
          )
        }
      </div>
    )
  }
}

import React, { Component } from 'react'
import './PageWrapper.scss'

export default class PageWrapper extends Component {

  render() {
    return (
      <div className='page-wrapper'>
        {this.props.children}
      </div>
    )
  }
}

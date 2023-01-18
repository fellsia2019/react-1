import React, { Component } from 'react';
import NavList from '../../global/NavList/NavList';
import './Header.scss'

class Header extends Component {

  render() {
    return (
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <NavList navList={this.props.navList}/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

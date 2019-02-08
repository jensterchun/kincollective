import React, { Component } from 'react';
import Menu from '../03-menu/Menu';
import Nav from '../02-nav/Nav';
// import throttle from 'lodash/throttle';
import { NavLink } from "react-router-dom";

class Header extends Component {
  
  // state = {
  //   height: 0
  // }
  // componentDidMount = () => {
  //   window.addEventListener('scroll', throttle(this.handleScroll, 200));
  // }
  // componentWillUnmount = () => {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
  // handleScroll = () => {
  //   var doc = document.documentElement;
  //   // var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  //   var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  //   this.state.height < top ? console.log('down') : console.log('up');
  //   this.setState({height:top});
  // }

  render() {
    return (
      <div className="header-container">
        <div className="page-title">
            <NavLink to="/">
              KC<span>&nbsp;|</span>
              <div className="title">
                <span>Kinesiology&nbsp;</span>
                <span>Collective</span>
              </div>
            </NavLink>
        </div>
        <Nav />
        <Menu />
      </div>
    );
  }
}

export default Header;
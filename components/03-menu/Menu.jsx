import React, { Component } from 'react';
import CloseIcon from '../article-parts/icons/CloseIcon';
import MenuIcon from '../article-parts/icons/MenuIcon';
import List from '../article-parts/List';
import data from '../../config/kcContent.json';
import MenuBottom from '../article-parts/MenuBottom';

export default class Menu extends Component {

  state = {
    links: null
  }

  componentDidMount() {
    if (data) {
      this.setState({
        links: data.links
      }) 
    }
  }

  constructor(props) {
  super(props);
    this.state = { menu: false };
  }

  toggleMenu = () => {
    this.setState( {menu: !this.state.menu} )
    document.body.classList.contains('js-noscroll') ? document.body.classList.remove('js-noscroll') : document.body.classList.add('js-noscroll');
  }

  render() {
    const { links } = this.state;

    return !this.state.menu ? 
      <button className="menu-btns" onClick={ this.toggleMenu }>
        {MenuIcon()}
      </button> 
      :
      <React.Fragment>
        {console.log(links.linkLabel)}
        <button className="menu-btns" onClick={ this.toggleMenu }>
          { CloseIcon() }
        </button> 
        <div className="js-overlay" onClick={this.toggleMenu}></div>
        <div className="menu-container">
          <ul className="menu-list">
            {links.map( (links) => {
              console.log(links)
              return List( links.link, links.link, links.linkLabel )
            })}
          </ul>
          <div className="menu-bottom-container">
            <MenuBottom />
          </div>
        </div>
      </React.Fragment>
  }
}
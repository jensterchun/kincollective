import React, { Component } from 'react';
import Links from '../article-parts/Links';
import data from '../../config/kcContent.json';

export default class Nav extends Component {

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
    // WW3 quakes here
    if (links === undefined ) return <div className="home-loading">loading...</div> 
    return (
      <ul className="nav-list">
        {links.map((link) => {
          return Links( link.linkLabel, link.link, link.linkLabel )
        })}
      </ul>
    );
  }
}

// import React, { Component } from 'react';

// class Nav extends Component {

//   render() {
//     return (
//       <ul className="nav-list">
//         <li><a href="/">Home</a></li>
//         <li><a href="/articles">Articles</a></li>
//         {/* <li><a href="/tags">Tags</a></li> */}
//         {/* <li><a href="/authors">Authors</a></li> */}
//         <li><a href="/about">About</a></li>
//         <li><a href="/subscribe">Subscribe</a></li>
//       </ul>
//     );
//   }
// }

// export default Nav;
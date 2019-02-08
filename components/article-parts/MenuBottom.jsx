import React, { Component } from 'react';

class MenuBottom extends Component {

  render() {

    return (
      <div className="menu-bottom">
        <div>
          <p>Help us create new content!</p>
          <span><a href="/support">Support</a></span>
        </div>
        <div>
          <a href="/developer">Developer</a>
        </div>
      </div>
    );
  }
}

export default MenuBottom;
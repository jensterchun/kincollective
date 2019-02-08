import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer className="footer-container">

        <div className="footer-list">
          <ul>
            {/* <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/guest">Guest Posting</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/support">Support</a></li> */}
          </ul>
        </div>

        <div className="footer-credit"></div>

        <div className="footer-legal">
            2019 © Kinesiology Collective
        </div>
      </footer>
    );
  }
}

export default Footer;
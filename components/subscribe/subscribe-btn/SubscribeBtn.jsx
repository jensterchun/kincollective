import React, { Component } from 'react';

class SubscribeBtn extends Component {

  render() {

    return (

      <span className="clear">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button subscribe-btn"/>
      </span>

    );
  }
}

export default SubscribeBtn;
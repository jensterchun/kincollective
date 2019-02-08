import React, { Component } from 'react';
import SubscribeBtnRound from '../subscribe-btn-round/SubscribeBtnRound';

class SubscribeFormBtn extends Component {

  render() {

    const hidden = {
      display: "none"
    };

    return (

      <div id="mc_embed_signup">

        <form action="https://kinesiologycollective.us19.list-manage.com/subscribe/post?u=6c95dc7465c9202bf9377353f&amp;id=8fc8017be3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>

          <div id="mc_embed_signup_scroll" className="subscribe-signup-container">
            
            <span id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{hidden}}></div>
              <div className="response" id="mce-success-response" style={{hidden}}></div>
            </span>

            <SubscribeBtnRound />

          </div>

        </form>

      </div>
    );
  }
}

export default SubscribeFormBtn;
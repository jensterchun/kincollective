import React, { Component } from 'react';
import SubscribeForm from './subscribe-form/SubscribeForm';

class Subscribe extends Component {

  render() {

    return (
      <div className="subscribe-container">

        <div className="subscribe-content">
          <p>Stay in the loop!</p>
          <p>Get our weekly newsletters.</p>
        </div>

        <div className="subscribe-form">

          <SubscribeForm />

        </div>

      </div>

    );
  }
}

export default Subscribe;
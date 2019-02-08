import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NoMatch extends Component {

  render() {

    return (
      
          <div className="error-wrap">

            <div className="error-title">
              <div className="error-header">
                <h1>404</h1>
              </div>
              <h2>page not found</h2>
            </div>

            <div className="error-content">
              <p>Hm, it looks like we have a problem</p>
              <p>The page you're looking for cannot be found</p>
              <br/>
              <p>We're still doing our best to make our website more user friendly!</p>
              <br/>
              <p>You can follow <NavLink to="/">this link</NavLink> to our homepage!</p>
            </div>

          </div>

    );
  }
}

export default NoMatch;
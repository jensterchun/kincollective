import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Construction extends Component {

  render() {

    return (

        <div className="construction-container">
            <p>Thanks for visiting our site!</p>
            <p>We are still working on optimizing this page.</p>
            <br/>
            <p>Go <NavLink to="/subscribe">here</NavLink> to subscribe to our email list for updates!</p>
        </div>

    );
  }
}

export default Construction;
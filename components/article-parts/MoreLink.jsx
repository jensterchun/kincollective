import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class MoreLink extends Component {

  render() {

    const { articleLink } = this.props;

    return (
        <NavLink to={ `/article/${articleLink}` } >
            (more...)
        </NavLink>
    );
  }
}

export default MoreLink;
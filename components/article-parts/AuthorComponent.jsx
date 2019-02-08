import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Author extends Component {

  render() {

    const { author, authorLink } = this.props;

    return (
      <NavLink to={ `/author/${authorLink}` }>
        { author }
      </NavLink>
    );
  }
}

export default Author;
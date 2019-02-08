import React, { Component } from 'react';
import RightIcon from './icons/RightIcon';
import { NavLink } from "react-router-dom";

class MoreArticlesLink extends Component {

  render() {
    return (
      <NavLink to="/articles-all">More Articles { RightIcon() }</NavLink>
    );
  }
}

export default MoreArticlesLink;
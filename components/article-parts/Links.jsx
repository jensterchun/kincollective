import React from 'react';
import { Link } from "react-router-dom";

function List( props, link, linkLabel ) {
  return (
    <li  key={ props }>
      <Link  to={`/${link}`}>{ linkLabel }</Link>
    </li>
  );
}

export default List;
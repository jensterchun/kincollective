import React from 'react';

function List( props, link, linkLabel ) {
  return (
    <li key={ props }>
      <a href={`/${link}`}>{ linkLabel }</a>
    </li>
  );
}

export default List;
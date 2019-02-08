import React from 'react';
import { Link } from "react-router-dom";

function ArticleCardsImg( img, alt, articleLink ) {

  return (
    <Link to={`/article/${articleLink}`}>
      <img className="lazyload" data-src={ img } alt={ alt } width="100%"/>
    </Link>
  )
}

export default ArticleCardsImg;
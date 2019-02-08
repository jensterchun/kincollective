import React from 'react';
import { Link } from "react-router-dom";

function ArticleCardsImgHeight( img, alt, articleLink ) {

  return (
    <Link to={`/article/${articleLink}`}>
      <img className="lazyload" data-src={ img } alt={ alt } height="100%"/>
    </Link>
  )
}

export default ArticleCardsImgHeight;
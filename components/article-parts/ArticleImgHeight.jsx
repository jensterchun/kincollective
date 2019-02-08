import React from 'react';

function ArticleImgHeight( img, alt ) {

  return (
    <img className="lazyload" data-src={ img } alt={ alt } height="100%"/>
  )
}

export default ArticleImgHeight;
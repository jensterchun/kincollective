import React from 'react';

function ArticleImg( img, alt ) {

  return (
    <img className="lazyload" data-src={ img } alt={ alt } width="100%"/>
  )
}

export default ArticleImg;
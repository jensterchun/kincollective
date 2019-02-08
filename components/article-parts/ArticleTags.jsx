import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

class ArticleTags extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
  }

  renderTagStuff = (tagalog, index, isLast) => {

    const { tags } = this.props;
    let key = tagalog + index;
    let currentIndex = tags[index];

    return (
      <span key={key}>
        <span>
          <NavLink to={ `/tag/${currentIndex}` }>{ tagalog }</NavLink>
        </span>
        <span className="tag-divider">
          { isLast ? '' : ' - ' }
        </span>
      </span>
    )
  }

  render() {

    const { tags } = this.props;
    
    return tags.length > 0 ? (
      <React.Fragment>
        {tags.map((tag, idx) => this.renderTagStuff(tag, idx, idx === tags.length - 1))}
      </React.Fragment>
    ) : null;
  }
}

export default ArticleTags;


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Links from '../article-parts/Links';

// class ArticleTags extends Component {
//   static propTypes = {
//     tags: PropTypes.arrayOf(PropTypes.string)
//   }

//   renderTagStuff = (tagalog, index, isLast) => {

//     const { tags } = this.props;
//     let key = tagalog + index;
//     let currentIndex = tags[index];
//     const dash = ' - '

//     return (


      
//       isLast ?  Links( key, currentIndex, tagalog ) : Links( key, currentIndex, tagalog ) + dash
//       // console.log(Links( key, currentIndex, tagalog ))
//     );
//   }

//   render() {

//     const { tags } = this.props;
    
//     return tags.length > 0 ? (
//       <React.Fragment>
//         {tags.map((tag, idx) => this.renderTagStuff(tag, idx, idx === tags.length - 1))}
//       </React.Fragment>
//     ) : null;
//   }
// }

// export default ArticleTags;
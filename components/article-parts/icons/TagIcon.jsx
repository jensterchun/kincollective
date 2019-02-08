import React, { Component } from 'react';

class TagIcon extends Component {

  renderTagIconGray = () => {
    return <svg height="12px" className="tag-icon-gray" viewBox="0 0 20 20"><path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>;
  }
  render() {

    return (
        <a className="tag-icon-link" href="/tags">
          { this.renderTagIconGray() }
        </a>
    );
  }
}

export default TagIcon;

// some sorcery here:

// import React from 'react';

// const TagIcon = icons => (
//   <a href="/tags">
//       <img src={ icons.tag_icon } className="tag-icon" height="12px" alt={ icons.tag_alt }/>
//   </a>);

// export default TagIcon;
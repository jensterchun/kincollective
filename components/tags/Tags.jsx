import React, { Component } from 'react';
import '../../App.scss';
import data from '../../config/kcContent.json';
import PropTypes from 'prop-types'
// import Date from '../article-parts/Date';
// import ContentPreview from '../article-parts/ContentPreview';
// import TagIcon from '../article-parts/icons/TagIcon';
// import ArticleTags from '../article-parts/ArticleTags';
// import ArticleImg from '../article-parts/ArticleImg';
// import { NavLink } from "react-router-dom";
// import RightIcon from '../article-parts/icons/RightIcon';
// import LeftIcon from '../article-parts/icons/LeftIcon';
// import Author from '../article-parts/Author';

class Tags extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  state = {
    articleContent: null
  }

  componentDidMount() {
    if (data) {
      this.setState({
        articleContent: data.articleContent
      }) 
    }
  }

  render() {

    // const { location } = this.props
    const { articleContent } = this.state;

    if (articleContent === null || undefined ) return <div className="home-loading">loading...</div> 
     return (
      <div className="tag-container">

        <h1>Tag Lable</h1>
        <div>Tag description</div>
        <div>Tag in other articles</div>
        {/* {
          articleContent.map( (currentArticle, index) => {
          if (currentArticle.articleLink === location.pathname.slice(9)) {
            return (
              <article key={currentArticle.articleLink + index}>
                <div className="article-date">{ Date( articleContent[index].date) }</div>
                <h1 className="mega-header">{ articleContent[index].title }</h1>
                <div className="article-img">{ ArticleImg( articleContent[index].imageSmall, articleContent[index].alt )}</div>
                <span className="author-tags">
                <Author author={ articleContent[index].author } authorLink={ articleContent[index].authorLink } />
                  <span className="article-tag-dropdown">
                    <span>
                      <ArticleTags tags={ articleContent[index].tags } />
                    </span>
                    <TagIcon />
                  </span>
                </span>
                <div className="article-content">{ContentPreview( articleContent[index].content )}</div>
              </article>
            );
          } else return null;
        })} */}
      </div>
    );
  }
}

export default Tags;
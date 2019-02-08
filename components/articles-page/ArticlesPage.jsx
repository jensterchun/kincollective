import React, { Component } from 'react';
import data from '../../config/kcContent.json';
import FeaturedArticlesPageCardImage from './featured-article-card/FeaturedArticlesPageCardImage';
import FeaturedArticlesPageCard from './featured-article-card/FeaturedArticlesPageCard';
import ArticlesPageCard from './article-cards/ArticlesPageCards';
import Subscribe from '../subscribe/Subscribe';
import TagsCar from '../tags-car/TagsCar';
import MoreArticlesLink from '../article-parts/MoreArticlesLink';
// import MediaQuery from 'react-responsive';

class ArticlesPage extends Component {

  state = {
    articleContent: null
  }

  componentDidMount() {
    if (data) {
      this.setState({
        articleContent: data.articleContent,
        tagsCarContent: data.tagsCarContent
      }) 
    }
  }

  render() {

    const { articleContent, tagsCarContent } = this.state;

    if (!articleContent) return (<div>loading</div>)
    return (
      <div className="articles-page-wrap">
        <h1 className="articles-page-title">Articles</h1>
        <div className="articles-page-featured-articles-container">
          <FeaturedArticlesPageCard key={articleContent[0].title} {...articleContent[0]} />
          <FeaturedArticlesPageCard key={articleContent[1].title} {...articleContent[1]} />
        </div>

        <div className="articles-page-featured-articles-container--desktop">
          <span className="articles-page-featured-articles-right">
            <FeaturedArticlesPageCard key={articleContent[0].title} {...articleContent[0]} />
          </span>
          <span className="articles-page-featured-articles">
            <FeaturedArticlesPageCardImage key={articleContent[1].title} {...articleContent[1]} />
          </span>
        </div>

        <TagsCar tagsCarContent={tagsCarContent}/>
        <div className="articles-page-article-container">
          <div className="articles-page-subtitle">Recent articles</div>
            <div className="articles-page-articleGrid--XLdesktop">
              {articleContent.map( (article, idx)=> {
                if ( idx > 1 && idx < 10 ) {
                  return (<ArticlesPageCard key={article.title} {...article} />)
                } 
                  return null;
              })}
            </div>

            <div className="articles-page-articleGrid--desktop">
              {articleContent.map( (article, idx)=> {
                if ( idx > 1 && idx < 8 ) {
                  return (<ArticlesPageCard key={article.title} {...article} />)
                } 
                  return null;
              })}
            </div>

            <div className="articles-page-articleGrid--mobile">
              {articleContent.map( (article, idx)=> {
                if ( idx > 1 && idx < 10 ) {
                  return ( <ArticlesPageCard key={article.title} {...article} /> )
                } 
                  return null;
              })}
            </div>
            <div className="articles-page-more-link">
              <MoreArticlesLink />
            </div>
        </div>
        <Subscribe />
      </div>
    );
  }
}

export default ArticlesPage;
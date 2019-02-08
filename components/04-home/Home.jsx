import React, { Component } from 'react';
import '../../App.scss';
import data from '../../config/kcContent.json';
import FeaturedArticleCard from './featured-article-card/FeaturedArticleCard';
import ArticleCards from './article-cards/ArticleCards';
import Subscribe from '../subscribe/Subscribe';
import RightIcon from '../article-parts/icons/RightIcon';
import { NavLink } from "react-router-dom";

class Home extends Component {

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

    const { articleContent } = this.state;

    if (articleContent === null ) return <div className="home-loading">loading...</div> 
     return (

      <div className="home-body">
        <div className="home-featured-article-card">
          <FeaturedArticleCard key={articleContent[0].title} {...articleContent[0]} />
        </div>

        <div className="home-article-card-header">
          <div>Recents</div>
          <NavLink to="/articles">More { RightIcon() }</NavLink>
        </div>

        <div className="home-article-grid">
          { articleContent.map( (article, idx)=> {
              if ( idx > 0 && idx < 7 ) {
                return (
                  <ArticleCards key={article.title} {...article} />
                )
              }
            return null;
            })
          }
        </div>

        <div className="home-more-articles-link">
          <NavLink to="/articles">More { RightIcon() }</NavLink>
        </div>

        <div className="home-subscribe">
          <Subscribe />
        </div>

        <div className="home-resources">
            <h2>Resources</h2>
            Lorem ipsum dolor, sit amet consectetur.
        </div>

        <div className="home-authors">
          <h2>Featured Authors</h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </div>
    );
  }
}

export default Home;
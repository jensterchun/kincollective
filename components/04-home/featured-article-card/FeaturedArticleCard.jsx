import React, { Component } from 'react';
import data from '../../../config/kcContent.json';
import ArticleCardsImg from '../../article-parts/ArticleCardsImg';
import Title from '../../article-parts/Title';
import Date from '../../article-parts/Date';
import Author from '../../article-parts/AuthorComponent';
import ContentPreview from '../../article-parts/ContentPreview';
import MoreLink from '../../article-parts/MoreLink';
import TagIcon from '../../article-parts/icons/TagIcon';
import ArticleTags from '../../article-parts/ArticleTags';

class FeaturedArticleCard extends Component {

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

    const { imageSmall, tags, title, date, shortDate, author, authorLink, content, articleLink, alt } = this.props;

    return (

        <article className="featured-article-card-container">

            <div>
                { ArticleCardsImg( imageSmall, alt, articleLink )}

                <div className="desktop2--">
                    <div className="featured-article-card-tags">
                    <span className="tag-icon-link-container">
                        <TagIcon />
                    </span>
                        <ArticleTags tags={ tags } />
                    </div>
                </div>

            </div>
            
            <div className="featured-article-card-content">

                <header className="featured-article-card-header">
                    <h2 className="featured-article-card-title">
                        <Title title={ title } articleLink={ articleLink } />
                    </h2>
                    <div className="featured-article-card-time-author">
                        <span className="desktop2--">{ Date( date) }</span>
                        <span className="mobile2--">{ Date( shortDate) }</span>
                        <span> by <Author author={ author } authorLink={ authorLink } /> </span>
                    </div>
                </header>

                <div className="featured-article-card-text-block">
                    {ContentPreview( content[0] )}
                </div>
                <p className="featured-article-card-more-link-container">
                    <MoreLink articleLink={ articleLink } />
                </p>
                
                <div className="mobile2--">
                    <div className="featured-article-card-tags">
                    <span className="tag-icon-link-container">
                        <TagIcon />
                    </span>
                        <ArticleTags tags={ tags } />
                    </div>
                </div>

            </div>

        </article>
    );
  }
}

export default FeaturedArticleCard;

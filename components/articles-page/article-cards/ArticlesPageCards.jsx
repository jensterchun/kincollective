import React, { Component } from 'react';
import Title from '../../article-parts/Title';
import Date from '../../article-parts/Date';
import Author from '../../article-parts/AuthorComponent';
import ArticleCardsImg from '../../article-parts/ArticleCardsImg';
import ContentPreview from '../../article-parts/ContentPreview';
import MoreLink from '../../article-parts/MoreLink';

class ArticlesPageCard extends Component {

  render() {

    const { imageSmall, imageSquare, alt, title, shortDate, author, authorLink, articleLink, contentDetail } = this.props;

    return (
        <article className="articles-page-card-container">

            <div className="articles-page-card-img-container">
                <span className="articles-page-card-img--square">
                    { ArticleCardsImg(imageSquare, alt, articleLink) }
                </span>
                <span className="articles-page-card-img--landscape">
                    { ArticleCardsImg(imageSmall, alt, articleLink) }
                </span>
            </div>

            <div className="articles-page-card-content-container">

                <span className="articles-page-card-more">
                    <MoreLink articleLink={ articleLink } />
                </span>
                <h2 className="articles-page-card-title">
                    <Title title={ title } articleLink={ articleLink } />
                </h2>

                <div className="articles-page-card-time-author">
                    { Date(shortDate) }
                    <span> by <Author author={ author } authorLink={ authorLink } /> </span>
                </div>

                <span className="articles-page-card-content">
                    { ContentPreview(contentDetail)}
                </span>

            </div>

        </article>
    );
  }
}

export default ArticlesPageCard;
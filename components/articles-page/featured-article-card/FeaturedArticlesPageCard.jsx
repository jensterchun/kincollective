import React, { Component } from 'react';
import ArticleCardsImg from '../../article-parts/ArticleCardsImg';
import Date from '../../article-parts/Date';
import TagIcon from '../../article-parts/icons/TagIcon';
import ArticleTags from '../../article-parts/ArticleTags';
import Title from '../../article-parts/Title';
import Author from '../../article-parts/AuthorComponent';
import ContentPreview from '../../article-parts/ContentPreview';
import MoreLink from '../../article-parts/MoreLink';
import ArticleCardsImgHeight from '../../article-parts/ArticleCardsImgHeight';

class FeaturedArticlesPageCard extends Component {
  render() {

    const {imagePort, imageSmall, date, tags, title, contentDetail, author, authorLink, articleLink, alt } = this.props;

    return (

        <article className="articles-page-featured-card-container">
            <div className="articles-page-featured-img-container">
                <div className="articles-page-featured-img--portrait">
                    { ArticleCardsImgHeight(imagePort, alt, articleLink) }
                </div>
                <div className="articles-page-featured-img--landscape">
                    { ArticleCardsImg(imageSmall, alt, articleLink) }
                </div>

                <span className="img-time-stamp">
                    { Date(date) }
                </span>
                <span className="articles-page-featured-card-tags">
                    <TagIcon />
                    <ArticleTags tags={ tags } />
                </span>
                <span className="articles-page-featured-author">
                    <Author author={ author } authorLink={ authorLink } />
                </span>
                <span className="articles-page-featured-more">
                    <MoreLink articleLink={ articleLink } />
                </span>
            </div>

            <div className="articles-page-featured-card-content-container">
                <div>
                    <header>
                        <h2 className="articles-page-featured-card-title">
                            <Title title={ title } articleLink={ articleLink } />
                        </h2>
                    </header>

                    <span>{ ContentPreview(contentDetail) }</span>
                </div>

                <div className="articles-page-featured-more-author">
                    <Author author={ author } authorLink={ authorLink } />
                    <MoreLink articleLink={ articleLink } />
                </div>

            </div>

        </article>

    );
  }
}

export default FeaturedArticlesPageCard;
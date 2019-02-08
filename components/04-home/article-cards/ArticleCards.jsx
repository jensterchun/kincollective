import React, { Component } from 'react';
import ArticleCardsImg from '../../article-parts/ArticleCardsImg';
import Title from '../../article-parts/Title';
import Date from '../../article-parts/Date';
import Author from '../../article-parts/AuthorComponent';
import ContentPreview from '../../article-parts/ContentPreview';
import MoreLink from '../../article-parts/MoreLink';
import TagIcon from '../../article-parts/icons/TagIcon';
import ArticleTags from '../../article-parts/ArticleTags';

class ArticleCards extends Component {

  render() {

    const { alt, imageSmall, title, articleLink, date, shortDate, author, authorLink, content, tags } = this.props;

    return (

        <article className="article-card-container">

            <div>
                { ArticleCardsImg(imageSmall, alt, articleLink) }
                <header className="article-card-header">
                    <h2 className="article-card-title">
                        <Title title={ title } articleLink={ articleLink } />
                    </h2>
                    <div className="article-card-time-author">
                        <span className="desktop2--">{ Date( date) }</span>
                        <span className="mobile2--">{ Date( shortDate) }</span>
                        <span> by <Author author={ author } authorLink={ authorLink } /> </span>
                    </div>
                </header>
                <div className="article-card-text-block">
                    {ContentPreview( content[0] )}
                </div>

            </div>

            <div>
                <p className="article-card-more-link-container">
                    <MoreLink articleLink={ articleLink } />
                </p>
                <div className="article-card-tags">
                    <span className="tag-icon-link-container">
                        <TagIcon />
                    </span>
                    <ArticleTags tags={ tags } />
                </div>
            </div>

        </article>

    );
  }
}

export default ArticleCards;

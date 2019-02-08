import React, { Component } from 'react';
import ArticleImg from '../../article-parts/ArticleImg';
import Date from '../../article-parts/Date';
import TagIcon from '../../article-parts/icons/TagIcon';
import ArticleTags from '../../article-parts/ArticleTags';
import Title from '../../article-parts/Title';
import Author from '../../article-parts/AuthorComponent';
import ContentPreview from '../../article-parts/ContentPreview';
import ArticleImgHeight from '../../article-parts/ArticleImgHeight';
// import MoreLink from '../../article-parts/MoreLink';

class FeaturedArticlesPageCardImage extends Component {

  render() {
    
    const { title, author, authorLink, contentDetail, tags, imageSquare, alt, articleLink, date, imagePort } = this.props;
    
    return (
        <article className="articles-page-featured-cardimg-container">

            <span className="articles-page-featured-cardimg--square image-opacity">
                { ArticleImg( imageSquare, alt, articleLink ) }
            </span>

            <span className="articles-page-featured-cardimg--portrait image-opacity">
                { ArticleImgHeight( imagePort, alt, articleLink ) }
            </span>

            <span className="card-overlay-container">
            
                <header>
                    <h2 className="title-overlay">
                        <Title title={title} articleLink={articleLink} />
                    </h2>
                </header>

                <span className="time-overlay">
                    { Date(date) }
                </span>
                <span className="author-overlay">
                    <Author author={ author } authorLink={ authorLink } />
                </span>
                <span className="content-overlay">
                    { ContentPreview(contentDetail) }
                </span>
                <span className="tag-overlay">
                    <TagIcon />
                    <ArticleTags tags={tags} />
                </span>
            </span>


        </article>
    );
  }
}

export default FeaturedArticlesPageCardImage;
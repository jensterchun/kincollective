import React, { Component } from 'react';
import data from '../../config/kcContent.json';

export default class SearchBar extends Component {

    state = {
        isActive : false,
        searchTerm : 'lorem'
    }

    componentDidMount() {
        console.log('data',data.articleContent);
    }

    searchIconClickHandler = () => {
        this.setState({ isActive : true });
    }

    searchInputHandler = (e) => {
        console.log(e.currentTarget.value);
        this.getArticlesMatchingSearchTerm(e.currentTarget.value);
    }

    getArticlesMatchingSearchTerm = (search) => {
        const matches = data.articleContent.filter((article) => {

            return article.title.split(' ').filter((word) => {
                return word === search;
            }).length > 0;
            // return article.content.map((paragraphs) => {

            //     return paragraphs.split(' ').filter((word)=>{
            //         return word === search;
            //     });
            // })
        });
        // console.log(matches);
        return matches;
    }

    render() {

        const { isActive } = this.state;
        const additionalClasses = `c-searchBar ${isActive
            ? 'c-searchBar--isActive'
            : null}`;

        return (
            <div className={additionalClasses}>
                <div className="c-searchBar__start-icon" onClick={this.searchIconClickHandler}>
                    this is a searchBar ICON
                </div>
                <div className="c-searchBar__container">
                    <input type="text" onInput={this.searchInputHandler} />
                </div>
            </div>
        )
    }
}

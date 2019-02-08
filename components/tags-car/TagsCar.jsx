import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import RightIcon from '../article-parts/icons/RightIcon';
import data from '../../config/kcContent.json';

class TagsCar extends Component {

  state = {
    tagsCarContent: null
  }

  componentDidMount() {
    if (data) {
      this.setState({
        tagsCarContent: data.tagsCarContent
      }) 
    }
  }

  render() {

    const { tagsCarContent } = this.state;
    
    if (tagsCarContent === null ) return <div className="home-loading">loading...</div> 
    return (
        <div className="tagCarousel">
            <div className="tag-car-title">
                <div>Popular Tags</div>
                <NavLink to="/tags" >
                    More {RightIcon()}
                </NavLink>
            </div>
            <div className="tag-car-container">
                {tagsCarContent.map((tag, idx) => {
                    return (
                        <li key={idx}>
                            <NavLink to={`/tag/${tag.tagLink}`}>
                                <p>{ tag.tagLabel }</p>
                                    {RightIcon()}
                                <p>{ tag.tagDetail }</p>
                            </NavLink>
                        </li>
                    );
                })}
            </div>
        </div>
    );
  }
}

export default TagsCar;

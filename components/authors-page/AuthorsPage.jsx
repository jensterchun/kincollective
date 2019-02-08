import React, { Component } from 'react';
// import data from '../../config/kcContent.json';
import Construction from '../00-construction/Construction.jsx';
// import MediaQuery from 'react-responsive';

class AuthorsPage extends Component {

  render() {

    // const { articleContent, tagsCarContent, icons } = data;

    return (

      <div className="author-page-container">
        <h1 className="author-page-title">Authors</h1>

        <Construction />

      </div>

    );
  }
}

export default AuthorsPage;
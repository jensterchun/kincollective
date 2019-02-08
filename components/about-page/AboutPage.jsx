import React, { Component } from 'react';
// import data from '../../config/kcContent.json';
import Construction from '../00-construction/Construction.jsx';
// import MediaQuery from 'react-responsive';

class AboutPage extends Component {

  render() {

    // const { articleContent, tagsCarContent, icons } = data;

    return (

      <div className="about-container">
        <h1 className="about-title">About us</h1>
        {/* <p>Welcome to Kinesiology Collective.</p>
        <p>
        Our mission is to research scholarly journals and collect our experiences in articles. We choose to write factually and only about proven studies, because we want you to trust the content in our articles. 
        </p>
        <p>Even though we don't get the chance to see you in person, we believe that the world wide web is the best way to reach the general public. We want our readers to understand that every individual is different and one </p>
        
        <p>Kinesiology Collective is my brainchild.</p>
        <p>After graduating from college I spent a few years interning at different kinesiology-related settings to find my field of interest. Throughout this time I observed a pattern of common threads in each setting.</p>
        <p>The first was knowledge, or the lack of it. Not everyone has a chance to spend an education in kinesiology at a 4-year university, but it does not mean we cannot stretch ourselves to learn other discplines. Kinesiology as it relates to our body is of no exception.</p>
        <br />
        <p>The idea behind this collection of kinesiology-related articles stemmed from sprinkled experience in different settings across the board. 
          The roots began to take ground once I graduated from The Master's Univesity. I was one of many who Googled: "What can I do with a Bachelors of Science in Kinesiology," which was my area of study.</p> */}

          <Construction />

      </div>

    );
  }
}

export default AboutPage;
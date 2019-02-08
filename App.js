import React, { Component } from 'react';
import Home from './components/04-home/Home';
import ArticlesPage from './components/articles-page/ArticlesPage';
import Header from './components/01-header/Header';
import Footer from './components/footer/Footer';
import AboutPage from './components/about-page/AboutPage';
import SupportPage from './components/support-page/SupportPage';
import NoMatch from './components/error/NoMatch';
import SubscribePage from './components/subscribe-page/SubscribePage';
import ThanksPage from './components/thanks-page/ThanksPage';
import DeveloperPage from './components/developer-page/DeveloperPage';
import data from './config/kcContent.json';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Article from './components/article/Article';
import Author from './components/author/Author';
import Tags from './components/tags/Tags'
import TagsPage from './components/tags-page/TagsPage';

class App extends Component {
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
            <Router>
                <ScrollToTop>
                <div className="contain-all">
                    {/* <ScrollToTop/> */}
                    <Header />
                    <div className="body-container ">
                        <Switch>
                            <Route exact path="/" component={ Home } />
                            <Route path="/articles" component={ ArticlesPage } />
                            <Route path="/about" component={ AboutPage } />
                            <Route path="/support" component={ SupportPage } />
                            <Route path="/subscribe" component={ SubscribePage } />
                            <Route path="/developer" component={ DeveloperPage } />
                            <Route path="/tags" component={ TagsPage } />
                            <Route path="/thank-you" component={ ThanksPage } />
                            <Route path="/article/:topicID" component={ Article } />
                            <Route path="/author/:topicID" component={ Author } />
                            <Route path="/tag/:topicID" component={ Tags } />
                            <Route component={NoMatch} />

                            {/* <Route path={`${match.path}/:topicId`} component={Topic} />
                            <Route exact path={match.path}
                                render={() => <h3>Please select a topic.</h3>} /> */}
                        </Switch>
                    </div>
                    <Footer />
                </div>
                </ScrollToTop>
            </Router>
        );
    }
}

// function Articles({ match }) {
//     return (
//       <div>
//         <h2>Articles</h2>
//         <ul>
//           <li>
//             <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//           </li>
//           <li>
//             <Link to={`${match.url}/components`}>Components</Link>
//           </li>
          
//         </ul>
  
//         <Route path={`${match.path}/:topicId`} component={Article} />
//         <Route
//           exact
//           path={match.path}
//           render={() => <h3>Please select a topic.</h3>}
//         />
//       </div>
//     );
//   }
  
//   function Article({ match }) {
//     return (
//       <div>
//         <h3>{match.params.topicId}</h3>
//       </div>
//     );
//   }

export default App;

// import React, { Component } from 'react';
// import Home from './components/04-home/Home';
// import ArticlesPage from './components/articles-page/ArticlesPage';
// import Header from './components/01-header/Header';
// import Footer from './components/footer/Footer';
// import AboutPage from './components/about-page/AboutPage';
// import SupportPage from './components/support-page/SupportPage';
// import NoMatch from './components/error/NoMatch';
// import SubscribePage from './components/subscribe-page/SubscribePage';
// import ThanksPage from './components/thanks-page/ThanksPage';
// import DeveloperPage from './components/developer-page/DeveloperPage';
// // import Article from './components/article.test/Article';
// import data from './config/kcContent.json';
// // import throttle from 'lodash/throttle';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// class App extends Component {

//     state = {
//         height: 0,
//         articleContent: null
//     }
    
//     componentDidMount() {
//         if (data) {
//             this.setState({
//                 articleContent: data.articleContent
//             }) 
//         }
//     }

//     // componentDidMount = () => {
//     //     window.addEventListener('scroll', throttle(this.handleScroll, 200));
//     // }
//     // componentWillUnmount = () => {
//     //     window.removeEventListener('scroll', this.handleScroll);
//     // }
//     // handleScroll = () => {
//     //     var doc = document.documentElement;
//     //     var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
//     //     var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
//     //     this.state.height < top ? console.log('down') : console.log('up');
//     //     this.setState({height:top});
//     // }
    
//     render() {

//         const { articleContent } = this.state;
//         // const { articleLink } = this.props;
//         // console.log(this.articleLink)
//         if (articleContent === null ) return <div className="home-loading">loading...</div> 
     
//         return (
//                     <Router>
//             <div className="contain-all">
//                 <Header />
//                 <div className="body-container ">
//                         <Switch>
//                             <Route exact path="/" component={ Home } />
//                             <Route exact path="/articles" component={ ArticlesPage } />
//                             {/* <Route path="/authors" component={ AuthorsPage } /> */}
//                             {/* <Route path="/tags" component={ TagsPage } /> */}
//                             <Route path="/about" component={ AboutPage } />
//                             <Route path="/support" component={ SupportPage } />
//                             <Route path="/subscribe" component={ SubscribePage } />
//                             <Route path="/developer" component={ DeveloperPage } />
//                             <Route path="/thank-you" component={ ThanksPage } />

//                             {/* <Route path="/articles/" component={ Article } /> */}
//                             <Route component={NoMatch} />

//                         </Switch>
//                 </div>
//                 <Footer />
//             </div>
//                     </Router>
//         );
//     }
// }

// export default App;
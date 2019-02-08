import React, { Component } from 'react';
// import data from '../../config/kcContent.json';
// import Subscribe from '../subscribe/Subscribe.jsx';
import SubscribeForm from '../subscribe/subscribe-form/SubscribeForm.jsx';
// import SubscribeBtn from '../subscribe/subscribe-btn/SubscribeBtn.jsx';
// import SubscribeBtnRound from '../subscribe/subscribe-btn-round/SubscribeBtnRound.jsx';
import MediaQuery from 'react-responsive';
import SubscribeFormBtn from '../subscribe/subscribe-form-btn/SubscribeFormBtn.jsx';

class SubscribePage extends Component {

  render() {
  
    return (

          <div className="subscribe-page-para-container">

            <div className="subscribe-page-grp-1">
              <div className="subscribe-page-h2">
                <h2>
                  We're absolutely thrilled to see you're interested in Kinesiology Collective.
                </h2>
                <h2>
                  Click the link below to subscribe!
                </h2>
              </div>

              <div className="subscribe-page-form">
                <SubscribeFormBtn />
              </div>
            </div>

            <div className="subscribe-page-grp-2">

              <div className="subscribe-page-grp2-1">
                <div className="subscribe-page-h3">
                  <h3>
                    At the start of 2019 we kicked off Kinesiology Collective, so we realize our articles are few and far between. That is the quality over quanity trade-off we're comitted to keeping. As we grow and take root we hope that we'll accumulate a broader article database helpful to our readers.
                  </h3>
                  <h3>
                    The best way for you to stay in the loop with our updates is to subscribe, and every time we finish a quality article we will notify you prompto! Enter your email to be in the know. 
                  </h3>
                </div>

                <MediaQuery minWidth={768}>
                  <img className="subscribe-page-img" width="35%" src="./img/evie-shaffer-556480-unsplash.jpg" alt="green plant taking root" />
                </MediaQuery>

              </div>

              <div className="subscribe-page-horizontal-grid-container">

                <div className="subscribe-page-horizontal-grid-item">
                  <h3>Lorem.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>

                <div className="subscribe-page-horizontal-grid-item">
                  <h3>Lorem, ipsum.</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="subscribe-page-horizontal-grid-item">
                  <h3>Lorem.</h3>
                  <p>Lorem, ipsum dolor.</p>
                </div>

                <div className="subscribe-page-horizontal-grid-item">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

              </div>

              {/* <h2 className="subscribe-page-h2">You're one click away!</h2> */}

              <div className="subscribe-page-form">
                <SubscribeForm/>
              </div>

              <div className="subscribe-page-form-note">
                <p>
                  * Your privacy is our priority. Your email will not be shared or sold to any other third party source. Your email will only be used to notify you of updates on Kinesiology Collective.
                </p>
              </div>

            </div>


            </div>
          
        // </div>

    );
  }
}

export default SubscribePage;
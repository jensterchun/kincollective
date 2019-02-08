import React, { Component } from 'react';

class FeaturedNote extends Component {

  render() {

    return (

        <React.Fragment>
        
            <div className="featured-note-h2-container">
                <h2 className="featured-note-h2">
                    Thanks for joining our 2019 launch! Go ahead and browse through our collection. 
                </h2>
            </div>

            {/* <div className="featured-note-animation">

                <span className="circle-animation circle-1"></span>
                <span className="circle-animation circle-2"></span>
                <span className="circle-animation circle-3"></span>
                <span className="circle-animation circle-4"></span>

            </div> */}

                {/* <div>
                    <div className="featured-note-logo">
                        <div >KC</div>
                    </div>
                </div> */}

        
        </React.Fragment>


    );
  }
}

export default FeaturedNote;

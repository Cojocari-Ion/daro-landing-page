import React from 'react';
import './InstaStories.css';

const InstaStories = ({project}) => {
  return (
    <div className={`${project.storiesVisible} insta-stories`}>

        <div className="layers decoration">

            <div className="floated-bg">

            </div>
            
        </div>

        <div className="layers elements">

            <div className="sides right-side">
                <h4>
                    Stories pentru <br />
                    <span>Instagram/Facebook</span> 
                </h4>
            </div>

            <div className="sides left-side">

                <div className="posts">
                    
                </div>

            </div>

        </div>

    </div>
  )
}

export default InstaStories
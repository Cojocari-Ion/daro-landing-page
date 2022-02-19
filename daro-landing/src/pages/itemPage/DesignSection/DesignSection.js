import React from 'react'
import './DesignSection.css'

const DesignSection = ({ project }) => {

  return (
    <div className={`${project.designVisible} design-section`}>

        <div className="layers decoration">
            
            <div className="floated-bg">

            </div>

            <span>
                design
            </span>

            <h4>design</h4>
        </div>

        <div className="layers elements">

            <div className="sides left-side">

                <div className="posts">

                </div>

            </div>

            <div className="sides right-side">
                <h4>
                    postări <br /> <span>social media</span> 
                </h4>
            </div>
        </div>
        
    </div>
  )
}

export default DesignSection
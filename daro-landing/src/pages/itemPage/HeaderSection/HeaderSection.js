import React from 'react';
import dotted from './images/dottedimage.png';
import blured from './images/blured.png'
import './HeaderSection.css';
import arrow from './images/arrow.png';



const HeaderSection = ({project}) => {



  return (
    <div className='header-section'>
        
        <div className="decoration">

            <div className="flexible-container">

                <img className='deco-images dotted' src={dotted} width='1000px' alt="circle" />

                <img className='deco-images blured' src={blured} alt="blured" />

                <img className='deco-images arrow' src={arrow} alt='arrow' />

                <img src={`/${project.logo}`} width='420px' className={`deco-images logo ${project.title}`} alt='logo' />

                <div className="deco-images elipse-blue"></div>
                
            </div>

        </div>
        
        <div className="elements">
            <h2 className={project.title}>
                {project.title}
            </h2>

            <ul>
                {project.services.map((service) => (
                    <li>
                        {service}
                    </li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default HeaderSection
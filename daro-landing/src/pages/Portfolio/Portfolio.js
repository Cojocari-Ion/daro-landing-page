import React from 'react';
import './Portofolio.css';
import { Link } from 'react-router-dom';
import { portofolioItems } from '../../portofolioItems';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Portfolio = () => {

    useEffect(() => {
      
        window.scrollTo(0, 0)
       
    }, []);

  return (
  
  <div className='portfolio'>

    <div className='decoration'>

        <div className="bgs">

            <div data-aos-duration="1000" data-aos="fade-down" className="bg-rectangle bg-rectangle1 blue">

            </div>

            <div data-aos-duration="1000" data-aos="fade-down" className="bg-rectangle bg-rectangle2 yellow">

            </div>

            <div data-aos-duration="1000" data-aos="fade-down" className="bg-rectangle bg-rectangle3 blue">

            </div>

            <img data-aos-duration="1000" data-aos="fade-up" className='blured-sphere1 spheres' src="assets/project-page-deco/blured.png" alt="blured1" />

            <img data-aos-duration="1000" data-aos="fade-up" className='clear-sphere1 spheres' src="assets/project-page-deco/sphere1.png" alt="sphere1" />

            <img data-aos-duration="1000" data-aos="fade-up" className='clear-sphere2 spheres' src="assets/project-page-deco/sphere2.png" alt="sphere2" />

            <img data-aos-duration="1000" data-aos="fade-up" className='blured-sphere2 spheres' src="assets/project-page-deco/blured.png" alt="blured2" />
        
        </div>

      

        

    </div>

    <div className='elements'>

        <h2>portofoliu</h2>

        <div className='divider'>

        </div>

        <div className="portofolio-grid">
            {portofolioItems.map((item) => (
                <div data-aos-duration="300" data-aos="fade-in" style={{backgroundImage: `url(${item.image})`}} className={`item ${item.title}`}>
                    <Link className='a' to={`/project/${item.id}`}>
                        <h3>{item.title}</h3>
                        <ul>
                            {item.services.map((service) => (
                                <li>{service}</li>
                            ))}
                        </ul>
                    </Link>
                </div>
            ))}
        </div>

    </div>

  </div>
    
    
    );
};

export default Portfolio;

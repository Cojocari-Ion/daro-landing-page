import React from 'react';
import ProjectColumn from './ProjectColumn/ProjectColumn';
import './Projects.css';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    
    <div className='projects'>

        
        <motion.div transition={{duration: 1}} className='floated-bg'>
            <img width='1600px' src="assets/projects/bg.png" alt="" />
        </motion.div>

        <div className="elements">
        
            <div className="scrolling-text">
                <p className='marque'> 
                    <span className='content'> Istorii <span>de succes -</span> Istorii <span>de succes - </span> Istorii <span>de succes -</span> Istorii <span>de succes -</span> </span>
                    <span className='content'> Istorii <span>de succes -</span> Istorii <span>de succes - </span> Istorii <span>de succes -</span> Istorii <span>de succes -</span> </span>
                </p>
            </div>

            <div className="container">

                <div className="sides left">
                    <ProjectColumn />
                </div>

                <div data-aos-duration="1000" data-aos-offset="300" data-aos="fade-left"  className="sides right">
                    <Link className='link' to='/portfolio'>
                        <span>vezi <br /><span className='blue'>toate proiectele</span> <br /> DARO agency </span> 
                    </Link>
                </div>

            </div>


        </div>

    </div>
  
    );
};

export default Projects;

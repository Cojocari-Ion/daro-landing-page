import React from 'react';
import { projects } from '../../../Projects';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectColumn = () => {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div className="project-grid">
        {projects.map((project) => (
            <div data-aos="fade-right" data-aos-duration="1000"  style={{backgroundImage: `url(${project.image})`}} className={`project ${project.title}`}>
                <Link  className='a' to={`/projects/${project.id}`}>
                    <h3 >{project.title}</h3>
                    <p className='services'>{project.services}</p>
                </Link>
            </div>
        ))}
    </div>
  );
};

export default ProjectColumn;

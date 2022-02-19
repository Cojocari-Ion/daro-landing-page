import React from 'react';
import './ProjectPage.css'
import { useParams } from 'react-router-dom';
import { projects } from '../../Projects';

const ProjectPage = () => {

    const { id } = useParams();
    const project = projects[id];
    console.log(project);

  return (
  <div className='project-page'>
      <h1>{`hello, I am page ${project.title}`}</h1>
  </div>
  
  );
};

export default ProjectPage;

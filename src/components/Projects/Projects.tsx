import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from './projectsData';

import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

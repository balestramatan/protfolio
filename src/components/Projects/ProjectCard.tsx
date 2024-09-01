import React from 'react';
import './Projects.css';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, imageUrl, link }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{techStack}</p>
        <p>{description}</p>
        <div className="project-card-links">
          <a href={link} target="_blank" rel="noopener noreferrer">Live Site</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

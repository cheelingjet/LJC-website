// ProjectCard.js
import React from 'react';
import './projectcard.css'; // Include some basic CSS for styling

const ProjectCard = ({ image, title, description, github, demo }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card__image" />
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <div className="project-card__links">
        {github && <a href={github} className="project-card__link" target="_blank" rel="noopener noreferrer">Source</a>}
        {demo && <a href={demo} className="project-card__link" target="_blank" rel="noopener noreferrer">View Here!</a>}
      </div>
    </div>
  );
};

export default ProjectCard;

import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Button } from '@mui/material';
import './Projects.css';

const projects = [
  {
    id: 1,
    companyLogo: '/path/to/company-logo-1.jpg',
    companyName: 'Lorem Ipsum Company 1',
    duration: 'Lorem Ipsum 2020 - 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
  {
    id: 2,
    companyLogo: '/path/to/company-logo-2.jpg',
    companyName: 'Lorem Ipsum Company 2',
    duration: 'Lorem Ipsum 2018 - 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
  {
    id: 3,
    companyLogo: '/path/to/company-logo-3.jpg',
    companyName: 'Lorem Ipsum Company 3',
    duration: 'Lorem Ipsum 2016 - 2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="projects-container">
      <div className="buttons-container">
        {projects.map((project, index) => (
          <Button
            key={project.id}
            onClick={() => handleCardChange(index)}
            variant="outlined"
            className={`card-button ${currentIndex === index ? 'active' : ''}`}
          >
            {index + 1}
          </Button>
        ))}
      </div>
      <div className="card-container">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={`project-card ${currentIndex === index ? 'active' : ''}`}
            style={{
              zIndex: projects.length - index,
              visibility: currentIndex === index ? 'visible' : 'hidden',
            }}
          >
            <div className="card-content">
              <Avatar className="company-logo" src={project.companyLogo} alt={project.companyName} />
              <Typography variant="h6" component="h2" className="company-name">
                {project.companyName}
              </Typography>
              <Typography variant="subtitle2" className="duration">
                {project.duration}
              </Typography>
              <Typography variant="body2" className="description">
                {project.description}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;

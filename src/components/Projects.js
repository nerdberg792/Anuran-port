import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import { FaBriefcase } from 'react-icons/fa';
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-500 to-blue-500 h-screen overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <Grid container spacing={2} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card className={`project-card ${loaded ? 'slide-in' : ''}`}>
                <div className="card-content">
                  <Avatar className="w-16 h-16 object-cover rounded-full" src={project.companyLogo} alt={project.companyName} />
                  <Typography variant="h6" component="h2" className="mb-2">
                    {project.companyName}
                  </Typography>
                  <Typography variant="subtitle2" className="text-gray-500">
                    {project.duration}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;

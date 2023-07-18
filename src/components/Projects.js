import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Button } from '@mui/material';
import './Projects.css';

const projects = [
  {
    id: 1,
    companyLogo: '/path/to/company-logo-1.jpg',
    companyName: 'Nasdaq',
    profile: 'Summer Intern(QA testing)' , 
    duration: 'June-2023-present',
    description: 'I built a Java module using the QuickFIX/J framework to develop Trading Engines. As part of the development process, I integrated the Karate testing tool into the Java module to test FIX protocol messages. I had the opportunity to lead a team of 5 interns during this project, and our hard work and collaboration paid off when we were awarded the Best Team Award in 2023. It was a rewarding experience to work with the team and achieve success in developing and testing the Trading Engines using FIX protocol.',
  },
  {
    id: 2,
    companyLogo: '/path/to/company-logo-2.jpg',
    companyName: 'Pentabug',
    profile:'SDE intern(fullstack)' ,
    duration: 'October 2022 - April 2023',
    description: 'In my role, I had the opportunity to design and implement a Job Queue system specifically for handling notifications and emails. Leveraging MongoDB, I ensured that all security aspects were carefully considered and implemented. Additionally, I undertook the task of renovating the user onboarding journey, completely revamping both the frontend and backend using technologies such as React, Spring, and Auth0. This encompassed creating a seamless and user-friendly experience for new users. To streamline the development process and ensure continuous integration and deployment, I set up a CI/CD pipeline using a Jenkins server. This allowed for efficient and automated testing and deployment of code changes. Through these initiatives, I was able to make notable contributions to enhancing system functionality, security, and user experience.',
  },
  {
    id: 3,
    companyLogo: '/path/to/company-logo-3.jpg',
    companyName: 'Neowise Technology',
    duration: 'April-2022 to JUly-2022',
    position:'Backend Engineering Intern' ,
    description: 'As a Backend SDE intern at Neowise Technologies, I developed microservices for NSDL Banks M2P API, including Authentication, User, KYC, Card, Loan, and Notifications. I wrote tests, adhered to SOLID principles, and gained experience in backend development and working with microservices architecture in the banking domain.',
  },
  {
    id: 4,
    companyLogo: '/path/to/company-logo-4.jpg',
    companyName: 'Vevesta',
    duration: 'April-2021 to July-2022',
    position:'Fullstack Engineering Intern' ,
    description: 'I developed RESTful APIs using Java Spring Boot, containerized the application using Docker, and deployed it on AWS. Additionally, I created a customizable WYSIWYG Editor with custom features. In Python, I built the VevestaX public library from scratch and integrated it with GitHub and the Vevesta tool for enhanced functionality and collaboration.    ',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardChange = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };
  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="projects-container">
      <div className="buttons-container">
        <Button onClick={handlePrevCard} variant="outlined" className="card-button">
          &lt;
        </Button>
        <Button onClick={handleNextCard} variant="outlined" className="card-button">
          &gt;
        </Button>
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
              <Typography variant="subtitle2" className="profile">
                {project.profile}
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

import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        
       <Projects/>
       
        <Routes>
        <Route exact path="/" component={Profile} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default AppRouter ; 
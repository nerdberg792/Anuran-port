import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledPaper elevation={3}>
          <StyledTypography variant="h6" component="div">
            {/* Your website name here */}
          </StyledTypography>
          <StyledNavLinks>
            <StyledButton component={NavLink} to="/" exact activeClassName="active" color="inherit">
              Profile
            </StyledButton>
            <StyledButton component={NavLink} to="/projects" activeClassName="active" color="inherit">
              Projects
            </StyledButton>
            <StyledButton component={NavLink} to="/contact" activeClassName="active" color="inherit">
              Contact
            </StyledButton>
          </StyledNavLinks>
        </StyledPaper>
      </StyledToolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
  radius:20px ; 
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
  text-align: center;
`;

const StyledNavLinks = styled('div')`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  &.active {
    color: #ff4081;
  }
  color: #333; /* Custom button color */
  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Custom button hover color */
  }
`;

export default Navbar;

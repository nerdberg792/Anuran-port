import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <Card sx={{ maxWidth: 600, margin: '64px auto 0', backgroundColor: 'white', marginBottom: 16, borderRadius: 8 }}>
      <CardContent>
        <Typography variant="h4" component="h1" align="center" sx={{ marginBottom: 16, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>
          Contact
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <div sx={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
              <IconButton
                sx={{ marginRight: 8, fontSize: 32, fontFamily: 'sans-serif' }}
                component="a"
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </IconButton>
              <IconButton
                sx={{ marginRight: 8, fontSize: 32, fontFamily: 'sans-serif' }}
                component="a"
                href="https://linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </IconButton>
              <IconButton
                sx={{ marginRight: 8, fontSize: 32, fontFamily: 'sans-serif' }}
                component="a"
                href="https://twitter.com/your-twitter-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;

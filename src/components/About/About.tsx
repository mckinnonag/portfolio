import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function About() {
    return (
        <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About me
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Originally from Massachusetts and now in Brooklyn, New York, I graduated from UMass Amherst with a degree in Journalism and Anthropology.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                After working in IT for most of my career, I became interested in computer science, especially distributed systems, and started taking courses via MIT OpenCourseWare and similar resources a few years ago. 
            </Typography>
        </Container>
    )
}

export default About;
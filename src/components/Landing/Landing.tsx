import * as React from 'react';
import MainCard from '../MainCard/MainCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FeaturedLink from '../FeaturedLink/FeaturedLink';

const featuredLinks = [
    {
      title: 'About me',
      date: 'Nov 12',
      description:
        'I\'m a self-taught developer with an interest in distributed systems and web-scale technology.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      href: '/about'
    },
    {
      title: 'Contact',
      date: 'Nov 11',
      description:
        'Reach me on LinkedIn or email, or check out my GitHub.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
      href: '/contact',
    },
  ];
  
export default function Landing() {
    return (
        <Container maxWidth="lg">
            <MainCard/>
            <Grid container spacing={4}>
                {featuredLinks.map((link) => (
                    <FeaturedLink key={link.title} post={link} />
                ))}
            </Grid>
        </Container>
    );
}
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
    image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHfcM-6B5WXIA/profile-displayphoto-shrink_800_800/0/1660323541406?e=1666224000&v=beta&t=lutD7YJmBNW1UUw3jyq2JTDjo5kYZWRbmON4iAYurpI',
    imageLabel: 'Me',
    href: '/about'
  },
  {
    title: 'Contact',
    date: 'Nov 11',
    description:
      'Reach me on LinkedIn or email, or check out my GitHub.',
    image: 'https://source.unsplash.com/fb7yNPbT0l8',
    imageLabel: 'Contact',
    href: '/contact',
  },
];

const mainProps = {
      title: 'Hi, I\'m Alex 👋🏻',
      description:
      "I'm a software developer based in Brooklyn, New York, specializing in Python, JavaScript, and Go.",
      image: 'https://source.unsplash.com/r4PbOL-LUbs',
      imageText: 'NYC',
      linkText: 'Check out what I\'ve been working on…',
      href: '/projects',
}
  
export default function Landing() {
    return (
        <Container maxWidth="lg">
            <MainCard post={mainProps}/>
            <Grid container spacing={4}>
                {featuredLinks.map((link) => (
                    <FeaturedLink key={link.title} post={link} />
                ))}
            </Grid>
        </Container>
    );
}
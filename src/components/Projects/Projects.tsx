import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Code from '@mui/icons-material/Code';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import Project from '../Cards/Interfaces';
import ProjectCard from '../ProjectCard/ProjectCard';


// Static content to serve projects
const langsPortfolio: string[] = ['React', 'TypeScript'];
const langsMoneyApp: string[] = ['React', 'TypeScript', 'Go', 'Postgres SQL'];
const langsAnother: string[] = ['Python'];

const projects: Project[] = [
    {
        id: 1,
        title: 'This Website',
        description: 'A simple portfolio page built in TypeScript React.',
        languages: langsPortfolio,
        linkURL: 'google.com',
        linkDisabled: true,
        sourceDisabled: false,
    },
    {
        id: 2,
        title: 'MoneyApp',
        description: 'A expense-sharing application built with a TypeScript React frontend, a Go backend using Gin, Postgres SQL, and utilizing the Plaid API.',
        languages: langsMoneyApp,
        linkURL: 'google.com',
        linkDisabled: false,
        sourceDisabled: false,
    },
    {
        id: 3,
        title: 'Raft',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        languages: langsAnother,
        linkURL: 'google.com',
        linkDisabled: false,
        sourceDisabled: true,
    },
]

const cards = ((project: Project) =>
    <ProjectCard
        id={project.id}
        title={project.title} 
        description={project.description} 
        languages={project.languages} 
        linkURL={project.linkURL}
        linkDisabled={project.linkDisabled}
        sourceDisabled={project.sourceDisabled}
    />
);

export default function Projects() {
    // State for the modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Hero unit */}
            <Container maxWidth="sm">
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                    Projects
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    A collection of personal projects that I've been working on.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6} md={4}>
                            {cards(project)}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}
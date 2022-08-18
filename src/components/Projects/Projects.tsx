import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Project from './Interfaces';
import ProjectCard from '../ProjectCard/ProjectCard';


// Static content to serve projects
const langsPortfolio: string[] = ['React', 'TypeScript'];
const langsMoneyApp: string[] = ['React', 'TypeScript', 'Go', 'Postgres SQL'];
const langsAnother: string[] = ['Python'];

const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'View the source code for this website.',
        longDescription: 'A single page portfolio app built in TypeScript React. Check out the source code below.',
        languages: langsPortfolio,
        linkURL: '',
        linkDisabled: true,
        sourceURL: 'https://github.com/mckinnonag/portfolio',
        sourceDisabled: false,
    },
    {
        id: 2,
        title: 'MoneyApp',
        description: 'An expense-sharing application built with a TypeScript React frontend, a Go backend using Gin, Postgres SQL, and the Plaid API.',
        longDescription: 'This is still a work in progress, but you can check out the source code!',
        languages: langsMoneyApp,
        linkURL: '',
        linkDisabled: true,
        sourceURL: 'https://github.com/mckinnonag/moneyapp',
        sourceDisabled: false,
    },
    {
        id: 3,
        title: 'Raft',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        longDescription: '',
        languages: langsAnother,
        linkURL: 'google.com',
        linkDisabled: false,
        sourceURL: '',
        sourceDisabled: true,
    },
]

const cards = ((project: Project) =>
    <ProjectCard
        id={project.id}
        title={project.title} 
        description={project.description} 
        longDescription={project.longDescription}
        languages={project.languages} 
        linkURL={project.linkURL}
        linkDisabled={project.linkDisabled}
        sourceURL={project.sourceURL}
        sourceDisabled={project.sourceDisabled}
    />
);

export default function Projects() {
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
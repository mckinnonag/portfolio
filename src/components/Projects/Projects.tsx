import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Project from './ProjectInterfaces';
import ProjectCard from '../ProjectCard/ProjectCard';

// Static content to serve project cards
const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'View the source code for this website.',
        longDescription: 'A single page portfolio app built in TypeScript React. Check out the source code below.',
        photoSource: 'https://source.unsplash.com/xkBaqlcqeb4',
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
        photoSource: 'https://source.unsplash.com/ZVprbBmT8QA',
        linkURL: '',
        linkDisabled: true,
        sourceURL: 'https://github.com/mckinnonag/moneyapp',
        sourceDisabled: false,
    },
    {
        id: 3,
        title: 'Raft',
        description: 'A sharded key/value store and consensus algorithm, based on Raft, and written in Go.',
        longDescription: 'Based on the labs from MIT 6.824, Distributed Systems. This application implements leader election, snapshotting, log replay, and other features of linearizable distributed systems. Please reach out to me and I would be happy to share the source code.',
        photoSource: 'https://source.unsplash.com/fteR0e2BzKo',
        linkURL: 'google.com',
        linkDisabled: true,
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
        photoSource={project.photoSource}
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
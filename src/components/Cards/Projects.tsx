import * as React from 'react';
import ProjectCard from './ProjectCard';
import Project from './Interfaces';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const langsPortfolio: string[] = ['React', 'TypeScript'];
const langsMoneyApp: string[] = ['React', 'TypeScript', 'Go', 'Postgres SQL'];
const langsAnother: string[] = ['Python'];
const projects: Project[] = [
    {
        title: 'This Website',
        description: 'A simple portfolio page built in TypeScript React.',
        languages: langsPortfolio,
        linkURL: 'google.com',
        linkDisabled: true,
        sourceDisabled: false,
    },
    {
        title: 'MoneyApp',
        description: 'A expense-sharing application built with a TypeScript React frontend, a Go backend using Gin, Postgres SQL, and utilizing the Plaid API.',
        languages: langsMoneyApp,
        linkURL: 'google.com',
        linkDisabled: false,
        sourceDisabled: false,
    },
    {
        title: 'Raft',
        description: 'TBD',
        languages: langsAnother,
        linkURL: 'google.com',
        linkDisabled: false,
        sourceDisabled: true,
    },
];

const cards = projects.map((project) =>
    <Grid item xs>
        <ProjectCard 
            title={project.title} 
            description={project.description} 
            languages={project.languages} 
            linkURL={project.linkURL}
            linkDisabled={project.linkDisabled}
            sourceDisabled={project.sourceDisabled}
        />
    </Grid>
);

const Projects = () => {
    return (
        <Box sx={{
            display: 'flex',
        }}>
            <Grid container spacing={1} lg={8} mx='auto'>
                {cards}
            </Grid>
        </Box>
    )
}

export default Projects;
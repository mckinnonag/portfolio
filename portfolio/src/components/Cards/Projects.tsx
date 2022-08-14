import * as React from 'react';
import ProjectCard from './ProjectCard';
import Project from './Interfaces';
import Stack from '@mui/material/Stack';

const langsPortfolio: string[] = ['React', 'TypeScript'];
const langsMoneyApp: string[] = ['React', 'TypeScript', 'Go', 'Postgres SQL'];
const projects: Project[] = [
    {
        title: 'This Website',
        description: 'A simple portfolio page built in TypeScript React.',
        languages: langsPortfolio,
        linkURL: 'google.com',
    },
    {
        title: 'MoneyApp',
        description: 'A expense-sharing application built with a TypeScript React frontend, a Go backend using Gin, Postgres SQL, and utilizing the Plaid API.',
        languages: langsMoneyApp,
        linkURL: 'google.com',
    },
];

const cards = projects.map((project) =>
    <ProjectCard title={project.title} 
                 description={project.description} 
                 languages={project.languages} 
                 linkURL={project.linkURL} 
    />
);

const Projects = () => {
    return (
        <>
            {cards}
        </>
    )
}

export default Projects;
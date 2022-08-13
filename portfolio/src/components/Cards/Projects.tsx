import * as React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <>
            <ProjectCard title="Project Title" description="description" languages={['Python', 'TypeScript']} linkURL='google.com' />
        </>
       
    )
}

export default Projects;
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function About() {
    return (
        <>
            <Typography variant="h2">
                About me
            </Typography>
            <Divider />
            <Typography>
                Body
            </Typography>
        </>
    )
}

export default About;
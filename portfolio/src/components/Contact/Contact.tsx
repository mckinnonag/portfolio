import React, {MouseEvent} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Contact.css";

const Contact = () => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 }, padding: '50px'}}>
            <Fab variant="extended" aria-label="linkedin">
                <LinkedInIcon sx={{mr: 1 }}/>
                LinkedIn
            </Fab>
            <Fab variant="extended" aria-label="github">
                <GitHubIcon sx={{mr: 1 }}/>
                GitHub
            </Fab>
            <Fab variant="extended" aria-label="email">
                <MailOutlineIcon sx={{mr: 1 }}/>
                Email
            </Fab>
        </Box>
    );
}

export default Contact;
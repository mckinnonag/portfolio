import React, {MouseEvent} from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Contact.css";

const Contact = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ '& > :not(style)': { m: 1 }, padding: '50px'}}>
            <Fab variant="extended" 
                 aria-label="linkedin"
                 onClick={() => {
                    navigate('/linkedin');
                 }}>
                <LinkedInIcon sx={{mr: 1 }}/>
                LinkedIn
            </Fab>
            <Fab variant="extended" 
                 aria-label="github"
                 onClick={() => {
                    navigate('/github');
                 }}>
                <GitHubIcon sx={{mr: 1 }}/>
                GitHub
            </Fab>
            <Fab variant="extended" 
                 aria-label="email"
                 onClick={() => {
                    navigate('/mail');
                 }}>
                <MailOutlineIcon sx={{mr: 1 }}/>
                Email
            </Fab>
        </Box>
    );
}

export default Contact;
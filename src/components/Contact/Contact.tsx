import React, {MouseEvent} from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Contact.css";

const Contact = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                <Fab variant="extended" 
                    aria-label="linkedin"
                    onClick={() => {
                        navigate('/linkedin');
                    }}>
                    <LinkedInIcon />
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
            </Stack>
        </Container>
    );
}

export default Contact;
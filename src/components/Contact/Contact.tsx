import React from 'react';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import "./Contact.css";

const Contact = () => {
    return (
        <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                <Link 
                    href='https://www.linkedin.com/in/mckinnonag/'
                    underline="none"
                >
                    <Fab variant="extended" 
                        aria-label="linkedin">
                        <LinkedInIcon />
                        LinkedIn
                    </Fab>
                </Link>
                <Link 
                    href='https://www.github.com/mckinnonag'
                    underline="none"
                >
                    <Fab variant="extended" 
                        aria-label="github"
                    >
                        <GitHubIcon sx={{mr: 1 }}/>
                        GitHub
                    </Fab>
                </Link>
                <Link 
                    href='mailto:mckinnonag@gmail.com'
                    underline="none"
                >
                    <Fab variant="extended" 
                        aria-label="email"
                    >
                        <MailOutlineIcon sx={{mr: 1 }}/>
                        Email
                    </Fab>
                </Link>
            </Stack>
        </Container>
    );
}

export default Contact;
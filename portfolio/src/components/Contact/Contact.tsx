import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-icons">
            <MailOutlineIcon fontSize="large"/>
            <LinkedInIcon fontSize="large"/>
            <GitHubIcon fontSize="large"/>
        </div>
    );
}

export default Contact;
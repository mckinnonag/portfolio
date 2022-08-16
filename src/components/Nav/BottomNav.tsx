import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Code from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

const BottomNav = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  return (
    <Box>
        <BottomNavigation
          sx={{ 
            margin: 'auto',
            width: '35%',
            display: 'flex',
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(`/${newValue}`)
          }}
        >
          <BottomNavigationAction value="home" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction value="projects" label="Projects" icon={<Code />} />
          <BottomNavigationAction value="contact" label="Contact" icon={<EmailIcon />} />
        </BottomNavigation>
    </Box>
  );
}

export default BottomNav;

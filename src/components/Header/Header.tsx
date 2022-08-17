import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Header() {
    return (
        <>
            <Typography variant="h2">
                Header
            </Typography>;
            <Divider />
        </>
    )
}

export default Header;
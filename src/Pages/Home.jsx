import { Typography, Box } from '@mui/material';
import React from 'react';

const HomePage = () => {

    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant="h1">
                Welcome to E-Commerce Site!
            </Typography>
        </Box>
    )
}

export default HomePage;
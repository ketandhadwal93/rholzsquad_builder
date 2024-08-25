import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bgcolor="#f0f0f0"
    >
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        color="primary"
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          borderBottom: '2px solid #3f51b5',
          paddingBottom: '8px'
        }}
      >
        No Data Found
      </Typography>
    </Box>
  );
};

export default Dashboard;

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Header = ({ handleDrawerToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define titles based on the current route
  const getTitle = (pathname) => {
    switch (pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/property':
        return 'Property Listings';
      case '/signup':
        return 'Sign Up';
      case '/':
        return 'Login';
        case '/property/new':
            return 'Create New Property '
      default:
        return 'Responsive Drawer';
    }
  };

  const title = getTitle(location.pathname);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {location.pathname === '/property' && (
          <Button color="inherit" onClick={() => navigate('/property/new')}>
            Add New Property
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

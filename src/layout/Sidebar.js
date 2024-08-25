import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Logout } from '@mui/icons-material';
import imageUrl from "../assets/builderlogo.png";
const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle, handleDrawerClose, handleDrawerTransitionEnd, container }) => {

  const handleLogout = () => {
    sessionStorage.clear()
  }

  const drawer = (
    <div>
      <div style={{width:"88%" ,height:"97px" ,marginLeft:"35px"}}>
     <img src={imageUrl} alt='img'  />
      </div>
      <Toolbar />
      <Divider />
      <List>
        {[
          { text: 'Dashboard', icon: <InboxIcon />, path: '/dashboard' },
          { text: 'Property', icon: <MailIcon />, path: '/property' }
        ].map(({ text, icon, path }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={path}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    
      <List>
        <ListItem key={"Log Out"} disablePadding onClick={handleLogout}>
          <ListItemButton component={Link} to={'/'}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={"Log Out"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;

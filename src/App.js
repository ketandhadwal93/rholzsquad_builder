import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Dashboard from './pages/Dashboard';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Property from './pages/Property';
import PropertyAdd from './pages/PropertyAdd';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  // Layout component for private routes
  const PrivateLayout = ({ children }) => (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} />
      <br />
      <br />
      <br />
      <br />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          handleDrawerClose={handleDrawerClose}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          container={container}
        />
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />

        {/* Private Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateLayout>
              <Dashboard />
            </PrivateLayout>
          }
        />
        <Route
          path="/property"
          element={
            <PrivateLayout>
              <Property />
            </PrivateLayout>
          }
        />

        <Route
          path="/property/new"
          element={
            <PrivateLayout>
              <PropertyAdd />
            </PrivateLayout>
          }
        />


      </Routes>
      <ToastContainer limit={1} />
    </Router>
  );
}

export default App;

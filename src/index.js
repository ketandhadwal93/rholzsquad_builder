import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TokenProvider } from './context/tokenContext';

// Create a custom theme with orange colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800', // Custom primary color (orange)
    },
    secondary: {
      main: '#ff5722', // Custom secondary color (deep orange)
    },
    background: {
      default: '#fff3e0', // Custom background color (light orange)
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TokenProvider>
        <App />
        </TokenProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

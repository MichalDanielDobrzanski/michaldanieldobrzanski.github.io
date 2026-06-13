import React from 'react';
import "@fontsource/montserrat";
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from './pages/Routes.js';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PlanterHome from './pages/PlanterHome';
import Contact from './pages/Contact.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  palette: {
    primary: {
      main: '#A6EAC5',
    },
    secondary: {
      main: '#75B896',
    },
    background: {
      default: '#FAFDF7'
    }
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      Oscillator Michał Dobrzański
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppTheme>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <>
            <Navbar />
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} exact />
              <Route path={ROUTES.PLANTER_HOME_ROUTE} element={<PlanterHome />} exact />
              <Route path={ROUTES.CONTACT_ROUTE} element={<Contact />} exact />
            </Routes>
          </>


          <Box sx={{
            p: 6
          }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Planter & Hourglass
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Landing pages
            </Typography>
            <Copyright />
          </Box>
        </ThemeProvider>
      </AppTheme>
    </BrowserRouter>
  );
}

function AppTheme(props) {
  const { children } = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
};
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Home from './pages/Home';
import LiveData from './pages/LiveData';
import Info from './pages/Info';
import DataLog from './pages/DataLog';
import router from './routes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212', paper: '#1e1e1e' },
  },
  shape: {
    borderRadius: 16,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;

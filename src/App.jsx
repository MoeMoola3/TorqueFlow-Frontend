import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Home from './pages/Home';
import LiveData from './pages/LiveData';
import Info from './pages/Info';
import DataLog from './pages/DataLog';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212', paper: '#1e1e1e' },
  },
  shape: {
    borderRadius: 16,
  },
});

const vary = (value, min, max) => {
  const delta = (Math.random() - 0.5) * 0.5;
  const newValue = value + delta;
  return Math.min(max, Math.max(min, newValue));
};

const App = () => {
  const [vehicleData, setVehicleData] = useState({
    id: 193,
    engineRpm: 752,
    speed: 0.0,
    coolantTemp: 94,
    throttlePosition: 2.0,
    o2SensorVoltage: 0.4156654839552466,
    shortTermFuelTrim: 0.0,
    engineLoad: 20.0,
    fuelLevel: 74.94,
    recordTime: [2025, 10, 18, 6, 50, 48, Date.now()],
    vin: {
      vin: '1HGCM82633A004352',
    },
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicleData((prev) => {
        const now = new Date();
        return {
          ...prev,
          engineRpm: vary(prev.engineRpm, 700, 900),
          speed: vary(prev.speed, 0, 5),
          coolantTemp: vary(prev.coolantTemp, 90, 100),
          throttlePosition: vary(prev.throttlePosition, 1, 5),
          o2SensorVoltage: vary(prev.o2SensorVoltage, 0.1, 0.9),
          shortTermFuelTrim: vary(prev.shortTermFuelTrim, -5, 5),
          engineLoad: vary(prev.engineLoad, 15, 30),
          fuelLevel: Math.max(0, prev.fuelLevel - 0.01),
          recordTime: [
            now.getFullYear(),
            now.getMonth() + 1,
            now.getDate(),
            now.getHours(),
            now.getMinutes(),
            now.getSeconds(),
            now.getTime(),
          ],
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/live-data' element={<LiveData data={vehicleData} />} />
            <Route path='/info' element={<Info />} />
            <Route path='/data-log' element={<DataLog />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};
export default App;

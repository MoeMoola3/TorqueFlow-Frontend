import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import GaugeComponent from 'react-gauge-component';

const GaugesGrid = (props) => {
  const {
    engineRpm,
    speed,
    coolantTemp,
    throttlePosition,
    o2SensorVoltage,
    shortTermFuelTrim,
    engineLoad,
    fuelLevel,
  } = props.data;

  const gauges = [
    { label: 'Engine RPM', value: engineRpm, min: 0, max: 8000, units: 'RPM' },
    { label: 'Speed', value: speed, min: 0, max: 240, units: 'km/h' },
    { label: 'Coolant Temp', value: coolantTemp, min: -40, max: 120, units: '°C' },
    { label: 'Throttle', value: throttlePosition, min: 0, max: 100, units: '%' },
    { label: 'O2 Sensor', value: o2SensorVoltage, min: 0, max: 1, units: 'V' },
    { label: 'Fuel Trim', value: shortTermFuelTrim, min: -50, max: 50, units: '%' },
    { label: 'Engine Load', value: engineLoad, min: 0, max: 100, units: '%' },
    { label: 'Fuel Level', value: fuelLevel, min: 0, max: 100, units: '%' },
  ];
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 6, md: 4 }}
      justifyContent='center'
      sx={{
        width: '100%',
        maxWidth: 1200,
        bgcolor: 'background.default',
        color: 'text.primary',
        py: { xs: 2, sm: 4, md: 4 },
        px: { xs: 1, sm: 2, md: 4 },
      }}
    >
      {gauges.map((g, index) => (
        <Grid item key={index} xs={6} sm={4} md={8}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              border: 'rgba(17, 83, 121, 1) 2px solid',
              borderRadius: 2,
              p: { xs: 1, sm: 2, md: 2 },
              boxShadow: '0 0 8px 2px rgba(0, 183, 255, 0.39)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' } }} gutterBottom>
              {g.label}
            </Typography>
            <Box
              sx={{
                backgroundColor: 'background.paper',
                width: { xs: 110, sm: 150, md: 190 },
                aspectRatio: '1.618 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              <Box
                sx={{
                  width: '90%',
                  height: '90%',
                }}
              >
                <GaugeComponent
                  type='semicircle'
                  arc={{
                    width: 0.3,
                    padding: 0.02,
                    cornerRadius: 1,
                    colorArray: ['#00FF00', '#FF0000'],
                    subArcs: [
                      { limit: g.max * 0.6, color: '#00FF00' },
                      { limit: g.max * 0.8, color: '#FFFF00' },
                      { limit: g.max, color: '#FF0000' },
                    ],
                  }}
                  value={g.value}
                  minValue={g.min}
                  maxValue={g.max}
                  transitionDuration={800}
                  labels={{
                    valueLabel: { formatTextValue: (val) => `${val.toFixed(1)} ${g.units}` },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default GaugesGrid;

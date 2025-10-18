import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import GaugeComponent from 'react-gauge-component';

export default function LiveData({ data }) {
  if (!data) return <Typography>Loading...</Typography>;

  const {
    engineRpm,
    speed,
    coolantTemp,
    throttlePosition,
    o2SensorVoltage,
    shortTermFuelTrim,
    engineLoad,
    fuelLevel,
  } = data;

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
    <Box
      sx={{
        p: 10,
        bgcolor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '80%' }}>
        <Typography variant='h3' align='center' gutterBottom>
          OBD Live Data Dashboard
        </Typography>

        <Grid container spacing={3} justifyContent='flex-end'>
          {gauges.map((g, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  p: 2,
                  boxShadow: 3,
                  textAlign: 'center',
                  minWidth: 200,
                }}
              >
                <Typography variant='subtitle1' gutterBottom>
                  {g.label}
                </Typography>
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
                  transitionDuration={1000}
                  labels={{
                    valueLabel: { formatTextValue: (val) => `${val.toFixed(1)} ${g.units}` },
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'right', mt: 4 }}>
          <Button variant='contained' color='primary' component={Link} to='/'>
            Back Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

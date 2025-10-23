import { Box, Typography, Grid, Button, ButtonGroup, Stack, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import GaugeComponent from 'react-gauge-component';
import { motion } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

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

  const [selectedButton, setSelectedButton] = useState(null);

  const handleSelect = (key) => {
    setSelectedButton(key);
  };

  const buttons = [
    {
      key: 'cold',
      label: 'COLD START',
      color: '#0288d1',
    },
    {
      key: 'idle',
      label: 'IDLE',
      color: '#4caf50',
    },
    {
      key: 'acc',
      label: 'ACCELERATION',
      color: '#f44336',
    },
    {
      key: 'cruise',
      label: 'CRUISE',
      color: '#ff9800',
    },
    {
      key: 'dec',
      label: 'DECELERATION',
      color: '#9c27b0',
    },
    {
      key: 'heavy',
      label: 'HEAVY LOAD',
      color: '#795548',
    },
  ];

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

  const handleClick = () => {
    console.log('handle click');
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 20, sm: 36 },
          left: { xs: 20, sm: 36 },
          bgcolor: 'background.default',
        }}
      >
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button
            variant='outlined'
            sx={{
              'boxShadow': '0 0 8px 1px rgba(0, 183, 255, 0.39)',
              'color': 'white',
              'borderRadius': { xs: 0.8, sm: 1 },
              'px': { xs: 0, sm: 2 },
              'py': { xs: 0.8, sm: 1.2 },
              'backgroundColor': 'transparent',
              'transition': 'background-color 0.7s ease',
              '&:hover, &:active': {
                backgroundColor: '#056fb6cc',
                border: 'none',
              },
            }}
          >
            <Stack direction='row' spacing={1.5} alignItems='center'>
              <Box
                sx={{
                  width: { xs: '16', sm: '24' },
                  height: { xs: '16', sm: '24' },
                  borderRadius: '50%',
                  border: '1.5px solid ',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowBackIcon sx={{ width: 14, height: 14, color: 'white' }} />
              </Box>
              <Typography
                sx={{
                  display: { xs: 'none', md: 'block' },
                  whiteSpace: 'nowrap',
                }}
              >
                MENU
              </Typography>
            </Stack>
          </Button>
        </Link>
      </Box>

      {/* Main Scrollable Content */}
      <Box
        sx={{
          ml: { xs: 4, sm: 8, md: 10 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.default',
        }}
      >
        <motion.div
          animate={{
            backgroundPositionX: ['0%', '200%'],
          }}
          transition={{
            backgroundPositionX: {
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 4, md: 6 },
              mt: { xs: 8 },
              ml: { sm: '0px', md: '-90px' },
              background: 'linear-gradient(90deg, #00e5ff, #2979ff, #00bcd4, #00e5ff)',
              backgroundSize: '200% 100%',
              backgroundPositionX: '0%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
              fontFamily: "'Orbitron', sans-serif",
              textAlign: 'center',
              px: { xs: 2, sm: 4 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
            }}
          >
            Telemetry Dashboard
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: () => (isSmallScreen ? 'column' : 'row'),
            alignItems: 'center',
            px: 3,
            py: 3,
            bgcolor: 'background.default',
          }}
        >
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
                  <Typography
                    sx={{ fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' } }}
                    gutterBottom
                  >
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
          <ButtonGroup
            variant='contained'
            disableElevation
            size={isSmallScreen ? 'small' : 'large'}
            orientation={isSmallScreen ? 'horizontal' : 'vertical'}
            aria-label='Engine Modes'
            sx={{
              'flexWrap': 'wrap',
              'ml': { md: -3 },
              '& .MuiButtonGroup-grouped': {
                borderColor: 'transparent',
                flex: '1 1 auto',
              },
            }}
          >
            {buttons.map((btn) => (
              <Button
                key={btn.key}
                onClick={() => handleSelect(btn.key)}
                sx={{
                  'color': selectedButton === btn.key ? '#fff' : btn.color,
                  'backgroundColor': selectedButton === btn.key ? btn.color : 'transparent',
                  'transition': 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: selectedButton === btn.key ? btn.color : `${btn.color}22`,
                    color: selectedButton === btn.key ? '#fff' : btn.color,
                    transform: 'scale(1.03)',
                  },
                  '&:active': {
                    transform: 'scale(0.97)',
                  },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                  '&:focus-visible': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                }}
              >
                {btn.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}

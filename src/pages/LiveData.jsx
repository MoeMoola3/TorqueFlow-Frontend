import { Box, Typography, Grid, Button, ButtonGroup, Stack } from '@mui/material';
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
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        bgcolor: 'default.background',
        px: 2,
        pt: 2,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 36,
          left: 36,
          zIndex: 1000,
        }}
      >
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button
            variant='outlined'
            sx={{
              'borderColor': '#84cc16',
              'color': 'white',
              'borderRadius': 1,
              'px': 2,
              'py': 1.2,
              'textTransform': 'none',
              'backgroundColor': 'transparent',
              'transition': 'background-color 0.3s ease',
              '&:hover, &:active': {
                backgroundColor: '#abf044ff',
              },
            }}
          >
            <Stack direction='row' spacing={1.5} alignItems='center'>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  border: '1px solid white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowBackIcon sx={{ width: 14, height: 14, color: 'white' }} />
              </Box>

              <Typography
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  fontFamily: 'var(--caption-heavy-font-family)',
                  fontWeight: 'var(--caption-heavy-font-weight)',
                  fontSize: 'var(--caption-heavy-font-size)',
                  letterSpacing: 'var(--caption-heavy-letter-spacing)',
                  lineHeight: 'var(--caption-heavy-line-height)',
                  fontStyle: 'var(--caption-heavy-font-style)',
                  whiteSpace: 'nowrap',
                }}
              >
                Menu
              </Typography>
            </Stack>
          </Button>
        </Link>
      </Box>

      <Box
        sx={{
          px: 2,
          pt: 2,
          pb: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'default.background',
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
              background: 'linear-gradient(90deg, #00e5ff, #2979ff, #00bcd4, #00e5ff)',
              backgroundSize: '200% 100%',
              backgroundPositionX: '0%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
              fontFamily: "'Orbitron', sans-serif",
              textAlign: 'center',
              px: { xs: 2, sm: 4, md: 0 },
              fontSize: { xs: '2rem', sm: '2rem', md: '4rem' },
            }}
          >
            Telemetry Dashboard
          </Typography>
        </motion.div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            px: 3,
            bgcolor: 'default.background',
          }}
        >
          <Box
            sx={{
              bgcolor: 'default.background',
              color: 'text.primary',
              py: { xs: 2, sm: 4, md: 4 },
              px: { xs: 5, sm: 2, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid
              container
              spacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent='flex-end'
              sx={{ width: '100%', maxWidth: 1200, justifyContent: 'center' }}
            >
              {gauges.map((g, index) => (
                <Grid item key={index} xs={6} sm={6} md={3}>
                  <Box
                    sx={{
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      p: { xs: 1, sm: 2, md: 2 },
                      boxShadow: 24,
                      textAlign: 'center',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
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
                        width: { xs: 120, sm: 150, md: 200 },
                        transform: { xs: 'scale(0.8)', sm: 'scale(1)', md: 'scale(1)' },
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
                </Grid>
              ))}
            </Grid>
          </Box>
          <ButtonGroup
            variant='contained'
            disableElevation
            size='large'
            orientation={isSmallScreen ? 'horizontal' : 'vertical'}
            aria-label='Engine Modes'
            sx={{
              '& .MuiButtonGroup-grouped': {
                borderColor: 'transparent',
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

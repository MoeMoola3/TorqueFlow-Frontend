import { Box, Typography, Grid, Button, ButtonGroup, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import GaugeComponent from 'react-gauge-component';
import { motion } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

  const handleClick = () => {
    console.log('handle click');
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        px: 2,
        pt: 2,
        height: '100vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        bgcolor: 'default.background',
      }}
    >
      <Box
        sx={{
          // height: '100vh',
          flexDirection: 'column',
          justifyContent: 'start',
          // bgcolor: '#287',
          pt: 4,
        }}
      >
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
            <span
              style={{
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
            </span>
          </Stack>
        </Button>
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
            size='large'
            orientation={isSmallScreen ? 'horizontal' : 'vertical'}
            aria-label='Engine Modes'
            variant='contained'
            disableElevation
            sx={{
              'boxShadow': 3,
              'pt': 0,
              '& .MuiButton-root': {
                'color': '#fff',
                'boxShadow': 3,
                'border': 'none',
                'transition': 'all 0.1s ease-in-out',
                'fontSize': {
                  xs: '0.7rem', // small screens
                  sm: '0.85rem',
                  md: '1rem', // medium and up
                },
                'padding': {
                  xs: '4px 8px',
                  sm: '6px 12px',
                  md: '8px 16px',
                },
                '&:hover': {
                  boxShadow: 6,
                },
                '&:focus': {
                  outline: 'none',
                  boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, 0.4)',
                  transform: 'translateY(2px)',
                },
                '&:focus-visible': {
                  outline: 'none',
                },
                '&:active': {
                  boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, 0.4)',
                  transform: 'translateY(2px)',
                },
              },
            }}
          >
            {/* 🟦 COLD START — icy blue */}
            <Button
              sx={{
                'backgroundColor': '#0d47a1',
                'color': '#e3f2fd',
                'border': '1px solid #2196f3',
                'boxShadow': '0 0 10px rgba(33, 150, 243, 0.4)',
                'transition': 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#2196f3',
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(33, 150, 243, 0.8)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              COLD START
            </Button>

            {/* 🟩 IDLE — calm green */}
            <Button
              sx={{
                'backgroundColor': '#1b5e20',
                'color': '#e8f5e9',
                'border': '1px solid #4caf50',
                'boxShadow': '0 0 10px rgba(76, 175, 80, 0.4)',
                'transition': 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(76, 175, 80, 0.8)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              IDLE
            </Button>

            {/* 🟨 ACCELERATION — energetic yellow/orange */}
            <Button
              onClick={handleClick}
              sx={{
                'backgroundColor': '#f57f17',
                'color': '#fffde7',
                'border': '1px solid #ffb300',
                'boxShadow': '0 0 10px rgba(255, 179, 0, 0.4)',
                'transition': 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#ffb300',
                  color: '#000',
                  boxShadow: '0 0 20px rgba(255, 179, 0, 0.8)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              ACCELERATION
            </Button>

            {/* 🟦 CRUISE — stable cool blue */}
            <Button
              sx={{
                'backgroundColor': '#1565c0',
                'color': '#e3f2fd',
                'border': '1px solid #64b5f6',
                'boxShadow': '0 0 10px rgba(100, 181, 246, 0.4)',
                'transition': 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#64b5f6',
                  color: '#000',
                  boxShadow: '0 0 20px rgba(100, 181, 246, 0.8)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              CRUISE
            </Button>

            {/* 🟧 DECELERATION — amber for slowing down */}
            <Button
              sx={{
                'backgroundColor': '#e65100',
                'color': '#fff3e0',
                'border': '1px solid #ff9800',
                'boxShadow': '0 0 10px rgba(255, 152, 0, 0.4)',
                'transition': 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#ff9800',
                  color: '#000',
                  boxShadow: '0 0 20px rgba(255, 152, 0, 0.8)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              DECELERATION
            </Button>

            {/* 🔴 HEAVY LOAD — red warning tone */}
            <Button
              sx={{
                'backgroundColor': '#b71c1c',
                'color': '#ffebee',
                'border': '1px solid #f44336',
                'boxShadow': '0 0 10px rgba(244, 67, 54, 0.4)',
                'transition': 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f44336',
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(244, 67, 54, 0.8)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              HEAVY LOAD
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}

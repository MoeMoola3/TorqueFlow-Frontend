import { Grid, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();

  const tiles = [
    { title: 'Info', path: '/info' },
    { title: 'Live Data', path: '/live-data' },
    { title: 'Data Log', path: '/page3' },
    { title: 'Settings', path: '/page4' },
  ];

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
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
            mb: 6,
            background: 'linear-gradient(90deg, #00e5ff, #2979ff, #00bcd4, #00e5ff)',
            backgroundSize: '200% 100%',
            backgroundPositionX: '0%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px',
            fontFamily: "'Orbitron', sans-serif",
            textAlign: 'center',
            px: { xs: 2, sm: 4, md: 0 },
          }}
        >
          Torque Flow
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={4}
        justifyContent='center'
        alignItems='center'
        sx={{
          width: '100%',
        }}
      >
        {tiles.map((tile, index) => (
          <Grid item key={tile.title}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Paper
                elevation={24}
                onClick={() => navigate(tile.path)}
                sx={{
                  'position': 'relative',
                  'width': { xs: 150, sm: 200, md: 250 },
                  'height': { xs: 150, sm: 200, md: 250 },
                  'display': 'flex',
                  'justifyContent': 'center',
                  'alignItems': 'center',
                  'cursor': 'pointer',
                  'bgcolor': '#000000e7',
                  'color': '#e0e0e0',
                  'transition': 'all 0.5s ease',
                  'borderRadius': '16px',
                  'overflow': 'hidden',

                  '&:hover': {
                    background:
                      'linear-gradient(270deg, #01263a, #01354d, #024862, #03566f, #01263a)',
                    backgroundSize: '400% 400%',
                    animation: 'smoothFlow 15s linear infinite',
                    color: '#fff',
                  },

                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '16px',
                    padding: '3px',
                    background:
                      'linear-gradient(270deg, #01263a, #01354d, #024862, #03566f, #01263a)',
                    backgroundSize: '400% 400%',
                    backgroundPosition: '0% 50%',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    animation: 'smoothFlow 15s linear infinite',
                    transition: 'opacity 0.4s ease',
                    zIndex: 1,
                  },

                  '@keyframes smoothFlow': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                  },

                  '& > *': {
                    position: 'relative',
                    zIndex: 2,
                  },
                }}
              >
                <Typography
                  variant='h5'
                  fontWeight={600}
                  sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' } }}
                >
                  {tile.title}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

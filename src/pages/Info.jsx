import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import BackButton from '../components/BackButton';

const Info = () => {
  const [infoText, setInfoText] = useState('');
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetch('/assets/info.txt')
      .then((res) => res.text())
      .then((text) => setInfoText(text))
      .catch((err) => console.error('Error loading text file:', err));
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 2, sm: 4 },
      }}
    >
      <BackButton text='MENU' path='/' />
      <Title text='INFO' />

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          mt: 2,
        }}
      >
        <Typography
          variant={isSmallScreen ? 'body1' : 'h6'}
          sx={{
            'whiteSpace': 'pre-line',
            'boxShadow': '0 0 8px 2px rgba(0, 183, 255, 0.39)',
            'lineHeight': 1.7,
            'letterSpacing': 0.1,
            'fontWeight': 300,
            'maxWidth': '1000px',
            'width': '100%',
            'textAlign': 'start',
            'color': theme.palette.grey[300],
            'background': 'rgba(255, 255, 255, 0.03)',
            'borderRadius': 2,
            'p': { xs: 2, sm: 3 },
            '&:hover': {},
          }}
        >
          {infoText}
        </Typography>
      </Box>
    </Box>
  );
};

export default Info;

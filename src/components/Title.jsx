import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Title = (props) => {
  return (
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
        {props.text}
      </Typography>
    </motion.div>
  );
};

export default Title;

import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = (props) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: { xs: 20, sm: 36 },
        left: { xs: 20, sm: 36 },
        bgcolor: 'background.default',
      }}
    >
      <Link to={props.path} style={{ textDecoration: 'none' }}>
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
              {props.text}
            </Typography>
          </Stack>
        </Button>
      </Link>
    </Box>
  );
};

export default BackButton;

import { Box } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import BackButton from '../components/BackButton';
import Title from '../components/Title';
import GaugesGrid from '../components/GaugesGrid';
import EngineModeButtons from '../components/EngineModeButtons';

export default function LiveData() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
      }}
    >
      <BackButton text='MENU' path='/' />

      <Box
        sx={{
          ml: { xs: 0, sm: 8, md: 10 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Title text='Telemetry Dashboard' />
        <Box
          sx={{
            display: 'flex',
            flexDirection: () => (isSmallScreen ? 'column' : 'row'),
            alignItems: 'center',
            px: { sm: 3 },
            py: 3,
            bgcolor: 'background.default',
          }}
        >
          <GaugesGrid />
          <EngineModeButtons isSmallScreen={isSmallScreen} />
        </Box>
      </Box>
    </Box>
  );
}

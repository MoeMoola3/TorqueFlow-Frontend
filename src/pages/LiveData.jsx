import { Box, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import BackButton from '../components/BackButton';
import Title from '../components/Title';
import GaugesGrid from '../components/GaugesGrid';
import EngineModeButtons from '../components/EngineModeButtons';

export default function LiveData({ data }) {
  if (!data) return <Typography>Loading...</Typography>;

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
      <BackButton text='MENU' path='/' />

      <Box
        sx={{
          ml: { xs: 4, sm: 8, md: 10 },
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
            px: 3,
            py: 3,
            bgcolor: 'background.default',
          }}
        >
          <GaugesGrid data={data} />
          <EngineModeButtons isSmallScreen={isSmallScreen} />
        </Box>
      </Box>
    </Box>
  );
}

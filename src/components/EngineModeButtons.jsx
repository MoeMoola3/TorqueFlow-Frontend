import { Button, ButtonGroup } from '@mui/material';
import { useContext, useState } from 'react';
import { VehicleDataContext } from '../providers/vehicleDataProvider';

const EngineModeButtons = (props) => {
  const { wsRef } = useContext(VehicleDataContext);

  const buttons = [
    {
      key: 'COLD_START',
      label: 'COLD START',
      color: '#0288d1',
    },
    {
      key: 'IDLE',
      label: 'IDLE',
      color: '#4caf50',
    },
    {
      key: 'ACCELERATION',
      label: 'ACCELERATION',
      color: '#f44336',
    },
    {
      key: 'CRUISE',
      label: 'CRUISE',
      color: '#ff9800',
    },
    {
      key: 'DECELERATION',
      label: 'DECELERATION',
      color: '#9c27b0',
    },
    {
      key: 'HIGH_LOAD',
      label: 'HEAVY LOAD',
      color: '#795548',
    },
  ];
  const [selectedButton, setSelectedButton] = useState(null);

  const handleSelect = (key) => {
    setSelectedButton(key);

    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          type: 'modeChange',
          payload: key,
        })
      );
    } else {
      console.warn('WebSocket is not open');
    }
  };

  return (
    <ButtonGroup
      variant='contained'
      disableElevation
      size={props.isSmallScreen ? 'small' : 'large'}
      orientation={props.isSmallScreen ? 'horizontal' : 'vertical'}
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
  );
};

export default EngineModeButtons;

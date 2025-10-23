import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';

const EngineModeButtons = (props) => {
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
  const [selectedButton, setSelectedButton] = useState(null);

  const handleSelect = (key) => {
    setSelectedButton(key);
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

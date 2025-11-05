import { createContext, useState, useEffect, useRef } from 'react';

export const VehicleDataContext = createContext({
  vehicleData: {},
  wsRef: null,
});

const vary = (value, min, max) => {
  const delta = (Math.random() - 0.5) * 0.5;
  return Math.min(max, Math.max(min, value + delta));
};

export const VehicleDataProvider = ({ children }) => {
  const [vehicleData, setVehicleData] = useState({
    id: 193,
    engineRpm: 752,
    speed: 0.0,
    coolantTemp: 94,
    throttlePosition: 2.0,
    o2SensorVoltage: 0.415,
    shortTermFuelTrim: 0.0,
    engineLoad: 20.0,
    fuelLevel: 74.94,
    recordTime: [],
    vin: { vin: '1HGCM82633A004352' },
  });

  const wsRef = useRef(null);
  const timeoutRef = useRef(null);

  const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

  //MOCK MODE
  useEffect(() => {
    if (!USE_MOCK) return;
    console.log('Using Mock Data');
    const interval = setInterval(() => {
      const now = new Date();
      setVehicleData((prev) => ({
        ...prev,
        engineRpm: vary(prev.engineRpm, 700, 900),
        speed: vary(prev.speed, 0, 5),
        coolantTemp: vary(prev.coolantTemp, 90, 100),
        throttlePosition: vary(prev.throttlePosition, 1, 5),
        o2SensorVoltage: vary(prev.o2SensorVoltage, 0.1, 0.9),
        shortTermFuelTrim: vary(prev.shortTermFuelTrim, -5, 5),
        engineLoad: vary(prev.engineLoad, 15, 30),
        fuelLevel: Math.max(0, prev.fuelLevel - 0.01),
        recordTime: [
          now.getFullYear(),
          now.getMonth() + 1,
          now.getDate(),
          now.getHours(),
          now.getMinutes(),
          now.getSeconds(),
          now.getTime(),
        ],
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [USE_MOCK]);

  // REAL WS MODE
  useEffect(() => {
    if (USE_MOCK) return;

    const ws = new WebSocket('wss://obd-api.moemoola.com/ws');
    wsRef.current = ws;

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setVehicleData(data);
      } catch (e) {
        console.warn('Invalid WebSocket data', e);
      }
    };

    ws.onopen = () => {
      timeoutRef.current = setTimeout(() => {
        if (ws.readyState === WebSocket.OPEN) ws.close();
      }, 180000);
    };

    return () => {
      ws.close();
      clearTimeout(timeoutRef.current);
      wsRef.current = null;
    };
  }, [USE_MOCK]);

  return (
    <VehicleDataContext.Provider value={{ vehicleData, wsRef }}>
      {children}
    </VehicleDataContext.Provider>
  );
};

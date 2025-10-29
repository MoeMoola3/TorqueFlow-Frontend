import { createContext, useState, useEffect } from 'react';

export const VehicleDataContext = createContext();

const vary = (value, min, max) => {
  const delta = (Math.random() - 0.5) * 0.5;
  const newValue = value + delta;
  return Math.min(max, Math.max(min, newValue));
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

  useEffect(() => {
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
  }, []);

  return <VehicleDataContext.Provider value={vehicleData}>{children}</VehicleDataContext.Provider>;
};

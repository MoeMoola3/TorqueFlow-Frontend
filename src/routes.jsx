import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import LiveData from './pages/LiveData';
import Info from './pages/Info';
import DataLog from './pages/DataLog';
import { VehicleDataProvider } from './providers/vehicleDataProvider';
import { dataLogLoader } from './loaders/dataLogLoader';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/live-data',
    element: (
      <VehicleDataProvider>
        <LiveData />
      </VehicleDataProvider>
    ),
  },
  { path: '/info', element: <Info /> },
  { path: '/data-log', element: <DataLog />, loader: dataLogLoader },
]);

export default router;

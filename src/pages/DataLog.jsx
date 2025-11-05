import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Box,
} from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Title from '../components/Title';

export default function DataLog() {
  const loaderData = useLoaderData();
  const rows = loaderData?.data?.content || [];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const formatDate = (timestamp) => {
    try {
      return new Date(timestamp).toLocaleString();
    } catch {
      return '—';
    }
  };

  return (
    <Box sx={{ width: '100vw', overflow: 'hidden', px: 3 }}>
      <BackButton text='MENU' path='/' />
      <Title text='Data Table' />
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Engine RPM</TableCell>
                <TableCell>Speed (km/h)</TableCell>
                <TableCell>Coolant Temp (°C)</TableCell>
                <TableCell>Throttle Position (%)</TableCell>
                <TableCell>O₂ Voltage (V)</TableCell>
                <TableCell>Fuel Trim (%)</TableCell>
                <TableCell>Engine Load (%)</TableCell>
                <TableCell>Fuel Level (%)</TableCell>
                <TableCell>Record Time</TableCell>
                <TableCell>VIN</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={11} align='center'>
                    No data available
                  </TableCell>
                </TableRow>
              ) : (
                rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{row.engineRpm?.toFixed(0)}</TableCell>
                    <TableCell>{row.speed?.toFixed(1)}</TableCell>
                    <TableCell>{row.coolantTemp?.toFixed(1)}</TableCell>
                    <TableCell>{row.throttlePosition?.toFixed(1)}</TableCell>
                    <TableCell>{row.o2SensorVoltage?.toFixed(2)}</TableCell>
                    <TableCell>{row.shortTermFuelTrim?.toFixed(1)}</TableCell>
                    <TableCell>{row.engineLoad?.toFixed(1)}</TableCell>
                    <TableCell>{row.fuelLevel?.toFixed(2)}</TableCell>
                    <TableCell>{formatDate(row.recordTime)}</TableCell>
                    <TableCell>{row.vin?.vin || '—'}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

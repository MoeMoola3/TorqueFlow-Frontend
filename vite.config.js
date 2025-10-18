import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TorqueFlow-Frontend/',

  plugins: [react()],
  server: {
    proxy: {
      '/wss': {
        target: 'wss://obd-api.moemoola.com/',
        ws: true,
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/TorqueFlow-Frontend/',
  plugins: [react()],
  server: {
  proxy: {
    // example: forward /ws to your backend websocket server
    '/wss': {
      target: 'wss://obd-api.moemoola.com/', // change port to your backend websocket port
      ws: true,
      changeOrigin: true
    },
    // forward API calls
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      secure: false
    }
  }
}
})

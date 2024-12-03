import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js
export default defineConfig({
  base: '/Develiry/',
  plugins: [react()],
  server: {
    host: '0.0.0.0'  // Permite conexões externas
  }
});
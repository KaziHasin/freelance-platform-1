import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "::",
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1')
      }
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: '', // your api
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        ws: false,
      },
    },
  },
  build: {
    outDir: 'dist',
  },


  // FIXED
  cors: {
    preflightContinue: true
  },
});
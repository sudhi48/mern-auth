import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'  // Ensure the output directory is 'dist'
  },
  server: {
    proxy: {
      '/api':{
        target: 'http://localhost:3000',
        secure: false
      }, 
    },
  },
});

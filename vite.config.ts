import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Penting untuk GitHub Pages agar aset diload relatif
  build: {
    outDir: 'dist',
  }
});